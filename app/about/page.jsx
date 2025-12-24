import { aboutHtml } from "../../lib/pageHtml";

export const metadata = {
  title: "About Us",
  description:
    "Learn more about Imperial Chimney & Masonry, a local chimney sweep and masonry repair company based in Pottstown, PA 19464 and serving Montgomery, Chester, and Delaware County.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Imperial Chimney & Masonry",
    description:
      "Local, hands-on chimney and masonry service focused on safety, honesty, and clean workmanship.",
    url: "/about"
  }
};

export default function AboutPage() {
  const mainHtml = aboutHtml;

  return <main dangerouslySetInnerHTML={{ __html: mainHtml }} />;
}
