"use client";

import React, { useState } from "react";
import Image from "next/image";
import { chipsAddaTiers } from "@/content/site";
import { ChipTier } from "@/content/types";
import { Check, Flame, Sparkles, Plus, AlertCircle } from "lucide-react";

export function ChipsAddaSection() {
  const [selectedTierId, setSelectedTierId] = useState<string>("tier-20");

  const selectedTier =
    chipsAddaTiers.find((t) => t.id === selectedTierId) || chipsAddaTiers[1];

  return (
    <section
      id="chips-adda"
      className="py-16 sm:py-24 chalkboard-bg text-white border-b-4 border-street-yellow relative overflow-hidden"
    >
      {/* Decorative Chalkboard Elements */}
      <div className="absolute top-4 left-4 text-xs font-mono text-zinc-600 uppercase tracking-widest hidden sm:block">
        // FRUIT MINIS STREET MENU • CHIPS ADDA
      </div>
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-street-flame/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-street-flame text-white font-display text-sm tracking-widest uppercase px-4 py-1 rounded-full shadow-sticker rotate-[-1deg]">
            <Flame className="w-4 h-4" />
            <span>American-Style BYOB Street Concept</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
            CHIPS <span className="text-street-yellow">ADDA</span>
          </h2>

          <div className="inline-block border-2 border-dashed border-street-yellow/40 bg-zinc-900/80 px-4 py-2 rounded-xl">
            <span className="font-display text-lg sm:text-xl text-street-yellow tracking-wider uppercase font-black">
              BRING YOUR OWN BAG MENU
            </span>
          </div>

          <p className="text-sm sm:text-base text-zinc-300 font-medium max-w-xl mx-auto leading-relaxed">
            Pick any packaged chips bag at the cart (or bring your favorite). We cut it open and load it up with crisp garden veggies, melted cheese, paneer, and chatpata sauces.
          </p>
        </div>

        {/* Interactive Tier Explorer */}
        <div className="bg-street-card border-4 border-street-yellow/60 rounded-3xl p-6 sm:p-10 shadow-sticker-lg mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b-2 border-zinc-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-street-yellow">
                Interactive Tier Customizer
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-white font-black uppercase mt-0.5">
                Choose Your Bag Level
              </h3>
            </div>
            <span className="text-xs bg-zinc-800 text-zinc-400 font-mono px-3 py-1 rounded-full border border-zinc-700">
              Verified Menu Pricing
            </span>
          </div>

          {/* Tier Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 my-8">
            {chipsAddaTiers.map((tier) => {
              const isSelected = tier.id === selectedTier.id;
              return (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTierId(tier.id)}
                  className={`relative p-4 rounded-2xl border-2 text-left transition-all min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-street-yellow ${
                    isSelected
                      ? "bg-street-yellow text-street-black border-white shadow-sticker scale-[1.02]"
                      : "bg-zinc-900 text-zinc-300 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800"
                  }`}
                >
                  {tier.isPopular && (
                    <span className="absolute -top-2.5 right-3 bg-street-red text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                      Popular
                    </span>
                  )}
                  <div className="font-display text-lg sm:text-xl font-black uppercase leading-tight">
                    {tier.title}
                  </div>
                  <div
                    className={`font-mono text-xs font-bold mt-1 ${
                      isSelected ? "text-zinc-900" : "text-street-yellow"
                    }`}
                  >
                    Selling Price: ₹{tier.sellingPrice}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Tier Details Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/80 border-2 border-dashed border-zinc-800 rounded-2xl p-6 sm:p-8">
            {/* Price Callout (Chalkboard Sunburst Style) */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-4">
              <div className="inline-block bg-street-red text-white text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md shadow-sticker">
                {selectedTier.tag}
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block">
                  Total Loaded Price
                </span>
                <div className="font-display text-6xl sm:text-7xl font-black text-street-yellow tracking-tight leading-none mt-1">
                  ₹{selectedTier.sellingPrice}
                </div>
                <span className="text-xs text-zinc-400 font-mono mt-1 block">
                  Base bag ₹{selectedTier.baseBagPrice} + Full Fresh Load
                </span>
              </div>

              <p className="text-sm text-zinc-300 font-medium">
                {selectedTier.subtitle}
              </p>

              <div className="text-xs text-zinc-400 font-mono bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                💡 <span className="text-zinc-300">Popular Bag Choices:</span>{" "}
                {selectedTier.popularBagExamples.join(", ")}
              </div>
            </div>

            {/* What's Loaded Inside This Tier */}
            <div className="lg:col-span-7 space-y-4">
              <h4 className="font-display text-lg text-white uppercase font-bold tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-street-yellow" />
                What Gets Loaded In Your Bag:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedTier.ingredients.map((ingredient, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 p-3 rounded-xl text-xs sm:text-sm font-medium text-zinc-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-street-yellow/20 border border-street-yellow flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-street-yellow" />
                    </div>
                    <span>{ingredient}</span>
                  </div>
                ))}
              </div>

              {/* Special Tier Upgrade Callout */}
              {selectedTier.newAdditions.length > 0 && (
                <div className="bg-street-flame/15 border border-street-flame/40 p-3 rounded-xl flex items-center gap-3">
                  <span className="bg-street-flame text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                    Tier Upgrade
                  </span>
                  <span className="text-xs text-zinc-200 font-semibold">
                    Includes: {selectedTier.newAdditions.join(" + ")}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* The 4-Tier Street Menu Board (Side-by-Side View matching physical board) */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="font-display text-2xl sm:text-4xl font-black text-white uppercase tracking-wide">
              FULL CHIPS ADDA BOARD
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-mono">
              Directly from the physical cart menu board
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chipsAddaTiers.map((tier) => (
              <div
                key={tier.id}
                className="bg-zinc-950 border-2 border-zinc-800 hover:border-street-yellow rounded-2xl p-6 flex flex-col justify-between space-y-6 transition-all shadow-sticker group"
              >
                <div className="space-y-4">
                  {/* Top Price Header */}
                  <div className="flex items-start justify-between gap-2 border-b border-zinc-800 pb-4">
                    <div>
                      <span className="bg-street-red text-white text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded">
                        {tier.baseBagPrice}₹ CHIPS
                      </span>
                      <h4 className="font-display text-xl font-black text-white uppercase mt-2">
                        {tier.title}
                      </h4>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono text-zinc-400 block">
                        Selling Price
                      </span>
                      <span className="font-display text-3xl font-black text-street-yellow">
                        ₹{tier.sellingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Ingredients Checklist */}
                  <ul className="space-y-2 text-xs text-zinc-300">
                    {tier.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-street-yellow font-bold">•</span>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-800/80">
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedTierId(tier.id);
                      window.scrollTo({
                        top:
                          document.getElementById("chips-adda")?.offsetTop || 0,
                        behavior: "smooth",
                      });
                    }}
                    className="w-full text-center text-xs font-black uppercase tracking-wider py-2 rounded-lg bg-zinc-900 group-hover:bg-street-yellow group-hover:text-street-black text-zinc-300 transition-colors"
                  >
                    Select &amp; Customize
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer on third-party brands */}
        <div className="mt-12 bg-zinc-900/60 border border-zinc-800 rounded-xl p-4 flex items-start gap-3 text-xs text-zinc-400">
          <AlertCircle className="w-4 h-4 text-zinc-400 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Note on Chips Bags:</strong> Customers can bring any sealed chips bag (Lay's, Kurkure, Doritos, Uncle Chipps, Balaji, or local favorites) or select one available at the cart. Brand names are descriptive examples of bag formats; no sponsorship or partnership is implied.
          </p>
        </div>
      </div>
    </section>
  );
}
