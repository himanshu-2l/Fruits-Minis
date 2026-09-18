import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fruitminis.in"),
  title: "Fruit Minis | Small Bites. Big Freshness.",
  description:
    "Official website of Fruit Minis. Discover fresh, juicy Fruit Chaat and American-Style BYOB Chips Adda starting at ₹39. Crispy, crunchy, chatpata street food made fresh to order.",
  keywords: [
    "Fruit Minis",
    "Fruit Chaat",
    "Chips Adda",
    "BYOB Chips",
    "Street Food",
    "Fresh Fruit",
    "Chatpata Snacks",
  ],
  authors: [{ name: "Fruit Minis" }],
  openGraph: {
    title: "Fruit Minis — Small Bites. Big Freshness.",
    description:
      "Fresh, juicy Fruit Chaat meets loaded, crunchy Chips Adda starting at ₹39. Authentic Indian street-food cart.",
    images: [
      {
        url: "/images/fruit-minis-logo.jpeg",
        width: 800,
        height: 800,
        alt: "Fruit Minis — Small Bites. Big Freshness.",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fruit Minis — Small Bites. Big Freshness.",
    description:
      "Fresh Fruit Chaat & Loaded Chips Adda starting at ₹39. Pure street-food energy.",
    images: ["/images/fruit-minis-logo.jpeg"],
  },
  icons: {
    icon: "/images/fruit-minis-logo.jpeg",
    apple: "/images/fruit-minis-logo.jpeg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1B7A38",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Fruit Minis",
    description: "Authentic street food cart serving fresh Fruit Chaat and customizable loaded Chips Adda.",
    servesCuisine: ["Indian Street Food", "Fruit Chaat", "Snacks"],
    priceRange: "₹39 - ₹109",
    image: "/images/fruit-minis-logo.jpeg",
    sameAs: [
      "https://www.instagram.com/_fruit_minis?stkn=bHNlZDhoMHk2eTdz",
      "https://youtube.com/@pranjalpatil3465?si=ZhlF5B1E2XcCMACS",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-paper text-ink selection:bg-brand-mango selection:text-street-black antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-street-yellow focus:text-street-black focus:font-bold focus:px-4 focus:py-2 focus:rounded focus:shadow-sticker"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
