import ServiceLandingPage from "../../components/ServiceLandingPage";
import { buildServiceLandingMetadata, serviceLandingPages } from "../../lib/serviceLandingPages";

const page = serviceLandingPages.liner;

export const metadata = buildServiceLandingMetadata(page);

export default function ChimneyLinerPage() {
  return <ServiceLandingPage page={page} />;
}
