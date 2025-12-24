import Script from "next/script";
import HomeScripts from "../components/HomeScripts";
import { homeHtml } from "../lib/pageHtml";

export const metadata = {
  title: "Imperial Chimney & Masonry | Chimney Sweep & Masonry Repair in Pottstown, PA",
  description:
    "Imperial Chimney & Masonry provides chimney sweeping, chimney cleaning, fireplace repairs, chimney relining, and masonry repairs for homeowners in Pottstown, PA 19464 and nearby towns like Royersford, Limerick, Collegeville, Phoenixville, and Reading.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Imperial Chimney & Masonry | Chimney Sweep & Masonry Repair in Pottstown, PA",
    description:
      "Imperial Chimney & Masonry provides chimney sweeping, chimney cleaning, fireplace repairs, chimney relining, and masonry repairs for homeowners in Pottstown, PA 19464 and nearby towns.",
    url: "/"
  }
};

export default function HomePage() {
  const mainHtml = homeHtml;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ChimneySweep",
    name: "Imperial Chimney & Masonry",
    url: "https://imperialchimney-masonry.com",
    telephone: "+1-484-447-1414",
    image: "https://imperialchimney-masonry.com/assets/img/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "864 Queen Street",
      addressLocality: "Pottstown",
      addressRegion: "PA",
      postalCode: "19464",
      addressCountry: "US"
    },
    areaServed: [
      "Pottstown PA",
      "19464",
      "Montgomery County PA",
      "Chester County PA",
      "Delaware County PA",
      "Royersford PA",
      "Limerick PA",
      "Collegeville PA",
      "Phoenixville PA",
      "Reading PA"
    ]
  };

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        src="https://www.thumbtack.com/profile/widgets/scripts/?service_pk=516496843184193544&widget_id=review&type=star"
        strategy="afterInteractive"
      />
      <HomeScripts />
    </>
  );
}
