export interface BusinessInfo {
  name: string;
  tagline: string;
  slogan: string;
  instagramHandle: string;
  instagramUrl: string;
  format: string;
  // Strictly unverified / TBD fields that remain undefined or optional
  phone?: string;
  whatsapp?: string;
  address?: string;
  city?: string;
  mapsUrl?: string;
  openingHours?: { days: string; hours: string }[];
  youtubeUrl?: string;
}

export interface ChipTier {
  id: string;
  baseBagPrice: 10 | 20 | 30 | 50;
  sellingPrice: 39 | 59 | 79 | 109;
  title: string;
  subtitle: string;
  ingredients: string[];
  newAdditions: string[];
  popularBagExamples: string[];
  tag: string;
  isPopular?: boolean;
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  badge: string;
  highlight: string;
}

export interface FruitChaatHighlight {
  title: string;
  description: string;
  tag: string;
  iconName: string;
}
