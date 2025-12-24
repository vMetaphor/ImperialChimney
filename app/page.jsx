import Script from "next/script";
import HomeScripts from "../components/HomeScripts";
import { homeHtml } from "../lib/pageHtml";

export const metadata = {
  title:
    "Chimney Sweep & Masonry Contractor in Pottstown, PA 19464 | Imperial Chimney & Masonry",
  description:
    "Imperial Chimney & Masonry provides chimney sweeping, chimney cleaning, chimney inspections, chimney repair, and masonry services in Pottstown, PA 19464 and nearby towns like Gilbertsville, Boyertown, Phoenixville, Collegeville, Royersford, Limerick, and Douglassville.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title:
      "Chimney Sweep & Masonry Contractor in Pottstown, PA 19464 | Imperial Chimney & Masonry",
    description:
      "Chimney sweeping, chimney cleaning, inspections, chimney repair, and masonry services in Pottstown, PA 19464 and surrounding towns.",
    url: "/"
  }
};

export default function HomePage() {
  const mainHtml = homeHtml;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChimneySweep",
    name: "Imperial Chimney & Masonry",
    url: "https://imperialchimney-masonry.com",
    telephone: "+1-484-447-1414",
    image: "https://imperialchimney-masonry.com/assets/img/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "864 Queen Street",
      addressLocality: "Pottstown",
      addressRegion: "PA",
      postalCode: "19464",
      addressCountry: "US"
    },
    areaServed: [
      "Pottstown PA 19464",
      "Sanatoga PA 19464",
      "Gilbertsville PA 19525",
      "Boyertown PA 19512",
      "Douglassville PA 19518",
      "Phoenixville PA 19460",
      "Collegeville PA 19426",
      "Royersford PA 19468",
      "Limerick PA 19468",
      "Spring City PA 19475",
      "Montgomery County PA",
      "Chester County PA"
    ]
  };

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <section className="section section-areas">
        <div className="container">
          <header className="section-header">
            <h2>Chimney Sweep &amp; Masonry Contractor Near Pottstown, PA</h2>
            <p>
              Serving homeowners searching for a chimney sweep near me, chimney
              repair near me, and masonry contractor near me across Montgomery
              and Chester counties.
            </p>
          </header>
          <div className="grid services-grid">
            <article className="card service-card">
              <h3>Service Areas &amp; Zip Codes</h3>
              <ul>
                <li>Pottstown, PA 19464</li>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        src="https://www.thumbtack.com/profile/widgets/scripts/?service_pk=516496843184193544&widget_id=review&type=star"
        strategy="afterInteractive"
      />
      <HomeScripts />
    </>
  );
}
