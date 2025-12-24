import ServicesScripts from "../../components/ServicesScripts";
import { servicesHtml } from "../../lib/pageHtml";

export const metadata = {
  title:
    "Chimney Sweeping, Masonry Repair & Pressure Washing in Pottstown, PA 19464",
  description:
    "Chimney sweeping, chimney inspections, chimney repair, masonry contractor services, dryer vent cleaning, and pressure washing in Pottstown, PA 19464 and nearby towns.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Chimney Sweeping & Masonry Contractor Services",
    description:
      "Chimney sweeping, inspections, chimney repair, masonry services, dryer vent cleaning, and pressure washing in Pottstown, PA and nearby towns.",
    url: "/services"
  }
};

export default function ServicesPage() {
  const mainHtml = servicesHtml;

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2>Local Chimney &amp; Masonry Services Near You</h2>
            <p>
              If you are searching for a chimney sweep near me, chimney repair
              near me, or a masonry contractor near me in Pottstown, PA 19464 or
              nearby towns, our team can help.
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
                <li>Dryer vent cleaning in Pottstown, PA 19464</li>
                <li>Dryer vent inspections and lint removal</li>
                <li>Dryer fire prevention service</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
      <ServicesScripts />
    </>
  );
}
