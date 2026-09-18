import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { TwoCravings } from "@/components/sections/TwoCravings";
import { ChipsAddaSection } from "@/components/sections/ChipsAddaSection";
import { FruitChaatSection } from "@/components/sections/FruitChaatSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CartGallery } from "@/components/sections/CartGallery";
import { SocialConnect } from "@/components/sections/SocialConnect";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main id="main-content" className="flex-grow">
        <HeroSection />
        <TwoCravings />
        <ChipsAddaSection />
        <FruitChaatSection />
        <HowItWorks />
        <CartGallery />
        <SocialConnect />
      </main>
      <SiteFooter />
    </div>
  );
}
