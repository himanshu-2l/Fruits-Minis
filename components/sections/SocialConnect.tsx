"use client";

import React, { useState } from "react";
import { businessInfo } from "@/content/site";
import { Instagram, Copy, Check, ExternalLink, MapPin, Clock, PhoneCall } from "lucide-react";

export function SocialConnect() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`@${businessInfo.instagramHandle}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="connect" className="py-16 sm:py-24 chalkboard-bg text-white border-b-2 border-ink/10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-600/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto bg-zinc-950 border-4 border-street-yellow/60 rounded-3xl p-6 sm:p-12 shadow-sticker-lg text-center space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white font-display text-xs sm:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sticker font-black">
            <Instagram className="w-4 h-4" />
            <span>Connect &amp; Follow Live</span>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
              CATCH THE <span className="text-street-yellow">CART LIVE</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-medium max-w-xl mx-auto leading-relaxed">
              Real-time cart spots, live prep videos, and daily fruit announcements are shared directly on Instagram.
            </p>
          </div>

          {/* Social Handle Card */}
          <div className="bg-zinc-900 border-2 border-dashed border-zinc-700 rounded-2xl p-6 max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                Official Instagram Handle
              </span>
              <span className="font-display text-2xl sm:text-3xl text-white font-black">
                @{businessInfo.instagramHandle}
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopy}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all min-h-[44px]"
                aria-label="Copy Instagram handle to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-zinc-300" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all min-h-[44px]"
              >
                <span>Visit Page</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Transparency / Street Cart Status Notice */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4 border-t border-zinc-800 text-xs text-zinc-400">
            <div className="flex items-start gap-2.5 bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800">
              <MapPin className="w-4 h-4 text-brand-lime flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-200 block">Cart Location</strong>
                <span>Active in Bemetara. Daily cart spot posted via Instagram stories.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800">
              <Clock className="w-4 h-4 text-brand-mango flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-200 block">Cart Timing</strong>
                <span>Fresh fruit bowls &amp; evening chips chaat. Check Instagram for schedule.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-zinc-900/60 p-3.5 rounded-xl border border-zinc-800">
              <PhoneCall className="w-4 h-4 text-brand-citrus flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-200 block">Orders &amp; Queries</strong>
                <span>Send a direct message on Instagram for bulk orders or questions.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
