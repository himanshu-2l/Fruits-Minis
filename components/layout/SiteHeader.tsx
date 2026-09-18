"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { businessInfo } from "@/content/site";
import { Menu, X, Instagram, Sparkles, Flame } from "lucide-react";

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Fruit Chaat", href: "#fruit-chaat", icon: Sparkles },
    { name: "Chips Adda", href: "#chips-adda", icon: Flame },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Cart Vibes", href: "#gallery" },
    { name: "Find Us", href: "#connect" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-paper/95 backdrop-blur-md border-b-2 border-ink/10 transition-all">
      {/* Top Street Ticker Banner */}
      <div className="bg-street-black text-street-yellow px-4 py-1.5 text-xs sm:text-sm font-bold tracking-wide flex items-center justify-between overflow-hidden border-b border-street-border">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <span className="bg-street-red text-white text-[10px] uppercase font-black px-1.5 py-0.5 rounded tracking-wider">
            Live at the cart
          </span>
          <span>Fresh Fruit Chaat &amp; Loaded BYOB Chips Adda • Starting at ₹39!</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-xs text-zinc-300">
          <span className="text-zinc-500">|</span>
          <span className="text-amber-400 font-medium">"{businessInfo.tagline}"</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-citrus rounded-lg p-1"
        >
          <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-leaf shadow-sticker group-hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/fruit-minis-logo.jpeg"
              alt="Fruit Minis Logo"
              fill
              sizes="(max-width: 640px) 44px, 56px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-2xl sm:text-3xl tracking-tight text-ink font-black leading-none group-hover:text-brand-leaf transition-colors">
              FRUIT MINIS
            </span>
            <span className="text-[10px] sm:text-xs font-bold text-brand-citrus tracking-wider uppercase mt-0.5">
              Small Bites. Big Freshness.
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-2 rounded-md text-sm font-bold text-ink/80 hover:text-ink hover:bg-paper-200/80 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-leaf flex items-center gap-1.5"
            >
              {link.icon && (
                <link.icon className="w-3.5 h-3.5 text-brand-citrus" />
              )}
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-sticker hover:translate-y-[-1px] active:translate-y-[1px] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
          >
            <Instagram className="w-4 h-4" />
            <span>@{businessInfo.instagramHandle}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={businessInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile"
            className="p-2 text-pink-600 hover:text-pink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-full"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg text-ink hover:bg-paper-200 border-2 border-ink/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-leaf min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-paper-50 border-b-2 border-ink/20 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-base font-black text-ink hover:bg-paper-200 border border-transparent hover:border-ink/10 flex items-center justify-between min-h-[44px]"
              >
                <span className="flex items-center gap-2">
                  {link.icon && (
                    <link.icon className="w-4 h-4 text-brand-citrus" />
                  )}
                  {link.name}
                </span>
                <span className="text-xs text-ink/40 font-mono">→</span>
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-ink/10">
            <a
              href={businessInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-600 to-orange-500 text-white px-4 py-3 rounded-xl font-bold text-sm shadow-sticker min-h-[44px]"
            >
              <Instagram className="w-5 h-5" />
              <span>Follow @{businessInfo.instagramHandle} for daily cart updates</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
