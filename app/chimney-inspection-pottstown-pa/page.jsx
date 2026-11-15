import ServiceLandingPage from "../../components/ServiceLandingPage";
import { buildServiceLandingMetadata, serviceLandingPages } from "../../lib/serviceLandingPages";

const page = serviceLandingPages.inspection;

export const metadata = buildServiceLandingMetadata(page);

export default function ChimneyInspectionPage() {
  return <ServiceLandingPage page={page} />;
}
