import { permanentRedirect } from "next/navigation";
import {
  getLocationServicePageBySlug,
  getLocationServicePath
} from "../../lib/locationPages";

const page = getLocationServicePageBySlug("chimney-masonry-services-limerick-pa");

export default function LegacyLimerickServiceAreaPage() {
  permanentRedirect(getLocationServicePath(page));
}
