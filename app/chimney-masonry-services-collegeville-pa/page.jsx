import { permanentRedirect } from "next/navigation";
import {
  getLocationServicePageBySlug,
  getLocationServicePath
} from "../../lib/locationPages";

const page = getLocationServicePageBySlug("chimney-masonry-services-collegeville-pa");

export default function LegacyCollegevilleServiceAreaPage() {
  permanentRedirect(getLocationServicePath(page));
}
