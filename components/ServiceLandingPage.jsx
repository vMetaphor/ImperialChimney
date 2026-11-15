import Link from "next/link";
import CallBand from "./CallBand";
import CompactLocationLinks from "./CompactLocationLinks";
import FaqSection from "./FaqSection";
import FeaturedServiceLinks from "./FeaturedServiceLinks";
import SeoJsonLd from "./SeoJsonLd";
import TextPhotoLink from "./TextPhotoLink";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  siteConfig,
  telHref
} from "../lib/seo";

/**
 * Shared layout for the problem-specific service pages (leak repair,
 * inspections, crowns & caps, liners, fireplace repair).
 *
 * Same section order and class vocabulary as the hand-written
 * /repointing-pottstown-pa page, so these render in the existing skin with no
 * page-specific CSS. Content lives in lib/serviceLandingPages.js.
 */
export default function ServiceLandingPage({ page }) {
  const {
    pagePath,
    description,
    h1,
    heroIntro,
    estimateLabel,
    schema,
    overview,
    stats,
    photos,
    review,
    signs,
    relatedIntro,
    locationsTitle,
    locationsIntro,
    faqTitle,
    faqIntro,
    faqs,
    callBand
  } = page;

  const jsonLd = [
    buildLocalBusinessSchema({ pagePath, description }),
    buildServiceSchema({ pagePath, description, ...schema }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: h1, path: pagePath }
    ]),
    buildFaqSchema(faqs)
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Imperial Chimney &amp; Masonry</p>
            <h1>{h1}</h1>
            <p>{heroIntro}</p>
            <div className="hero-actions">
              <a href={telHref} className="btn btn-call" data-call-cta="service-hero">
                Call {siteConfig.phoneDisplay}
              </a>
              <Link href="/contact#estimate-form" className="btn btn-estimate">
                {estimateLabel}
              </Link>
            </div>
            <TextPhotoLink source="service-hero" />
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <h2>{overview.title}</h2>
              {overview.paragraphs.map((text) => (
                <p key={text.slice(0, 40)}>{text}</p>
              ))}
              <ul className="check-list">
                {overview.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="stats">
                {stats.map((stat) => (
                  <div className="stat" key={stat.title}>
                    <span className="stat-number">{stat.title}</span>
                    <span className="stat-label">{stat.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {photos ? (
          <section className="section section-proof">
            <div className="container">
              <header className="section-header">
                <h2>{photos.title}</h2>
                <p>{photos.intro}</p>
              </header>
              <div className="svc-photos">
                {photos.items.map((photo) => (
                  <figure className="svc-photo" key={photo.src}>
                    <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                    <figcaption>{photo.caption}</figcaption>
                  </figure>
                ))}
              </div>
              {review ? (
                <blockquote className="svc-review">
                  <span className="svc-review-stars" aria-label="5 out of 5 stars">
                    &#9733;&#9733;&#9733;&#9733;&#9733;
                  </span>
                  <p>&ldquo;{review.quote}&rdquo;</p>
                  <footer>
                    {review.name} &middot; {review.source}
                  </footer>
                </blockquote>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>{signs.title}</h2>
              <p>{signs.intro}</p>
            </header>
            <div className="grid services-grid">
              {signs.items.map((item) => (
                <article className="card service-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title="Related Local Service Pages"
          intro={relatedIntro}
          sectionClassName="section"
          excludeHref={pagePath}
        />

        <CompactLocationLinks title={locationsTitle} intro={locationsIntro} />

        <FaqSection
          title={faqTitle}
          intro={faqIntro}
          items={faqs}
          sectionClassName="section section-accent"
        />

        <CallBand title={callBand.title} intro={callBand.intro} source="service-band" />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
