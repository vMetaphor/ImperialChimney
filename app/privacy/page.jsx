import { privacyHtml } from "../../lib/pageHtml";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Read the privacy policy for Imperial Chimney & Masonry, covering how we collect, use, and protect your information.",
  alternates: {
    canonical: "/privacy"
  },
  openGraph: {
    title: "Privacy Policy",
    description:
      "Imperial Chimney & Masonry privacy policy for customers in Pottstown, PA and nearby towns.",
    url: "/privacy"
  }
};

export default function PrivacyPage() {
  const mainHtml = privacyHtml;
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
