# Component Spec

Prefer composable components rather than a monolithic page.

Suggested components:
- `SiteHeader`
- `HeroExperience`
- `OfferingSplit`
- `FruitChaatFeature`
- `ChipsAddaMenu`
- `ChipTier` (not necessarily rendered as generic cards)
- `HowItWorks`
- `CartGallery`
- `VisitStrip`
- `SocialCTA`
- `SiteFooter`
- `StickerLabel`, `IngredientTicker`, `SectionMarquee` only if they strengthen the concept

Data must live separately from presentation (`content/site.ts` or equivalent). All price tiers should be data-driven. Images must use optimized image components, meaningful alt text and explicit dimensions/aspect ratios.
