function formatTownList(towns) {
  if (towns.length === 0) {
    return "";
  }

  if (towns.length === 1) {
    return towns[0];
  }

  if (towns.length === 2) {
    return `${towns[0]} and ${towns[1]}`;
  }

  return `${towns.slice(0, -1).join(", ")}, and ${towns[towns.length - 1]}`;
}

function createLocationServicePage({
  city,
  citySlug,
  countySlug,
  region,
  nearbyCommunities,
  localFocus = []
}) {
  const countyLabel = region.replace(", PA", "");
  const keywordBase = city.toLowerCase();
  const nearbyList = formatTownList(nearbyCommunities);

  return {
    slug: `chimney-masonry-services-${citySlug}`,
    countySlug,
    citySlug,
    city,
    region,
    title: `Chimney, Stucco & Masonry Services in ${city}, PA`,
    shortTitle: `${city}, PA`,
    metaDescription:
      `Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in ${city}, PA.`,
    cardDescription:
      `Chimney sweeping, chimney repairs, stucco repair, masonry restoration, and pressure washing for homes in ${city}.`,
    heroIntro:
      `Chimney sweeping, chimney repair, stucco repair, brick and block repair, and pressure washing for homeowners in ${city} and nearby ${countyLabel} communities.`,
    overviewTitle: `Chimney and masonry services for ${city} homeowners`,
    overviewParagraphs: [
      `${city} homeowners call us for chimney sweeping, chimney leak repair, stucco patching, masonry restoration, and pressure washing when fireplaces, chimneys, or exterior surfaces start showing wear.`,
      "If you are dealing with water stains, smoky draft issues, cracked chimney stucco, failing mortar joints, or stained patios and walkways, we can inspect the condition and recommend the right repair or cleaning work for your home."
    ],
    localFocus,
    serviceHighlights: [
      {
        title: "Chimney sweeping and chimney inspections",
        description:
          `Annual chimney cleaning, creosote removal, and fireplace inspections for active chimneys, fireplaces, and stove systems in ${city}.`
      },
      {
        title: "Chimney repair and stucco repair",
        description:
          "Repair chimney leaks, cracked crowns, flashing problems, failing stucco, parging, and other exposed masonry issues before water damage spreads."
      },
      {
        title: "Masonry repair and pressure washing",
        description:
          "Brick repair, block repair, mortar joint restoration, and exterior cleaning for patios, walkways, driveways, and other hard outdoor surfaces."
      }
    ],
    stats: [
      {
        title: `Common calls in ${city}`,
        description:
          "Chimney sweeping, leak diagnosis, stucco repair, mortar repair, and cleanup of stained exterior masonry and concrete."
      },
      {
        title: "When to schedule service",
        description:
          "Before heating season, after a storm or leak, after a home inspection, or when masonry starts cracking or separating."
      },
      {
        title: "Nearby coverage",
        description:
          `We also help homeowners in ${nearbyList} and surrounding parts of ${countyLabel}.`
      }
    ],
    keywords: [
      `chimney sweep ${keywordBase} pa`,
      `chimney repair ${keywordBase} pa`,
      `chimney stucco repair ${keywordBase} pa`,
      `masonry repair ${keywordBase} pa`,
      `pressure washing ${keywordBase} pa`
    ],
    faqs: [
      {
        question: `Do you provide chimney sweeping in ${city}, PA?`,
        answer:
          `Yes. We provide chimney sweeping, chimney cleaning, and chimney inspections for homeowners in ${city} and nearby ${countyLabel} communities.`
      },
      {
        question: `Can you repair leaking or damaged chimneys in ${city}?`,
        answer:
          `Yes. We handle chimney repair, chimney stucco repair, crown repair, flashing repair, and related masonry issues affecting chimneys in ${city}.`
      },
      {
        question: `Do you repair brick, block, and mortar in ${city}?`,
        answer:
          "Yes. We repair brick, block, mortar joints, and other masonry surfaces around chimneys, walls, and foundations."
      },
      {
        question: `Do you offer pressure washing in ${city}?`,
        answer:
          "Yes. We provide pressure washing and exterior cleaning for masonry, patios, walkways, driveways, and similar hard outdoor surfaces."
      }
    ]
  };
}

const generatedLocationServicePages = [
  createLocationServicePage({
    city: "Stowe",
    citySlug: "stowe-pa",
    countySlug: "montgomery-county",
    region: "Montgomery County, PA",
    nearbyCommunities: ["Pottstown", "Gilbertsville", "Boyertown"],
    localFocus: [
      "Older brick and stucco chimney exteriors near Pottstown that need seasonal leak checks.",
      "Small masonry and pressure washing projects on patios, walks, and hardscaping around compact lots."
    ]
  }),
  createLocationServicePage({
    city: "Gilbertsville",
    citySlug: "gilbertsville-pa",
    countySlug: "montgomery-county",
    region: "Montgomery County, PA",
    nearbyCommunities: ["Stowe", "Pottstown", "Boyertown"],
    localFocus: [
      "Chimney crowns, caps, and mortar joints exposed on open residential lots.",
      "Pre-season fireplace cleanings for homes using wood-burning fireplaces or inserts."
    ]
  }),
  createLocationServicePage({
    city: "Boyertown",
    citySlug: "boyertown-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    nearbyCommunities: ["Gilbertsville", "Stowe", "Douglassville"],
    localFocus: [
      "Brick, stone, and stucco surfaces on older Berks County homes.",
      "Chimney leak repair and repointing after repeated freeze-thaw exposure."
    ]
  }),
  createLocationServicePage({
    city: "Phoenixville",
    citySlug: "phoenixville-pa",
    countySlug: "chester-county",
    region: "Chester County, PA",
    nearbyCommunities: ["Spring City", "Downingtown", "Collegeville"],
    localFocus: [
      "Exterior masonry cleanup and pressure washing on shaded walks, patios, and walls.",
      "Chimney repairs on older homes where flashing, crowns, or masonry joints are starting to fail."
    ]
  }),
  createLocationServicePage({
    city: "Spring City",
    citySlug: "spring-city-pa",
    countySlug: "chester-county",
    region: "Chester County, PA",
    nearbyCommunities: ["Phoenixville", "Royersford", "Pottstown"],
    localFocus: [
      "Chimney maintenance for homes near the Schuylkill River corridor where moisture exposure matters.",
      "Brick, block, and stucco repairs for weathered exterior surfaces."
    ]
  }),
  createLocationServicePage({
    city: "Downingtown",
    citySlug: "downingtown-pa",
    countySlug: "chester-county",
    region: "Chester County, PA",
    nearbyCommunities: ["Phoenixville", "Chester Springs", "Exton"],
    localFocus: [
      "Chimney inspections before fireplace season and after home inspection repair lists.",
      "Masonry and stucco repairs for homes with weathered exterior finishes."
    ]
  }),
  createLocationServicePage({
    city: "Birdsboro",
    citySlug: "birdsboro-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    nearbyCommunities: ["Douglassville", "Reading", "Boyertown"],
    localFocus: [
      "Masonry restoration and chimney repairs on older brick and stone homes.",
      "Pressure washing for exterior masonry, walks, and hard surfaces with surface staining."
    ]
  }),
  createLocationServicePage({
    city: "Reading",
    citySlug: "reading-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    nearbyCommunities: ["Wyomissing", "Birdsboro", "Douglassville"],
    localFocus: [
      "Chimney sweeping and repair for older fireplaces, stove systems, and masonry stacks.",
      "Brick, block, and mortar repair where age and weather have opened up joints."
    ]
  }),
  createLocationServicePage({
    city: "Wyomissing",
    citySlug: "wyomissing-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    nearbyCommunities: ["Reading", "Birdsboro", "Shillington"],
    localFocus: [
      "Preventive chimney maintenance, caps, crowns, and water-shedding repairs.",
      "Exterior cleaning for masonry, patios, walks, and driveway sections."
    ]
  }),

  // The `localFocus` notes below are deliberately specific to each town. The
  // rest of the page copy comes from the shared generator, so these bullets are
  // what keep near-identical town pages from reading as doorway pages.
  createLocationServicePage({
    city: "Sanatoga",
    citySlug: "sanatoga-pa",
    countySlug: "montgomery-county",
    region: "Montgomery County, PA",
    nearbyCommunities: ["Pottstown", "Stowe", "Limerick"],
    localFocus: [
      "Post-war brick ranch and split-level chimneys that most often need crown and cap work.",
      "Driveway, walkway, and patio pressure washing on the area's larger suburban lots."
    ]
  }),
  createLocationServicePage({
    city: "Royersford",
    citySlug: "royersford-pa",
    countySlug: "montgomery-county",
    region: "Montgomery County, PA",
    nearbyCommunities: ["Spring City", "Limerick", "Collegeville"],
    localFocus: [
      "Twin and row-home chimneys in the older borough grid, where shared walls make flashing details matter.",
      "Repointing and stucco patching on borough homes close to the Schuylkill."
    ]
  }),
  createLocationServicePage({
    city: "Trappe",
    citySlug: "trappe-pa",
    countySlug: "montgomery-county",
    region: "Montgomery County, PA",
    nearbyCommunities: ["Collegeville", "Limerick", "Schwenksville"],
    localFocus: [
      "Historic stone and brick farmhouse chimneys along the Route 113 corridor.",
      "Repointing where original lime mortar has weathered back out of the joints."
    ]
  }),
  createLocationServicePage({
    city: "Schwenksville",
    citySlug: "schwenksville-pa",
    countySlug: "montgomery-county",
    region: "Montgomery County, PA",
    nearbyCommunities: ["Trappe", "Collegeville", "Gilbertsville"],
    localFocus: [
      "Wood stove and insert flues in the Perkiomen Creek valley that see heavy winter use.",
      "Water-intrusion checks on properties with mature tree cover and persistent damp."
    ]
  }),
  createLocationServicePage({
    city: "Bechtelsville",
    citySlug: "bechtelsville-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    nearbyCommunities: ["Boyertown", "Gilbertsville", "Bally"],
    localFocus: [
      "Farm-property chimneys and outbuilding masonry that often go years between inspections.",
      "Freeze-thaw mortar damage on exposed rural chimney stacks."
    ]
  }),
  createLocationServicePage({
    city: "Bally",
    citySlug: "bally-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    nearbyCommunities: ["Bechtelsville", "Barto", "Boyertown"],
    localFocus: [
      "Older borough brickwork where mortar joints have eroded well below the surface.",
      "Fireplace and liner inspections for homes heating with wood through the winter."
    ]
  }),
  createLocationServicePage({
    city: "Oley",
    citySlug: "oley-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    nearbyCommunities: ["Boyertown", "Birdsboro", "Reading"],
    localFocus: [
      "Stone farmhouse chimneys in the Oley Valley that need lime-compatible repointing.",
      "Large exterior masonry and hardscape cleaning on rural properties."
    ]
  }),
  createLocationServicePage({
    city: "Sinking Spring",
    citySlug: "sinking-spring-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    nearbyCommunities: ["Reading", "Wyomissing", "Shillington"],
    localFocus: [
      "Suburban brick chimneys needing cap, crown, and flashing maintenance.",
      "Pressure washing for driveways, sidewalks, and masonry facades west of Reading."
    ]
  }),
  createLocationServicePage({
    city: "Kimberton",
    citySlug: "kimberton-pa",
    countySlug: "chester-county",
    region: "Chester County, PA",
    nearbyCommunities: ["Phoenixville", "Spring City", "Chester Springs"],
    localFocus: [
      "Historic village chimneys where original masonry needs carefully matched repair.",
      "Leak diagnosis on homes with complex or multi-flue chimney stacks."
    ]
  }),
  createLocationServicePage({
    city: "Chester Springs",
    citySlug: "chester-springs-pa",
    countySlug: "chester-county",
    region: "Chester County, PA",
    nearbyCommunities: ["Downingtown", "Kimberton", "Exton"],
    localFocus: [
      "Large-property chimneys and outdoor fireplaces that need seasonal service.",
      "Stone veneer and masonry repair on newer custom-built homes."
    ]
  }),
  createLocationServicePage({
    city: "Exton",
    citySlug: "exton-pa",
    countySlug: "chester-county",
    region: "Chester County, PA",
    nearbyCommunities: ["Downingtown", "Chester Springs", "Malvern"],
    localFocus: [
      "Development-built chimneys where prefabricated crowns and caps fail earlier than masonry ones.",
      "Dryer vent cleaning and fireplace service for townhome and cluster-home communities."
    ]
  }),
  createLocationServicePage({
    city: "Malvern",
    citySlug: "malvern-pa",
    countySlug: "chester-county",
    region: "Chester County, PA",
    nearbyCommunities: ["Exton", "Chester Springs", "Downingtown"],
    localFocus: [
      "Chimney and fireplace maintenance for older borough homes and newer subdivisions alike.",
      "Masonry and stucco repair where exterior finishes have cracked or separated."
    ]
  })
];

export const locationServicePages = [
  {
    slug: "chimney-masonry-services-norristown-pa",
    countySlug: "montgomery-county",
    citySlug: "norristown-pa",
    city: "Norristown",
    region: "Montgomery County, PA",
    title: "Chimney, Stucco & Masonry Services in Norristown, PA",
    shortTitle: "Norristown, PA",
    metaDescription:
      "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Norristown, PA.",
    cardDescription:
      "Chimney sweeping, chimney repairs, stucco repair, masonry restoration, and pressure washing for homes in Norristown.",
    heroIntro:
      "Chimney sweeping, chimney repair, stucco repair, brick and block repair, and pressure washing for homeowners in Norristown and nearby parts of Montgomery County.",
    overviewTitle: "Local chimney and masonry help for Norristown homes",
    overviewParagraphs: [
      "Norristown homeowners call us for everything from annual chimney sweeping to chimney leak repair, stucco patching, repointing, and exterior cleaning. Many properties in the area need routine maintenance before small masonry or moisture issues turn into larger repair bills.",
      "If you are seeing cracked mortar, worn chimney stucco, water stains near the fireplace, loose brick, or dark buildup on patios and walkways, we can inspect the issue, explain what is happening, and recommend the right repair or cleaning service."
    ],
    localFocus: [
      "Chimney and masonry repair for older homes with weathered brick, mortar, and stucco.",
      "Leak checks, fireplace cleaning, and exterior cleanup after wet seasons or inspection reports."
    ],
    serviceHighlights: [
      {
        title: "Chimney sweeping and inspections",
        description:
          "Annual chimney cleaning, creosote removal, and safety checks for active fireplaces, stoves, and inserts."
      },
      {
        title: "Chimney repair and stucco repair",
        description:
          "Repair chimney leaks, cracked crowns, damaged flashing, worn stucco, parging, and deteriorated outer chimney surfaces."
      },
      {
        title: "Masonry repair and pressure washing",
        description:
          "Brick repair, block repair, mortar joint repair, and exterior cleaning for hard surfaces around the home."
      }
    ],
    stats: [
      {
        title: "Common calls in Norristown",
        description:
          "Chimney sweeping, leak diagnosis, mortar joint repair, chimney stucco repair, and cleanup of stained exterior surfaces."
      },
      {
        title: "Good time to schedule",
        description:
          "Before heating season, after noticing leaks or chimney odors, or when brick, block, or stucco starts to crack or separate."
      },
      {
        title: "Nearby coverage",
        description:
          "We also help homeowners in nearby communities such as Collegeville, Limerick, Royersford, and surrounding parts of Montgomery County."
      }
    ],
    keywords: [
      "chimney sweep norristown pa",
      "chimney repair norristown pa",
      "chimney stucco repair norristown pa",
      "masonry repair norristown pa",
      "pressure washing norristown pa"
    ],
    faqs: [
      {
        question: "Do you offer chimney sweeping in Norristown, PA?",
        answer:
          "Yes. We provide chimney sweeping, chimney cleaning, and chimney inspections for homeowners in Norristown and nearby Montgomery County communities."
      },
      {
        question: "Can you repair cracked chimney stucco in Norristown?",
        answer:
          "Yes. We repair cracked or failing chimney stucco, parging, and related chimney masonry issues so the surface is better protected from moisture."
      },
      {
        question: "Do you handle brick and block repair too?",
        answer:
          "Yes. We repair brick, block, mortar joints, and other masonry surfaces around chimneys, walls, and foundations."
      },
      {
        question: "Can I call for pressure washing in Norristown?",
        answer:
          "Yes. We provide pressure washing and exterior cleaning for masonry, patios, walkways, driveways, and other hard outdoor surfaces."
      }
    ]
  },
  {
    slug: "chimney-masonry-services-collegeville-pa",
    countySlug: "montgomery-county",
    citySlug: "collegeville-pa",
    city: "Collegeville",
    region: "Montgomery County, PA",
    title: "Chimney, Stucco & Masonry Services in Collegeville, PA",
    shortTitle: "Collegeville, PA",
    metaDescription:
      "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Collegeville, PA.",
    cardDescription:
      "Chimney sweeping, chimney repairs, stucco repair, masonry restoration, and pressure washing for homes in Collegeville.",
    heroIntro:
      "Chimney sweeping, chimney repair, stucco repair, brick and block repair, and pressure washing for homeowners in Collegeville and nearby Montgomery County towns.",
    overviewTitle: "Chimney and masonry services for Collegeville homeowners",
    overviewParagraphs: [
      "Collegeville homeowners reach out for chimney cleaning, chimney repairs, masonry restoration, and pressure washing when fireplaces need seasonal maintenance or when visible exterior damage starts showing up around the property.",
      "Whether the issue is smoke and draft trouble, cracked chimney stucco, loose mortar joints, damaged brickwork, or dirty exterior hardscaping, we handle the inspection and recommend a practical next step."
    ],
    localFocus: [
      "Seasonal chimney sweeping and inspections before fireplaces go back into regular use.",
      "Chimney crown, flashing, stucco, and masonry repairs on weather-exposed homes."
    ],
    serviceHighlights: [
      {
        title: "Fireplace and chimney maintenance",
        description:
          "Sweeping, inspections, and chimney cleaning to keep the system safer and ready for use."
      },
      {
        title: "Leak repair and chimney exterior work",
        description:
          "Chimney crowns, caps, flashing, stucco repair, parging, and masonry repairs tied to moisture damage."
      },
      {
        title: "Exterior masonry and cleaning",
        description:
          "Brick, block, and stone repairs plus pressure washing for patios, walkways, driveways, and other hard surfaces."
      }
    ],
    stats: [
      {
        title: "What we fix most often",
        description:
          "Creosote buildup, chimney leaks, cracked stucco, failing mortar joints, loose masonry, and exterior surfaces that need a deep cleaning."
      },
      {
        title: "When homeowners usually call",
        description:
          "Before fireplace season, after a home inspection, after spotting water stains, or when masonry starts to look worn or unstable."
      },
      {
        title: "Nearby coverage",
        description:
          "We also serve nearby areas such as Limerick, Royersford, Norristown, and other surrounding parts of Montgomery County."
      }
    ],
    keywords: [
      "chimney sweep collegeville pa",
      "chimney repair collegeville pa",
      "stucco repair collegeville pa",
      "masonry repair collegeville pa",
      "pressure washing collegeville pa"
    ],
    faqs: [
      {
        question: "Do you serve Collegeville for chimney sweeping and chimney repair?",
        answer:
          "Yes. We provide chimney sweeping, chimney repair, chimney inspections, and related masonry services for homeowners in Collegeville."
      },
      {
        question: "Can you repair chimney stucco and parging in Collegeville?",
        answer:
          "Yes. We handle chimney stucco repair and related exterior masonry repairs when cracking, separation, or weather damage starts to show."
      },
      {
        question: "Do you also offer brick and block repair in Collegeville?",
        answer:
          "Yes. We repair brick, block, mortar joints, and other masonry surfaces around chimneys, walls, and foundations."
      },
      {
        question: "Do you provide pressure washing in Collegeville?",
        answer:
          "Yes. We clean masonry, patios, walkways, driveways, and other hard exterior surfaces with pressure washing and related exterior cleaning methods."
      }
    ]
  },
  {
    slug: "chimney-masonry-services-limerick-pa",
    countySlug: "montgomery-county",
    citySlug: "limerick-pa",
    city: "Limerick",
    region: "Montgomery County, PA",
    title: "Chimney, Stucco & Masonry Services in Limerick, PA",
    shortTitle: "Limerick, PA",
    metaDescription:
      "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Limerick, PA.",
    cardDescription:
      "Chimney sweeping, chimney repairs, stucco repair, masonry restoration, and pressure washing for homes in Limerick.",
    heroIntro:
      "Chimney sweeping, chimney repair, stucco repair, brick and block repair, and pressure washing for homeowners in Limerick and nearby areas.",
    overviewTitle: "Chimney and masonry work for Limerick properties",
    overviewParagraphs: [
      "Limerick homeowners often need a mix of chimney maintenance, masonry repairs, and exterior cleaning to keep the home protected and looking sharp. We help with yearly sweeping, chimney leak repair, stucco patching, masonry restoration, and cleanup of outdoor hard surfaces.",
      "If your chimney is showing cracks, your mortar joints are starting to fail, or your patio and walkways have built up heavy staining, we can inspect the condition and recommend the repair or cleaning work that fits the property."
    ],
    localFocus: [
      "Chimney leak repair, crown repair, and stucco work for exposed residential stacks.",
      "Pressure washing and masonry repair around patios, walks, stoops, and driveway areas."
    ],
    serviceHighlights: [
      {
        title: "Chimney sweeping and chimney cleaning",
        description:
          "Routine maintenance that helps reduce creosote buildup, smoke issues, and preventable fireplace problems."
      },
      {
        title: "Chimney repairs and stucco repair",
        description:
          "Repair leak-prone chimney sections, cracked stucco, parging, flashing, crowns, and other exposed problem areas."
      },
      {
        title: "Masonry restoration and pressure washing",
        description:
          "Brick, block, and stone repairs plus pressure washing for driveways, patios, retaining walls, and walkways."
      }
    ],
    stats: [
      {
        title: "Most requested services",
        description:
          "Chimney sweeping, chimney repair, stucco repair, brick and mortar repair, and pressure washing before or after exterior work."
      },
      {
        title: "Problems worth checking early",
        description:
          "Water stains, chimney odors, smoky fireplaces, cracked exterior coatings, loose masonry, and surfaces that stay dark or slippery."
      },
      {
        title: "Nearby coverage",
        description:
          "We also serve Collegeville, Royersford, Pottstown, and surrounding towns across this part of Montgomery County."
      }
    ],
    keywords: [
      "chimney sweep limerick pa",
      "chimney repair limerick pa",
      "stucco repair limerick pa",
      "masonry repair limerick pa",
      "pressure washing limerick pa"
    ],
    faqs: [
      {
        question: "Do you provide chimney sweeping in Limerick, PA?",
        answer:
          "Yes. We provide chimney sweeping, chimney cleaning, and fireplace inspections for homeowners in Limerick and nearby towns."
      },
      {
        question: "Can you repair a leaking or cracked chimney in Limerick?",
        answer:
          "Yes. We handle chimney leak repair, crown and flashing repairs, chimney stucco repair, and other masonry problems affecting the chimney exterior."
      },
      {
        question: "Do you repair stucco, brick, and block surfaces in Limerick?",
        answer:
          "Yes. We repair stucco, brick, block, and mortar joints on chimneys, walls, foundations, and related exterior surfaces."
      },
      {
        question: "Do you offer pressure washing in Limerick?",
        answer:
          "Yes. We provide pressure washing and exterior cleaning for masonry, patios, walkways, driveways, and similar hard outdoor surfaces."
      }
    ]
  },
  {
    slug: "chimney-masonry-services-pottstown-pa",
    countySlug: "montgomery-county",
    citySlug: "pottstown-pa",
    city: "Pottstown",
    region: "Montgomery County, PA",
    title: "Chimney, Stucco & Masonry Services in Pottstown, PA",
    shortTitle: "Pottstown, PA",
    metaDescription:
      "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Pottstown, PA.",
    cardDescription:
      "Chimney sweeping, chimney repairs, stucco repair, masonry restoration, and pressure washing for homes in Pottstown.",
    heroIntro:
      "Chimney sweeping, chimney repair, stucco repair, brick and block repair, and pressure washing for homeowners in Pottstown and nearby Montgomery County communities.",
    overviewTitle: "Chimney and masonry work for Pottstown homeowners",
    overviewParagraphs: [
      "Pottstown homeowners call us for chimney sweeping, chimney leak repair, stucco patching, masonry restoration, and pressure washing when routine upkeep or visible exterior wear starts affecting the home.",
      "If your chimney is drafting poorly, showing cracks in the stucco or crown, shedding mortar, or leaving stains on surrounding hardscaping, we can inspect the problem and recommend the right repair or cleaning work."
    ],
    localFocus: [
      "Core service area for chimney sweeping, chimney repair, stucco repair, masonry repair, and pressure washing.",
      "Fastest fit for project photos, repeat local work, and nearby service-area scheduling."
    ],
    serviceHighlights: [
      {
        title: "Chimney sweeping and fireplace maintenance",
        description:
          "Annual chimney cleaning, inspections, and maintenance for active fireplaces, stoves, and inserts."
      },
      {
        title: "Chimney repair and weather-related exterior fixes",
        description:
          "Repair chimney leaks, cracked crowns, flashing problems, failing stucco, and other exposed masonry issues."
      },
      {
        title: "Masonry repair and pressure washing",
        description:
          "Brick, block, and mortar repairs plus pressure washing for patios, walkways, driveways, and other hard outdoor surfaces."
      }
    ],
    stats: [
      {
        title: "Most common calls in Pottstown",
        description:
          "Chimney sweeping, leak diagnosis, stucco repair, mortar repair, and cleanup of stained exterior masonry and concrete."
      },
      {
        title: "When to schedule service",
        description:
          "Before heating season, after a storm or leak, after a home inspection, or when masonry starts cracking or separating."
      },
      {
        title: "Nearby coverage",
        description:
          "We also help homeowners in Sanatoga, Royersford, Gilbertsville, Douglassville, and surrounding communities near Pottstown."
      }
    ],
    keywords: [
      "chimney sweep pottstown pa",
      "chimney repair pottstown pa",
      "chimney stucco repair pottstown pa",
      "masonry repair pottstown pa",
      "pressure washing pottstown pa"
    ],
    faqs: [
      {
        question: "Do you provide chimney sweeping in Pottstown, PA?",
        answer:
          "Yes. We provide chimney sweeping, chimney cleaning, and chimney inspections for homeowners in Pottstown and nearby Montgomery County communities."
      },
      {
        question: "Can you repair leaking or damaged chimneys in Pottstown?",
        answer:
          "Yes. We handle chimney repair, chimney stucco repair, crown repair, flashing repair, and related masonry issues affecting chimneys in Pottstown."
      },
      {
        question: "Do you repair brick, block, and mortar in Pottstown?",
        answer:
          "Yes. We repair brick, block, mortar joints, and other masonry surfaces around chimneys, walls, and foundations."
      },
      {
        question: "Do you offer pressure washing in Pottstown?",
        answer:
          "Yes. We provide pressure washing and exterior cleaning for masonry, patios, walkways, driveways, and similar hard outdoor surfaces."
      }
    ]
  },
  {
    slug: "chimney-masonry-services-douglassville-pa",
    countySlug: "berks-county",
    citySlug: "douglassville-pa",
    city: "Douglassville",
    region: "Berks County, PA",
    title: "Chimney, Stucco & Masonry Services in Douglassville, PA",
    shortTitle: "Douglassville, PA",
    metaDescription:
      "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, brick and block repair, and pressure washing in Douglassville, PA.",
    cardDescription:
      "Chimney sweeping, chimney repairs, stucco repair, masonry restoration, and pressure washing for homes in Douglassville.",
    heroIntro:
      "Chimney sweeping, chimney repair, stucco repair, brick and block repair, and pressure washing for homeowners in Douglassville and nearby Berks County areas.",
    overviewTitle: "Chimney and masonry services for Douglassville homes",
    overviewParagraphs: [
      "Douglassville homeowners call us for chimney cleaning, leak repair, stucco work, masonry repair, and pressure washing when weather exposure starts breaking down the exterior of the home or chimney.",
      "If your chimney crown is cracked, chimney stucco is falling away, brick or block surfaces are deteriorating, or your exterior hardscaping needs cleanup, we can inspect the condition and walk you through the right service."
    ],
    localFocus: [
      "Chimney stucco repair and masonry repairs where moisture has opened cracks or weak spots.",
      "Berks County pressure washing and exterior cleaning for masonry, patios, walks, and driveways."
    ],
    serviceHighlights: [
      {
        title: "Chimney sweeping and inspections",
        description:
          "Yearly chimney cleaning, fireplace checks, and draft-related troubleshooting for active systems."
      },
      {
        title: "Chimney repairs and weather-exposed surfaces",
        description:
          "Repair crowns, caps, flashing, chimney stucco, parging, and damaged masonry before water works deeper into the structure."
      },
      {
        title: "Masonry repair and exterior cleaning",
        description:
          "Brick repair, block repair, mortar joint work, and pressure washing for masonry, patios, walkways, and driveway surfaces."
      }
    ],
    stats: [
      {
        title: "Typical calls in Douglassville",
        description:
          "Chimney sweeping, chimney leak repair, stucco patching, mortar repairs, and pressure washing after seasons of weather exposure."
      },
      {
        title: "Signs to schedule service",
        description:
          "Cracked crowns, missing mortar, loose brick, visible stucco failure, water staining, smoky fireplace performance, or heavy exterior buildup."
      },
      {
        title: "Nearby coverage",
        description:
          "We also serve Pottstown, Boyertown, Gilbertsville, and other nearby communities across this part of Berks and Montgomery counties."
      }
    ],
    keywords: [
      "chimney sweep douglassville pa",
      "chimney repair douglassville pa",
      "stucco repair douglassville pa",
      "masonry repair douglassville pa",
      "pressure washing douglassville pa"
    ],
    faqs: [
      {
        question: "Do you provide chimney sweeping in Douglassville, PA?",
        answer:
          "Yes. We provide chimney sweeping, chimney cleaning, and related chimney maintenance for homeowners in Douglassville."
      },
      {
        question: "Can you repair chimney stucco and masonry in Douglassville?",
        answer:
          "Yes. We repair chimney stucco, parging, mortar joints, and other masonry surfaces when cracks, separation, or water damage appear."
      },
      {
        question: "Do you offer brick and block repair in Douglassville?",
        answer:
          "Yes. We repair brick, block, and mortar issues tied to chimneys, walls, and other exterior masonry around the home."
      },
      {
        question: "Can I hire you for pressure washing in Douglassville?",
        answer:
          "Yes. We provide pressure washing and exterior cleaning for driveways, patios, walkways, masonry, and other hard exterior surfaces."
      }
    ]
  },
  ...generatedLocationServicePages
];

export function getLocationServicePageBySlug(slug) {
  return locationServicePages.find((page) => page.slug === slug);
}

export function getLocationServicePageByPath(countySlug, citySlug) {
  return locationServicePages.find(
    (page) => page.countySlug === countySlug && page.citySlug === citySlug
  );
}

export function getLocationServicePath(page) {
  return `/service-areas/${page.countySlug}/${page.citySlug}`;
}
