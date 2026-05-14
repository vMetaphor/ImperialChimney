import Link from "next/link";
import FaqSection from "../../components/FaqSection";
import FeaturedServiceLinks from "../../components/FeaturedServiceLinks";
import SeoJsonLd from "../../components/SeoJsonLd";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  siteConfig
} from "../../lib/seo";
import { getLocationServicePath, locationServicePages } from "../../lib/locationPages";
import { getServiceAreaGroupPath, serviceAreaGroups } from "../../lib/serviceAreas";

export const metadata = {
  title: "Service Areas for Chimney Sweeping, Masonry Repair & Pressure Washing",
  description:
    "Browse the service areas Imperial Chimney & Masonry covers across nearby Montgomery, Chester, and Berks County communities.",
  alternates: {
    canonical: "/service-areas"
  },
  openGraph: {
    title: "Service Areas | Imperial Chimney & Masonry",
    description:
      "View the towns and counties Imperial Chimney & Masonry serves for chimney sweeping, chimney repair, masonry restoration, stucco repair, and pressure washing.",
    url: "/service-areas"
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Imperial Chimney & Masonry",
    description:
      "See the local towns and counties we serve for chimney, stucco, masonry, and exterior cleaning work."
  }
};

const serviceAreaFaqs = [
  {
    question: "What towns do you serve near Pottstown, PA?",
    answer:
      "We work across Pottstown, Norristown, Collegeville, Limerick, Douglassville, Phoenixville, Spring City, Downingtown, Birdsboro, Reading, Wyomissing, Royersford, Sanatoga, and nearby communities in Montgomery, Berks, and Chester County."
  },
  {
    question: "Do you have a dedicated service area page for every town?",
    answer:
      "Not yet. We currently publish dedicated pages for the towns we serve most often, but we also take calls from nearby communities listed within each county section."
  },
  {
    question: "Can I still request service if my town is not linked here?",
    answer:
      "Yes. If you are in or near one of the counties listed on this page, contact us with your address and the service you need. We can confirm coverage and scheduling."
  },
  {
    question: "What services are available across your service area?",
    answer:
      "Our common calls include chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, pressure washing, and related exterior cleaning work."
  }
];

const itemListPages = serviceAreaGroups.flatMap((group) => group.pages);

export default function ServiceAreasPage() {
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/service-areas",
      description:
        "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing across service areas near Pottstown, PA."
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Service Areas", path: "/service-areas" }
    ]),
    buildFaqSchema(serviceAreaFaqs),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Imperial Chimney & Masonry service area pages",
      itemListElement: itemListPages.map((page, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: page.title,
        url: absoluteUrl(getLocationServicePath(page))
      }))
    }
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Imperial Chimney & Masonry Service Areas</p>
            <h1>Service Areas Across Nearby Montgomery, Berks, and Chester County Communities</h1>
            <p>
              Use this page to browse the towns and counties we serve for chimney
              sweeping, chimney repair, chimney stucco repair, masonry repair,
              brick and block repair, and pressure washing near Pottstown.
            </p>
            <div className="hero-actions">
              <Link href="/contact#estimate-form" className="btn btn-primary">
                Request a Free Estimate
              </Link>
              <Link href="/services" className="btn btn-outline">
                View Services
              </Link>
            </div>
            <div className="service-area-nav" aria-label="Service area navigation">
              {serviceAreaGroups.map((group) => (
                <Link
                  key={group.anchorId}
                  href={getServiceAreaGroupPath(group)}
                  className="service-area-nav-link"
                >
                  {group.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>Browse Service Coverage By County</h2>
              <p>
                A clear county-and-city hub makes local pages easier to crawl,
                easier to navigate, and easier to connect back to your main
                service pages.
              </p>
            </header>
            <div className="grid services-grid">
              <article className="card service-card">
                <h3>{locationServicePages.length} dedicated area pages</h3>
                <p>
                  Browse published local pages for towns where we already have
                  focused chimney and masonry content.
                </p>
              </article>
              <article className="card service-card">
                <h3>{serviceAreaGroups.length} county groupings</h3>
                <p>
                  County sections help cluster local relevance and give visitors a
                  faster path to the area that matters to them.
                </p>
              </article>
              <article className="card service-card">
                <h3>Core local work</h3>
                <p>
                  Chimney sweeping, chimney repair, stucco repair, masonry
                  restoration, brick and block repair, and pressure washing.
                </p>
              </article>
            </div>
          </div>
        </section>

        {serviceAreaGroups.map((group, index) => (
          <section
            key={group.anchorId}
            id={group.anchorId}
            className={`section service-area-county-section${index % 2 === 1 ? " section-accent" : ""}`}
          >
            <div className="container">
              <header className="service-area-section-header">
                <div>
                  <p className="eyebrow">County coverage</p>
                  <h2>
                    <Link href={getServiceAreaGroupPath(group)}>{group.region}</Link>
                  </h2>
                </div>
                <p>{group.intro}</p>
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
                  <h3>{group.label} coverage</h3>
                  <p>
                    We serve towns throughout this county even where a dedicated
                    city page is not live yet. Contact us and we can confirm the
                    best next step for your address and project.
                  </p>
                </article>
              )}

              <div className="service-area-meta">
                <p className="service-area-meta-copy">
                  Also serving nearby communities such as:
                </p>
                <div className="service-area-tags">
                  {group.additionalAreas.map((area) => (
                    <span className="service-area-tag" key={area}>
                      {area}
                    </span>
                  ))}
                </div>
                <p className="service-area-meta-copy">
                  Need help in a nearby town that is not linked yet?{" "}
                  <Link href="/contact#estimate-form">Request an estimate</Link> or
                  call <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>{siteConfig.phoneDisplay}</a>.
                </p>
              </div>
            </div>
          </section>
        ))}

        <FeaturedServiceLinks
          title="Popular Services Across Our Service Area"
          intro="These are the service pages homeowners visit most often before requesting an estimate."
          useGenericCopy
        />

        <FaqSection
          title="Service Area Questions"
          intro="These are the most common questions we hear from homeowners checking whether we serve their town."
          items={serviceAreaFaqs}
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
