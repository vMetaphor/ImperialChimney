import { getLocationServicePath, locationServicePages } from "../lib/locationPages";
import { absoluteUrl, featuredServicePages } from "../lib/seo";
import { getServiceAreaGroupPath, serviceAreaGroups } from "../lib/serviceAreas";

function createSitemapEntry(path) {
  return {
    url: absoluteUrl(path)
  };
}

export default function sitemap() {
  // Keep the sitemap focused on canonical pages we want indexed.
  const staticPaths = ["/", "/services", "/service-areas", "/about", "/contact"];
  const servicePaths = featuredServicePages.map((page) => page.href);
  const countyPaths = serviceAreaGroups.map((group) => getServiceAreaGroupPath(group));
  const locationPaths = locationServicePages.map((page) => getLocationServicePath(page));

  const uniquePaths = Array.from(
    new Set([...staticPaths, ...servicePaths, ...countyPaths, ...locationPaths])
  );

  return uniquePaths.map(createSitemapEntry);
}
