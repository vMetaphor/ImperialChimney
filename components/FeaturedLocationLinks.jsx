import Link from "next/link";
import { getLocationServicePath, locationServicePages } from "../lib/locationPages";

export default function FeaturedLocationLinks({
  title,
  intro,
  excludeSlug,
  filterRegion,
  sectionClassName = "section"
}) {
  const baseLocations = (excludeSlug
    ? locationServicePages.filter((page) => page.slug !== excludeSlug)
    : locationServicePages
  ).slice().sort((left, right) => left.city.localeCompare(right.city));

  const regionalLocations = filterRegion
    ? baseLocations.filter((page) => page.region === filterRegion)
    : baseLocations;

  const locations = regionalLocations.length ? regionalLocations : baseLocations;

  return (
    <section className={sectionClassName}>
      <div className="container">
        <header className="section-header">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </header>
        <div className="grid services-grid">
          {locations.map((page) => (
            <article className="card service-card" key={page.slug}>
              <h3>
                <Link href={getLocationServicePath(page)}>{page.title}</Link>
              </h3>
              <p>{page.cardDescription}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
