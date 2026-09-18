import { BusinessInfo, ChipTier, HowItWorksStep, FruitChaatHighlight } from "./types";

export const businessInfo: BusinessInfo = {
  name: "Fruit Minis",
  tagline: "Small Bites. Big Freshness.",
  slogan: "Crispy, Crunchy, Chatpata! Fun in every bite!",
  instagramHandle: "_fruit_minis",
  instagramUrl: "https://www.instagram.com/_fruit_minis?stkn=bHNlZDhoMHk2eTdz",
  youtubeHandle: "@pranjalpatil3465",
  youtubeUrl: "https://youtube.com/@pranjalpatil3465?si=ZhlF5B1E2XcCMACS",
  format: "Authentic Street Food Cart",
  // Strictly unverified / TBD:
  // phone: undefined,
  // whatsapp: undefined,
  // address: undefined,
  // city: undefined,
  // mapsUrl: undefined,
  // openingHours: undefined,
};

export const chipsAddaTiers: ChipTier[] = [
  {
    id: "tier-10",
    baseBagPrice: 10,
    sellingPrice: 39,
    title: "10₹ Chips Bag",
    subtitle: "The Classic Loaded Starter",
    tag: "Pocket-Friendly Street Favorite",
    ingredients: [
      "Choice of ₹10 Chips Bag",
      "Fresh Diced Onion",
      "Juicy Country Tomatoes",
      "Crunchy Crisp Cucumber",
      "Sweet Golden Corn",
      "Fruit Minis Signature House Sauces",
    ],
    newAdditions: ["Farm Veggies (Onion, Tomato, Cucumber, Sweet Corn)", "All Sauces"],
    popularBagExamples: ["Lay's Classic", "Kurkure Masala", "Doritos"],
  },
  {
    id: "tier-20",
    baseBagPrice: 20,
    sellingPrice: 59,
    title: "20₹ Chips Bag",
    subtitle: "Loaded with Melted Cheese",
    tag: "Crowd Favorite",
    isPopular: true,
    ingredients: [
      "Choice of ₹20 Chips Bag",
      "Fresh Diced Onion",
      "Juicy Country Tomatoes",
      "Crunchy Crisp Cucumber",
      "Sweet Golden Corn",
      "Rich Grated Cheese",
      "Fruit Minis Signature House Sauces",
    ],
    newAdditions: ["Rich Grated Cheese"],
    popularBagExamples: ["Lay's Magic Masala", "Kurkure Solid Masti", "Doritos Sweet Chilli"],
  },
  {
    id: "tier-30",
    baseBagPrice: 30,
    sellingPrice: 79,
    title: "30₹ Chips Bag",
    subtitle: "Paneer + Cheese Double Delight",
    tag: "High Protein & Cheesy",
    ingredients: [
      "Choice of ₹30 Chips Bag",
      "Fresh Diced Onion",
      "Juicy Country Tomatoes",
      "Crunchy Crisp Cucumber",
      "Sweet Golden Corn",
      "Soft Fresh Paneer Cubes",
      "Rich Grated Cheese",
      "Fruit Minis Signature House Sauces",
    ],
    newAdditions: ["Fresh Soft Paneer Cubes", "Rich Grated Cheese"],
    popularBagExamples: ["Doritos Nacho Cheese", "Lay's Wafers", "Kurkure Puffcorn"],
  },
  {
    id: "tier-50",
    baseBagPrice: 50,
    sellingPrice: 109,
    title: "50₹ Chips Bag",
    subtitle: "The Ultimate Monster Feast",
    tag: "Fully Loaded King Size",
    ingredients: [
      "Choice of ₹50 Party Pack Chips Bag",
      "Fresh Diced Onion",
      "Juicy Country Tomatoes",
      "Crunchy Crisp Cucumber",
      "Sweet Golden Corn",
      "Soft Fresh Paneer Cubes",
      "Rich Grated Cheese",
      "Extra Gourmet Toppings",
      "Fruit Minis Signature House Sauces",
    ],
    newAdditions: ["Paneer Cubes", "Double Cheese", "Special Extra Toppings"],
    popularBagExamples: ["Doritos Jumbo", "Lay's Party Pack", "Kurkure Jumbo"],
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    stepNumber: "01",
    title: "Pick Your Own Bag",
    description:
      "Choose your favorite snack pack right at the cart — from ₹10 quick bites to ₹50 jumbo packs. Bring your favorite bag or pick one right off the rack.",
    badge: "Step 1: Choice",
    highlight: "Lay's, Kurkure, Doritos & more",
  },
  {
    stepNumber: "02",
    title: "Select Your Loaded Level",
    description:
      "Choose your tier: Classic Veggies (₹39), Cheesy Melt (₹59), Paneer + Cheese (₹79), or the Full Monster Feast with Extra Toppings (₹109).",
    badge: "Step 2: Customization",
    highlight: "Clear transparent pricing",
  },
  {
    stepNumber: "03",
    title: "Watch Us Slice & Load It",
    description:
      "We slice the bag horizontally, toss in fresh diced onions, ripe tomatoes, crisp cucumber, sweet golden corn, and drizzle our special chatpata street sauces.",
    badge: "Step 3: Fresh Craft",
    highlight: "Freshly cut vegetables & sauces",
  },
  {
    stepNumber: "04",
    title: "Grab a Spoon & Crunch!",
    description:
      "No messy plates needed. Eat right out of your customized, steaming, loaded snack bag with every bite bursting with flavor and crunch.",
    badge: "Step 4: Pure Street Joy",
    highlight: "Zero hassle, maximum crunch",
  },
];

export const fruitChaatHighlights: FruitChaatHighlight[] = [
  {
    title: "Cut Fresh to Order",
    description: "No pre-sliced tired fruits sitting in water. Every bowl is diced live at the cart right when you order.",
    tag: "Pure Crispness",
    iconName: "Sparkles",
  },
  {
    title: "The Signature Street Masala",
    description: "A proprietary blend of roasted cumin, black salt, tangy amchur, and gentle heat that wakes up every sweet fruit note.",
    tag: "Chatpata Zing",
    iconName: "Flame",
  },
  {
    title: "Seasonal Fruit Medley",
    description: "Crisp mountain apples, juicy watermelon slices, sweet bananas, ruby pomegranate seeds, and fresh citrus bursts.",
    tag: "Natural Vitality",
    iconName: "Apple",
  },
  {
    title: "Healthy Without Compromise",
    description: "Small bites packed with massive hydration, natural vitamins, and pure refreshment. The guilt-free street craving.",
    tag: "Daily Wellness",
    iconName: "HeartPulse",
  },
];
