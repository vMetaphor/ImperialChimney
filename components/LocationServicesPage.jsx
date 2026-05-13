import Link from "next/link";
import FaqSection from "./FaqSection";
import FeaturedLocationLinks from "./FeaturedLocationLinks";
import FeaturedServiceLinks from "./FeaturedServiceLinks";
import SeoJsonLd from "./SeoJsonLd";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  siteConfig
} from "../lib/seo";

export default function LocationServicesPage({ page }) {
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: `/${page.slug}`,
      description: page.metaDescription
    }),
    buildServiceSchema({
      pagePath: `/${page.slug}`,
      name: page.title,
      serviceType: "Chimney, stucco, masonry, and exterior cleaning services",
      description: page.metaDescription,
      serviceOutput:
        "Chimney maintenance, masonry repairs, stucco repairs, and cleaner exterior surfaces"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.title, path: `/${page.slug}` }
    ]),
    buildFaqSchema(page.faqs)
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Imperial Chimney & Masonry Service Area</p>
            <h1>{page.title}</h1>
            <p>{page.heroIntro}</p>
            <div className="hero-actions">
              <Link href="/contact#estimate-form" className="btn btn-primary">
                Request a Free Estimate
              </Link>
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="btn btn-outline">
                Call {siteConfig.phoneDisplay}
              </a>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <h2>{page.overviewTitle}</h2>
              {page.overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <ul className="check-list">
                {page.serviceHighlights.map((item) => (
                  <li key={item.title}>{item.title}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="stats">
                {page.stats.map((item) => (
                  <div className="stat" key={item.title}>
                    <span className="stat-number">{item.title}</span>
                    <span className="stat-label">{item.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>Popular services in {page.shortTitle}</h2>
              <p>
                These are the most common reasons homeowners in {page.city} call
                us for chimney, masonry, stucco, and exterior cleaning work.
              </p>
            </header>
            <div className="grid services-grid">
              {page.serviceHighlights.map((item) => (
                <article className="card service-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title={`Service pages homeowners in ${page.city} often visit`}
          intro="These focused service pages help visitors find the exact chimney, stucco, masonry, or pressure washing help they are already searching for."
        />

        <FeaturedLocationLinks
          title="Other nearby service areas"
          intro="If you are comparing nearby towns or looking for service in more than one area, these pages cover the surrounding markets we focus on."
          excludeSlug={page.slug}
          sectionClassName="section"
        />

        <FaqSection
          title={`${page.city} Service Area FAQ`}
          intro={`Answers for homeowners searching for chimney, stucco, masonry, and pressure washing services in ${page.city}.`}
          items={page.faqs}
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
