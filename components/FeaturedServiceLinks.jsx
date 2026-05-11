import Link from "next/link";
import { featuredServicePages } from "../lib/seo";

export default function FeaturedServiceLinks({ title, intro }) {
  return (
    <section className="section section-accent">
      <div className="container">
        <header className="section-header">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </header>
        <div className="grid services-grid">
          {featuredServicePages.map((service) => (
            <article className="card service-card" key={service.href}>
              <h3>
                <Link href={service.href}>{service.title}</Link>
              </h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
