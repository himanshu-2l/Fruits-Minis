import React from "react";
import { howItWorksSteps } from "@/content/site";
import { ArrowRight, Flame } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-paper-100 border-b-2 border-ink/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-street-yellow text-street-black font-display text-sm tracking-widest uppercase px-4 py-1 rounded-full shadow-sticker font-black">
            <Flame className="w-4 h-4 text-street-red" />
            <span>The BYOB Street ritual</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-ink uppercase tracking-tight">
            HOW CHIPS ADDA <span className="text-street-flame">WORKS</span>
          </h2>

          <p className="text-base sm:text-lg text-ink/70 font-medium max-w-xl mx-auto leading-relaxed">
            Never experienced loaded BYOB chips before? It's lightning-fast, custom-made, and insanely satisfying.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {howItWorksSteps.map((step, idx) => (
            <div
              key={step.stepNumber}
              className="relative bg-white border-2 border-ink/20 hover:border-ink rounded-3xl p-6 sm:p-7 shadow-sticker hover:translate-y-[-2px] transition-all flex flex-col justify-between space-y-4"
            >
              {/* Step Number Top Badge */}
              <div className="flex items-center justify-between">
                <span className="font-display text-4xl sm:text-5xl font-black text-street-flame/30 leading-none">
                  {step.stepNumber}
                </span>
                <span className="bg-paper-200 border border-ink/10 text-ink/80 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {step.badge}
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-2xl font-black text-ink uppercase leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-ink/75 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-ink/10">
                <span className="text-xs font-bold text-brand-leaf block">
                  ✓ {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Summary Banner */}
        <div className="mt-12 bg-street-black text-street-yellow p-6 rounded-2xl border-2 border-street-yellow shadow-sticker-lg flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-white">
              Ready to create your custom loaded bag?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              Find our green cart in Bemetara or check daily spots on Instagram!
            </p>
          </div>
          <a
            href="#chips-adda"
            className="inline-flex items-center gap-2 bg-street-yellow text-street-black hover:bg-yellow-300 font-display text-sm uppercase px-5 py-2.5 rounded-xl font-black tracking-wider shadow-sm transition-all"
          >
            <span>View Pricing (₹39 - ₹109)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
