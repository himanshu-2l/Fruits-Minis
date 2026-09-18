# Fruit Minis — Official Website

> **"Small Bites. Big Freshness."**  
> Official website for **Fruit Minis**, an authentic Indian street-food cart serving fresh, juicy **Fruit Chaat** and the signature **Chips Adda** (American-Style BYOB chips chaat starting at ₹39).

---

## 🌟 The Fruit Minis Experience

Fruit Minis brings together two complementary street-food cravings:

1. **Fresh Fruit Chaat**: Seasonal crisp fruits (apples, watermelons, bananas, pomegranates, citrus) cut live to order and tossed in our proprietary roasted cumin, black salt, and amchur masala blend.
2. **Chips Adda (Bring Your Own Bag)**: Customers pick or bring any sealed snack bag (₹10, ₹20, ₹30, or ₹50). We slice the bag open horizontally and load it up with crisp garden veggies, melted cheese, soft paneer, and signature street sauces.

### 📋 Verified Chips Adda Menu
- **₹10 Chips Bag** $\rightarrow$ **Selling Price ₹39**: Chips + Veggies (Onion, Tomato, Cucumber, Sweet Corn) + All Sauces
- **₹20 Chips Bag** $\rightarrow$ **Selling Price ₹59**: Chips + Veggies + Melted Cheese + All Sauces *(Crowd Favorite)*
- **₹30 Chips Bag** $\rightarrow$ **Selling Price ₹79**: Chips + Veggies + Soft Paneer Cubes + Melted Cheese + All Sauces
- **₹50 Chips Bag** $\rightarrow$ **Selling Price ₹109**: Party Pack Chips + Veggies + Paneer + Cheese + Extra Gourmet Toppings + All Sauces

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom "Street Cart Editorial" tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: Purposeful native CSS keyframes and responsive micro-interactions (with `prefers-reduced-motion` support)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
├── app/
│   ├── globals.css            # Custom chalkboard, paper textures & tokens
│   ├── layout.tsx             # Root layout, schema.org FoodEstablishment, SEO
│   └── page.tsx               # Homepage assembling all sections
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx     # Sticky navigation with mobile drawer & live ticker
│   │   └── SiteFooter.tsx     # Brand footer, legal notices & trademark disclaimers
│   └── sections/
│       ├── HeroSection.tsx    # Editorial hero with badge seal & price sticker
│       ├── TwoCravings.tsx    # Dual split (Fruit Chaat vs Chips Adda)
│       ├── ChipsAddaSection.tsx # Interactive tier explorer & chalkboard menu
│       ├── FruitChaatSection.tsx # Visual celebration of live cut fruits & masala
│       ├── HowItWorks.tsx     # 4-step BYOB visual flow
│       ├── CartGallery.tsx    # Real cart imagery, vinyl signage & menu board
│       └── SocialConnect.tsx  # Instagram bridge (@_fruit_minis) with copy utility
├── content/
│   ├── site.ts                # Single source of truth for verified business data
│   └── types.ts               # Strict TypeScript content definitions
├── public/
│   └── images/                # Optimized logo, cart signage & menu board photos
└── some reqs/                 # Original specifications & agent pack
```

---

## 📱 Connect With Us
- **Instagram**: [@_fruit_minis](https://www.instagram.com/_fruit_minis?stkn=bHNlZDhoMHk2eTdz)
- **YouTube**: [@pranjalpatil3465](https://youtube.com/@pranjalpatil3465?si=ZhlF5B1E2XcCMACS)
- Real-time cart locations, daily fresh fruit batches, and behind-the-counter vlogs are posted directly to our official channels.

