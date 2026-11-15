import ServiceLandingPage from "../../components/ServiceLandingPage";
import { buildServiceLandingMetadata, serviceLandingPages } from "../../lib/serviceLandingPages";

const page = serviceLandingPages.fireplace;

export const metadata = buildServiceLandingMetadata(page);

export default function FireplaceRepairPage() {
  return <ServiceLandingPage page={page} />;
}
