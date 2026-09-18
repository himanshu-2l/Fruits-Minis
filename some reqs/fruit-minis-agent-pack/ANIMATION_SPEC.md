# Animation Spec

Motion should reinforce food preparation and street-sign energy.

- Hero: staged typography reveal plus subtle food/image entrance; no long cinematic loader.
- Ingredient elements: small staggered entrances when section enters viewport.
- Chips tiers: reveal sequentially like menu-board rows, not floating SaaS cards.
- Hover/tap: tactile 120-220ms responses.
- Scroll: limited transforms; avoid scroll-jacking.
- Marquee: optional and slow; pause/reduce for reduced-motion.
- Mobile: reduce decorative movement and GPU-heavy effects.

No animation may block reading, navigation or CTA interaction. Build a reduced-motion path.
