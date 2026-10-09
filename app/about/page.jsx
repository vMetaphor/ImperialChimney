import CallBand from "../../components/CallBand";
import SeoJsonLd from "../../components/SeoJsonLd";
import { aboutHtml } from "../../lib/pageHtml";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "../../lib/seo";

export const metadata = {
  title: "About Imperial Chimney & Masonry | Chimney & Masonry Company in Pottstown, PA",
  description:
    "Learn more about Imperial Chimney & Masonry, a local chimney sweep, chimney repair, stucco repair, and masonry company based in Pottstown, PA and serving Norristown, Collegeville, Limerick, Douglassville, and nearby towns.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Imperial Chimney & Masonry",
    description:
      "Local, hands-on chimney and masonry service focused on safety, honesty, and clean workmanship across Pottstown and nearby towns.",
    url: "/about"
  }
};

export default function AboutPage() {
  const mainHtml = aboutHtml;
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/about",
      description:
        "Imperial Chimney & Masonry is a local chimney sweep, chimney repair, stucco repair, and masonry company based in Pottstown, PA."
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "About", path: "/about" }
    ])
  ];

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <CallBand
        title="Want to talk to the person doing the work?"
        intro="We're a small local crew, so the number below reaches us directly - not a dispatcher."
        source="about-band"
      />
      <SeoJsonLd data={jsonLd} />
    </>
  );
}
