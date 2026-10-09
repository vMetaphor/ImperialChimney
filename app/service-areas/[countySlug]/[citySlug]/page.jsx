import { notFound } from "next/navigation";
import LocationServicesPage from "../../../../components/LocationServicesPage";
import {
  getLocationServicePageByPath,
  getLocationServicePath,
  locationServicePages
} from "../../../../lib/locationPages";
import { defaultKeywords } from "../../../../lib/seo";

export function generateStaticParams() {
  return locationServicePages.map((page) => ({
    countySlug: page.countySlug,
    citySlug: page.citySlug
  }));
}

export async function generateMetadata({ params }) {
  const { countySlug, citySlug } = await params;
  const page = getLocationServicePageByPath(countySlug, citySlug);

  if (!page) {
    return {};
  }

  const path = getLocationServicePath(page);

  return {
    title: page.title,
    description: page.metaDescription,
    keywords: [...defaultKeywords, ...page.keywords],
    alternates: {
      canonical: path
    },
    openGraph: {
      title: page.title,
      description: page.metaDescription,
      url: path
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.metaDescription
    }
  };
}

export default async function CityServiceAreaPage({ params }) {
  const { countySlug, citySlug } = await params;
  const page = getLocationServicePageByPath(countySlug, citySlug);

  if (!page) {
    notFound();
  }

  return <LocationServicesPage page={page} />;
}
