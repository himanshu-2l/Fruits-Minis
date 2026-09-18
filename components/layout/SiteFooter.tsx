import React from "react";
import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/content/site";
import { Instagram, MapPin, Sparkles, Heart } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-street-black text-zinc-300 border-t-4 border-brand-leaf pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-leaf bg-white">
                <Image
                  src="/images/fruit-minis-logo.jpeg"
                  alt="Fruit Minis Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-display text-2xl tracking-wide text-white font-black block leading-none">
                  FRUIT MINIS
                </span>
                <span className="text-xs font-bold text-street-yellow uppercase tracking-wider">
                  {businessInfo.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Fresh fruit chaat prepared live to order, paired with the legendary American-style BYOB Chips Adda. Authentic, chatpata Indian street-food energy in every bite.
            </p>
            <div className="inline-block bg-zinc-900 border border-zinc-700 px-3 py-1.5 rounded-md text-xs font-mono text-zinc-400">
              ⚡ {businessInfo.slogan}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display text-lg font-black text-white uppercase tracking-wider">
              On The Menu
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#fruit-chaat"
                  className="hover:text-street-yellow transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-lime" />
                  Fresh Fruit Chaat
                </Link>
              </li>
              <li>
                <Link
                  href="#chips-adda"
                  className="hover:text-street-yellow transition-colors flex items-center gap-1.5"
                >
                  <span className="text-street-flame">🔥</span>
                  Chips Adda (BYOB Menu)
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="hover:text-street-yellow transition-colors"
                >
                  How Chips Adda Works
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  className="hover:text-street-yellow transition-colors"
                >
                  Cart Signage &amp; Photos
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Cart Location Notice */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="font-display text-lg font-black text-white uppercase tracking-wider">
              Cart Location &amp; Updates
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              We operate as a live street-food cart. Real-time cart spot updates, daily fruit batches, and seasonal specials are posted directly to our Instagram stories.
            </p>
            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-lg shadow-sticker transition-all"
            >
              <Instagram className="w-4 h-4" />
              <span>Follow @{businessInfo.instagramHandle}</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Fruit Minis. All rights reserved. Made with <Heart className="w-3 h-3 inline text-red-500 fill-red-500 mx-0.5" /> for street food lovers.
          </p>
          <p className="text-center md:text-right max-w-xl text-[11px] text-zinc-400 leading-tight">
            * Lay's, Kurkure, Doritos and other brand names are registered trademarks of their respective owners and are mentioned solely as descriptive examples of snack bags customers may bring or select. No sponsorship or endorsement is implied.
          </p>
        </div>
      </div>
    </footer>
  );
}
