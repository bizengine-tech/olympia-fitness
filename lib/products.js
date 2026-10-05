import { PHOTOS } from "./images";

export const CATEGORIES = [
  { slug: "cardio", name: "Cardio", photo: PHOTOS.cardioRow },
  { slug: "strength", name: "Strength", photo: PHOTOS.barbell },
  { slug: "multi-station", name: "Multi Station", photo: PHOTOS.multiStation },
  { slug: "home-fitness", name: "Home Fitness", photo: PHOTOS.homeFitness },
  { slug: "kids-equipment", name: "Kids Equipment", photo: PHOTOS.darkRed },
];

export const PRODUCTS = [
  {
    slug: "treadmill-x1",
    name: "Treadmill X1",
    category: "cardio",
    summary: "Commercial-grade treadmill built for daily heavy use.",
    photo: PHOTOS.cardioRow,
    isNew: true,
    specs: [
      ["Motor", "3.0 HP AC, continuous duty"],
      ["Max Speed", "22 km/h"],
      ["Incline", "0-15%, motorised"],
      ["Deck Size", "56 x 155 cm"],
      ["Dimensions", "210 x 90 x 150 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Built for gyms running heavy daily traffic, with a reinforced deck and a motor rated for continuous commercial use. Handles back-to-back sessions without overheating.",
  },
  {
    slug: "treadmill-x2",
    name: "Treadmill X2",
    category: "cardio",
    summary: "Compact commercial treadmill with a wider running belt.",
    photo: PHOTOS.cardioRow,
    isNew: true,
    specs: [
      ["Motor", "3.5 HP AC, continuous duty"],
      ["Max Speed", "20 km/h"],
      ["Incline", "0-12%, motorised"],
      ["Deck Size", "58 x 150 cm"],
      ["Dimensions", "205 x 92 x 148 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "A slightly more compact footprint than the X1 without sacrificing motor durability — a good fit for gyms tight on cardio-zone floor space.",
  },
  {
    slug: "elliptical-e2",
    name: "Elliptical E2",
    category: "cardio",
    summary: "Low-impact commercial elliptical with adjustable stride.",
    photo: PHOTOS.cardioRow,
    isNew: true,
    specs: [
      ["Stride Length", "51 cm, adjustable"],
      ["Resistance Levels", "20"],
      ["Flywheel", "16 kg"],
      ["Dimensions", "195 x 68 x 165 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "A smooth, low-impact cardio option members return to daily — heavy flywheel keeps the motion steady even at higher resistance levels.",
  },
  {
    slug: "upright-bike-u1",
    name: "Upright Bike U1",
    category: "cardio",
    summary: "Commercial upright cycle with magnetic resistance.",
    photo: PHOTOS.cardioRow,
    specs: [
      ["Resistance", "Magnetic, 24 levels"],
      ["Flywheel", "10 kg"],
      ["Console", "LCD, heart-rate compatible"],
      ["Dimensions", "120 x 55 x 140 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Quiet magnetic resistance and a compact frame make this an easy fit for gyms running multiple bikes in a single row.",
  },
  {
    slug: "rowing-machine-r1",
    name: "Rowing Machine R1",
    category: "cardio",
    summary: "Air-resistance rower built for high-frequency commercial use.",
    photo: PHOTOS.cardioRow,
    specs: [
      ["Resistance", "Air, self-regulating"],
      ["Rail Length", "215 cm"],
      ["Max User Weight", "150 kg"],
      ["Dimensions", "244 x 61 cm (folds to 96 x 61 cm)"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Folds upright for storage between classes — built for gyms that run group rowing sessions back to back.",
  },
  {
    slug: "olympic-bench-press",
    name: "Olympic Bench Press",
    category: "strength",
    summary: "Flat-to-incline bench rated for heavy daily loading.",
    photo: PHOTOS.barbell,
    isNew: true,
    specs: [
      ["Frame", "11-gauge steel, powder-coated"],
      ["Adjustment", "Flat / Incline / Decline"],
      ["Max Load", "450 kg"],
      ["Dimensions", "150 x 60 x 120 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "A reinforced frame built to take a beating from daily heavy sets, not just the odd personal-best attempt.",
  },
  {
    slug: "power-rack-pr-500",
    name: "Power Rack PR-500",
    category: "strength",
    summary: "Full commercial power rack with safety arms and pull-up bar.",
    photo: PHOTOS.barbell,
    isNew: true,
    specs: [
      ["Frame", "11-gauge steel, powder-coated"],
      ["Height", "230 cm"],
      ["Safety Arms", "Adjustable, drop-in"],
      ["Pull-Up Bar", "Multi-grip"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Steel, never bent — this frame is tested to still hold after ten thousand reps, not just out of the box.",
  },
  {
    slug: "smith-machine",
    name: "Smith Machine",
    category: "strength",
    summary: "Guided-bar strength station for safe solo heavy lifting.",
    photo: PHOTOS.barbell,
    specs: [
      ["Frame", "11-gauge steel, powder-coated"],
      ["Bar Travel", "Linear bearing guided"],
      ["Safety Stops", "20 adjustable positions"],
      ["Dimensions", "220 x 130 x 220 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Guided bar path lets members train heavy without a spotter — a common request from gyms with high solo-training traffic.",
  },
  {
    slug: "squat-rack",
    name: "Squat Rack",
    category: "strength",
    summary: "Compact squat rack for tighter strength-zone layouts.",
    photo: PHOTOS.barbell,
    specs: [
      ["Frame", "11-gauge steel, powder-coated"],
      ["Height", "210 cm"],
      ["Footprint", "120 x 120 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "A smaller footprint than the full power rack — built for gyms fitting more stations into the same strength zone.",
  },
  {
    slug: "4-station-multi-gym",
    name: "4-Station Multi Gym",
    category: "multi-station",
    summary: "Four independent stations sharing one compact frame.",
    photo: PHOTOS.multiStation,
    isNew: true,
    specs: [
      ["Stations", "4 (lat pulldown, row, chest press, leg press)"],
      ["Weight Stacks", "4 x 90 kg"],
      ["Frame", "11-gauge steel, powder-coated"],
      ["Dimensions", "340 x 280 x 210 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Four members can train at once on one frame — a space-efficient way to cover a full-body circuit in a smaller footprint.",
  },
  {
    slug: "cable-crossover-machine",
    name: "Cable Crossover",
    category: "multi-station",
    summary: "Dual-tower cable station for full-body functional training.",
    photo: PHOTOS.multiStation,
    specs: [
      ["Weight Stacks", "2 x 100 kg"],
      ["Pulley Height", "Adjustable, full range"],
      ["Frame", "11-gauge steel, powder-coated"],
      ["Dimensions", "310 x 90 x 225 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "One of the most heavily used stations on any commercial floor — built with a reinforced pulley system for daily wear.",
  },
  {
    slug: "functional-trainer",
    name: "Functional Trainer",
    category: "multi-station",
    summary: "Dual-adjustable pulley system for functional strength work.",
    photo: PHOTOS.multiStation,
    specs: [
      ["Weight Stacks", "2 x 95 kg"],
      ["Pulley Positions", "20, dual-sided"],
      ["Frame", "11-gauge steel, powder-coated"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Covers everything from rehab-style movements to heavy functional pulls, on one shared frame.",
  },
  {
    slug: "adjustable-dumbbell-set",
    name: "Adjustable Dumbbell Set",
    category: "home-fitness",
    summary: "Space-saving adjustable dumbbells, 5-32.5 kg per hand.",
    photo: PHOTOS.homeFitness,
    specs: [
      ["Weight Range", "5-32.5 kg per hand"],
      ["Adjustment", "Dial, quick-change"],
      ["Includes", "Storage tray"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Replaces a full rack of fixed dumbbells with two — a common pick for boutique studios and small home-fitness corners.",
  },
  {
    slug: "foldable-treadmill",
    name: "Foldable Treadmill",
    category: "home-fitness",
    summary: "Light-commercial treadmill that folds flat for storage.",
    photo: PHOTOS.homeFitness,
    specs: [
      ["Motor", "2.0 HP AC"],
      ["Max Speed", "16 km/h"],
      ["Folded Footprint", "90 x 70 cm"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Built for lighter daily traffic than our full commercial line — a fit for boutique studios and home-fitness setups.",
  },
  {
    slug: "junior-trampoline",
    name: "Junior Trampoline",
    category: "kids-equipment",
    summary: "Safety-netted trampoline sized for supervised kids' zones.",
    photo: PHOTOS.darkRed,
    specs: [
      ["Diameter", "244 cm"],
      ["Safety Net", "Full enclosure, padded"],
      ["Max User Weight", "60 kg per user"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "Built for supervised gym kids'-zones, not backyard use — reinforced frame and full enclosure netting as standard.",
  },
  {
    slug: "kids-multi-play-gym-set",
    name: "Kids Multi-Play Gym Set",
    category: "kids-equipment",
    summary: "Combination climbing, swing and balance station for kids.",
    photo: PHOTOS.darkRed,
    specs: [
      ["Stations", "Climbing wall, swing, balance beam"],
      ["Frame", "Powder-coated steel"],
      ["Recommended Age", "4-10 years"],
      ["Warranty", "1 year comprehensive"],
    ],
    overview:
      "A single station that keeps a kids' zone occupied while parents train — sized and rated for supervised commercial use.",
  },
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === categorySlug);
}

export function getRelatedProducts(product, count = 3) {
  return PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, count);
}
