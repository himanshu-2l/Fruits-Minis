import React from "react";
import Image from "next/image";
import { Camera, MapPin, Sparkles } from "lucide-react";

export function CartGallery() {
  const galleryItems = [
    {
      src: "/images/cart-sign.jpeg",
      title: "The Fruit Minis Cart",
      subtitle: "Our signature green cart with the official BYOB Chips Adda signage in Bemetara.",
      badge: "Real Cart In Action",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/images/chips-adda-menu.jpeg",
      title: "The Original Menu Board",
      subtitle: "The verified chalkboard menu showcasing all 4 loaded tiers starting at ₹39.",
      badge: "Chalkboard Menu",
      aspect: "aspect-[3/4]",
    },
    {
      src: "/images/fruit-minis-logo.jpeg",
      title: "Official Brand Seal",
      subtitle: "The complete fruit garland emblem with our verified promise: 'Small Bites. Big Freshness.'",
      badge: "Official Emblem",
      aspect: "aspect-square",
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
            Real signage, real menus, and genuine street food craft. No synthetic stock imagery — this is authentic Fruit Minis.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border-4 border-ink rounded-3xl p-4 sm:p-5 shadow-sticker-lg hover:rotate-1 hover:scale-[1.01] transition-all group"
            >
              {/* Image Frame */}
              <div className={`relative w-full ${item.aspect} rounded-2xl overflow-hidden border-2 border-ink/10 bg-zinc-100 shadow-inner`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-street-black text-street-yellow text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                  {item.badge}
                </span>
              </div>

              {/* Caption */}
              <div className="pt-4 space-y-1.5">
                <h3 className="font-display text-xl sm:text-2xl font-black text-ink uppercase">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink/70 leading-relaxed font-medium">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
