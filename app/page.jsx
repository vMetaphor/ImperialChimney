import Script from "next/script";
import FaqSection from "../components/FaqSection";
import FeaturedLocationLinks from "../components/FeaturedLocationLinks";
import FeaturedServiceLinks from "../components/FeaturedServiceLinks";
import HomeScripts from "../components/HomeScripts";
import SeoJsonLd from "../components/SeoJsonLd";
import { homeHtml } from "../lib/pageHtml";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  defaultKeywords
} from "../lib/seo";

export const metadata = {
  title:
    "Chimney Sweep, Chimney Repair & Stucco Repair in Pottstown, PA",
  description:
    "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Pottstown, Norristown, Collegeville, Limerick, Douglassville, and nearby towns.",
  keywords: defaultKeywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title:
      "Chimney Sweep, Chimney Repair & Stucco Repair in Pottstown, PA",
    description:
      "Chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Pottstown, Norristown, Collegeville, Limerick, Douglassville, and nearby towns.",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep, Chimney Repair & Stucco Repair in Pottstown, PA",
    description:
      "Local chimney sweeping, chimney repairs, stucco repair, masonry repair, and pressure washing in Pottstown, Norristown, Collegeville, Limerick, and Douglassville."
  }
};

export default function HomePage() {
  const mainHtml = homeHtml;
  const homeFaqs = [
    {
      question: "How often should a chimney be swept?",
      answer:
        "For most active fireplaces, stoves, and inserts, an annual chimney sweep and inspection is the safest starting point. Heavier use, creosote buildup, or draft issues can justify more frequent service."
    },
    {
      question: "What signs mean I may need chimney repair?",
      answer:
        "Leaks, ceiling stains, crumbling mortar, cracked crowns, white staining on the brick, missing caps, loose bricks, smoke problems, and strong chimney odors are all signs that a repair visit is worth scheduling."
    },
    {
      question: "Do you repair cracked chimney stucco?",
      answer:
        "Yes. We repair cracked or deteriorated chimney stucco, address the masonry damage underneath when needed, and apply protective finishes that help the chimney shed water more effectively."
    },
    {
      question: "Can you repair brick, block, and stone around a chimney or foundation?",
      answer:
        "Yes. We handle masonry repair for chimneys, walls, foundations, and other exterior surfaces, including brick repair, block repair, repointing, and related stucco or parging work."
    },
    {
      question: "Do you offer pressure washing and power washing?",
      answer:
        "Yes. We provide pressure washing for masonry, patios, walkways, driveways, stoops, and other hard exterior surfaces, including prep cleaning before repairs or waterproofing."
    }
  ];
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/",
      description:
        "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Pottstown, Norristown, Collegeville, Limerick, Douglassville, and nearby towns."
    }),
    buildFaqSchema(homeFaqs)
  ];

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <section className="section section-areas">
        <div className="container">
          <header className="section-header">
            <h2>Chimney Sweep &amp; Masonry Contractor Across Your Area</h2>
            <p>
              Serving homeowners searching for a chimney sweep near me, chimney
              repair near me, and masonry contractor near me in Pottstown,
              Norristown, Collegeville, Limerick, Douglassville, and nearby
              towns.
            </p>
          </header>
          <div className="grid services-grid">
            <article className="card service-card">
              <h3>Service Areas &amp; Zip Codes</h3>
              <ul>
                <li>Pottstown, PA 19464</li>
                <li>Norristown, PA</li>
                <li>Sanatoga, PA 19464</li>
                <li>Gilbertsville, PA 19525</li>
                <li>Boyertown, PA 19512</li>
                <li>Douglassville, PA 19518</li>
                <li>Phoenixville, PA 19460</li>
                <li>Collegeville, PA 19426</li>
                <li>Royersford, PA 19468</li>
                <li>Limerick, PA 19468</li>
                <li>Spring City, PA 19475</li>
              </ul>
            </article>
            <article className="card service-card">
              <h3>Popular Local Services</h3>
              <ul>
                <li>Chimney sweeping and chimney cleaning</li>
                <li>Chimney inspections and certified chimney sweep visits</li>
                <li>Chimney repair, rebuild, and repointing</li>
                <li>Chimney crown and flashing repair</li>
                <li>Masonry repair, brick repair, and stone masonry</li>
                <li>Dryer vent cleaning and dryer vent inspections</li>
                <li>Pressure washing and power washing</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <FeaturedLocationLinks
        title="Town Pages for Key Service Areas"
        intro="These pages help homeowners in the towns you serve find a local page that matches both their area and the services they need."
        sectionClassName="section"
      />
      <FeaturedServiceLinks
        title="Popular Search Services in Pottstown and Nearby Areas"
        intro="These service pages focus on the exact chimney, stucco, masonry, and pressure washing jobs local homeowners usually search for first."
      />
      <FaqSection
        title="Questions Homeowners Ask Before Calling"
        intro="Clear answers help Google understand what you do, and they help visitors decide whether to call."
        items={homeFaqs}
      />
      <SeoJsonLd data={jsonLd} />
      <Script
        src="https://www.thumbtack.com/profile/widgets/scripts/?service_pk=516496843184193544&widget_id=review&type=star"
        strategy="afterInteractive"
      />
      <HomeScripts />
    </>
  );
}
