"use client";

import Script from "next/script";
import { useEffect } from "react";

/**
 * Google Analytics 4 plus explicit call-click tracking.
 *
 * Renders nothing unless NEXT_PUBLIC_GA_ID is set, so local and preview builds
 * stay clean and the site works exactly as before if the ID is never added.
 *
 * Every call CTA on the site carries a `data-call-cta="<where>"` attribute.
 * This listens on the document (so it covers the CTAs inside the raw HTML
 * injected via dangerouslySetInnerHTML, which React never sees) and reports a
 * `call_click` event naming the placement. That is what tells you which
 * buttons actually earn phone calls.
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (!gaId) return;

    const handleClick = (event) => {
      const trigger = event.target.closest?.("[data-call-cta]");
      if (!trigger) return;

      const placement = trigger.getAttribute("data-call-cta") || "unknown";
      window.gtag?.("event", "call_click", {
        placement,
        page_path: window.location.pathname
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [gaId]);

  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
