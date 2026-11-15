import { defaultKeywords } from "./seo";

/**
 * Content for the problem-specific service pages rendered by
 * components/ServiceLandingPage.jsx.
 *
 * Each targets one thing homeowners actually type into Google ("chimney
 * leaking", "chimney inspection", "chimney crown repair", "chimney liner",
 * "fireplace repair") so it can rank on its own instead of living inside a tab
 * on /services. Every service, product, and photo here is one the business
 * already offers on /services; nothing is invented. Reviews are quoted
 * verbatim from the site's existing testimonials.
 */
const corePages = {
  leak: {
    pagePath: "/chimney-leak-repair-pottstown-pa",
    title: "Chimney Leak Repair in Pottstown, PA | Find & Fix the Source",
    description:
      "Chimney leaking? Imperial Chimney & Masonry tracks down where water is getting in - crown, cap, flashing, brick, or mortar - and fixes the source for homes in Pottstown and nearby PA towns.",
    keywords: [
      "chimney leak repair pottstown pa",
      "chimney leaking",
      "water leaking from chimney",
      "chimney flashing repair pottstown pa",
      "water in fireplace",
      "chimney waterproofing pottstown pa"
    ],
    h1: "Chimney Leak Repair in Pottstown, PA",
    heroIntro:
      "Ceiling stains, damp walls by the fireplace, or water in the firebox? We find where the water is actually getting in and fix that, not just the symptom.",
    estimateLabel: "Request a Leak Inspection",
    schema: {
      name: "Chimney Leak Repair in Pottstown, PA",
      serviceType: "Chimney leak diagnosis and repair",
      serviceOutput: "A chimney that sheds water instead of letting it into the home"
    },
    overview: {
      title: "Most chimney leaks are not where the stain is",
      paragraphs: [
        "Water that shows up on a ceiling or in a basement has usually travelled a long way from where it got in. It can enter through a cracked crown, a missing cap, failed flashing at the roofline, porous brick, or open mortar joints, then run down the inside of the chimney before it ever shows.",
        "That is why patching the stain, or smearing sealant over the obvious spot, so often fails. We trace the leak back to its entry point, then recommend the repair that actually stops it."
      ],
      checklist: [
        "Leak tracking at the crown, cap, flashing, brick, and mortar joints",
        "Crown repair, resurfacing, or replacement",
        "Step and counter flashing repaired or replaced at the roofline",
        "Stainless steel chimney caps sized to your flue",
        "Breathable masonry waterproofing once the masonry is sound"
      ]
    },
    stats: [
      {
        title: "Common signs",
        description:
          "Brown ceiling or wall stains near the chimney, dampness or a musty smell by the fireplace, water in the firebox, or white staining on the outside brick."
      },
      {
        title: "Why not wait",
        description:
          "Water that sits in masonry freezes and expands every winter. A leak that needs a crown or flashing repair now can mean rebuilt brick in a few seasons."
      },
      {
        title: "Often found with",
        description:
          "Cracked crowns, rusted or missing caps, failed flashing, open mortar joints, and cracked clay flue tiles."
      }
    ],
    photos: {
      title: "Where Chimney Leaks Start",
      intro: "Photos from our own leak repair jobs around Pottstown.",
      items: [
        { src: "/assets/img/leakychimney.JPEG", alt: "Chimney with water damage being diagnosed for a leak", caption: "Leak diagnosis" },
        { src: "/assets/img/chimneyflashing.JPEG", alt: "Chimney flashing at the roofline being repaired", caption: "Flashing repair" },
        { src: "/assets/img/chimneycrownafter.JPEG", alt: "Chimney crown after being repaired and sealed", caption: "Crown repaired & sealed" },
        { src: "/assets/img/sealingchimney.JPEG", alt: "Breathable waterproofing being applied to chimney brick", caption: "Masonry waterproofing" }
      ]
    },
    review: {
      quote:
        "We had a persistent water leak in our basement that other technicians couldn't properly diagnose. Nick did a thorough Level 2 camera inspection and correctly identified that the water was entering through a cracked crown and leaking through old clay joints. ... The basement is finally dry.",
      name: "Jian Sun",
      source: "Google Review"
    },
    signs: {
      title: "Where the water is usually getting in",
      intro: "These three account for most of the chimney leaks we see.",
      items: [
        {
          title: "Cracked or failing crown",
          text: "The crown is the concrete cap on top of the brick. Once it cracks, every rain soaks straight down into the masonry and around the flue."
        },
        {
          title: "Flashing at the roofline",
          text: "The metal where the chimney meets the roof loosens, rusts, or loses its seal. It is one of the most common sources of ceiling stains."
        },
        {
          title: "Missing or rusted cap",
          text: "Without a cap, rain falls straight down the flue. You will often see it as water or rust in the firebox after a storm."
        }
      ]
    },
    relatedIntro: "Leaks usually trace back to the crown, flashing, cap, or mortar joints.",
    locationsTitle: "Chimney Leak Repair in Nearby Towns",
    locationsIntro:
      "We also find and fix chimney leaks across nearby Montgomery, Berks, and Chester County communities.",
    faqTitle: "Chimney Leak FAQ",
    faqIntro: "What homeowners usually ask when water shows up near the chimney.",
    faqs: [
      {
        question: "How do I know if my chimney is leaking?",
        answer:
          "Look for brown stains on ceilings or walls near the chimney, peeling paint or damp drywall beside the fireplace, water or rust in the firebox, a musty smell when it rains, or white staining on the outside brick."
      },
      {
        question: "Is it the chimney or the roof?",
        answer:
          "It is often hard to tell from inside. If the stain is right next to the chimney, the flashing where the two meet is the first suspect, but crowns, caps, and porous brick can produce the same stain. We check all of them so you are not paying to fix the wrong thing."
      },
      {
        question: "Can you just seal the chimney?",
        answer:
          "Waterproofing helps once the masonry is sound, and we use breathable sealers so moisture can still escape. It will not fix a cracked crown, failed flashing, or open joints, so we repair those first."
      },
      {
        question: "Can you repair a chimney leak in winter?",
        answer:
          "Many leak repairs, like caps and flashing, can be done year-round. Mortar and concrete work needs temperatures above freezing to cure, so in a hard freeze we may do a temporary fix and schedule the masonry for a mild stretch."
      },
      {
        question: "What areas do you serve for chimney leak repair?",
        answer:
          "We are based in Pottstown and repair chimney leaks throughout nearby Montgomery, Berks, and Chester County towns."
      }
    ],
    callBand: {
      title: "Water where it shouldn't be?",
      intro: "Call or text a photo of the stain and the chimney - we'll tell you what we think is going on and get you on the schedule."
    }
  },

  inspection: {
    pagePath: "/chimney-inspection-pottstown-pa",
    title: "Chimney Inspection in Pottstown, PA | Level 1 & Level 2 Camera Inspections",
    description:
      "Chimney and fireplace inspections in Pottstown, PA, including Level 2 video camera inspections for home sales, leaks, chimney fires, and new appliances. Photo report included.",
    keywords: [
      "chimney inspection pottstown pa",
      "level 2 chimney inspection",
      "chimney camera inspection",
      "chimney inspection home sale",
      "fireplace inspection pottstown pa",
      "chimney inspection near me"
    ],
    h1: "Chimney Inspections in Pottstown, PA",
    heroIntro:
      "Annual safety checks, Level 2 camera inspections for home sales, and inspections after a leak or chimney fire - with photos of anything we find.",
    estimateLabel: "Book an Inspection",
    schema: {
      name: "Chimney Inspection in Pottstown, PA",
      serviceType: "Chimney and fireplace inspection, including Level 2 video inspection",
      serviceOutput: "A clear report on the condition and safety of the chimney and fireplace"
    },
    overview: {
      title: "Know what is inside the chimney before you light it, buy it, or sell it",
      paragraphs: [
        "Most of a chimney cannot be seen from the room or the roof. Cracked flue tiles, missing mortar joints, and creosote buildup hide inside the flue, which is exactly where a fire or leak starts.",
        "Every sweep includes an inspection of the fireplace and flue. When something needs a closer look - a home sale, a leak, a chimney fire, or a new stove or insert - we run a camera down the flue so you can see what we see."
      ],
      checklist: [
        "Fireplace, damper, smoke chamber, and flue inspection",
        "Level 2 video camera inspection of the full flue",
        "Exterior check of the crown, cap, flashing, and masonry",
        "Photo report of any issues found",
        "Straight answer on what is urgent and what can wait"
      ]
    },
    stats: [
      {
        title: "Buying or selling a home",
        description:
          "Home inspectors usually stop at the firebox. A Level 2 camera inspection shows the inside of the flue before closing, when repairs are still negotiable."
      },
      {
        title: "Annual check",
        description:
          "For any fireplace or stove in use. It comes with our chimney sweep, which starts at $189."
      },
      {
        title: "After something changes",
        description:
          "A chimney fire, a leak, storm or lightning damage, or switching to a new stove, insert, or fuel type."
      }
    ],
    photos: {
      title: "What an Inspection Turns Up",
      intro: "Real findings from inspections we have done locally.",
      items: [
        { src: "/assets/img/creosote3.JPEG", alt: "Heavy creosote buildup found inside a chimney flue", caption: "Creosote buildup" },
        { src: "/assets/img/service-flue-section-1.png", alt: "Damaged clay flue tile section found during inspection", caption: "Damaged flue tiles" },
        { src: "/assets/img/chimneycrown.JPEG", alt: "Cracked chimney crown found during a roof-level inspection", caption: "Cracked crown" },
        { src: "/assets/img/chimneyflashing.JPEG", alt: "Chimney flashing checked at the roofline", caption: "Flashing check" }
      ]
    },
    review: {
      quote: "Nick did a first rate job. Very friendly and clean. Two fireplaces cleaned and inspected and no mess in the house.",
      name: "Rick Stapleford",
      source: "Google Review"
    },
    signs: {
      title: "Which inspection do you need?",
      intro: "The level depends on what is going on with the chimney, not on what costs more.",
      items: [
        {
          title: "Level 1 - routine",
          text: "For a chimney you use regularly with no changes or problems. We check the accessible parts of the fireplace, flue, and exterior. Included with a sweep."
        },
        {
          title: "Level 2 - camera",
          text: "Recommended when a home is sold, after a chimney fire or leak, or when you change appliances. A video camera inspects the entire flue."
        },
        {
          title: "Not sure?",
          text: "Tell us what is happening when you call and we will tell you which one makes sense. If a basic check answers the question, that is what we will recommend."
        }
      ]
    },
    relatedIntro: "Inspections often lead to a sweep, a crown or cap repair, or a new liner.",
    locationsTitle: "Chimney Inspections in Nearby Towns",
    locationsIntro:
      "We inspect chimneys and fireplaces throughout nearby Montgomery, Berks, and Chester County communities.",
    faqTitle: "Chimney Inspection FAQ",
    faqIntro: "What homeowners, buyers, and sellers usually ask about chimney inspections.",
    faqs: [
      {
        question: "How often should a chimney be inspected?",
        answer:
          "Once a year for any fireplace, stove, or insert you use, ideally before heating season. We do the inspection as part of every chimney sweep."
      },
      {
        question: "Do I need a chimney inspection when buying a house?",
        answer:
          "It is strongly recommended. Fire-safety standards call for a Level 2 inspection when a property changes hands, and a general home inspection does not look inside the flue. Finding a cracked liner before closing is much better than finding it the first time you light a fire."
      },
      {
        question: "What is a Level 2 chimney inspection?",
        answer:
          "It includes everything in a routine inspection plus a video camera run through the full length of the flue, along with accessible areas like attics and crawl spaces the chimney passes through."
      },
      {
        question: "Will I get a report?",
        answer:
          "Yes. You get photos of anything we find, an explanation of what it means, and what we would recommend - including what can safely wait."
      },
      {
        question: "Do you inspect gas fireplaces too?",
        answer:
          "Yes. Gas fireplaces and gas log sets still need their venting, pilot, and safety controls checked. We also service pilot assemblies and gas logs."
      }
    ],
    callBand: {
      title: "Closing on a house or lighting the first fire?",
      intro: "Call to book an inspection - tell us if it's for a home sale and we'll work around your timeline."
    }
  },

  crown: {
    pagePath: "/chimney-crown-repair-pottstown-pa",
    title: "Chimney Crown Repair & Chimney Caps in Pottstown, PA",
    description:
      "Chimney crown repair, crown resurfacing, poured-in-place crown replacement, and stainless steel chimney cap installation in Pottstown, PA and nearby towns.",
    keywords: [
      "chimney crown repair pottstown pa",
      "chimney crown replacement",
      "cracked chimney crown",
      "chimney cap installation pottstown pa",
      "chimney cap replacement",
      "crownguard chimney crown"
    ],
    h1: "Chimney Crown Repair & Chimney Caps in Pottstown, PA",
    heroIntro:
      "The crown and cap are the roof of your chimney. When they crack or go missing, water goes straight into the brick and the flue. We repair, resurface, or replace them.",
    estimateLabel: "Get a Crown or Cap Estimate",
    schema: {
      name: "Chimney Crown Repair & Chimney Cap Installation in Pottstown, PA",
      serviceType: "Chimney crown repair, crown replacement, and chimney cap installation",
      serviceOutput: "A sealed chimney top that sheds water and keeps out rain, animals, and debris"
    },
    overview: {
      title: "Small cracks up top become big repairs below",
      paragraphs: [
        "The crown is the concrete slab on top of the chimney. Many are built from leftover mortar instead of a proper crown mix, so they crack after a few winters. Every crack lets water into the brick and around the flue tiles, where freeze-thaw cycles do the rest.",
        "A cap does the other half of the job: it keeps rain, birds, and animals out of the flue. Together they are the cheapest protection a chimney can get, and the first thing we check on any leak."
      ],
      checklist: [
        "Crown crack repair and resurfacing, including Crownguard coatings",
        "Full poured-in-place crown replacement when the old one is too far gone",
        "Stainless steel chimney caps sized to your flue",
        "Replacement of rusted, damaged, or missing caps",
        "Top plates and caps installed with new liners"
      ]
    },
    stats: [
      {
        title: "Signs it's time",
        description:
          "Visible cracks or crumbling on top of the chimney, pieces of concrete on the roof, rust or water in the firebox, or animals in the flue."
      },
      {
        title: "Repair or replace?",
        description:
          "Hairline cracks on a sound crown can be resurfaced. Crowns that are crumbling, loose, or built from thin mortar need replacing."
      },
      {
        title: "Often paired with",
        description:
          "Flashing repair, repointing the top courses of brick, waterproofing, and liner work when water has already reached the flue."
      }
    ],
    photos: {
      title: "Crowns & Caps We've Done",
      intro: "Before, during, and after on local chimneys.",
      items: [
        { src: "/assets/img/chimneycrown.JPEG", alt: "Chimney crown repair in progress", caption: "Crown repair in progress" },
        { src: "/assets/img/chimneycrownafter.JPEG", alt: "Finished chimney crown sealed after repair", caption: "Finished crown, sealed" },
        { src: "/assets/img/chimneycaps.JPEG", alt: "New stainless steel chimney caps installed", caption: "Stainless steel caps" },
        { src: "/assets/img/topplate.JPEG", alt: "Stainless steel top plate and cap on a chimney", caption: "Top plate & cap" }
      ]
    },
    review: {
      quote:
        "Nick did a thorough Level 2 camera inspection and correctly identified that the water was entering through a cracked crown ... and resurfaced the crown with Crownguard. He is very responsive and walked me through each step.",
      name: "Jian Sun",
      source: "Google Review"
    },
    signs: {
      title: "Check your chimney top from the ground",
      intro: "Binoculars from the yard will show you most of what you need to know.",
      items: [
        {
          title: "Cracks or missing chunks",
          text: "Any visible crack in the crown, or concrete pieces collecting on the roof or in the gutter, means water is getting in."
        },
        {
          title: "No cap, or a rusted one",
          text: "If you can see the open flue tile with nothing over it, or the cap is bent or rust-streaked, rain is going straight down the chimney."
        },
        {
          title: "Staining on the top bricks",
          text: "White or dark streaks on the top few courses of brick usually mean water is running off a failing crown into the masonry."
        }
      ]
    },
    relatedIntro: "Crown problems often show up as leaks, loose top bricks, or damaged flue tiles.",
    locationsTitle: "Crown & Cap Work in Nearby Towns",
    locationsIntro:
      "We repair crowns and install chimney caps across nearby Montgomery, Berks, and Chester County communities.",
    faqTitle: "Chimney Crown & Cap FAQ",
    faqIntro: "What homeowners usually ask about the top of the chimney.",
    faqs: [
      {
        question: "What is a chimney crown?",
        answer:
          "It is the concrete or masonry slab that covers the top of the chimney around the flue. Its job is to shed water off the chimney instead of letting it soak into the brick."
      },
      {
        question: "Can a cracked crown be repaired, or does it need replacing?",
        answer:
          "If the crown is structurally sound with surface cracks, it can be repaired and resurfaced with a flexible crown coating like Crownguard. If it is crumbling, loose, or was built too thin, a new poured-in-place crown is the long-term fix."
      },
      {
        question: "Do I really need a chimney cap?",
        answer:
          "Yes. A cap keeps rain, birds, animals, and debris out of the flue and helps with downdrafts. It is one of the least expensive ways to prevent chimney damage."
      },
      {
        question: "What kind of caps do you install?",
        answer:
          "Stainless steel caps sized to your flue. We replace rusted, damaged, or missing caps and install top plates and caps when we put in new liners."
      },
      {
        question: "Can crown work be done in winter?",
        answer:
          "Caps can be installed year-round. Concrete crowns and coatings need temperatures above freezing to cure, so we schedule those for a mild stretch."
      }
    ],
    callBand: {
      title: "Cracks on top of the chimney?",
      intro: "Text a photo from the yard or call - we can usually tell from a picture whether it's a repair or a replacement."
    }
  },

  liner: {
    pagePath: "/chimney-liner-installation-pottstown-pa",
    title: "Chimney Liner Installation & Relining in Pottstown, PA | Stainless Steel Liners",
    description:
      "Stainless steel chimney liner installation and flue relining in Pottstown, PA, plus FireGuard ceramic flue resurfacing for cracked clay flue tiles.",
    keywords: [
      "chimney liner installation pottstown pa",
      "chimney relining pottstown pa",
      "stainless steel chimney liner",
      "cracked flue tiles",
      "flue liner replacement",
      "fireguard flue resurfacing"
    ],
    h1: "Chimney Liner Installation & Relining in Pottstown, PA",
    heroIntro:
      "Cracked clay flue tiles, an unlined chimney, or a new stove or insert? We install stainless steel liners and ceramic flue resurfacing to make the chimney safe again.",
    estimateLabel: "Ask About Relining",
    schema: {
      name: "Chimney Liner Installation & Relining in Pottstown, PA",
      serviceType: "Stainless steel chimney liner installation and flue restoration",
      serviceOutput: "A sound, correctly sized flue that vents safely and drafts properly"
    },
    overview: {
      title: "The liner is what keeps the heat and gases inside the chimney",
      paragraphs: [
        "The flue liner carries smoke and combustion gases up and out, and keeps heat away from the wood framing around the chimney. When clay tiles crack, lose their mortar joints, or were never installed, heat and gases can reach places they should not, and draft suffers.",
        "Depending on what we find, the fix is either a stainless steel liner run down the existing flue, or FireGuard ceramic resurfacing, which seals cracks and gaps inside the existing tiles."
      ],
      checklist: [
        "Stainless steel liners, insulated where the system calls for it",
        "Tee and wall thimble connections for stoves and inserts",
        "Top plate and stainless cap to finish the install",
        "FireGuard ceramic resurfacing for cracked or gapped clay tiles",
        "Camera inspection before and after so you see the result"
      ]
    },
    stats: [
      {
        title: "Ideal for",
        description:
          "Cracked or missing clay flue tiles, unlined or oversized flues, and connecting a new stove, insert, or appliance."
      },
      {
        title: "Liner or resurfacing?",
        description:
          "Resurfacing is often a more affordable fix for damaged tiles in an otherwise sound flue. A full stainless liner is the answer for badly damaged, unlined, or wrongly sized flues."
      },
      {
        title: "How it's found",
        description:
          "Usually on a camera inspection: after a chimney fire, a leak, a home sale, or when installing a new appliance."
      }
    ],
    photos: {
      title: "A Liner Install, Step by Step",
      intro: "From one of our relining jobs.",
      items: [
        { src: "/assets/img/linerchimney.JPEG", alt: "Stainless steel liner being lowered down a chimney", caption: "1. Liner fed down the chimney" },
        { src: "/assets/img/wallthimble.JPEG", alt: "Wall thimble and tee connection for the new liner", caption: "2. Tee & wall thimble" },
        { src: "/assets/img/topplate.JPEG", alt: "Stainless steel top plate and cap installed", caption: "3. Top plate & cap" },
        { src: "/assets/img/fireguard-b4after.png", alt: "Flue before and after FireGuard ceramic resurfacing", caption: "FireGuard resurfacing" }
      ]
    },
    review: {
      quote:
        "Nick installed a 6\" stainless steel liner with vermiculite insulation and resurfaced the crown with Crownguard. ... The basement is finally dry, and the chimney is now up to modern safety standards.",
      name: "Jian Sun",
      source: "Google Review"
    },
    signs: {
      title: "Signs the flue needs attention",
      intro: "Most liner problems are hidden, but these are worth a camera inspection.",
      items: [
        {
          title: "Tile pieces in the firebox",
          text: "Flakes or chunks of clay tile showing up in the fireplace or the cleanout mean the liner is breaking down inside."
        },
        {
          title: "Smoke, odor, or poor draft",
          text: "A damaged or oversized flue drafts poorly, so smoke rolls back into the room or the chimney smells, especially in damp weather."
        },
        {
          title: "New stove or insert",
          text: "Most inserts and stoves need a correctly sized liner connected directly to the appliance. Venting into an old oversized flue is a common problem."
        }
      ]
    },
    relatedIntro: "Liner work often goes with a new crown, a cap, or a full chimney repair.",
    locationsTitle: "Chimney Relining in Nearby Towns",
    locationsIntro:
      "We install chimney liners throughout nearby Montgomery, Berks, and Chester County communities.",
    faqTitle: "Chimney Liner FAQ",
    faqIntro: "What homeowners usually ask about relining a chimney.",
    faqs: [
      {
        question: "How do I know if my chimney liner is damaged?",
        answer:
          "Usually you can't from the outside. Pieces of tile in the firebox, poor draft, or smoke and odors are clues, but a camera inspection of the flue is what confirms it."
      },
      {
        question: "Do I need a stainless steel liner?",
        answer:
          "Not always. If the clay flue is mostly sound with cracks or gaps, FireGuard ceramic resurfacing can restore it and is often less expensive. Unlined, badly damaged, or wrongly sized flues usually need a stainless liner."
      },
      {
        question: "What is FireGuard?",
        answer:
          "A ceramic resurfacing system applied inside the existing flue. It creates a new, smooth, insulated ceramic surface that seals cracks and gaps and is rated for extremely high temperatures."
      },
      {
        question: "Does a wood stove or insert need a liner?",
        answer:
          "In most cases, yes. A correctly sized liner connected to the appliance gives better draft, less creosote buildup, and safer venting than an oversized masonry flue."
      },
      {
        question: "How long does a liner install take?",
        answer:
          "Most installs take a day. We will give you a firm time estimate once we have inspected the chimney."
      }
    ],
    callBand: {
      title: "Told your flue tiles are cracked?",
      intro: "Call with your inspection report or text us photos - we'll explain your options, including the less expensive one if it will do the job."
    }
  },

  fireplace: {
    pagePath: "/fireplace-repair-pottstown-pa",
    title: "Fireplace Repair in Pottstown, PA | Firebox, Gas Fireplace & Pilot Repair",
    description:
      "Fireplace repair in Pottstown, PA: firebox and smoke chamber repair, prefab refractory panels, gas fireplace pilot assembly repair, gas log tune-ups, and smoke or draft problems.",
    keywords: [
      "fireplace repair pottstown pa",
      "gas fireplace repair pottstown pa",
      "firebox repair",
      "gas fireplace pilot won't stay lit",
      "gas log cleaning",
      "fireplace smoking into room"
    ],
    h1: "Fireplace Repair in Pottstown, PA",
    heroIntro:
      "Wood or gas. Cracked fireboxes, pilots that won't stay lit, dirty gas logs, and fireplaces that smoke into the room - we diagnose it and fix it.",
    estimateLabel: "Request a Fireplace Repair",
    schema: {
      name: "Fireplace Repair in Pottstown, PA",
      serviceType: "Wood and gas fireplace repair, including firebox, pilot assembly, and gas log service",
      serviceOutput: "A fireplace that lights reliably, drafts properly, and burns safely"
    },
    overview: {
      title: "Wood-burning and gas fireplaces, inside and out",
      paragraphs: [
        "Fireplaces take a beating. Firebox brick and mortar crack from heat, prefab panels break down, and gas fireplaces develop pilot and ignition problems over time.",
        "We repair the firebox and smoke chamber on masonry fireplaces, replace damaged prefab panels, and service gas fireplaces from the pilot assembly to the log set."
      ],
      checklist: [
        "Firebox and smoke chamber repair",
        "Replacement of damaged prefab refractory panels",
        "Gas fireplace pilot and ignition diagnosis",
        "Thermocouple, thermopile, and full pilot assembly replacement",
        "Gas log cleaning, placement, and tune-ups",
        "Smoke, odor, and draft problem diagnosis"
      ]
    },
    stats: [
      {
        title: "Common calls",
        description:
          "Pilot won't stay lit, gas logs burning sooty or uneven, cracked firebox brick, broken refractory panels, and smoke coming into the room."
      },
      {
        title: "Best time",
        description:
          "Before you need it. Fall books up fast, so getting the fireplace checked in late summer or early fall avoids a wait."
      },
      {
        title: "Often paired with",
        description:
          "An annual sweep and inspection, a new cap, or a liner when the draft problem is in the flue."
      }
    ],
    photos: {
      title: "Fireplace Work We've Done",
      intro: "Wood and gas fireplace repairs from local homes.",
      items: [
        { src: "/assets/img/fireplace-repairs.png", alt: "Finished fireplace interior after repair", caption: "Firebox refresh" },
        { src: "/assets/img/pilotassembly.JPEG", alt: "Gas fireplace pilot assembly being replaced", caption: "Pilot assembly" },
        { src: "/assets/img/gaslogset.JPEG", alt: "Gas log set after cleaning and tune-up", caption: "Gas log tune-up" },
        { src: "/assets/img/creosote3.JPEG", alt: "Creosote buildup found while diagnosing a smoky fireplace", caption: "Draft diagnosis" }
      ]
    },
    review: {
      quote:
        "They repaired the shutoff valve on our ventless gas fireplace and even fixed the drywall and tile surrounding it. They did all the work the same day ... I would highly recommend this company for any fireplace repairs.",
      name: "Sarah K.",
      source: "Thumbtack Review"
    },
    signs: {
      title: "What we fix most often",
      intro: "If your fireplace is doing one of these, it's worth a call.",
      items: [
        {
          title: "Pilot won't stay lit",
          text: "Usually a worn thermocouple or thermopile, or a clogged pilot. We diagnose it and replace parts or the whole pilot assembly."
        },
        {
          title: "Smoke comes into the room",
          text: "Blockages, damper problems, flue sizing, or negative pressure in the house. We find the cause and give you practical options."
        },
        {
          title: "Cracked firebox or panels",
          text: "Open joints and cracked brick or panels let heat reach places it shouldn't. We repair or rebuild the firebox and replace damaged panels."
        }
      ]
    },
    relatedIntro: "Fireplace problems sometimes trace back to the flue, the cap, or a sweep that's overdue.",
    locationsTitle: "Fireplace Repair in Nearby Towns",
    locationsIntro:
      "We repair wood and gas fireplaces across nearby Montgomery, Berks, and Chester County communities.",
    faqTitle: "Fireplace Repair FAQ",
    faqIntro: "What homeowners usually ask before calling about a fireplace.",
    faqs: [
      {
        question: "Why won't my gas fireplace pilot stay lit?",
        answer:
          "The most common causes are a worn thermocouple or thermopile, a dirty pilot orifice, or a failing pilot assembly. We diagnose which it is and replace parts or the full assembly."
      },
      {
        question: "Do you work on gas fireplaces and gas logs?",
        answer:
          "Yes. We repair pilot and ignition problems and clean and tune gas log sets - cleaning the burner, logs, and glass, correcting log placement, and checking the valve and safety controls."
      },
      {
        question: "Why does my fireplace smoke into the room?",
        answer:
          "It can be a blockage, a damper problem, a flue that is the wrong size for the fireplace, negative pressure in the home, or wind. We check each of these and recommend a practical fix."
      },
      {
        question: "Can you repair a cracked firebox?",
        answer:
          "Yes. We repair and rebuild masonry fireboxes and smoke chambers, and replace damaged refractory panels in prefab fireplaces."
      },
      {
        question: "Do you also clean the chimney?",
        answer:
          "Yes. Chimney sweeping starts at $189 and includes a fireplace and flue inspection with a photo report."
      }
    ],
    callBand: {
      title: "Fireplace not working right?",
      intro: "Call or text a photo or short video of what it's doing - it often tells us exactly which part to bring."
    }
  }
};

// Concrete: added as its own service. Scope confirmed by the owner - new
// pours plus repair/resurfacing for sidewalks, walkways, patios, slabs, and
// steps. NOT driveways, NOT stamped/decorative, so neither is mentioned.
const concretePage = {
  pagePath: "/concrete-pottstown-pa",
  title: "Concrete Contractor in Pottstown, PA | Sidewalks, Patios, Steps & Repair",
  description:
    "New concrete sidewalks, walkways, patios, slabs, and steps, plus concrete crack repair, patching, and resurfacing for homes in Pottstown, PA and nearby towns.",
  keywords: [
    "concrete contractor pottstown pa",
    "concrete repair pottstown pa",
    "concrete sidewalk pottstown pa",
    "concrete patio pottstown pa",
    "concrete steps repair pottstown pa",
    "concrete resurfacing pottstown pa",
    "concrete crack repair"
  ],
  h1: "Concrete Work in Pottstown, PA",
  heroIntro:
    "New sidewalks, walkways, patios, slabs, and steps - or repair and resurfacing for the concrete you already have. Same local crew, same clean job site.",
  estimateLabel: "Request a Concrete Estimate",
  schema: {
    name: "Concrete Work in Pottstown, PA",
    serviceType: "Residential concrete installation, repair, and resurfacing",
    serviceOutput: "Solid, level concrete sidewalks, walkways, patios, slabs, and steps"
  },
  overview: {
    title: "New concrete, or a fix for the concrete you have",
    paragraphs: [
      "Not every cracked sidewalk or tired patio needs to be torn out. If the concrete underneath is solid, crack repair, patching, or resurfacing can make it safe and good-looking again for a fraction of the cost of replacing it.",
      "When it is too far gone - heaved, sunken, broken into pieces, or crumbling all the way through - we break it out and pour new. We will tell you honestly which one your concrete needs."
    ],
    checklist: [
      "New concrete sidewalks and walkways",
      "Patios and slabs, including shed and small pad slabs",
      "New concrete steps and stoops",
      "Crack repair and patching of chipped or spalled areas",
      "Resurfacing worn or flaking concrete",
      "Tear-out and replacement of failed sections"
    ]
  },
  stats: [
    {
      title: "Common calls",
      description:
        "Cracked or heaved sidewalk sections, crumbling front steps, flaking patio surfaces, and new walkways or patios."
    },
    {
      title: "Repair or replace?",
      description:
        "Surface wear and cracks on a solid base can usually be repaired or resurfaced. Heaved, sunken, or broken-through concrete is better replaced."
    },
    {
      title: "When we pour",
      description:
        "Concrete needs temperatures above freezing to cure properly, so new pours run spring through fall. Get on the schedule in winter to be first in line."
    }
  ],
  photos: {
    title: "How We Pour a New Sidewalk",
    intro: "Photos from our own sidewalk replacement jobs, from the stone base to the finished walk.",
    items: [
      { src: "/assets/img/concrete-sidewalk-base-1.jpg", alt: "Old sidewalk removed, wood forms set and a stone base laid", caption: "Forms & stone base" },
      { src: "/assets/img/concrete-sidewalk-mesh.jpg", alt: "Reinforcing wire mesh laid inside the sidewalk forms", caption: "Reinforcing mesh" },
      { src: "/assets/img/concrete-sidewalk-pour.jpg", alt: "Freshly poured concrete sidewalk at a street corner", caption: "Fresh pour" },
      { src: "/assets/img/concrete-sidewalk-finished-2.jpg", alt: "Finished new concrete sidewalk with clean control joints", caption: "Finished sidewalk" }
    ]
  },
  review: null,
  signs: {
    title: "Signs your concrete needs attention",
    intro: "Catching these early is usually the difference between a repair and a replacement.",
    items: [
      {
        title: "Trip hazards",
        text: "Sidewalk or walkway sections that have lifted or sunk create an edge someone will catch a foot on. Those sections usually need replacing."
      },
      {
        title: "Crumbling steps",
        text: "Chipped edges, loose corners, and cracks on concrete steps get worse every winter as water gets in and freezes. Caught early, they can be patched."
      },
      {
        title: "Flaking or pitted surface",
        text: "When the top layer of a patio or walk is peeling or pitted but the slab is solid, resurfacing gives it a fresh, even surface without tearing it out."
      }
    ]
  },
  relatedIntro: "We also handle the masonry and cleaning around your concrete.",
  locationsTitle: "Concrete Work in Nearby Towns",
  locationsIntro:
    "We pour and repair concrete across nearby Montgomery, Berks, and Chester County communities.",
  faqTitle: "Concrete FAQ",
  faqIntro: "What homeowners usually ask before booking concrete work.",
  faqs: [
    {
      question: "What concrete work do you do?",
      answer:
        "We pour new sidewalks, walkways, patios, slabs, and steps, and we repair, patch, and resurface existing concrete."
    },
    {
      question: "Can cracked concrete be repaired, or does it need replacing?",
      answer:
        "If the slab is still level and solid, cracks and chipped areas can usually be repaired, and a worn surface can be resurfaced. If it has heaved, sunk, or broken into pieces, replacing that section is the lasting fix."
    },
    {
      question: "Do you do driveways or stamped concrete?",
      answer:
        "No. We focus on sidewalks, walkways, patios, slabs, and steps, and on repairing and resurfacing existing concrete."
    },
    {
      question: "Can you pour concrete in winter?",
      answer:
        "New pours need temperatures above freezing to cure properly, so we schedule them from spring through fall. You can book an estimate any time of year."
    },
    {
      question: "Do you also clean concrete?",
      answer:
        "Yes. We pressure wash patios, walkways, and other concrete surfaces, which is often all an older patio needs to look new again."
    }
  ],
  callBand: {
    title: "Cracked sidewalk or crumbling steps?",
    intro: "Call or text a photo - we'll tell you whether it's a repair or a replacement, and what it will take."
  }
};

export const serviceLandingPages = { ...corePages, concrete: concretePage };

export function buildServiceLandingMetadata(page) {
  return {
    title: page.title,
    description: page.description,
    keywords: [...defaultKeywords, ...page.keywords],
    alternates: { canonical: page.pagePath },
    openGraph: { title: page.title, description: page.description, url: page.pagePath },
    twitter: { card: "summary_large_image", title: page.title, description: page.description }
  };
}
