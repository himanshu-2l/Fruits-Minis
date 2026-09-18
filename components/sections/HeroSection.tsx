"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/content/site";
import { Sparkles, Flame, ArrowDown, ShieldCheck, Instagram } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-paper pt-8 pb-16 lg:pt-14 lg:pb-24 border-b-2 border-ink/10">
      {/* Background Street Texture Elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-brand-mango/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-brand-leaf/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bold Editorial Typography & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Street Cart Badge */}
            <div className="inline-flex items-center gap-2 bg-paper-100 border-2 border-ink px-3.5 py-1.5 rounded-full shadow-sticker text-xs font-black uppercase tracking-wider text-ink">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-leaf animate-pulse" />
              <span>Street Cart Sensation • Bemetara</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-ink uppercase leading-[0.92]">
                SMALL BITES. <br />
                <span className="text-brand-leaf">BIG FRESHNESS.</span>
              </h1>
              <p className="font-display text-2xl sm:text-3xl text-brand-citrus font-black uppercase tracking-wide">
                Fresh Fruit Chaat <span className="text-ink">×</span> Loaded Chips Adda
              </p>
            </div>

            {/* Core Story Paragraph */}
            <p className="text-base sm:text-lg text-ink/80 max-w-xl leading-relaxed font-medium">
              We took the joy of crisp, juicy seasonal fruit bowls and paired it with the ultimate street crunch: <strong>American-Style BYOB Chips Adda</strong>. Pick your favorite snack bag and watch us load it with fresh veggies, melted cheese, paneer, and chatpata sauces.
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 bg-brand-leaf/10 border border-brand-leaf/30 text-brand-leaf text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg">
                <Sparkles className="w-4 h-4 text-brand-leaf" />
                Live Cut-to-Order Fruit
              </span>
              <span className="inline-flex items-center gap-1.5 bg-street-flame/10 border border-street-flame/30 text-street-flame text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg">
                <Flame className="w-4 h-4 text-street-flame" />
                BYOB Chips from ₹39
              </span>
              <span className="inline-flex items-center gap-1.5 bg-brand-mango/20 border border-brand-mango/40 text-amber-900 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg">
                <ShieldCheck className="w-4 h-4 text-amber-700" />
                100% Veg &amp; Pure Street Energy
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Link
                href="#chips-adda"
                className="inline-flex items-center justify-center gap-2 bg-street-black text-street-yellow hover:bg-zinc-900 px-6 py-3.5 rounded-xl font-display text-lg tracking-wider uppercase shadow-sticker hover:translate-y-[-2px] active:translate-y-[1px] transition-all min-h-[48px]"
              >
                <Flame className="w-5 h-5 text-street-yellow" />
                <span>Explore Chips Adda Menu</span>
              </Link>
              <Link
                href="#fruit-chaat"
                className="inline-flex items-center justify-center gap-2 bg-brand-leaf text-white hover:bg-brand-leaf-dark px-6 py-3.5 rounded-xl font-display text-lg tracking-wider uppercase shadow-sticker hover:translate-y-[-2px] active:translate-y-[1px] transition-all min-h-[48px]"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>Fresh Fruit Chaat</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Composition with Official Logo & Street Sign Badges */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Rotating Background Starburst / Accent Ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-mango/40 via-brand-leaf/20 to-brand-citrus/30 rounded-3xl -rotate-3 -z-10" />

              {/* Main Badge Card */}
              <div className="relative bg-paper-50 border-4 border-ink rounded-2xl p-6 sm:p-8 shadow-sticker-lg text-center space-y-6">
                {/* Real circular logo asset */}
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-brand-leaf shadow-sticker">
                  <Image
                    src="/images/fruit-minis-logo.jpeg"
                    alt="Fruit Minis Official Logo — Small Bites. Big Freshness."
                    fill
                    sizes="(max-width: 640px) 200px, 240px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating Street Price Sticker */}
                <div className="absolute -top-4 -right-4 sm:-right-6 bg-street-yellow border-2 border-ink text-street-black px-4 py-2 rounded-xl shadow-sticker rotate-6 transform hover:rotate-0 transition-transform">
                  <span className="text-[10px] font-black uppercase tracking-widest block leading-none">
                    Chips Adda
                  </span>
                  <span className="font-display text-2xl font-black leading-none">
                    STARTING ₹39
                  </span>
                </div>

                {/* Tagline Ribbon Box */}
                <div className="bg-street-black text-white p-3.5 rounded-xl border-2 border-street-yellow shadow-sticker">
                  <p className="font-display text-lg sm:text-xl text-street-yellow tracking-wider uppercase font-black">
                    "Crispy, Crunchy, Chatpata!"
                  </p>
                  <p className="text-xs text-zinc-300 font-medium mt-0.5">
                    Live food cart experience • Zero artificial fluff
                  </p>
                </div>

                {/* Instagram Quick Connect */}
                <div className="pt-1">
                  <a
                    href={businessInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-ink/80 hover:text-pink-600 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span>Follow <strong>@{businessInfo.instagramHandle}</strong> for daily cart spots</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
