import Link from "next/link";
import CallBand from "./CallBand";
import FaqSection from "./FaqSection";
import FeaturedLocationLinks from "./FeaturedLocationLinks";
import FeaturedProjectLinks from "./FeaturedProjectLinks";
import FeaturedServiceLinks from "./FeaturedServiceLinks";
import SeoJsonLd from "./SeoJsonLd";
import { getLocationServicePath } from "../lib/locationPages";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  siteConfig,
  telHref
} from "../lib/seo";
import { getServiceAreaGroupByRegion, getServiceAreaGroupPath } from "../lib/serviceAreas";

export default function LocationServicesPage({ page }) {
  const serviceAreaGroup = getServiceAreaGroupByRegion(page.region);
  const pagePath = getLocationServicePath(page);
  const regionHref = serviceAreaGroup ? getServiceAreaGroupPath(serviceAreaGroup) : "/service-areas";
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath,
      description: page.metaDescription
    }),
    buildServiceSchema({
      pagePath,
      name: page.title,
      serviceType: "Chimney, stucco, masonry, and exterior cleaning services",
      description: page.metaDescription,
      serviceOutput:
        "Chimney maintenance, masonry repairs, stucco repairs, and cleaner exterior surfaces"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/service-areas" },
      ...(serviceAreaGroup
        ? [{ name: serviceAreaGroup.label, path: regionHref }]
        : []),
      { name: page.title, path: pagePath }
    ]),
    buildFaqSchema(page.faqs)
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">{page.region} Service Area</p>
            <h1>{page.title}</h1>
            <p>{page.heroIntro}</p>
            <div className="hero-actions">
              <a href={telHref} className="btn btn-call" data-call-cta="location-hero">
                Call {siteConfig.phoneDisplay}
              </a>
              <Link href="/contact#estimate-form" className="btn btn-estimate">
                Request a Free Estimate
              </Link>
            </div>
            <div className="page-hero-links">
              <Link href="/service-areas">Browse all service areas</Link>
              <Link href={regionHref}>More in {page.region}</Link>
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
              {page.localFocus?.length ? (
                <>
                  <h3>Local service notes for {page.city}</h3>
                  <ul className="check-list">
                    {page.localFocus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}
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
          title={`Popular Services in ${page.city}`}
          intro="Learn more about the chimney, stucco, masonry, and exterior cleaning services homeowners ask about most often."
          useGenericCopy
        />

        <FeaturedProjectLinks
          title={`Recent Projects Near ${page.city}`}
          intro={`These project posts add more specific examples of the work homeowners request in ${page.city} and nearby parts of ${page.region}.`}
          filterCitySlug={page.citySlug}
          filterRegion={page.region}
          limit={3}
          sectionClassName="section section-accent"
        />

        <FeaturedLocationLinks
          title={
            serviceAreaGroup
              ? `More service areas in ${serviceAreaGroup.label}`
              : "Other nearby service areas"
          }
          intro={
            serviceAreaGroup
              ? `Browse nearby towns we serve across ${serviceAreaGroup.label}.`
              : "If you are looking for service in a nearby town, you can view those areas here as well."
          }
          excludeSlug={page.slug}
          filterRegion={page.region}
          sectionClassName="section"
        />

        <FaqSection
          title={`${page.city} Service Area FAQ`}
          intro={`Answers for homeowners searching for chimney, stucco, masonry, and pressure washing services in ${page.city}.`}
          items={page.faqs}
        />

        <CallBand
          title={`Need a chimney or masonry crew in ${page.city}?`}
          intro={`We cover ${page.city} and the rest of ${page.region}. Call and describe what you are seeing - we will tell you what it needs.`}
          source="location-band"
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
