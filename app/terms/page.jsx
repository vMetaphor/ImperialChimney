import { loadMainHtml } from "../../lib/loadMainHtml";

export const metadata = {
  title: "Terms of Service",
  description:
    "Review the terms of service for Imperial Chimney & Masonry, including service policies and customer responsibilities.",
  alternates: {
    canonical: "/terms"
  },
  openGraph: {
    title: "Terms of Service",
    description:
      "Imperial Chimney & Masonry terms of service for customers in Pottstown, PA and nearby towns.",
    url: "/terms"
  }
};

export default function TermsPage() {
  const mainHtml = loadMainHtml("terms.html");
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
    </>
  );
}
