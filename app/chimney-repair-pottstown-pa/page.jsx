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

const title = "Chimney Repair in Pottstown, PA | Leak, Crown & Flashing Repairs";
const description =
  "Need chimney repair in Pottstown, PA? Imperial Chimney & Masonry repairs chimney leaks, crowns, flashing, caps, damaged brickwork, and related masonry issues for local homeowners.";

const faqs = [
  {
    question: "What chimney repairs do you handle?",
    answer:
      "We handle chimney leak repair, crown repair, flashing repair, chimney cap replacement, chimney stucco repair, masonry repair, repointing, and partial or full rebuilds when needed."
  },
  {
    question: "What are common signs of a chimney leak?",
    answer:
      "Common signs include brown ceiling stains, damp walls near the fireplace, musty odors, water in the firebox, white staining on the chimney, and crumbling mortar or brick."
  },
  {
    question: "Can you repair a chimney before it needs a full rebuild?",
    answer:
      "Often, yes. Many chimneys can be stabilized with targeted repairs such as crown work, flashing repair, waterproofing, repointing, or stucco repair before the damage spreads further."
  },
  {
    question: "Do you also repair the outside masonry around the chimney?",
    answer:
      "Yes. We repair brick, block, mortar joints, chimney stucco, parging, and related exterior masonry issues tied to the chimney structure."
  }
];

export const metadata = {
  title,
  description,
  keywords: [
    ...defaultKeywords,
    "chimney repair pottstown pa",
    "chimney leak repair pottstown pa",
    "chimney crown repair pottstown pa",
    "chimney flashing repair pottstown pa"
  ],
  alternates: {
    canonical: "/chimney-repair-pottstown-pa"
  },
  openGraph: {
    title,
    description,
    url: "/chimney-repair-pottstown-pa"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function ChimneyRepairPage() {
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/chimney-repair-pottstown-pa",
      description
    }),
    buildServiceSchema({
      pagePath: "/chimney-repair-pottstown-pa",
      name: "Chimney Repair in Pottstown, PA",
      serviceType: "Chimney repair",
      description,
      serviceOutput: "A safer, drier, more stable chimney structure"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Chimney Repair in Pottstown, PA", path: "/chimney-repair-pottstown-pa" }
    ]),
    buildFaqSchema(faqs)
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Imperial Chimney & Masonry</p>
            <h1>Chimney Repair in Pottstown, PA</h1>
            <p>
              Chimney leak repair, chimney crown repair, flashing repair, cap replacement,
              masonry repair, and rebuild work for homes in Pottstown and nearby communities.
            </p>
            <div className="hero-actions">
              <Link href="/contact#estimate-form" className="btn btn-primary">
                Request a Chimney Repair Estimate
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
              <h2>Repair the leak or damage before it spreads</h2>
              <p>
                Many chimney problems start small: a cracked crown, missing cap, loose mortar,
                damaged flashing, or worn stucco. Left alone, those issues often let more water in
                and turn into larger masonry failures.
              </p>
              <p>
                We diagnose where the problem is coming from and recommend the repair that fits the
                actual condition of the chimney. That can mean a targeted repair, a protective coating,
                or a more involved rebuild if the structure is already compromised.
              </p>
              <ul className="check-list">
                <li>Chimney leak diagnosis and repair</li>
                <li>Chimney crown and flashing repair</li>
                <li>Chimney cap replacement and waterproofing</li>
                <li>Brick, mortar, stucco, and rebuild work</li>
              </ul>
            </div>
            <div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">Common problem areas</span>
                  <span className="stat-label">
                    Crowns, caps, flashing, mortar joints, stucco coatings, and the upper chimney
                    section exposed to the most weather.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">What homeowners usually notice</span>
                  <span className="stat-label">
                    Ceiling stains, fireplace odors, loose brick, crumbling mortar, white staining,
                    or visible cracks on the chimney exterior.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Service area</span>
                  <span className="stat-label">
                    Pottstown, Sanatoga, Gilbertsville, Boyertown, Douglassville,
                    Phoenixville, Collegeville, Royersford, and nearby towns.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>Chimney repair jobs we handle most often</h2>
              <p>
                These are the repairs local homeowners ask about most when water or masonry damage starts to show up.
              </p>
            </header>
            <div className="grid services-grid">
              <article className="card service-card">
                <h3>Leak and flashing repair</h3>
                <p>
                  We trace water entry around the roofline, chimney top, or masonry surface and repair the source
                  instead of relying on guesswork.
                </p>
              </article>
              <article className="card service-card">
                <h3>Crown, cap, and upper chimney repair</h3>
                <p>
                  Cracked crowns, missing caps, and damaged top sections are common reasons chimneys start leaking
                  or breaking down faster.
                </p>
              </article>
              <article className="card service-card">
                <h3>Brick, mortar, and stucco repair</h3>
                <p>
                  We repair the outer chimney shell when mortar joints fail, bricks loosen, or the stucco coating
                  begins to crack and separate.
                </p>
              </article>
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title="Related Local Service Pages"
          intro="Chimney repair often overlaps with stucco repair, repointing, chimney sweeping, and exterior cleaning."
        />

        <FaqSection
          title="Chimney Repair FAQ"
          intro="Answers to common questions from homeowners searching for local chimney repair."
          items={faqs}
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
