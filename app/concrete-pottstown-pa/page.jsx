import ServiceLandingPage from "../../components/ServiceLandingPage";
import { buildServiceLandingMetadata, serviceLandingPages } from "../../lib/serviceLandingPages";

const page = serviceLandingPages.concrete;

export const metadata = buildServiceLandingMetadata(page);

export default function ConcretePage() {
  return <ServiceLandingPage page={page} />;
}
