"use client";

import React, { useState } from "react";
import { businessInfo } from "@/content/site";
import { Instagram, Youtube, Copy, Check, ExternalLink, MapPin, Clock, PhoneCall } from "lucide-react";

export function SocialConnect() {
  const [copiedInsta, setCopiedInsta] = useState(false);

  const handleCopyInsta = () => {
    navigator.clipboard.writeText(`@${businessInfo.instagramHandle}`);
    setCopiedInsta(true);
    setTimeout(() => setCopiedInsta(false), 2500);
  };

  return (
    <section id="connect" className="py-16 sm:py-24 chalkboard-bg text-white border-b-2 border-ink/10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-600/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto bg-zinc-950 border-4 border-street-yellow/60 rounded-3xl p-6 sm:p-12 shadow-sticker-lg text-center space-y-8">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 bg-street-yellow text-street-black font-display text-xs sm:text-sm uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sticker font-black">
            <span>Connect &amp; Follow Online</span>
          </div>

          <div className="space-y-3">
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
              CATCH THE <span className="text-street-yellow">CART LIVE</span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 font-medium max-w-xl mx-auto leading-relaxed">
              Real-time cart spots, live prep videos, and daily fruit announcements are shared directly on our official channels.
            </p>
          </div>

          {/* Dual Social Cards: Instagram + YouTube */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
            {/* Instagram Card */}
            <div className="bg-zinc-900/90 border-2 border-pink-500/40 hover:border-pink-500 rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-all shadow-sticker group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-pink-600 to-orange-500 flex items-center justify-center text-white shadow-sm">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-pink-400 bg-pink-500/10 border border-pink-500/20 px-2.5 py-0.5 rounded-full">
                    Instagram Official
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Follow Stories &amp; Spots
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-black">
                    @{businessInfo.instagramHandle}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Daily live cart location, morning mandi fruit arrivals, and instant story updates.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={handleCopyInsta}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all min-h-[44px]"
                  aria-label="Copy Instagram handle"
                >
                  {copiedInsta ? (
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
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-pink-600 to-orange-500 hover:from-pink-500 hover:to-orange-400 text-white px-3 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all min-h-[44px]"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* YouTube Card */}
            <div className="bg-zinc-900/90 border-2 border-red-500/40 hover:border-red-500 rounded-2xl p-6 flex flex-col justify-between space-y-5 transition-all shadow-sticker group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-0.5 rounded-full">
                    YouTube Channel
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest block">
                    Watch Street Vlogs &amp; Shorts
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-white font-black truncate">
                    {businessInfo.youtubeHandle}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Behind the counter food cart prep, loaded chips challenges, and chatpata video shorts.
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-800">
                <a
                  href={businessInfo.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all min-h-[44px]"
                >
                  <Youtube className="w-4 h-4" />
                  <span>Subscribe on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
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
