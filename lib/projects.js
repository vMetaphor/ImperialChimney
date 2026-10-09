export const projectPosts = [
  {
    slug: "chimney-crown-repair-pottstown-pa",
    city: "Pottstown",
    citySlug: "pottstown-pa",
    countySlug: "montgomery-county",
    region: "Montgomery County, PA",
    title: "Chimney Crown Repair and Repointing Project in Pottstown, PA",
    metaDescription:
      "See a recent chimney crown repair and repointing project in Pottstown, PA from Imperial Chimney & Masonry, including the scope of work and why upper-chimney repairs matter.",
    excerpt:
      "This Pottstown-area project focused on restoring the chimney crown and upper mortar joints before water exposure could turn surface damage into a larger rebuild.",
    heroIntro:
      "A recent Pottstown-area project focused on the chimney crown and upper masonry where weather exposure usually starts breaking things down first.",
    serviceLabel: "Chimney Repair",
    serviceHref: "/chimney-repair-pottstown-pa",
    publishedAt: "2026-05-25",
    heroImage: {
      src: "/assets/img/chimneycrownafter.JPEG",
      alt: "Completed chimney crown and upper masonry repair in Pottstown, Pennsylvania"
    },
    gallery: [
      {
        src: "/assets/img/chimneycrown.JPEG",
        alt: "Upper chimney crown before repair in Pottstown, Pennsylvania",
        label: "Before"
      },
      {
        src: "/assets/img/chimneycrownafter.JPEG",
        alt: "Upper chimney crown after repair in Pottstown, Pennsylvania",
        label: "After"
      }
    ],
    issues: [
      "Upper chimney surfaces were showing wear where the crown and exposed joints take the most rain and freeze-thaw exposure.",
      "Small failures at the top of the stack can let more moisture work into the chimney body and speed up masonry breakdown.",
      "The repair needed to stabilize the top section before the damage spread deeper into the chimney."
    ],
    workCompleted: [
      "Repair work focused on the chimney crown and upper exposed masonry.",
      "Damaged mortar joints around the top section were addressed to tighten up the chimney shell.",
      "The repaired area was cleaned up so the homeowner had a clearer, more durable top section heading into future weather exposure."
    ],
    resultSummary:
      "The finished repair gave the chimney top a more stable surface, improved moisture resistance, and reduced the risk of continued breakdown around the upper masonry.",
    localRelevanceTitle: "Why this repair matters in Pottstown",
    localRelevanceCopy:
      "In Pottstown and nearby Montgomery County communities, upper-chimney damage often starts with repeated wet weather, temperature swings, and neglected crown cracks. Catching those issues early usually costs less than waiting for widespread brick failure or interior leak staining.",
    faqs: [
      {
        question: "Why is a chimney crown repair important?",
        answer:
          "The crown protects the top of the chimney from direct water entry. When it cracks or starts breaking down, moisture can move deeper into the masonry and accelerate larger repairs."
      },
      {
        question: "When should upper chimney mortar joints be repaired?",
        answer:
          "If the joints are cracking, washing out, or showing visible gaps near the top of the chimney, it is worth repairing them before water exposure weakens more of the stack."
      }
    ],
    keywords: [
      "chimney crown repair pottstown pa",
      "chimney repointing pottstown pa",
      "chimney repair project pottstown pa"
    ]
  },
  {
    slug: "walkway-pressure-washing-douglassville-pa",
    city: "Douglassville",
    citySlug: "douglassville-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    title: "Walkway Pressure Washing Project in Douglassville, PA",
    metaDescription:
      "See a recent concrete walkway pressure washing project in Douglassville, PA from Imperial Chimney & Masonry, with before-and-after photos of the cleaned surface.",
    excerpt:
      "This Douglassville-area project cleaned a concrete walkway that had built up dirt and organic staining, bringing the surface back close to its original color.",
    heroIntro:
      "A recent Douglassville-area job focused on pressure washing a concrete walkway that had gone dark with built-up dirt and organic growth.",
    serviceLabel: "Pressure Washing",
    serviceHref: "/pressure-washing-pottstown-pa",
    publishedAt: "2026-05-18",
    heroImage: {
      src: "/assets/img/after4.JPEG",
      alt: "Concrete walkway after pressure washing in Douglassville, Pennsylvania"
    },
    gallery: [
      {
        src: "/assets/img/before4.JPEG",
        alt: "Concrete walkway before pressure washing in Douglassville, Pennsylvania",
        label: "Before"
      },
      {
        src: "/assets/img/after4.JPEG",
        alt: "The same concrete walkway after pressure washing in Douglassville, Pennsylvania",
        label: "After"
      }
    ],
    issues: [
      "The walkway had darkened unevenly, with the heaviest buildup along the edges and in the shaded sections.",
      "Dirt and organic growth on a walking surface is a slip concern once it stays damp, not only an appearance problem.",
      "The homeowner wanted the concrete brought back without resurfacing or replacing any of it."
    ],
    workCompleted: [
      "The surface was pressure washed at a pressure suited to concrete, working in overlapping passes to avoid leaving clean and dirty stripes.",
      "Edges, joints, and the shaded sections holding the most growth were given extra attention.",
      "The surrounding area was rinsed down so runoff and loosened debris were not left behind on the property."
    ],
    resultSummary:
      "The walkway came back to a far lighter, more even color across its full length, with the slippery buildup removed and the concrete left easier to keep up going forward.",
    localRelevanceTitle: "Why this kind of cleanup matters in Douglassville",
    localRelevanceCopy:
      "In Douglassville and nearby Berks County communities, walkways and patios under mature tree cover collect organic growth faster than homeowners expect, and shaded concrete stays damp long enough for it to take hold. Periodic washing resets the appearance and keeps a walking surface from turning slick.",
    faqs: [
      {
        question: "Will pressure washing damage my concrete walkway?",
        answer:
          "Not when the pressure and nozzle are matched to the surface. Concrete tolerates washing well, but the wrong tip held too close can etch it, which is why we adjust to the surface instead of using one setting for everything."
      },
      {
        question: "How long does a cleaned walkway stay looking good?",
        answer:
          "It depends mostly on shade and drainage. A walkway in full sun can look good for a few years, while one under trees that stays damp may want attention closer to every year or two."
      }
    ],
    keywords: [
      "pressure washing douglassville pa",
      "walkway pressure washing douglassville pa",
      "concrete cleaning douglassville pa"
    ]
  }
];

export function getProjectPath(project) {
  return `/projects/${project.slug}`;
}

export function getProjectBySlug(slug) {
  return projectPosts.find((project) => project.slug === slug);
}

export function getProjectsByRegion(region) {
  return projectPosts.filter((project) => project.region === region);
}

export function getProjectsByCitySlug(citySlug) {
  return projectPosts.filter((project) => project.citySlug === citySlug);
}

export function getRelatedProjects({
  citySlug,
  region,
  excludeSlug,
  limit = 3
} = {}) {
  const remaining = projectPosts.filter((project) => project.slug !== excludeSlug);

  const cityMatches = citySlug
    ? remaining.filter((project) => project.citySlug === citySlug)
    : [];
  const regionMatches = region
    ? remaining.filter((project) => project.region === region && project.citySlug !== citySlug)
    : [];
  const fallback = remaining.filter(
    (project) =>
      project.citySlug !== citySlug &&
      project.region !== region
  );

  return [...cityMatches, ...regionMatches, ...fallback].slice(0, limit);
}
