import { permanentRedirect } from "next/navigation";
import {
  getLocationServicePageBySlug,
  getLocationServicePath
} from "../../lib/locationPages";

const page = getLocationServicePageBySlug("chimney-masonry-services-norristown-pa");

export default function LegacyNorristownServiceAreaPage() {
  permanentRedirect(getLocationServicePath(page));
}
