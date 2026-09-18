import React from "react";
import { fruitChaatHighlights } from "@/content/site";
import { Sparkles, Apple, HeartPulse, Flame, CheckCircle } from "lucide-react";

export function FruitChaatSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-6 h-6 text-brand-leaf" />,
    Flame: <Flame className="w-6 h-6 text-brand-citrus" />,
    Apple: <Apple className="w-6 h-6 text-brand-watermelon" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-brand-mint" />,
  };

  const seasonalFruits = [
    { name: "Crisp Red Apple", note: "Crunch & Natural Sweetness", color: "bg-red-50 border-red-200 text-red-700" },
    { name: "Juicy Watermelon", note: "Deep Hydration & Refreshment", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
    { name: "Sweet Ripe Banana", note: "Smooth Energy & Satiety", color: "bg-amber-50 border-amber-200 text-amber-800" },
    { name: "Ruby Pomegranate", note: "Antioxidant Pearl Bursts", color: "bg-rose-50 border-rose-200 text-rose-800" },
    { name: "Tangy Citrus / Orange", note: "Zesty Vitamin C Boost", color: "bg-orange-50 border-orange-200 text-orange-800" },
    { name: "Fresh Mint & Lime", note: "Cool Herbal Finish", color: "bg-lime-50 border-lime-200 text-lime-800" },
  ];

  return (
    <section id="fruit-chaat" className="py-16 sm:py-24 bg-paper paper-bg border-b-2 border-ink/10 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-brand-leaf text-white font-display text-sm uppercase tracking-widest px-4 py-1 rounded-full shadow-sticker rotate-1">
            <Sparkles className="w-4 h-4" />
            <span>The Healthy Street Craving</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-ink uppercase tracking-tight">
            FRESH <span className="text-brand-leaf">FRUIT CHAAT</span>
          </h2>

          <p className="text-base sm:text-lg text-ink/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Nourishing, revitalizing, and bursting with flavor. We take fresh seasonal fruits, chop them live at the cart, and toss them in our signature house chatpata spice blend.
          </p>
        </div>

        {/* Feature Grid with High Character */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {fruitChaatHighlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-ink/20 hover:border-brand-leaf rounded-2xl p-6 shadow-sticker hover:translate-y-[-2px] transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-paper-100 border border-ink/10 flex items-center justify-center shadow-sm">
                  {iconMap[item.iconName] || <Sparkles className="w-6 h-6 text-brand-leaf" />}
                </div>
                <span className="text-[11px] font-black uppercase tracking-wider text-brand-citrus block">
                  {item.tag}
                </span>
                <h3 className="font-display text-2xl font-black text-ink uppercase leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-ink/70 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Seasonal Fruit Breakdown & Cart Note */}
        <div className="bg-paper-50 border-4 border-ink rounded-3xl p-6 sm:p-10 shadow-sticker-lg">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs font-black uppercase tracking-wider text-brand-leaf font-mono">
              Live Mandi Harvest • Rotated Seasonally
            </span>
            <h3 className="font-display text-3xl sm:text-4xl font-black text-ink uppercase">
              What's In The Fruit Bowl?
            </h3>
            <p className="text-sm text-ink/80 font-medium leading-relaxed">
              We select fresh, ripe fruits each morning to guarantee peak crispness and juiciness. Tossed live with pure roasted cumin, black salt, and a splash of lemon.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {seasonalFruits.map((fruit, i) => (
              <div
                key={i}
                className={`p-4 rounded-xl border-2 flex items-start gap-3 ${fruit.color}`}
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm leading-tight">{fruit.name}</h4>
                  <p className="text-xs opacity-80 mt-0.5">{fruit.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Genuine Street Cart Callout on Pricing */}
          <div className="mt-8 pt-6 border-t-2 border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs text-ink/70 font-medium max-w-xl">
              <strong>Seasonal Pricing Note:</strong> Because we source seasonal fruits directly from local markets, bowl portions and fruit combinations vary with daily arrivals. Ask at the cart for today's special bowl!
            </div>
            <span className="inline-block bg-brand-leaf/10 border border-brand-leaf text-brand-leaf font-mono text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap">
              Cut Live On Order 🌿
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
