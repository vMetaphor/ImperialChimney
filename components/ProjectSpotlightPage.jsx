import Link from "next/link";
import CallBand from "./CallBand";
import FaqSection from "./FaqSection";
import FeaturedProjectLinks from "./FeaturedProjectLinks";
import SeoJsonLd from "./SeoJsonLd";
import {
  getLocationServicePageByPath,
  getLocationServicePath
} from "../lib/locationPages";
import { getProjectPath } from "../lib/projects";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  siteConfig,
  telHref
} from "../lib/seo";

function formatPublishedDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  });
}

export default function ProjectSpotlightPage({ project }) {
  const locationPage = getLocationServicePageByPath(project.countySlug, project.citySlug);
  const locationHref = locationPage ? getLocationServicePath(locationPage) : "/service-areas";
  const publishedLabel = formatPublishedDate(project.publishedAt);
  const pagePath = getProjectPath(project);
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath,
      description: project.metaDescription
    }),
    buildArticleSchema({
      pagePath,
      headline: project.title,
      description: project.metaDescription,
      image: project.heroImage.src,
      datePublished: project.publishedAt,
      keywords: project.keywords
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
      { name: project.title, path: pagePath }
    ]),
    buildFaqSchema(project.faqs)
  ];

  return (
    <>
      <main>
        <section className="page-hero">
          <div className="container">
            <p className="eyebrow">{project.city}, PA Project Spotlight</p>
            <h1>{project.title}</h1>
            <p>{project.heroIntro}</p>
            <div className="hero-actions">
              <a href={telHref} className="btn btn-call" data-call-cta="project-hero">
                Call {siteConfig.phoneDisplay}
              </a>
              <Link href="/contact#estimate-form" className="btn btn-estimate">
                Request a Similar Estimate
              </Link>
            </div>
            <div className="page-hero-links">
              <Link href={project.serviceHref}>View {project.serviceLabel}</Link>
              <Link href="/projects">Browse all project posts</Link>
              <Link href={locationHref}>More in {project.city}, PA</Link>
            </div>
            <p className="project-privacy-note">
              Published {publishedLabel}. For homeowner privacy, we share the city and job scope
              rather than the exact street address.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <h2>What this project focused on</h2>
              <p>{project.excerpt}</p>
              <ul className="check-list">
                {project.issues.map((issue) => (
                  <li key={issue}>{issue}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">Location</span>
                  <span className="stat-label">
                    {project.city}, {project.region}
                  </span>
                </div>
                <div className="stat">
                  <span className="stat-number">Main service</span>
                  <span className="stat-label">{project.serviceLabel}</span>
                </div>
                <div className="stat">
                  <span className="stat-number">Result</span>
                  <span className="stat-label">{project.resultSummary}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-accent">
          <div className="container">
            <header className="section-header">
              <h2>Project Photos</h2>
              <p>
                Before-and-after style visuals help future homeowners understand the kind of issue
                this project was meant to solve.
              </p>
            </header>
            <div className="project-gallery">
              {project.gallery.map((image) => (
                <figure className="project-gallery-item" key={image.src}>
                  <div className="project-gallery-label">{image.label}</div>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container two-col">
            <div>
              <h2>Work completed</h2>
              <ul className="check-list">
                {project.workCompleted.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="card project-summary-card">
                <h3>{project.localRelevanceTitle}</h3>
                <p>{project.localRelevanceCopy}</p>
              </div>
              <div className="card project-summary-card">
                <h3>Looking for the service page?</h3>
                <p>
                  This project connects back to our main {project.serviceLabel.toLowerCase()} page
                  and the local service-area page for {project.city}.
                </p>
                <div className="project-link-list">
                  <Link href={project.serviceHref}>View {project.serviceLabel}</Link>
                  <Link href={locationHref}>View {project.city}, PA service area</Link>
                  <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`}>
                    Call {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FeaturedProjectLinks
          title={`More Project Spotlights Near ${project.city}`}
          intro="These project posts help support the related city and service pages with more specific examples of the work homeowners request."
          filterRegion={project.region}
          excludeSlug={project.slug}
          sectionClassName="section section-accent"
        />

        <FaqSection
          title={`${project.city} Project Questions`}
          intro={`Short answers about the type of work highlighted in this ${project.city} project post.`}
          items={project.faqs}
        />

        <CallBand
          title={`Have a similar job in ${project.city}?`}
          intro="Describe what you are dealing with and we will tell you what the repair involves and what it costs."
          source="project-band"
        />
      </main>
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
