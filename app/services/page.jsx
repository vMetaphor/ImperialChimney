import { Suspense } from "react";
import FaqSection from "../../components/FaqSection";
import FeaturedLocationLinks from "../../components/FeaturedLocationLinks";
import FeaturedServiceLinks from "../../components/FeaturedServiceLinks";
import SeoJsonLd from "../../components/SeoJsonLd";
import ServicesScripts from "../../components/ServicesScripts";
import { servicesHtml } from "../../lib/pageHtml";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  defaultKeywords
} from "../../lib/seo";

export const metadata = {
  title:
    "Chimney Sweep, Stucco Repair, Brick Repair & Pressure Washing Services",
  description:
    "Chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, dryer vent cleaning, and pressure washing in Pottstown, Norristown, Collegeville, Limerick, Douglassville, and nearby towns.",
  keywords: defaultKeywords,
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Chimney Sweep, Stucco Repair, Brick Repair & Pressure Washing Services",
    description:
      "Chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Pottstown, Norristown, Collegeville, Limerick, Douglassville, and nearby towns.",
    url: "/services"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep, Stucco Repair, Brick Repair & Pressure Washing Services",
    description:
      "Chimney sweeping, chimney repairs, stucco repair, masonry restoration, and pressure washing across Pottstown, Norristown, Collegeville, Limerick, and Douglassville."
  }
};

export default function ServicesPage() {
  const mainHtml = servicesHtml;
  const servicesFaqs = [
    {
      question: "Do you handle both chimney work and masonry repair?",
      answer:
        "Yes. Imperial Chimney & Masonry handles chimney sweeping, chimney repairs, chimney stucco repair, masonry restoration, repointing, and pressure washing for homeowners in Pottstown, Norristown, Collegeville, Limerick, Douglassville, and nearby towns."
    },
    {
      question: "Can I call for chimney stucco repair only?",
      answer:
        "Yes. If the main issue is cracked chimney stucco, loose parging, or weathered exterior coating, we can inspect the surface and repair the chimney without requiring a larger rebuild unless the masonry underneath is damaged."
    },
    {
      question: "What types of masonry do you repair?",
      answer:
        "We repair brick, block, stone, mortar joints, chimney crowns, and related exterior finishes such as stucco or parging on chimneys, walls, and foundations."
    },
    {
      question: "Do you provide pressure washing before masonry repairs?",
      answer:
        "Yes. Pressure washing is often useful before waterproofing, coatings, or certain repair work because it removes dirt, algae, and loose surface buildup."
    },
    {
      question: "How do I request an estimate?",
      answer:
        "Use the estimate form on the contact page or call 484-447-1414. Sharing photos and a short description of the problem usually makes the first conversation easier."
    }
  ];
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/services",
      description:
        "Imperial Chimney & Masonry offers chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, dryer vent cleaning, and pressure washing in Pottstown, Norristown, Collegeville, Limerick, Douglassville, and nearby towns."
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" }
    ]),
    buildFaqSchema(servicesFaqs)
  ];

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2>Local Chimney &amp; Masonry Services Near You</h2>
            <p>
              If you are searching for a chimney sweep near me, chimney repair
              near me, or a masonry contractor near me in Pottstown,
              Norristown, Collegeville, Limerick, Douglassville, or nearby
              towns, our team can help.
            </p>
          </header>
          <div className="grid services-grid">
            <article className="card service-card">
              <h3>Chimney Services</h3>
              <ul>
                <li>Chimney sweeping and chimney cleaning</li>
                <li>Chimney inspections</li>
                <li>Chimney repair and chimney rebuilds</li>
                <li>Chimney repointing and crown repair</li>
                <li>Chimney flashing repair</li>
              </ul>
            </article>
            <article className="card service-card">
              <h3>Masonry &amp; Exterior Services</h3>
              <ul>
                <li>Masonry contractor and masonry repair</li>
                <li>Brick repair and brick pointing</li>
                <li>Stone masonry services</li>
                <li>Pressure washing and power washing</li>
                <li>House, driveway, concrete, and deck cleaning</li>
              </ul>
            </article>
            <article className="card service-card">
              <h3>Dryer Vent Cleaning</h3>
              <ul>
                <li>Dryer vent cleaning across nearby service areas</li>
                <li>Dryer vent inspections and lint removal</li>
                <li>Dryer fire prevention service</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <FeaturedLocationLinks
        title="Key Service Areas We Cover"
        intro="These town pages give each important service area its own content and internal links without cramming every city into one title tag."
        sectionClassName="section section-accent"
      />
      <FeaturedServiceLinks
        title="Targeted Pages for Local Search"
        intro="These pages give each high-intent service its own URL, headline, and supporting content so Google has clearer signals about what you offer."
      />
      <FaqSection
        title="Service Questions We Hear All the Time"
        intro="This content helps both visitors and search engines understand the jobs you take on most often."
        items={servicesFaqs}
      />
      <SeoJsonLd data={jsonLd} />
      <Suspense fallback={null}>
        <ServicesScripts />
      </Suspense>
    </>
  );
}
