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

const title = "Brick, Block & Stucco Repair in Pottstown, PA | Masonry Repair";
const description =
  "Need masonry repair in Pottstown, PA? Imperial Chimney & Masonry provides brick repair, block repair, stucco repair, parging, repointing, and masonry restoration for local homeowners.";

const faqs = [
  {
    question: "What types of masonry repair do you handle?",
    answer:
      "We repair brick, block, stone, stucco, mortar joints, parging, and related masonry issues on chimneys, walls, foundations, and other exterior surfaces."
  },
  {
    question: "Do you repair cracked block walls and damaged stucco surfaces?",
    answer:
      "Yes. We handle block repair, stucco repair, and parging restoration where surfaces are cracked, loose, weather-damaged, or letting water in."
  },
  {
    question: "Can you fix loose brick and deteriorated mortar joints?",
    answer:
      "Yes. Repointing and targeted masonry repair are common ways to stabilize loose brickwork and replace failed mortar before larger sections break down."
  },
  {
    question: "Do you work on both chimneys and foundations?",
    answer:
      "Yes. We repair masonry on chimneys, foundation walls, exterior walls, and other parts of the home where brick, block, stone, or stucco have deteriorated."
  }
];

export const metadata = {
  title,
  description,
  keywords: [
    ...defaultKeywords,
    "masonry repair pottstown pa",
    "brick repair pottstown pa",
    "block repair pottstown pa",
    "stucco repair pottstown pa"
  ],
  alternates: {
    canonical: "/masonry-repair-pottstown-pa"
  },
  openGraph: {
    title,
    description,
    url: "/masonry-repair-pottstown-pa"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function MasonryRepairPage() {
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/masonry-repair-pottstown-pa",
      description
    }),
    buildServiceSchema({
      pagePath: "/masonry-repair-pottstown-pa",
      name: "Brick, Block & Stucco Repair in Pottstown, PA",
      serviceType: "Masonry repair",
      description,
      serviceOutput: "Repaired and protected masonry surfaces"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      {
        name: "Brick, Block & Stucco Repair in Pottstown, PA",
        path: "/masonry-repair-pottstown-pa"
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
            <h1>Brick, Block &amp; Stucco Repair in Pottstown, PA</h1>
            <p>
              Masonry repair for cracked brick, damaged block, failing mortar joints,
              worn stucco, and weathered exterior surfaces in Pottstown and nearby towns.
            </p>
            <div className="hero-actions">
              <Link href="/contact#estimate-form" className="btn btn-primary">
                Request a Masonry Repair Estimate
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
              <h2>Masonry repair for the surfaces that take the most weather</h2>
              <p>
                Brick, block, stucco, and mortar joints slowly wear down when moisture keeps getting in.
                The sooner damaged areas are repaired, the easier it is to stop the spread and protect
                the surrounding structure.
              </p>
              <p>
                We work on masonry problems tied to chimneys, exterior walls, foundations, retaining surfaces,
                and other parts of the home where cracking, movement, or water damage starts to show up.
              </p>
              <ul className="check-list">
                <li>Brick repair and block repair</li>
                <li>Stucco repair and parging restoration</li>
                <li>Repointing and mortar joint repair</li>
                <li>Masonry restoration for chimneys, walls, and foundations</li>
              </ul>
            </div>
            <div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">Common problems we see</span>
                  <span className="stat-label">
                    Cracked mortar joints, loose brick, damaged block faces, failing stucco,
                    surface spalling, and water-damaged foundation sections.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Typical repair goals</span>
                  <span className="stat-label">
                    Restore strength, stop water entry, improve appearance, and prevent small
                    masonry failures from turning into partial rebuilds.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Local coverage</span>
                  <span className="stat-label">
                    We serve homeowners in Pottstown and nearby parts of Montgomery, Chester, and Berks counties.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>Masonry repair requests we get most often</h2>
              <p>
                Homeowners usually reach out after they notice one of these conditions around the property.
              </p>
            </header>
            <div className="grid services-grid">
              <article className="card service-card">
                <h3>Cracked brick or loose mortar</h3>
                <p>
                  When joints fail or brick starts moving, water gets in faster and the affected area rarely improves on its own.
                </p>
              </article>
              <article className="card service-card">
                <h3>Damaged block or parging</h3>
                <p>
                  Block walls and parged surfaces often crack, flake, or separate over time, especially in wet or freeze-thaw conditions.
                </p>
              </article>
              <article className="card service-card">
                <h3>Stucco surfaces that look worn out</h3>
                <p>
                  Cracked stucco and failed patching usually mean the surface needs a more thorough repair and new protective finish.
                </p>
              </article>
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title="Related Local Service Pages"
          intro="Masonry repairs often connect to chimney repairs, stucco work, repointing, and pressure washing before or after the job."
        />

        <FaqSection
          title="Masonry Repair FAQ"
          intro="Answers for homeowners searching for brick repair, block repair, or stucco repair in the Pottstown area."
          items={faqs}
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
