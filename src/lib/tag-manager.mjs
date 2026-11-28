// Called only after the existing cookie opt-in. The container owns SDK loading.
export function startTagManager(w, d, config) {
  if (w.__sgGtmStarted) return;
  w.__sgGtmStarted = true;
  w.dataLayer = w.dataLayer || [];
  const originalGtag = w.gtag || function () { w.dataLayer.push(arguments); };
  w.__sgPendingGoogleEvents = [];
  w.gtag = function () {
    if (arguments[0] === 'event' && !w.__sgGoogleReady) {
      w.__sgPendingGoogleEvents.push(Array.from(arguments));
    } else { originalGtag.apply(w, arguments); }
  };
  // Queue conversion calls during container download without loading the SDK here.
  if (!w.oaiq) {
    const queue = function () { queue.q.push(Array.from(arguments)); };
    queue.q = [];
    w.oaiq = queue;
  }
  w.dataLayer.push({sg_ga_id: config.gaId || '', sg_clarity_id: config.clarityId || ''});
  w.dataLayer.push({'gtm.start': Date.now(), event: 'gtm.js'});
  const script = d.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-P5JJKJDF';
  d.head.appendChild(script);
}
