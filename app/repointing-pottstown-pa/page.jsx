import Link from "next/link";
import CallBand from "../../components/CallBand";
import CompactLocationLinks from "../../components/CompactLocationLinks";
import FaqSection from "../../components/FaqSection";
import FeaturedServiceLinks from "../../components/FeaturedServiceLinks";
import SeoJsonLd from "../../components/SeoJsonLd";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
  defaultKeywords,
  siteConfig,
  telHref
} from "../../lib/seo";

const pagePath = "/repointing-pottstown-pa";
const title = "Chimney & Masonry Repointing in Pottstown, PA | Brick & Stone Tuckpointing";
const description =
  "Chimney repointing and masonry repointing in Pottstown, PA. Imperial Chimney & Masonry grinds out failing mortar joints and repacks them with matched mortar on chimneys, brick walls, stone, and foundations.";

// Each pair is a real job, and the alt text matches what the photos show.
const beforeAfter = [
  {
    caption: "Chimney repointing",
    before: { src: "/assets/img/repointchimney1.JPEG", alt: "Chimney with eroded mortar joints before repointing" },
    after: { src: "/assets/img/repointchimney2.JPEG", alt: "The same chimney after its joints were repointed" }
  },
  {
    caption: "Brick repointing",
    before: { src: "/assets/img/repointingbrick1.JPEG", alt: "Brick wall section with failing mortar before repointing" },
    after: { src: "/assets/img/repointingbrick2.JPEG", alt: "The same brick section after repointing" }
  },
  {
    caption: "Stone repointing",
    before: { src: "/assets/img/stonerepointing1.JPEG", alt: "Stonework with open mortar joints before repointing" },
    after: { src: "/assets/img/stonerepointing2.JPEG", alt: "The same stonework after repointing" }
  }
];

const faqs = [
  {
    question: "What is repointing?",
    answer:
      "Repointing means grinding out mortar joints that have weathered or cracked and packing fresh mortar back in. The bricks or stones themselves stay put - it is the mortar between them that gets replaced."
  },
  {
    question: "Is repointing the same as tuckpointing?",
    answer:
      "In everyday use most homeowners and contractors mean the same thing by both words. Strictly, tuckpointing is a finishing technique using two mortar colors to make joints look crisper, while repointing is the structural repair. If you ask us for tuckpointing, we will tell you which one your wall actually needs."
  },
  {
    question: "How do I know if my chimney needs repointing?",
    answer:
      "Look at the joints rather than the brick. If mortar is crumbling, recessed well below the brick face, sandy to the touch, or you can scratch it out with a key, the joints are no longer shedding water. Loose bricks, white staining, and damp patches on interior walls near the chimney are later-stage signs."
  },
  {
    question: "Can you match my existing mortar?",
    answer:
      "We match as closely as we can on color, texture, and joint profile. On older homes the match matters structurally too, not just visually: original soft lime mortar needs a compatible mix, because modern hard portland mortar is stiffer than the brick around it and can cause the brick faces to spall."
  },
  {
    question: "How long does repointing last?",
    answer:
      "Properly ground out and repacked joints generally last for decades. Smearing new mortar over the surface of old failing joints is what fails early, often within a couple of years, because water keeps getting in behind it."
  },
  {
    question: "Do you repoint areas other than chimneys?",
    answer:
      "Yes. We repoint chimneys, brick and stone walls, foundations, porches, steps, and retaining walls across Pottstown and nearby Montgomery, Berks, and Chester County towns."
  }
];

export const metadata = {
  title,
  description,
  keywords: [
    ...defaultKeywords,
    "chimney repointing pottstown pa",
    "masonry repointing pottstown pa",
    "brick repointing pottstown pa",
    "stone repointing pottstown pa",
    "tuckpointing pottstown pa",
    "mortar joint repair pottstown pa"
  ],
  alternates: {
    canonical: pagePath
  },
  openGraph: {
    title,
    description,
    url: pagePath
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  }
};

export default function RepointingPage() {
  const jsonLd = [
    buildLocalBusinessSchema({ pagePath, description }),
    buildServiceSchema({
      pagePath,
      name: "Chimney & Masonry Repointing in Pottstown, PA",
      serviceType: "Repointing and tuckpointing of brick, block, and stone masonry",
      description,
      serviceOutput:
        "Sound, water-shedding mortar joints on chimneys, walls, and foundations"
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Chimney & Masonry Repointing in Pottstown, PA", path: pagePath }
    ]),
    buildFaqSchema(faqs)
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Imperial Chimney &amp; Masonry</p>
            <h1>Chimney &amp; Masonry Repointing in Pottstown, PA</h1>
            <p>
              Failing mortar joints let water into brick and stone. We grind the
              old joints out and repack them with matched mortar on chimneys,
              walls, and foundations across Pottstown and nearby towns.
            </p>
            <div className="hero-actions">
              <a href={telHref} className="btn btn-call" data-call-cta="service-hero">
                Call {siteConfig.phoneDisplay}
              </a>
              <Link href="/contact#estimate-form" className="btn btn-estimate">
                Request a Repointing Estimate
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <h2>Mortar fails before the brick does</h2>
              <p>
                Mortar is meant to be the softer, sacrificial part of a wall. It
                weathers first on purpose, which is why joints open up while the
                brick around them still looks fine. Once those joints are
                recessed and sandy, water runs into the wall instead of off it,
                and freeze-thaw cycles start pushing the masonry apart.
              </p>
              <p>
                Caught at the joint stage, repointing is a straightforward
                repair. Left long enough, the same chimney needs bricks reset or
                the top few courses rebuilt, which costs considerably more.
              </p>
              <ul className="check-list">
                <li>Failing joints ground out to a sound depth, not just skimmed over</li>
                <li>Fresh mortar packed and tooled to match the original profile</li>
                <li>Color and mix matched to the existing masonry</li>
                <li>Chimneys, brick and stone walls, foundations, porches, and steps</li>
              </ul>
            </div>
            <div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">Common reasons people call</span>
                  <span className="stat-label">
                    Crumbling or recessed joints, loose bricks, white staining,
                    damp interior walls near a chimney, or a repair item flagged
                    on a home inspection.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Best time to schedule</span>
                  <span className="stat-label">
                    Spring through fall. Mortar needs moderate temperatures to
                    cure properly, so repointing in a hard freeze is not worth
                    doing.
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Often paired with</span>
                  <span className="stat-label">
                    Crown repair, chimney caps, flashing, stucco or parging
                    work, and waterproofing once the joints are sound.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-proof">
          <div className="container">
            <header className="section-header">
              <h2>Repointing Work, Before &amp; After</h2>
              <p>
                Three of our own jobs &mdash; a chimney, a brick wall section,
                and stonework.
              </p>
            </header>
            <div className="proof-grid">
              {beforeAfter.map((item) => (
                <figure className="proof-card" key={item.caption}>
                  <div className="proof-pair">
                    <span className="proof-shot">
                      <img
                        src={item.before.src}
                        alt={item.before.alt}
                        width="1050"
                        height="1400"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="proof-tag">Before</span>
                    </span>
                    <span className="proof-shot">
                      <img
                        src={item.after.src}
                        alt={item.after.alt}
                        width="1050"
                        height="1400"
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="proof-tag proof-tag-after">After</span>
                    </span>
                  </div>
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>How to tell your joints are going</h2>
              <p>
                Check the mortar, not the brick. Any one of these is worth a look.
              </p>
            </header>
            <div className="grid services-grid">
              <article className="card service-card">
                <h3>You can scratch the mortar out</h3>
                <p>
                  If a key or screwdriver digs into the joint and brings out
                  sand, the mortar has lost its binder and is no longer keeping
                  water out.
                </p>
              </article>
              <article className="card service-card">
                <h3>Joints sit well back from the brick</h3>
                <p>
                  Mortar recessed much below the brick face gives water a ledge
                  to sit on. On a chimney that is the most exposed masonry on the
                  house.
                </p>
              </article>
              <article className="card service-card">
                <h3>White staining or damp inside</h3>
                <p>
                  Chalky white deposits on the brick, or damp patches on interior
                  walls and ceilings near the chimney, mean water is already
                  getting through.
                </p>
              </article>
            </div>
          </div>
        </section>

        <FeaturedServiceLinks
          title="Related Local Service Pages"
          intro="Repointing often comes up alongside crown repair, stucco work, or a chimney that has started leaking."
          sectionClassName="section"
        />

        <CompactLocationLinks
          title="Repointing in Nearby Towns"
          intro="We also repoint chimneys, brick, and stonework across nearby Montgomery, Berks, and Chester County communities."
        />

        <FaqSection
          title="Repointing FAQ"
          intro="What homeowners usually want to know before booking mortar joint repair."
          items={faqs}
          sectionClassName="section section-accent"
        />

        <CallBand
          title="Not sure if it needs repointing?"
          intro="Send a photo of the joints or call and describe what you are seeing - we will tell you whether it needs repointing now or can wait."
          source="service-band"
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
