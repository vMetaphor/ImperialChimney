import { aboutHtml } from "../../lib/pageHtml";

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

  return <main dangerouslySetInnerHTML={{ __html: mainHtml }} />;
}
