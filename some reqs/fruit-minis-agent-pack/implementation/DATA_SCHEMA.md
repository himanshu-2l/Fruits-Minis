# Content Data Schema

Recommended TypeScript shape:

```ts
type Business = {
  name: string;
  tagline: string;
  instagram?: string;
  youtube?: string;
  phone?: string;
  whatsapp?: string;
  address?: string;
  mapsUrl?: string;
  hours?: Array<{ day: string; hours: string }>;
};

type ChipTier = {
  baseBagPrice: 10 | 20 | 30 | 50;
  sellingPrice: 39 | 59 | 79 | 109;
  ingredients: string[];
};

type FruitChaatItem = {
  name: string;
  price?: number;
  description?: string;
  image?: string;
};
```

Missing fields remain undefined and corresponding production UI is hidden.
