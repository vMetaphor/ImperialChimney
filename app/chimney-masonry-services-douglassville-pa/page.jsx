import { permanentRedirect } from "next/navigation";
import {
  getLocationServicePageBySlug,
  getLocationServicePath
} from "../../lib/locationPages";

const page = getLocationServicePageBySlug("chimney-masonry-services-douglassville-pa");

export default function LegacyDouglassvilleServiceAreaPage() {
  permanentRedirect(getLocationServicePath(page));
}
