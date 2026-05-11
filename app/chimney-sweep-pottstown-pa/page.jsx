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

const title = "Chimney Sweep in Pottstown, PA | Chimney Cleaning & Inspections";
const description =
  "Need a chimney sweep in Pottstown, PA? Imperial Chimney & Masonry provides chimney sweeping, chimney cleaning, and fireplace inspections for homeowners in Pottstown and nearby towns.";

const faqs = [
  {
    question: "What is included in a chimney sweep?",
    answer:
      "A typical chimney sweep includes cleaning soot and creosote from the flue, inspecting accessible fireplace and chimney components, and noting visible safety or draft issues."
  },
  {
    question: "How often should I schedule chimney cleaning?",
    answer:
      "For most active fireplaces, wood stoves, and inserts, yearly sweeping and inspection is the safest baseline. Heavy use or glaze buildup can require more frequent service."
  },
  {
    question: "Can a chimney sweep help with smoke or odor problems?",
    answer:
      "Yes. Creosote buildup, blockages, draft problems, and damaged flue components can all contribute to smoke or odor issues, and a sweep visit is often the first step in identifying the cause."
  },
  {
    question: "Do you serve towns outside Pottstown?",
    answer:
      "Yes. Imperial Chimney & Masonry serves Pottstown along with nearby communities such as Gilbertsville, Boyertown, Phoenixville, Collegeville, Royersford, Limerick, and Douglassville."
  }
];

export const metadata = {
  title,
  description,
  keywords: [
    ...defaultKeywords,
    "chimney sweep pottstown pa",
    "chimney cleaning pottstown pa",
    "fireplace inspection pottstown pa"
  ],
  alternates: {
    canonical: "/chimney-sweep-pottstown-pa"
  },
  openGraph: {
    title,
    description,
    url: "/chimney-sweep-pottstown-pa"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function ChimneySweepPage() {
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/chimney-sweep-pottstown-pa",
      description
    }),
    buildServiceSchema({
      pagePath: "/chimney-sweep-pottstown-pa",
      name: "Chimney Sweep in Pottstown, PA",
      serviceType: "Chimney sweeping and chimney cleaning",
      description,
      serviceOutput: "A cleaner, safer chimney and fireplace system"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Chimney Sweep in Pottstown, PA", path: "/chimney-sweep-pottstown-pa" }
    ]),
    buildFaqSchema(faqs)
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Imperial Chimney & Masonry</p>
            <h1>Chimney Sweep in Pottstown, PA</h1>
            <p>
              Professional chimney sweeping, chimney cleaning, and fireplace inspections
              for homeowners in Pottstown, PA and nearby towns.
            </p>
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
              <h2>Local chimney sweeping that helps prevent bigger repairs</h2>
              <p>
                If you use your fireplace or stove regularly, chimney sweeping is one of the
                simplest ways to reduce fire risk and keep your system drafting correctly.
                We remove soot and creosote buildup, inspect accessible components, and explain
                any repair concerns we find.
              </p>
              <p>
                Homeowners in Pottstown, Gilbertsville, Boyertown, Phoenixville,
                Collegeville, and surrounding areas often call us before burning season,
                during real estate transactions, or when they notice smoke, odor, or poor draft.
              </p>
              <ul className="check-list">
                <li>Annual chimney sweeping and chimney cleaning</li>
                <li>Fireplace and flue inspections</li>
                <li>Smoke, odor, and draft troubleshooting</li>
                <li>Clear recommendations if repairs are needed</li>
              </ul>
            </div>
            <div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">Common reasons people call</span>
                  <span className="stat-label">
                    Annual cleanings, pre-season fireplace checks, home sale inspections,
                    smoke problems, and creosote concerns.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Best time to schedule</span>
                  <span className="stat-label">
                    Before the heating season starts, after heavy winter use, or as soon as
                    you notice odors, poor draft, or visible buildup.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Need repairs too?</span>
                  <span className="stat-label">
                    We also handle chimney caps, chimney crowns, flashing, masonry repair,
                    chimney stucco repair, and flue restoration.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>Signs it is time to schedule a chimney sweep</h2>
              <p>
                If any of these sound familiar, a cleaning and inspection is worth putting on the calendar.
              </p>
            </header>
            <div className="grid services-grid">
              <article className="card service-card">
                <h3>Black soot or strong odors</h3>
                <p>
                  Soot smells, smoky odors, or visible residue around the fireplace often point to buildup
                  that should be cleaned and inspected.
                </p>
              </article>
              <article className="card service-card">
                <h3>Smoke entering the room</h3>
                <p>
                  Poor draft, partial blockages, and creosote buildup can cause smoke problems.
                  A sweep visit helps narrow down the source.
                </p>
              </article>
              <article className="card service-card">
                <h3>You have not had a recent cleaning</h3>
                <p>
                  If it has been more than a year since the last service, or you are unsure of the history,
                  an inspection and sweep is the safest move.
                </p>
              </article>
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title="Related Local Service Pages"
          intro="Homeowners looking for chimney help often need more than one service, especially when water damage or masonry wear is involved."
        />

        <FaqSection
          title="Chimney Sweep FAQ"
          intro="Helpful answers for local homeowners looking for chimney cleaning or annual chimney maintenance."
          items={faqs}
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
