import Link from "next/link";
import { notFound } from "next/navigation";
import FaqSection from "../../../components/FaqSection";
import FeaturedServiceLinks from "../../../components/FeaturedServiceLinks";
import SeoJsonLd from "../../../components/SeoJsonLd";
import { getLocationServicePath } from "../../../lib/locationPages";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema
} from "../../../lib/seo";
import {
  getServiceAreaGroupByCountySlug,
  getServiceAreaGroupPath,
  serviceAreaGroups
} from "../../../lib/serviceAreas";

export function generateStaticParams() {
  return serviceAreaGroups.map((group) => ({
    countySlug: group.countySlug
  }));
}

export function generateMetadata({ params }) {
  const group = getServiceAreaGroupByCountySlug(params.countySlug);

  if (!group) {
    return {};
  }

  const path = getServiceAreaGroupPath(group);

  return {
    title: group.title,
    description: group.metaDescription,
    alternates: {
      canonical: path
    },
    openGraph: {
      title: group.title,
      description: group.metaDescription,
      url: path
    },
    twitter: {
      card: "summary_large_image",
      title: group.title,
      description: group.metaDescription
    }
  };
}

export default function CountyServiceAreaPage({ params }) {
  const group = getServiceAreaGroupByCountySlug(params.countySlug);

  if (!group) {
    notFound();
  }

  const path = getServiceAreaGroupPath(group);
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: path,
      description: group.metaDescription
    }),
    buildServiceSchema({
      pagePath: path,
      name: group.title,
      description: group.metaDescription,
      serviceType: `Chimney, stucco, masonry, and exterior cleaning services in ${group.region}`,
      serviceOutput:
        "Chimney maintenance, masonry repairs, stucco repairs, and cleaner exterior surfaces"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/service-areas" },
      { name: group.label, path }
    ]),
    buildFaqSchema(group.faqs),
    ...(group.pages.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: `${group.label} service area pages`,
            itemListElement: group.pages.map((page, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: page.title,
              url: absoluteUrl(getLocationServicePath(page))
            }))
          }
        ]
      : [])
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">County Service Area</p>
            <h1>{group.title}</h1>
            <p>{group.intro}</p>
            <div className="hero-actions">
              <Link href="/contact#estimate-form" className="btn btn-primary">
                Request a Free Estimate
              </Link>
              <Link href="/service-areas" className="btn btn-outline">
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <h2>What homeowners call us for in {group.label}</h2>
              {group.overviewParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">{group.pages.length}</span>
                  <span className="stat-label">Published town pages in this county</span>
                </div>
                <div className="stat">
                  <span className="stat-number">{group.additionalAreas.length}</span>
                  <span className="stat-label">Nearby communities highlighted on this page</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Core services</span>
                  <span className="stat-label">
                    Chimney sweeping, chimney repair, stucco repair, masonry restoration, and pressure washing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>{group.label} Town Pages</h2>
              <p>
                Browse the published local pages in this county for town-specific
                chimney, stucco, masonry, and exterior cleaning information.
              </p>
            </header>
            {group.pages.length ? (
              <div className="grid services-grid">
                {group.pages.map((page) => (
                  <article className="card service-card" key={page.slug}>
                    <h3>
                      <Link href={getLocationServicePath(page)}>{page.city}, PA</Link>
                    </h3>
                    <p>{page.cardDescription}</p>
                  </article>
                ))}
              </div>
            ) : (
              <article className="card service-card">
                <h3>Town pages coming next</h3>
                <p>
                  We already serve nearby communities in this county, and we are
                  building out more dedicated local pages over time.
                </p>
              </article>
            )}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>Nearby Communities We Also Serve</h2>
              <p>
                If your town is close to {group.label} but not listed as a dedicated
                page yet, contact us and we can confirm coverage.
              </p>
            </header>
            <div className="service-area-tags">
              {group.additionalAreas.map((area) => (
                <span className="service-area-tag" key={area}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title={`Popular Services in ${group.label}`}
          intro="These are the service pages homeowners in this county visit most often before requesting an estimate."
          useGenericCopy
        />

        <FaqSection
          title={`${group.label} Service Area FAQ`}
          intro={`Answers to common questions about chimney, stucco, masonry, and exterior cleaning work in ${group.region}.`}
          items={group.faqs}
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
