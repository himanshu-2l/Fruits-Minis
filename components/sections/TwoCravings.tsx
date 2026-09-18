import React from "react";
import Link from "next/link";
import { Sparkles, Flame, ArrowRight } from "lucide-react";

export function TwoCravings() {
  return (
    <section className="py-16 sm:py-24 bg-paper-100 border-b-2 border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-street-black text-street-yellow px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-sticker">
            The Fruit Minis Philosophy
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-black text-ink uppercase tracking-tight">
            ONE CART. <span className="text-brand-citrus">TWO CRAVINGS.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink/70 font-medium">
            Who says you have to pick between nourishing freshness and crunchy street decadence? We bring together the best of both worlds.
          </p>
        </div>

        {/* Dual Split Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Side 1: Fruit Chaat */}
          <div className="relative bg-white border-4 border-brand-leaf rounded-3xl p-6 sm:p-10 shadow-sticker-lg overflow-hidden flex flex-col justify-between group hover:border-ink transition-colors">
            {/* Decorative Corner Badge */}
            <div className="absolute -top-3 right-6 bg-brand-leaf text-white font-display text-sm tracking-wider uppercase px-4 py-1 rounded-full shadow-sticker rotate-2">
              Craving 01
            </div>

            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-leaf/10 border-2 border-brand-leaf flex items-center justify-center text-brand-leaf shadow-sticker">
                <Sparkles className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-widest text-brand-citrus block">
                  Juicy • Hydrating • Tangy
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-ink uppercase tracking-wide mt-1">
                  Fresh Fruit Chaat
                </h3>
              </div>

              <p className="text-sm sm:text-base text-ink/80 leading-relaxed font-medium">
                No soggy pre-cut fruits kept in plastic bins. At Fruit Minis, your bowl is cut fresh right on the cart. Crisp apples, refreshing watermelon, sweet bananas, ruby pomegranate, and seasonal citrus tossed with our signature chatpata street masala.
              </p>

              {/* Fresh Fruit Flavor Attributes */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Crisp Apple", "Juicy Watermelon", "Sweet Banana", "Ruby Pomegranate", "Roasted Masala Zing"].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-brand-leaf/5 border border-brand-leaf/20 text-brand-leaf-dark text-xs font-bold px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t-2 border-brand-leaf/10">
              <Link
                href="#fruit-chaat"
                className="inline-flex items-center gap-2 font-display text-lg font-black text-brand-leaf group-hover:text-brand-citrus transition-colors uppercase tracking-wider"
              >
                <span>Discover Fruit Chaat Details</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Side 2: Chips Adda */}
          <div className="relative bg-street-black border-4 border-street-yellow rounded-3xl p-6 sm:p-10 shadow-sticker-lg overflow-hidden flex flex-col justify-between text-white group hover:border-white transition-colors">
            {/* Decorative Corner Badge */}
            <div className="absolute -top-3 right-6 bg-street-yellow text-street-black font-display text-sm tracking-wider uppercase px-4 py-1 rounded-full shadow-sticker -rotate-2 font-black">
              Craving 02
            </div>

            <div className="space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-street-yellow/20 border-2 border-street-yellow flex items-center justify-center text-street-yellow shadow-sticker">
                <Flame className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-widest text-street-flame block">
                  Crunchy • Chatpata • Cheesy
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-wide mt-1">
                  Chips Adda (BYOB)
                </h3>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
                The street snack concept you didn't know you needed! Pick your chips bag (₹10, ₹20, ₹30, ₹50). We slice the bag horizontally, toss in diced onions, tomatoes, cucumber, sweet corn, melted cheese, paneer, and load it with signature sauces.
              </p>

              {/* Chips Adda Flavor Attributes */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Pick Your Own Bag", "Layered Veggies", "Melted Cheese", "Fresh Paneer", "Chatpata Sauces", "Starts at ₹39"].map(
                  (item) => (
                    <span
                      key={item}
                      className="bg-zinc-800 border border-zinc-700 text-street-yellow text-xs font-bold px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t-2 border-zinc-800">
              <Link
                href="#chips-adda"
                className="inline-flex items-center gap-2 font-display text-lg font-black text-street-yellow group-hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>View Loaded Chips Tiers (₹39 - ₹109)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
