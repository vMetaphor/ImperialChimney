import Link from "next/link";
import { getLocationServicePath, locationServicePages } from "../lib/locationPages";

export default function FeaturedLocationLinks({
  title,
  intro,
  excludeSlug,
  filterRegion,
  sectionClassName = "section",
  limit,
  showAllLink = false
}) {
  const baseLocations = (excludeSlug
    ? locationServicePages.filter((page) => page.slug !== excludeSlug)
    : locationServicePages
  ).slice().sort((left, right) => left.city.localeCompare(right.city));

  const regionalLocations = filterRegion
    ? baseLocations.filter((page) => page.region === filterRegion)
    : baseLocations;

  const available = regionalLocations.length ? regionalLocations : baseLocations;
  // Showing all 26 town cards makes a page feel like a link farm; cap it and
  // send people to /service-areas for the full list.
  const locations = limit ? available.slice(0, limit) : available;
  const hiddenCount = available.length - locations.length;

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
        {showAllLink && hiddenCount > 0 ? (
          <p className="proof-more">
            <Link href="/service-areas">
              See all {available.length} towns we serve &rarr;
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
