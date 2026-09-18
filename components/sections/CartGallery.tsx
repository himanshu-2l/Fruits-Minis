import React from "react";
import { Camera, Store, UtensilsCrossed, Sparkles } from "lucide-react";

export function CartGallery() {
  const galleryItems = [
    {
      title: "The Fruit Minis Cart",
      subtitle: "Our signature green cart with the official BYOB Chips Adda signage in Bemetara.",
      badge: "Real Cart In Action",
      icon: Store,
      bgGradient: "from-brand-leaf/10 to-brand-lime/10",
      accentColor: "text-brand-leaf",
      borderColor: "border-brand-leaf/40",
      tag: "Cart Photo Placeholder",
    },
    {
      title: "The Original Menu Board",
      subtitle: "The verified chalkboard menu showcasing all 4 loaded tiers starting at ₹39.",
      badge: "Chalkboard Menu",
      icon: UtensilsCrossed,
      bgGradient: "from-amber-500/10 to-orange-500/10",
      accentColor: "text-brand-citrus",
      borderColor: "border-brand-citrus/40",
      tag: "Menu Photo Placeholder",
    },
    {
      title: "Official Brand Seal",
      subtitle: "The complete fruit garland emblem with our verified promise: 'Small Bites. Big Freshness.'",
      badge: "Official Emblem",
      icon: Sparkles,
      bgGradient: "from-rose-500/10 to-brand-mango/10",
      accentColor: "text-brand-watermelon",
      borderColor: "border-brand-watermelon/40",
      tag: "Emblem Photo Placeholder",
    },
  ];

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-paper border-b-2 border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-paper-200 text-ink border border-ink/20 font-display text-sm tracking-widest uppercase px-4 py-1 rounded-full shadow-sticker">
            <Camera className="w-4 h-4 text-brand-citrus" />
            <span>Behind The Counter</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-ink uppercase tracking-tight">
            FROM THE <span className="text-brand-leaf">CART</span>
          </h2>

          <p className="text-base sm:text-lg text-ink/70 font-medium max-w-xl mx-auto leading-relaxed">
            Real signage, real menus, and genuine street food craft. High-resolution gallery photos will be updated soon.
          </p>
        </div>

        {/* Gallery Grid with Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border-4 border-ink rounded-3xl p-5 sm:p-6 shadow-sticker-lg flex flex-col justify-between hover:rotate-1 hover:scale-[1.01] transition-all group"
              >
                {/* Visual Placeholder Frame */}
                <div
                  className={`relative w-full aspect-[4/3] rounded-2xl border-2 border-dashed ${item.borderColor} bg-gradient-to-br ${item.bgGradient} flex flex-col items-center justify-center p-6 text-center shadow-inner overflow-hidden`}
                >
                  {/* Top Badge */}
                  <span className="absolute top-3 left-3 bg-street-black text-street-yellow text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {item.badge}
                  </span>

                  {/* Center Placeholder Graphic */}
                  <div className="w-16 h-16 rounded-2xl bg-white border-2 border-ink/10 shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className={`w-8 h-8 ${item.accentColor}`} />
                  </div>

                  <div className="space-y-1">
                    <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-ink/70 bg-white/90 border border-ink/10 px-3 py-1 rounded-full shadow-sm">
                      <Camera className="w-3.5 h-3.5 text-ink/50" />
                      {item.tag}
                    </span>
                    <p className="text-[11px] text-ink/50 font-mono">
                      Image to be uploaded
                    </p>
                  </div>
                </div>

                {/* Caption */}
                <div className="pt-5 space-y-1.5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-black text-ink uppercase">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-medium mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
