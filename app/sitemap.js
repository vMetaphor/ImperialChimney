import { getLocationServicePath, locationServicePages } from "../lib/locationPages";
import { getProjectPath, projectPosts } from "../lib/projects";
import { absoluteUrl, featuredServicePages } from "../lib/seo";
import { getServiceAreaGroupPath, serviceAreaGroups } from "../lib/serviceAreas";

// Priority ranks the pages we most want crawled and re-crawled: the money
// pages (home, the five service pages) sit above the county/city pages, which
// sit above supporting content like /about and the legal pages.
//
// lastModified is only sent when it is a real date (project posts). Stamping
// every page with the build time told Google all 49 pages changed on every
// deploy, and Google stops trusting a sitemap's lastmod once it sees that.
function createSitemapEntry(path, { priority, changeFrequency, lastModified, images }) {
  return {
    url: absoluteUrl(path),
    ...(lastModified ? { lastModified } : {}),
    changeFrequency,
    priority,
    ...(images?.length ? { images } : {})
  };
}

// Unique absolute URLs of a project's photos, for the image sitemap.
function projectImages(project) {
  const sources = [project.heroImage?.src, ...(project.gallery || []).map((photo) => photo.src)];
  return [...new Set(sources.filter(Boolean))].map((src) => absoluteUrl(src));
}

export default function sitemap() {
  // Keep the sitemap focused on canonical pages we want indexed.
  const entries = [
    createSitemapEntry("/", { priority: 1.0, changeFrequency: "weekly" }),
    createSitemapEntry("/contact", { priority: 0.9, changeFrequency: "monthly" }),
    createSitemapEntry("/services", { priority: 0.9, changeFrequency: "monthly" }),
    createSitemapEntry("/service-areas", { priority: 0.8, changeFrequency: "monthly" }),
    createSitemapEntry("/projects", { priority: 0.7, changeFrequency: "weekly" }),
    createSitemapEntry("/about", { priority: 0.5, changeFrequency: "yearly" }),

    // The five service pages are the primary search targets.
    ...featuredServicePages.map((page) =>
      createSitemapEntry(page.href, { priority: 0.9, changeFrequency: "monthly" })
    ),

    ...serviceAreaGroups.map((group) =>
      createSitemapEntry(getServiceAreaGroupPath(group), {
        priority: 0.7,
        changeFrequency: "monthly"
      })
    ),

    ...locationServicePages.map((page) =>
      createSitemapEntry(getLocationServicePath(page), {
        priority: 0.7,
        changeFrequency: "monthly"
      })
    ),

    // Project posts carry their real publish date so Google can see freshness.
    ...projectPosts.map((project) =>
      createSitemapEntry(getProjectPath(project), {
        priority: 0.6,
        changeFrequency: "yearly",
        lastModified: new Date(`${project.publishedAt}T00:00:00Z`),
        images: projectImages(project)
      })
    )
  ];

  // Guard against a path being listed twice; the first entry wins.
  const seen = new Set();
  return entries.filter((entry) => {
    if (seen.has(entry.url)) return false;
    seen.add(entry.url);
    return true;
  });
}
