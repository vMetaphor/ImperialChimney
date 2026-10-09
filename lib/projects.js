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
    slug: "chimney-stucco-repair-douglassville-pa",
    city: "Douglassville",
    citySlug: "douglassville-pa",
    countySlug: "berks-county",
    region: "Berks County, PA",
    title: "Chimney Stucco Repair Project in Douglassville, PA",
    metaDescription:
      "See a recent chimney stucco repair project in Douglassville, PA from Imperial Chimney & Masonry, including the exterior issues addressed and what the finished repair accomplished.",
    excerpt:
      "This Douglassville-area project focused on worn chimney stucco and exposed exterior problem areas before moisture could keep working underneath the finish.",
    heroIntro:
      "A recent Douglassville-area project centered on repairing failing chimney stucco so the exterior could shed water more effectively again.",
    serviceLabel: "Chimney Stucco Repair",
    serviceHref: "/chimney-stucco-repair-pottstown-pa",
    publishedAt: "2026-05-18",
    heroImage: {
      src: "/assets/img/after4.JPEG",
      alt: "Completed chimney stucco repair in Douglassville, Pennsylvania"
    },
    gallery: [
      {
        src: "/assets/img/before4.JPEG",
        alt: "Chimney stucco before repair in Douglassville, Pennsylvania",
        label: "Before"
      },
      {
        src: "/assets/img/after4.JPEG",
        alt: "Chimney stucco after repair in Douglassville, Pennsylvania",
        label: "After"
      }
    ],
    issues: [
      "The chimney exterior was showing the kind of surface wear that often leads to more moisture penetration over time.",
      "Once stucco or parging starts cracking and separating, the masonry underneath can stay exposed to repeated weather cycles.",
      "The homeowner needed the exterior stabilized before the damage moved into a broader masonry repair."
    ],
    workCompleted: [
      "The project focused on restoring the outer chimney surface where the finish had started to fail.",
      "Loose or deteriorated exterior material was addressed so the new repair could bond to a sound base.",
      "The chimney was left with a cleaner, more consistent protective finish across the repaired area."
    ],
    resultSummary:
      "The repair improved the chimney's exterior protection, tightened up the surface appearance, and reduced the chance of ongoing moisture exposure through the failing outer coat.",
    localRelevanceTitle: "Why this repair matters in Douglassville",
    localRelevanceCopy:
      "In Douglassville and nearby Berks County communities, chimney stucco problems often start showing up after long weather exposure on the most visible sides of the stack. Addressing the surface early helps keep that outer shell from turning into a deeper masonry problem.",
    faqs: [
      {
        question: "What are signs that chimney stucco needs repair?",
        answer:
          "Common signs include cracking, flaking, separation, exposed masonry underneath, and dark staining that suggests the outer coating is no longer shedding water well."
      },
      {
        question: "Is stucco repair just cosmetic?",
        answer:
          "No. The outer finish affects how well the chimney surface resists weather. Once that layer fails, moisture can keep working into the masonry underneath."
      }
    ],
    keywords: [
      "chimney stucco repair douglassville pa",
      "chimney parging repair douglassville pa",
      "chimney stucco project douglassville pa"
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
