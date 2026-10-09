import Link from "next/link";
import { getProjectPath, getRelatedProjects } from "../lib/projects";

export default function FeaturedProjectLinks({
  title,
  intro,
  filterCitySlug,
  filterRegion,
  excludeSlug,
  limit = 3,
  sectionClassName = "section section-accent"
}) {
  const projects = getRelatedProjects({
    citySlug: filterCitySlug,
    region: filterRegion,
    excludeSlug,
    limit
  });

  if (!projects.length) {
    return null;
  }

  return (
    <section className={sectionClassName}>
      <div className="container">
        <header className="section-header">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </header>
        <div className="grid services-grid">
          {projects.map((project) => (
            <article className="card service-card project-card" key={project.slug}>
              <p className="project-card-meta">
                {project.city}, PA | {project.serviceLabel}
              </p>
              <h3>
                <Link href={getProjectPath(project)}>{project.title}</Link>
              </h3>
              <p>{project.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
