import Script from "next/script";
import FaqSection from "../components/FaqSection";
import FeaturedLocationLinks from "../components/FeaturedLocationLinks";
import FeaturedProjectLinks from "../components/FeaturedProjectLinks";
import FeaturedServiceLinks from "../components/FeaturedServiceLinks";
import HomeScripts from "../components/HomeScripts";
import SeoJsonLd from "../components/SeoJsonLd";
import { homeHtml } from "../lib/pageHtml";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  defaultKeywords
} from "../lib/seo";

export const metadata = {
  title:
    "Chimney Sweep, Chimney Repair & Stucco Repair in Pottstown, PA",
  description:
    "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing across nearby Montgomery, Chester, and Berks County communities.",
  keywords: defaultKeywords,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title:
      "Chimney Sweep, Chimney Repair & Stucco Repair in Pottstown, PA",
    description:
      "Chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing across nearby Montgomery, Chester, and Berks County communities.",
    url: "/"
  },
  twitter: {
    card: "summary_large_image",
    title: "Chimney Sweep, Chimney Repair & Stucco Repair in Pottstown, PA",
    description:
      "Local chimney sweeping, chimney repairs, stucco repair, masonry repair, and pressure washing across nearby Montgomery, Chester, and Berks County communities."
  }
};

export default function HomePage() {
  const mainHtml = homeHtml;
  const homeFaqs = [
    {
      question: "How often should a chimney be swept?",
      answer:
        "For most active fireplaces, stoves, and inserts, an annual chimney sweep and inspection is the safest starting point. Heavier use, creosote buildup, or draft issues can justify more frequent service."
    },
    {
      question: "What signs mean I may need chimney repair?",
      answer:
        "Leaks, ceiling stains, crumbling mortar, cracked crowns, white staining on the brick, missing caps, loose bricks, smoke problems, and strong chimney odors are all signs that a repair visit is worth scheduling."
    },
    {
      question: "Do you repair cracked chimney stucco?",
      answer:
        "Yes. We repair cracked or deteriorated chimney stucco, address the masonry damage underneath when needed, and apply protective finishes that help the chimney shed water more effectively."
    },
    {
      question: "Can you repair brick, block, and stone around a chimney or foundation?",
      answer:
        "Yes. We handle masonry repair for chimneys, walls, foundations, and other exterior surfaces, including brick repair, block repair, repointing, and related stucco or parging work."
    },
    {
      question: "Do you offer pressure washing and power washing?",
      answer:
        "Yes. We provide pressure washing for masonry, patios, walkways, driveways, stoops, and other hard exterior surfaces, including prep cleaning before repairs or waterproofing."
    }
  ];
  const jsonLd = [
    buildLocalBusinessSchema({
      pagePath: "/",
      description:
        "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing across nearby Montgomery, Chester, and Berks County communities."
    }),
    buildFaqSchema(homeFaqs)
  ];

  return (
    <>
      <main dangerouslySetInnerHTML={{ __html: mainHtml }} />
      <FeaturedLocationLinks
        title="Areas We Serve"
        intro="Pick your town to see the chimney and masonry work we do in your area."
        sectionClassName="section"
        limit={9}
        showAllLink
      />
      <FeaturedProjectLinks
        title="Recent Project Spotlights"
        intro="These project posts give homeowners a more specific look at the kinds of repairs and cleanup work we handle across nearby service areas."
        limit={3}
        sectionClassName="section section-accent"
      />
      <FeaturedServiceLinks
        title="Popular Chimney & Masonry Services"
        intro="Choose a service to learn more about the repair, cleaning, or exterior work you need."
        sectionClassName="section"
      />
      <FaqSection
        title="Questions Homeowners Ask Before Calling"
        intro="These answers cover some of the most common questions we hear from local homeowners."
        items={homeFaqs}
        sectionClassName="section section-accent"
      />
      <SeoJsonLd data={jsonLd} />
      <Script
        src="https://www.thumbtack.com/profile/widgets/scripts/?service_pk=516496843184193544&widget_id=review&type=star"
        strategy="afterInteractive"
      />
      <HomeScripts />
    </>
  );
}
