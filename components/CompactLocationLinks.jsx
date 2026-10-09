import Link from "next/link";
import { getLocationServicePath, locationServicePages } from "../lib/locationPages";

export default function CompactLocationLinks({
  title = "Available in Nearby Towns",
  intro = "We provide this service across nearby communities. Choose your town for more local details.",
  limit = 12
}) {
  const locations = locationServicePages
    .slice()
    .sort((left, right) => left.city.localeCompare(right.city))
    .slice(0, limit);

  return (
    <section className="section compact-location-section">
      <div className="container">
        <header className="section-header">
          <h2>{title}</h2>
          <p>{intro}</p>
        </header>
        <div className="service-area-tags compact-location-tags">
          {locations.map((page) => (
            <Link
              className="service-area-tag compact-location-tag"
              href={getLocationServicePath(page)}
              key={page.slug}
            >
              {page.city}, PA
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
