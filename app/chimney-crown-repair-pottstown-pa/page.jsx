import ServiceLandingPage from "../../components/ServiceLandingPage";
import { buildServiceLandingMetadata, serviceLandingPages } from "../../lib/serviceLandingPages";

const page = serviceLandingPages.crown;

export const metadata = buildServiceLandingMetadata(page);

export default function ChimneyCrownRepairPage() {
  return <ServiceLandingPage page={page} />;
}
