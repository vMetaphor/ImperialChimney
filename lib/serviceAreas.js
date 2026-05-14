import { locationServicePages } from "./locationPages";

const groupDefinitions = [
  {
    countySlug: "montgomery-county",
    region: "Montgomery County, PA",
    label: "Montgomery County",
    anchorId: "montgomery-county",
    title: "Chimney, Stucco & Masonry Services Across Montgomery County, PA",
    metaDescription:
      "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, chimney stucco repair, masonry repair, and pressure washing across Pottstown, Norristown, Collegeville, Limerick, Stowe, Gilbertsville, Boyertown, and nearby Montgomery County communities.",
    intro:
      "We handle chimney sweeping, chimney repair, stucco repair, masonry restoration, and pressure washing throughout Pottstown, Norristown, Collegeville, Limerick, Stowe, Gilbertsville, Boyertown, and nearby Montgomery County communities.",
    overviewParagraphs: [
      "Montgomery County homeowners call us for everything from annual chimney sweeping to chimney leak repair, stucco patching, brick and block repair, and exterior cleaning around the home.",
      "Whether the issue is a smoky fireplace, cracked chimney stucco, worn mortar joints, or dirty hardscaping around the property, we help homeowners across this area keep things safer, cleaner, and easier to maintain."
    ],
    additionalAreas: [
      "Pottstown, PA",
      "Stowe, PA",
      "Gilbertsville, PA",
      "Sanatoga, PA",
      "Boyertown, PA",
      "Royersford, PA"
    ],
    faqs: [
      {
        question: "Do you provide chimney sweeping throughout Montgomery County?",
        answer:
          "Yes. We provide chimney sweeping, inspections, repairs, masonry restoration, stucco repair, and pressure washing across Montgomery County communities we serve."
      },
      {
        question: "What Montgomery County towns do you cover?",
        answer:
          "Our published local pages currently focus on Pottstown, Norristown, Collegeville, Limerick, Stowe, Gilbertsville, and Boyertown, and we also work in nearby communities such as Sanatoga and Royersford."
      },
      {
        question: "Can I request service if my Montgomery County town is not listed?",
        answer:
          "Yes. Contact us with your address and we can confirm whether your project falls within our current service coverage."
      }
    ]
  },
  {
    countySlug: "berks-county",
    region: "Berks County, PA",
    label: "Berks County",
    anchorId: "berks-county",
    title: "Chimney, Stucco & Masonry Services Across Berks County, PA",
    metaDescription:
      "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, stucco repair, masonry repair, and pressure washing across Douglassville, Birdsboro, Reading, Wyomissing, and nearby Berks County communities.",
    intro:
      "Homeowners in Douglassville, Birdsboro, Reading, Wyomissing, and nearby Berks County communities call us for chimney maintenance, masonry repairs, stucco work, and exterior cleaning.",
    overviewParagraphs: [
      "Berks County homes often need chimney maintenance and masonry repairs after seasons of weather exposure, especially when crowns crack, chimney stucco starts shedding, or exterior mortar joints begin to fail.",
      "We help homeowners across this area with practical chimney, stucco, masonry, and exterior cleaning work that keeps moisture problems from getting more expensive."
    ],
    additionalAreas: [
      "Birdsboro, PA",
      "Boyertown, PA",
      "Reading, PA",
      "Wyomissing, PA"
    ],
    faqs: [
      {
        question: "Do you provide chimney sweeping in Berks County?",
        answer:
          "Yes. We provide chimney sweeping, chimney repair, masonry restoration, stucco repair, and pressure washing in the Berks County communities we serve."
      },
      {
        question: "Which Berks County towns are covered?",
        answer:
          "Our current local page coverage includes Douglassville, Birdsboro, Reading, and Wyomissing, and we also serve nearby communities such as Boyertown."
      },
      {
        question: "Can I request masonry repair in a nearby Berks County town?",
        answer:
          "Yes. Contact us with your town and project details and we can confirm whether your property is within our current service area."
      }
    ]
  },
  {
    countySlug: "chester-county",
    region: "Chester County, PA",
    label: "Chester County",
    anchorId: "chester-county",
    title: "Chimney, Stucco & Masonry Services Across Chester County, PA",
    metaDescription:
      "Imperial Chimney & Masonry provides chimney sweeping, chimney repair, stucco repair, masonry repair, and pressure washing across Phoenixville, Spring City, Downingtown, and nearby Chester County communities.",
    intro:
      "Homeowners in Phoenixville, Spring City, Downingtown, and nearby Chester County communities call us for chimney sweeping, leak repair, masonry restoration, and pressure washing.",
    overviewParagraphs: [
      "Chester County homeowners also reach out when they need chimney maintenance, chimney leak repair, masonry restoration, or pressure washing on older and weather-exposed homes.",
      "We handle practical chimney, stucco, masonry, and exterior cleaning work throughout this part of Chester County for homeowners who want clear recommendations and solid repair work."
    ],
    additionalAreas: ["Phoenixville, PA", "Spring City, PA", "Downingtown, PA", "Chester Springs, PA"],
    faqs: [
      {
        question: "Do you serve parts of Chester County?",
        answer:
          "Yes. We work in nearby Chester County communities for chimney sweeping, chimney repair, stucco repair, masonry repair, and pressure washing."
      },
      {
        question: "Why are there fewer Chester County town pages right now?",
        answer:
          "We are building out local coverage gradually. We now have published pages for Phoenixville, Spring City, and Downingtown, and we also confirm service in nearby Chester County communities."
      },
      {
        question: "Can I still ask about service in Phoenixville or Spring City?",
        answer:
          "Yes. We serve Phoenixville, Spring City, Downingtown, and nearby Chester County communities. Contact us with your address and project details and we can confirm scheduling."
      }
    ]
  }
];

export function getLocationPagesByRegion(region) {
  return locationServicePages
    .filter((page) => page.region === region)
    .sort((left, right) => left.city.localeCompare(right.city));
}

export const serviceAreaGroups = groupDefinitions.map((group) => ({
  ...group,
  pages: getLocationPagesByRegion(group.region)
}));

export function getServiceAreaGroupByRegion(region) {
  return serviceAreaGroups.find((group) => group.region === region);
}

export function getServiceAreaGroupByCountySlug(countySlug) {
  return serviceAreaGroups.find((group) => group.countySlug === countySlug);
}

export function getServiceAreaGroupPath(group) {
  return `/service-areas/${group.countySlug}`;
}
