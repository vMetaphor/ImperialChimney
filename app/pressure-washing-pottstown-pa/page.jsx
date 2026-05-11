import Link from "next/link";
import FaqSection from "../../components/FaqSection";
import FeaturedServiceLinks from "../../components/FeaturedServiceLinks";
import SeoJsonLd from "../../components/SeoJsonLd";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  defaultKeywords,
  siteConfig
} from "../../lib/seo";

const title = "Pressure Washing in Pottstown, PA | Exterior Cleaning & Power Washing";
const description =
  "Need pressure washing in Pottstown, PA? Imperial Chimney & Masonry provides pressure washing and power washing for masonry, patios, walkways, driveways, stoops, and other exterior surfaces.";

const faqs = [
  {
    question: "What surfaces do you pressure wash?",
    answer:
      "We pressure wash masonry, patios, walkways, stoops, driveways, retaining walls, and other hard exterior surfaces where dirt, algae, and surface staining build up."
  },
  {
    question: "Do you provide both pressure washing and power washing?",
    answer:
      "Homeowners often use those terms interchangeably. We provide exterior surface cleaning for masonry and other hard surfaces using the method that fits the material and condition."
  },
  {
    question: "Can pressure washing be done before masonry repairs?",
    answer:
      "Yes. Pressure washing is often useful before masonry repair, waterproofing, or coatings because it clears away dirt, growth, and loose surface buildup."
  },
  {
    question: "Do you serve areas outside Pottstown?",
    answer:
      "Yes. We serve Pottstown and nearby towns such as Gilbertsville, Boyertown, Douglassville, Phoenixville, Collegeville, Royersford, and Limerick."
  }
];

export const metadata = {
  title,
  description,
  keywords: [
    ...defaultKeywords,
    "pressure washing pottstown pa",
    "power washing pottstown pa",
    "exterior cleaning pottstown pa"
  ],
  alternates: {
    canonical: "/pressure-washing-pottstown-pa"
  },
  openGraph: {
    title,
    description,
    url: "/pressure-washing-pottstown-pa"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function PressureWashingPage() {
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/pressure-washing-pottstown-pa",
      description
    }),
    buildServiceSchema({
      pagePath: "/pressure-washing-pottstown-pa",
      name: "Pressure Washing in Pottstown, PA",
      serviceType: "Pressure washing and exterior cleaning",
      description,
      serviceOutput: "Cleaner masonry, concrete, and exterior hard surfaces"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Pressure Washing in Pottstown, PA", path: "/pressure-washing-pottstown-pa" }
    ]),
    buildFaqSchema(faqs)
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Imperial Chimney & Masonry</p>
            <h1>Pressure Washing in Pottstown, PA</h1>
            <p>
              Pressure washing and exterior cleaning for masonry, patios, walkways,
              driveways, stoops, and other hard surfaces in Pottstown and nearby towns.
            </p>
            <div className="hero-actions">
              <Link href="/contact#estimate-form" className="btn btn-primary">
                Request Exterior Cleaning
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
              <h2>Pressure washing for curb appeal, prep work, and routine exterior cleanup</h2>
              <p>
                Pressure washing helps remove surface dirt, algae, and discoloration from masonry,
                concrete, and other hard exterior surfaces. It is useful both as a standalone cleanup
                service and as prep before certain repairs or coatings.
              </p>
              <p>
                Homeowners often call us to freshen up patios, stoops, walkways, driveways, and
                exterior masonry that has darkened from weather, runoff, or organic growth.
              </p>
              <ul className="check-list">
                <li>Pressure washing and power washing for hard exterior surfaces</li>
                <li>Brick, block, stone, and concrete cleaning</li>
                <li>Patios, walkways, stoops, and driveway cleaning</li>
                <li>Prep cleaning before masonry repair or waterproofing</li>
              </ul>
            </div>
            <div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">Most common projects</span>
                  <span className="stat-label">
                    Walkways, patios, retaining walls, front stoops, driveway sections, and masonry areas with algae or dark staining.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">A good fit when</span>
                  <span className="stat-label">
                    The surface looks dirty, slippery, weathered, or needs to be cleaned before repair, sealing, or seasonal use.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Need masonry work too?</span>
                  <span className="stat-label">
                    We also repair brick, block, stucco, mortar joints, chimneys, and other masonry surfaces around the home.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>Pressure washing projects we handle most often</h2>
              <p>
                Local homeowners usually call for one or more of these exterior cleaning needs.
              </p>
            </header>
            <div className="grid services-grid">
              <article className="card service-card">
                <h3>Masonry and retaining walls</h3>
                <p>
                  Exterior masonry often collects algae, grime, and runoff stains that make the whole property look older than it is.
                </p>
              </article>
              <article className="card service-card">
                <h3>Walkways, patios, and stoops</h3>
                <p>
                  Hardscape surfaces are some of the first areas people notice and some of the easiest places for dirt and slippery growth to build up.
                </p>
              </article>
              <article className="card service-card">
                <h3>Cleaning before repairs</h3>
                <p>
                  Pressure washing is often the first step before masonry waterproofing, coatings, or certain repair projects.
                </p>
              </article>
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title="Related Local Service Pages"
          intro="Exterior cleaning often goes hand in hand with masonry repair, stucco repair, waterproofing, and chimney work."
        />

        <FaqSection
          title="Pressure Washing FAQ"
          intro="Answers for homeowners searching for pressure washing or power washing in the Pottstown area."
          items={faqs}
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
