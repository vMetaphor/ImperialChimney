import { featuredServicePages, siteConfig } from "../lib/seo";

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

  return [...staticPages, ...servicePages];
}
