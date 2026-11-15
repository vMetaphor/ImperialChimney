import ServiceLandingPage from "../../components/ServiceLandingPage";
import { buildServiceLandingMetadata, serviceLandingPages } from "../../lib/serviceLandingPages";

const page = serviceLandingPages.leak;

export const metadata = buildServiceLandingMetadata(page);

export default function ChimneyLeakRepairPage() {
  return <ServiceLandingPage page={page} />;
}
