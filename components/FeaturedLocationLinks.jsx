import Link from "next/link";
import { locationServicePages } from "../lib/locationPages";

export default function FeaturedLocationLinks({
  title,
  intro,
  excludeSlug,
  sectionClassName = "section"
}) {
  const locations = excludeSlug
    ? locationServicePages.filter((page) => page.slug !== excludeSlug)
    : locationServicePages;

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
                <Link href={`/${page.slug}`}>{page.title}</Link>
              </h3>
              <p>{page.cardDescription}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
