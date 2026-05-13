import LocationServicesPage from "../../components/LocationServicesPage";
import { getLocationServicePageBySlug } from "../../lib/locationPages";
import { defaultKeywords } from "../../lib/seo";

const page = getLocationServicePageBySlug("chimney-masonry-services-norristown-pa");

export const metadata = {
  title: page.title,
  description: page.metaDescription,
  keywords: [...defaultKeywords, ...page.keywords],
  alternates: {
    canonical: `/${page.slug}`
  },
  openGraph: {
    title: page.title,
    description: page.metaDescription,
    url: `/${page.slug}`
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.metaDescription
  }
};

export default function NorristownServiceAreaPage() {
  return <LocationServicesPage page={page} />;
}
