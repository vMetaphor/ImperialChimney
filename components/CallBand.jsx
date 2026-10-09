import Link from "next/link";
import { siteConfig, telHref } from "../lib/seo";

/**
 * Dark call-first band for the bottom of long pages.
 *
 * The location and project templates are long reads whose only CTA used to sit
 * in the hero, so anyone who actually scrolled had nothing left to click.
 *
 * The matching markup for the home page lives inline in `homeHtml`
 * (lib/pageHtml.js) because that page is injected as a raw HTML string and
 * cannot mount a component mid-document. Styles are shared: `.call-band` in
 * app/globals.css.
 */
export default function CallBand({
  title = "Ready to get it fixed?",
  intro = "Tell us what the chimney is doing and we'll tell you what it needs - no charge for the estimate.",
  source = "call-band"
}) {
  return (
    <section className="section call-band">
      <div className="container call-band-inner">
        <div className="call-band-text">
          <h2>{title}</h2>
          <p>{intro}</p>
        </div>
        <div className="hero-actions">
          <a href={telHref} className="btn btn-call btn-call-lg" data-call-cta={source}>
            Call {siteConfig.phoneDisplay}
          </a>
          <Link href="/contact#estimate-form" className="btn btn-estimate">
            Request an Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
