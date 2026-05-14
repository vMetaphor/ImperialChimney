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
    "Pressure washing",
    "Power washing",
    "Dryer vent cleaning",
    "Fireplace repairs"
  ]
};

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
  "chimney cleaning pottstown pa"
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
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
