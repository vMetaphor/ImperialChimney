import ServicesScripts from "../../components/ServicesScripts";
import { servicesHtml } from "../../lib/pageHtml";

export const metadata = {
  title: "Services",
  description:
    "Explore chimney sweeping, chimney repairs, relining, masonry services, pressure washing, and fireplace repairs from Imperial Chimney & Masonry in Pottstown, PA.",
  alternates: {
    canonical: "/services"
  },
  openGraph: {
    title: "Chimney & Masonry Services",
    description:
      "Chimney sweeping, repairs, relining, masonry services, pressure washing, and fireplace repairs in Pottstown, PA and nearby towns.",
    url: "/services"
  }
};

export default function ServicesPage() {
  const mainHtml = servicesHtml;

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <ServicesScripts />
    </>
  );
}
