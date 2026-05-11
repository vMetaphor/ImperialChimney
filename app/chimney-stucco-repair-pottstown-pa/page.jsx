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

const title = "Chimney Stucco Repair in Pottstown, PA | Parging & Surface Repair";
const description =
  "Need chimney stucco repair in Pottstown, PA? Imperial Chimney & Masonry repairs cracked chimney stucco, parging, and weather-damaged chimney surfaces for local homeowners.";

const faqs = [
  {
    question: "What is chimney stucco repair?",
    answer:
      "Chimney stucco repair usually means removing loose or failed exterior coating, addressing damaged masonry underneath as needed, and applying a new protective stucco or parging finish."
  },
  {
    question: "Why does chimney stucco crack or fall off?",
    answer:
      "Water intrusion, freeze-thaw cycles, age, movement in the chimney structure, and failed previous patching are all common reasons chimney stucco starts cracking or separating."
  },
  {
    question: "Can you repair the masonry under damaged stucco too?",
    answer:
      "Yes. If the chimney has loose brick, deteriorated mortar, or other masonry problems behind the stucco, we can repair those conditions before resurfacing the exterior."
  },
  {
    question: "Is chimney stucco repair different from a full chimney rebuild?",
    answer:
      "Yes. Stucco repair focuses on the exterior finish and any underlying masonry damage that can be repaired. A rebuild is only needed when the chimney structure itself is too deteriorated to preserve safely."
  }
];

export const metadata = {
  title,
  description,
  keywords: [
    ...defaultKeywords,
    "chimney stucco repair pottstown pa",
    "chimney parging repair pottstown pa",
    "stucco chimney repair near me"
  ],
  alternates: {
    canonical: "/chimney-stucco-repair-pottstown-pa"
  },
  openGraph: {
    title,
    description,
    url: "/chimney-stucco-repair-pottstown-pa"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function ChimneyStuccoRepairPage() {
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/chimney-stucco-repair-pottstown-pa",
      description
    }),
    buildServiceSchema({
      pagePath: "/chimney-stucco-repair-pottstown-pa",
      name: "Chimney Stucco Repair in Pottstown, PA",
      serviceType: "Chimney stucco repair and parging",
      description,
      serviceOutput: "A protected chimney exterior with repaired stucco or parging"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      {
        name: "Chimney Stucco Repair in Pottstown, PA",
        path: "/chimney-stucco-repair-pottstown-pa"
      }
    ]),
    buildFaqSchema(faqs)
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Imperial Chimney & Masonry</p>
            <h1>Chimney Stucco Repair in Pottstown, PA</h1>
            <p>
              Repair cracked chimney stucco, damaged parging, and weathered chimney surfaces
              before moisture gets deeper into the masonry underneath.
            </p>
            <div className="hero-actions">
              <Link href="/contact#estimate-form" className="btn btn-primary">
                Request a Stucco Repair Estimate
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
              <h2>Protect the chimney before surface damage becomes structural damage</h2>
              <p>
                When chimney stucco starts cracking, bulging, or falling away, water can work its way
                into the masonry and accelerate deterioration. Timely chimney stucco repair helps keep the
                chimney shell sealed and looking clean from the curb.
              </p>
              <p>
                We inspect the finish and the underlying chimney condition, remove failing material,
                repair damaged areas when needed, and apply a new surface that fits the condition of the chimney.
              </p>
              <ul className="check-list">
                <li>Cracked chimney stucco repair</li>
                <li>Parging and resurfacing for chimney exteriors</li>
                <li>Repair of masonry damage found underneath</li>
                <li>Protective coatings to help shed water</li>
              </ul>
            </div>
            <div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">Common symptoms</span>
                  <span className="stat-label">
                    Hairline cracking, wider splits, bubbling surfaces, missing patches,
                    exposed masonry, and repeated water staining.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Why it matters</span>
                  <span className="stat-label">
                    Chimney stucco is not only cosmetic. Once the surface fails, the masonry below
                    is more exposed to water, freeze-thaw damage, and faster deterioration.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Related repairs</span>
                  <span className="stat-label">
                    Stucco repair is often paired with crown work, flashing repair, repointing,
                    waterproofing, and general chimney masonry repair.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>When homeowners usually call for chimney stucco repair</h2>
              <p>
                These are the most common situations that lead to a chimney stucco repair estimate.
              </p>
            </header>
            <div className="grid services-grid">
              <article className="card service-card">
                <h3>Visible cracking or missing patches</h3>
                <p>
                  If the chimney finish is broken open or sections have fallen away, moisture can get to the layers below quickly.
                </p>
              </article>
              <article className="card service-card">
                <h3>Repeated leaks after patch jobs</h3>
                <p>
                  Failed patching often comes back because the underlying masonry problem was never repaired first.
                </p>
              </article>
              <article className="card service-card">
                <h3>Chimney looks worn from the street</h3>
                <p>
                  A deteriorated chimney exterior hurts curb appeal and often signals that the protective finish has reached the end of its life.
                </p>
              </article>
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title="Related Local Service Pages"
          intro="Chimney stucco repair often overlaps with chimney leak repair, repointing, and broader masonry restoration."
        />

        <FaqSection
          title="Chimney Stucco Repair FAQ"
          intro="Answers for homeowners searching for chimney stucco repair or chimney parging repair in the Pottstown area."
          items={faqs}
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
