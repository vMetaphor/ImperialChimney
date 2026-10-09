import Link from "next/link";
import CallBand from "../../components/CallBand";
import FeaturedLocationLinks from "../../components/FeaturedLocationLinks";
import SeoJsonLd from "../../components/SeoJsonLd";
import { getProjectPath, projectPosts } from "../../lib/projects";
import {
  absoluteUrl,
  buildBreadcrumbSchema,
  buildLocalBusinessSchema
} from "../../lib/seo";

export const metadata = {
  title: "Project Spotlights for Chimney, Masonry & Exterior Cleaning Work",
  description:
    "Browse recent project spotlights from Imperial Chimney & Masonry across nearby Pottstown, Douglassville, Phoenixville, and surrounding service areas.",
  alternates: {
    canonical: "/projects"
  },
  openGraph: {
    title: "Project Spotlights | Imperial Chimney & Masonry",
    description:
      "See recent chimney, stucco, masonry, and pressure washing project posts from nearby service areas.",
    url: "/projects"
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Spotlights | Imperial Chimney & Masonry",
    description:
      "Recent local project posts for chimney, stucco, masonry, and exterior cleaning work."
  }
};

export default function ProjectsPage() {
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/projects",
      description:
        "Imperial Chimney & Masonry publishes project spotlights for chimney, masonry, stucco, and exterior cleaning work across nearby service areas."
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" }
    ]),
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Imperial Chimney & Masonry project spotlights",
      itemListElement: projectPosts.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: absoluteUrl(getProjectPath(project))
      }))
    }
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">Local Project Posts</p>
            <h1>Project Spotlights From Nearby Service Areas</h1>
            <p>
              These project pages add more real-world context around the chimney,
              stucco, masonry, and pressure washing work homeowners ask about most
              often.
            </p>
            <div className="hero-actions">
              <Link href="/contact#estimate-form" className="btn btn-estimate">
                Request a Free Estimate
              </Link>
              <Link href="/service-areas" className="btn btn-outline">
                Browse Service Areas
              </Link>
            </div>
            <p className="project-privacy-note">
              We publish city-level project details and photos while keeping exact
              addresses private.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>Recent Project Spotlights</h2>
              <p>
                Each post supports the related service page and city page with more
                specific, example-based content.
              </p>
            </header>
            <div className="grid services-grid">
              {projectPosts.map((project) => (
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

        <FeaturedLocationLinks
          title="Browse the Related City Pages"
          intro="Use these service-area pages to see the main local landing pages connected to the project posts."
          sectionClassName="section section-accent"
        />

        <CallBand source="projects-band" />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
