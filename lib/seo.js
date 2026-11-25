export const siteConfig = {
  name: "Imperial Chimney & Masonry",
  url: "https://imperialchimney-masonry.com",
  phone: "+1-484-447-1414",
  phoneDisplay: "484-447-1414",
  email: "info@imperialchimney-masonry.com",
  image: "https://imperialchimney-masonry.com/assets/img/logo.png",
  address: {
    streetAddress: "864 Queen Street",
    addressLocality: "Pottstown",
    addressRegion: "PA",
    postalCode: "19464",
    addressCountry: "US"
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61573033617875",
    "https://www.thumbtack.com/pa/pottstown/masonry-contractors/imperial-chimney-masonry/service/516496843184193544"
  ],
  serviceAreas: [
    "Pottstown, PA 19464",
    "Norristown, PA",
    "Sanatoga, PA 19464",
    "Stowe, PA",
    "Gilbertsville, PA 19525",
    "Boyertown, PA 19512",
    "Douglassville, PA 19518",
    "Phoenixville, PA 19460",
    "Downingtown, PA 19335",
    "Collegeville, PA 19426",
    "Royersford, PA 19468",
    "Limerick, PA 19468",
    "Spring City, PA 19475",
    "Birdsboro, PA 19508",
    "Reading, PA",
    "Wyomissing, PA 19610",
    "Trappe, PA 19426",
    "Schwenksville, PA 19473",
    "Bechtelsville, PA 19505",
    "Bally, PA 19503",
    "Oley, PA 19547",
    "Sinking Spring, PA 19608",
    "Kimberton, PA 19442",
    "Chester Springs, PA 19425",
    "Exton, PA 19341",
    "Malvern, PA 19355",
    "Montgomery County, PA",
    "Chester County, PA",
    "Berks County, PA"
  ],
  coreServices: [
    "Chimney sweeping",
    "Chimney cleaning",
    "Chimney inspections",
    "Chimney repair",
    "Chimney leak repair",
    "Chimney stucco repair",
    "Masonry repair",
    "Brick repair",
    "Block repair",
    "Stucco repair",
    "Repointing",
    "Concrete work",
    "Concrete repair",
    "Pressure washing",
    "Power washing",
    "Dryer vent cleaning",
    "Fireplace repairs"
  ],
  // Rough price band only - Google uses this for the local panel, it is not a quote.
  priceRange: "$$",
  // Fill these in from your Google Business Profile listing. Leave `geo` null
  // until you have the real pin, and leave `rating` null until you have the
  // real numbers - invented values here are a manual-action risk.
  geo: null, // e.g. { latitude: 40.2459, longitude: -75.6397 }
  rating: null, // e.g. { value: 4.9, count: 103 }
  // Shows the "Text us a photo" links (components/TextPhotoLink.jsx). Set to
  // false if the business number ever stops receiving texts.
  textEnabled: true
};

/**
 * Spread first into every page's `openGraph`. Next.js replaces (does not merge) a parent
 * layout's openGraph when a page sets its own, so without this every page except the home
 * page lost the share image, site name and locale. Page fields after the spread still win,
 * so project posts keep their own photo.
 */
export const sharedOpenGraph = {
  type: "website",
  siteName: siteConfig.name,
  locale: "en_US",
  images: [
    {
      url: "/assets/img/og-default.jpg",
      width: 1200,
      height: 630,
      alt: "Imperial Chimney & Masonry - chimney and masonry repair in Pottstown, PA"
    }
  ]
};

/** `tel:` href for every call CTA on the site, derived from the one phone number. */
export const telHref = `tel:${siteConfig.phone.replace(/\D/g, "")}`;

/** `sms:` href for the "Text us a photo" links, same number as calls. */
export const smsHref = `sms:${siteConfig.phone.replace(/\D/g, "")}`;

export const defaultKeywords = [
  "chimney sweep pottstown pa",
  "chimney repair pottstown pa",
  "chimney stucco repair pottstown pa",
  "masonry repair pottstown pa",
  "brick repair pottstown pa",
  "block repair pottstown pa",
  "stucco repair pottstown pa",
  "pressure washing pottstown pa",
  "power washing pottstown pa",
  "chimney cleaning pottstown pa",
  "chimney repointing pottstown pa",
  "masonry repointing pottstown pa",
  "brick repointing pottstown pa",
  "tuckpointing pottstown pa"
];

export const featuredServicePages = [
  {
    href: "/chimney-sweep-pottstown-pa",
    genericHref: "/services#sweep",
    title: "Chimney Sweep in Pottstown, PA",
    genericTitle: "Chimney Sweep & Cleaning",
    description:
      "Chimney sweeping, chimney cleaning, and fireplace inspections for homeowners in Pottstown and nearby towns.",
    genericDescription:
      "Chimney sweeping, chimney cleaning, and fireplace inspections for homeowners across our nearby service areas."
  },
  {
    href: "/chimney-repair-pottstown-pa",
    genericHref: "/services#repair",
    title: "Chimney Repair in Pottstown, PA",
    genericTitle: "Chimney Repair",
    description:
      "Leak repair, crown repair, flashing repair, rebuilding, and other chimney repairs for local homes.",
    genericDescription:
      "Leak repair, crown repair, flashing repair, rebuilding, and other chimney repairs for homes across our service area."
  },
  {
    href: "/chimney-stucco-repair-pottstown-pa",
    genericHref: "/services#repair",
    title: "Chimney Stucco Repair in Pottstown, PA",
    genericTitle: "Chimney Stucco Repair",
    description:
      "Repair cracked chimney stucco, parging, and weather damage to protect the masonry underneath.",
    genericDescription:
      "Repair cracked chimney stucco, parging, and weather damage to protect the masonry underneath."
  },
  {
    href: "/masonry-repair-pottstown-pa",
    genericHref: "/services#masonry",
    title: "Brick, Block & Stucco Repair in Pottstown, PA",
    genericTitle: "Brick, Block & Stucco Repair",
    description:
      "Brick repair, block repair, stucco repair, repointing, and masonry restoration for chimneys, walls, and foundations.",
    genericDescription:
      "Brick repair, block repair, stucco repair, repointing, and masonry restoration for chimneys, walls, and foundations."
  },
  {
    href: "/repointing-pottstown-pa",
    genericHref: "/services#repoint",
    title: "Chimney & Masonry Repointing in Pottstown, PA",
    genericTitle: "Chimney & Masonry Repointing",
    description:
      "Grind out failing mortar joints and repack them with matched mortar on chimneys, brick walls, stone, and foundations.",
    genericDescription:
      "Grind out failing mortar joints and repack them with matched mortar on chimneys, brick walls, stone, and foundations."
  },
  {
    href: "/chimney-leak-repair-pottstown-pa",
    genericHref: "/services#repair",
    title: "Chimney Leak Repair in Pottstown, PA",
    genericTitle: "Chimney Leak Repair",
    description:
      "Find where water is getting in - crown, cap, flashing, or masonry - and fix the source, not just the stain.",
    genericDescription:
      "Find where water is getting in - crown, cap, flashing, or masonry - and fix the source, not just the stain."
  },
  {
    href: "/chimney-inspection-pottstown-pa",
    genericHref: "/services#sweep",
    title: "Chimney Inspection in Pottstown, PA",
    genericTitle: "Chimney Inspections",
    description:
      "Annual safety checks and Level 2 camera inspections for home sales, leaks, and new appliances, with a photo report.",
    genericDescription:
      "Annual safety checks and Level 2 camera inspections for home sales, leaks, and new appliances, with a photo report."
  },
  {
    href: "/chimney-crown-repair-pottstown-pa",
    genericHref: "/services#repair",
    title: "Chimney Crown Repair & Caps in Pottstown, PA",
    genericTitle: "Chimney Crowns & Caps",
    description:
      "Crown crack repair, resurfacing, and replacement, plus stainless steel chimney caps sized to your flue.",
    genericDescription:
      "Crown crack repair, resurfacing, and replacement, plus stainless steel chimney caps sized to your flue."
  },
  {
    href: "/chimney-liner-installation-pottstown-pa",
    genericHref: "/services#reline",
    title: "Chimney Liner Installation in Pottstown, PA",
    genericTitle: "Chimney Relining",
    description:
      "Stainless steel liners and FireGuard ceramic resurfacing for cracked, unlined, or wrongly sized flues.",
    genericDescription:
      "Stainless steel liners and FireGuard ceramic resurfacing for cracked, unlined, or wrongly sized flues."
  },
  {
    href: "/fireplace-repair-pottstown-pa",
    genericHref: "/services#fireplace",
    title: "Fireplace Repair in Pottstown, PA",
    genericTitle: "Fireplace Repair",
    description:
      "Firebox repair, gas fireplace pilot and ignition repair, gas log tune-ups, and smoke or draft problems.",
    genericDescription:
      "Firebox repair, gas fireplace pilot and ignition repair, gas log tune-ups, and smoke or draft problems."
  },
  {
    href: "/concrete-pottstown-pa",
    genericHref: "/services#concrete",
    title: "Concrete Work in Pottstown, PA",
    genericTitle: "Concrete Work",
    description:
      "New sidewalks, walkways, patios, slabs, and steps, plus crack repair, patching, and resurfacing.",
    genericDescription:
      "New sidewalks, walkways, patios, slabs, and steps, plus crack repair, patching, and resurfacing."
  },
  {
    href: "/pressure-washing-pottstown-pa",
    genericHref: "/services#wash",
    title: "Pressure Washing in Pottstown, PA",
    genericTitle: "Pressure Washing",
    description:
      "Pressure washing and power washing for masonry, patios, walkways, driveways, and other exterior surfaces.",
    genericDescription:
      "Pressure washing and power washing for masonry, patios, walkways, driveways, and other exterior surfaces."
  }
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function buildLocalBusinessSchema({ pagePath = "/", description, services } = {}) {
  const resolvedServices = services?.length ? services : siteConfig.coreServices;

  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "ChimneySweep"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    mainEntityOfPage: absoluteUrl(pagePath),
    image: siteConfig.image,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        opens: "07:00",
        closes: "17:00"
      }
    ],
    areaServed: siteConfig.serviceAreas.map((name) => ({
      "@type": "Place",
      name
    })),
    sameAs: siteConfig.sameAs,
    description,
    priceRange: siteConfig.priceRange,
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Check, Credit Card",
    // Both are omitted from the JSON-LD until real values are set in siteConfig.
    geo: siteConfig.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude
        }
      : undefined,
    aggregateRating: siteConfig.rating
      ? {
          "@type": "AggregateRating",
          ratingValue: siteConfig.rating.value,
          reviewCount: siteConfig.rating.count
        }
      : undefined,
    knowsAbout: resolvedServices,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Chimney, masonry, and exterior cleaning services",
      itemListElement: resolvedServices.map((serviceName) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: serviceName
        }
      }))
    }
  };
}

export function buildServiceSchema({
  pagePath,
  name,
  description,
  serviceType,
  serviceOutput
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: serviceType || name,
    description,
    url: absoluteUrl(pagePath),
    areaServed: siteConfig.serviceAreas.map((areaName) => ({
      "@type": "Place",
      name: areaName
    })),
    provider: {
      "@id": `${siteConfig.url}/#business`
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        areaServed: "US"
      }
    },
    serviceOutput
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function buildFaqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function buildArticleSchema({
  pagePath,
  headline,
  description,
  image,
  datePublished,
  keywords = []
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: absoluteUrl(pagePath),
    headline,
    description,
    image: image ? [absoluteUrl(image)] : undefined,
    datePublished,
    dateModified: datePublished,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.image
      }
    },
    keywords
  };
}
