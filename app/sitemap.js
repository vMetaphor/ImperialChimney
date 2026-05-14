import { getLocationServicePath, locationServicePages } from "../lib/locationPages";
import { featuredServicePages, siteConfig } from "../lib/seo";
import { getServiceAreaGroupPath, serviceAreaGroups } from "../lib/serviceAreas";

export default function sitemap() {
  const lastModified = new Date();

  const staticPages = [
    { url: `${siteConfig.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${siteConfig.url}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95
    },
    {
      url: `${siteConfig.url}/service-areas`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteConfig.url}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteConfig.url}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteConfig.url}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteConfig.url}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];

  const servicePages = featuredServicePages.map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  const countyPages = serviceAreaGroups.map((group) => ({
    url: `${siteConfig.url}${getServiceAreaGroupPath(group)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.82
  }));

  const locationPages = locationServicePages.map((page) => ({
    url: `${siteConfig.url}${getLocationServicePath(page)}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8
  }));

  return [...staticPages, ...servicePages, ...countyPages, ...locationPages];
}
