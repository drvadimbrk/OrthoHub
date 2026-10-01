/* =============================================================
   ORTOHUB — ANALYTICS & CONSENT
   GA4 + Google Consent Mode v2 (GDPR / ePrivacy)

   Loaded once per page as:
     <script defer src="/assets/analytics.js"></script>

   Behaviour
   - consent defaults to DENIED, so no analytics cookie is ever
     written before the visitor agrees
   - GA4 still loads in consent-mode (cookieless) mode, so
     non-personalised traffic data survives a rejection
   - conversion events are buffered until consent is resolved,
     then flushed in order
   - the choice is stored in localStorage and re-applied as the
     default on every later page view
   ============================================================= */

(function () {
  'use strict';

  var GA_ID = 'G-7X4HDQ8REZ';
  var CONSENT_KEY = 'oh_consent_v1';
  var MAX_BUFFERED_EVENTS = 40;

  /* ---------------------------------------------------------
     1. Consent state
     --------------------------------------------------------- */

  function readStored() {
    try {
      var raw = window.localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      if (parsed && typeof parsed.analytics === 'boolean') {
        return { analytics: parsed.analytics, ads: !!parsed.ads };
      }
    } catch (err) {}
    return null;
  }

  function persist(analytics, ads) {
    try {
      window.localStorage.setItem(
        CONSENT_KEY,
        JSON.stringify({ analytics: analytics, ads: ads, ts: Date.now() })
      );
    } catch (err) {}
  }

  var stored = readStored();

  var consent = {
    resolved: !!stored,
    analytics: stored ? stored.analytics : false,
    ads: stored ? stored.ads : false
  };

  function consentSignal(granted) {
    return granted ? 'granted' : 'denied';
  }

  function buildConsentPayload(analytics, ads, withWait) {
    var payload = {
      ad_storage: consentSignal(ads),
      ad_user_data: consentSignal(ads),
      ad_personalization: consentSignal(ads),
      analytics_storage: consentSignal(analytics),
      functionality_storage: consentSignal(analytics),
      personalization_storage: consentSignal(ads),
      security_storage: 'granted'
    };
    if (withWait) payload.wait_for_update = 500;
    return payload;
  }

  /* ---------------------------------------------------------
     2. gtag bootstrap — consent default MUST be pushed before
        gtag.js is injected, otherwise GA4 may read cookies
        before it knows consent was denied
     --------------------------------------------------------- */

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  /* Append ?ga_debug=1 to any URL to have hits show up in GA4
     DebugView (admin -> DebugView) instead of only Realtime.
     Opt-in per request, so production traffic stays clean. */
  function debugRequested() {
    try {
      return new URLSearchParams(window.location.search).get('ga_debug') === '1';
    } catch (err) {
      return false;
    }
  }

  gtag('consent', 'default', buildConsentPayload(consent.analytics, consent.ads, false));
  gtag('js', new Date());
  gtag('config', GA_ID, {
    send_page_view: true,
    debug_mode: debugRequested()
  });

  function injectGtag() {
    var link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://www.googletagmanager.com';
    document.head.appendChild(link);

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);
  }

  /* ---------------------------------------------------------
     3. Event tracking — buffered until consent is resolved
     --------------------------------------------------------- */

  var buffer = [];

  function emit(name, params) {
    if (!consent.resolved) {
      if (buffer.length >= MAX_BUFFERED_EVENTS) buffer.shift();
      buffer.push([name, params]);
      return;
    }
    gtag('event', name, params);
  }

  function flushBuffer() {
    var pending = buffer.slice();
    buffer.length = 0;
    for (var i = 0; i < pending.length; i++) {
      gtag('event', pending[i][0], pending[i][1]);
    }
  }

  function classify(href) {
    if (!href) return null;
    var h = href.trim();
    if (/^tel:/i.test(h)) return 'call_click';
    if (/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(h)) return 'whatsapp_click';
    if (/google\.[a-z.]+\/maps|maps\.google\.[a-z.]+|maps\.app\.goo\.gl|goo\.gl\/maps/i.test(h)) {
      return 'directions_click';
    }
    if (/^mailto:/i.test(h)) return 'email_click';
    return null;
  }

  /* Works out roughly WHERE on the page the click happened, so
     you can compare e.g. hero CTA vs footer CTA in GA4. */
  function placementOf(el) {
    if (el.classList && el.classList.contains('oh-call-bar')) return 'sticky_call_bar';

    var section = el.closest ? el.closest('section, header, footer, nav') : null;
    if (!section) return 'page';

    var tag = section.tagName.toLowerCase();
    if (tag !== 'section') return tag;

    var id = section.id;
    if (id) return 'section_' + id;

    var classes = (section.className || '').trim().split(/\s+/);
    var first = classes[0];
    return first ? 'section_' + first : 'section';
  }

  function trackOutbound(el, href) {
    var name = classify(href);
    if (!name) return;

    var params = {
      link_url: href,
      link_domain: (function () {
        try {
          var u = new URL(href, window.location.href);
          return u.protocol.indexOf('http') === 0 ? u.hostname : u.protocol.replace(':', '');
        } catch (err) {
          return '';
        }
      })(),
      placement: placementOf(el),
      outbound: true
    };

    if (el.classList) params.link_class = (el.className || '').toString().trim().split(/\s+/)[0] || '';
    if (name === 'whatsapp_click') params.prefilled_message = /[?&]text=/i.test(href);

    var label = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (label) params.link_text = label.slice(0, 60);

    emit(name, params);
  }

  document.addEventListener('click', function (e) {
    var el = e.target;
    if (el && el.closest) el = el.closest('a[href]');
    if (!el) return;
    trackOutbound(el, el.getAttribute('href'));
  }, true);

  /* ---------------------------------------------------------
     4. Public helpers — use these from page scripts
        ohTrack('appointment_booked', { treatment: 'prp' })
        ohConsent.open()  /  ohConsent.revoke()
     --------------------------------------------------------- */

  window.ohTrack = function (name, params) {
    emit(name, params || {});
  };

  window.ohConsent = {
    get: function () {
      return { resolved: consent.resolved, analytics: consent.analytics, ads: consent.ads };
    },
    update: function (analytics, ads) { apply(analytics, ads); },
    revoke: function () {
      try { window.localStorage.removeItem(CONSENT_KEY); } catch (err) {}
    }
  };

  function apply(analytics, ads) {
    consent.analytics = !!analytics;
    consent.ads = !!ads;
    persist(consent.analytics, consent.ads);
    gtag('consent', 'update', buildConsentPayload(consent.analytics, consent.ads, true));
    if (!consent.resolved) {
      consent.resolved = true;
      flushBuffer();
    }
  }

  /* ---------------------------------------------------------
     5. Consent banner
     --------------------------------------------------------- */

  var BANNER_ID = 'oh-consent';

  var STYLES = [
    '#oh-consent{position:fixed;left:0;right:0;bottom:0;z-index:10000;',
    'font-family:"DM Sans",system-ui,-apple-system,"Segoe UI",sans-serif;',
    'background:#141414;color:#EDEDED;border-top:1px solid rgba(201,169,110,.35);',
    'box-shadow:0 -8px 30px rgba(0,0,0,.5);padding:18px 20px;',
    'display:flex;gap:18px;align-items:center;flex-wrap:wrap;}',
    '#oh-consent[hidden]{display:none}',
    '#oh-consent .oh-c-body{flex:1 1 320px;min-width:0}',
    '#oh-consent .oh-c-title{color:#C9A96E;font-size:.95rem;font-weight:600;margin:0 0 4px}',
    '#oh-consent .oh-c-text{margin:0;font-size:.85rem;line-height:1.5;color:#B9B9B9;max-width:70ch}',
    '#oh-consent .oh-c-text a{color:#C9A96E;text-decoration:underline}',
    '#oh-consent .oh-c-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center}',
    '#oh-consent button{font:inherit;font-size:.85rem;font-weight:600;cursor:pointer;',
    'border-radius:999px;padding:11px 22px;border:1px solid transparent;',
    'transition:background .18s ease,color .18s ease,border-color .18s ease}',
    '#oh-consent .oh-c-primary{background:#C9A96E;color:#080808}',
    '#oh-consent .oh-c-primary:hover{background:#D4B98A}',
    '#oh-consent .oh-c-ghost{background:transparent;color:#EDEDED;border-color:rgba(255,255,255,.22)}',
    '#oh-consent .oh-c-ghost:hover{border-color:#C9A96E;color:#C9A96E}',
    '#oh-consent .oh-c-settings{width:100%;border-top:1px solid rgba(255,255,255,.08);padding-top:14px}',
    '#oh-consent .oh-c-settings[hidden]{display:none}',
    '#oh-consent .oh-c-opt{display:flex;gap:12px;align-items:flex-start;',
    'font-size:.82rem;line-height:1.45;color:#B9B9B9;padding:7px 0}',
    '#oh-consent .oh-c-opt input{margin-top:3px;accent-color:#C9A96E;width:16px;height:16px;flex:none}',
    '#oh-consent .oh-c-opt strong{color:#EDEDED;font-weight:600;display:block}',
    '@media(max-width:600px){#oh-consent{gap:14px;padding:16px}',
    '#oh-consent .oh-c-actions{width:100%}',
    '#oh-consent button{flex:1 1 auto;text-align:center}}'
  ].join('');

  function injectStyles() {
    if (document.getElementById('oh-consent-styles')) return;
    var style = document.createElement('style');
    style.id = 'oh-consent-styles';
    style.textContent = STYLES;
    document.head.appendChild(style);
  }

  function buildBanner() {
    injectStyles();

    var banner = document.createElement('div');
    banner.id = BANNER_ID;
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Preferințe cookie');
    banner.hidden = true;

    banner.innerHTML = [
      '<div class="oh-c-body">',
      '<p class="oh-c-title">Cookie-uri și măsurare de trafic</p>',
      '<p class="oh-c-text">Folosim Google Analytics ca să înțelegem ce articole sunt utile și câte apeluri rezultă. ' +
        'Nu folosim cookie-uri de publicitate. Poți accepta tot sau poți păstra doar măsurarea anonimă de trafic. ' +
        'Preferința ta se poate schimba oricând prin butonul „Personalizează”.</p>',
      '</div>',
      '<div class="oh-c-actions">',
      '<button type="button" class="oh-c-primary" data-act="all">Acceptă tot</button>',
      '<button type="button" class="oh-c-ghost" data-act="analytics">Doar esențial</button>',
      '<button type="button" class="oh-c-ghost" data-act="toggle">Personalizează</button>',
      '</div>',
      '<div class="oh-c-settings" hidden>',
      '<label class="oh-c-opt"><input type="checkbox" checked disabled>',
      '<span><strong>Necesare</strong>Obligatorii pentru funcționarea site-ului și pentru reținerea preferinței tale.</span></label>',
      '<label class="oh-c-opt"><input type="checkbox" data-cat="analytics">',
      '<span><strong>Măsurare de trafic</strong>Ne ajută să vedem ce conținut citeșteți și dacă vizitele se transformă în apeluri.</span></label>',
      '<label class="oh-c-opt"><input type="checkbox" data-cat="ads">',
      '<span><strong>Personalizare și publicitate</strong>Mesaje și măsurare de reclame. Momentan nefolosit pe acest site.</span></label>',
      '<div class="oh-c-actions" style="margin-top:10px">',
      '<button type="button" class="oh-c-primary" data-act="save">Salvează preferințele</button>',
      '</div>',
      '</div>'
    ].join('');

    document.body.appendChild(banner);
    return banner;
  }

  /* Keeps the banner clear of the sticky "Sună acum" call bar
     and reserves space so it never covers page content. */
  function layoutBanner(banner) {
    var callBar = document.querySelector('.oh-call-bar');
    var callBarHeight = 0;

    if (callBar) {
      var r = callBar.getBoundingClientRect();
      if (r.height > 0 && r.bottom <= window.innerHeight + 2) callBarHeight = r.height;
    }

    banner.style.bottom = callBarHeight + 'px';
    document.body.style.paddingBottom = (callBarHeight + banner.getBoundingClientRect().height) + 'px';
  }

  function releaseSpace() {
    var callBar = document.querySelector('.oh-call-bar');
    if (!callBar) {
      document.body.style.paddingBottom = '';
      return;
    }
    var r = callBar.getBoundingClientRect();
    document.body.style.paddingBottom = (r.height > 0 ? r.height : 58) + 'px';
  }

  function syncBoxes(banner) {
    var boxes = banner.querySelectorAll('[data-cat]');
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].checked = boxes[i].getAttribute('data-cat') === 'analytics' ? consent.analytics : consent.ads;
    }
  }

  function closeBanner(banner) {
    banner.hidden = true;
    releaseSpace();
    window.removeEventListener('resize', onResize);
  }

  function onResize() {
    var banner = document.getElementById(BANNER_ID);
    if (banner && !banner.hidden) layoutBanner(banner);
  }

  function openBanner() {
    var banner = document.getElementById(BANNER_ID) || buildBanner();
    syncBoxes(banner);
    banner.hidden = false;
    layoutBanner(banner);
    window.addEventListener('resize', onResize);

    var focusTarget = banner.querySelector('[data-act="all"]');
    if (focusTarget) focusTarget.focus({ preventScroll: true });
  }

  function wireBanner(banner) {
    var settings = banner.querySelector('.oh-c-settings');
    var firstControl = banner.querySelector('[data-act="all"]');

    banner.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('button[data-act]') : null;
      if (!btn) return;

      var act = btn.getAttribute('data-act');

      if (act === 'all') {
        apply(true, true);
        closeBanner(banner);
        return;
      }

      if (act === 'analytics') {
        apply(true, false);
        closeBanner(banner);
        return;
      }

      if (act === 'toggle') {
        var opening = settings.hidden;
        settings.hidden = !opening;
        btn.textContent = opening ? 'Ascunde opțiunile' : 'Personalizează';
        if (opening) {
          syncBoxes(banner);
          layoutBanner(banner);
          var firstBox = settings.querySelector('[data-cat="analytics"]');
          if (firstBox) firstBox.focus({ preventScroll: true });
        }
        return;
      }

      if (act === 'save') {
        var analyticsBox = settings.querySelector('[data-cat="analytics"]');
        var adsBox = settings.querySelector('[data-cat="ads"]');
        apply(analyticsBox.checked, adsBox.checked);
        closeBanner(banner);
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !banner.hidden) {
        closeBanner(banner);
        if (firstControl) firstControl.blur();
      }
    });
  }

  /* ---------------------------------------------------------
     6. Boot
     --------------------------------------------------------- */

  injectGtag();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      if (!consent.resolved) {
        var banner = buildBanner();
        wireBanner(banner);
        openBanner();
      } else if (consent.analytics) {
        flushBuffer();
      }
    });
  } else if (!consent.resolved) {
    var ready = buildBanner();
    wireBanner(ready);
    openBanner();
  } else if (consent.analytics) {
    flushBuffer();
  }
})();