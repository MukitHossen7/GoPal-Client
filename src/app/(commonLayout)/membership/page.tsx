import FAQSection from "@/components/modules/Membership/FAQSection";
import PricingSwitch from "@/components/modules/Membership/PricingSwitch";
import { BadgeCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Membership Plans | Unlock Premium Travel Features - GoPal",
  description:
    "Upgrade to GoPal Premium for an enhanced travel experience. Get a verified badge, unlimited trip buddy requests, priority matching, and exclusive access to global travel meetups.",
  keywords: [
    "GoPal Membership",
    "Premium Travel Features",
    "Verified Travel Buddy",
    "Subscription Plans",
    "Unlimited Trip Requests",
    "Travel Community Premium",
    "Secure Travel Matching",
    "GoPal Verified Badge",
    "Premium Traveler Benefits",
  ],
};

const MembershipPage = () => {
  return (
    <main className="min-h-screen bg-background py-12 overflow-hidden relative">
      {/* Background Decorative Patterns (Real site feel) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-bold text-primary shadow-sm">
          <BadgeCheck className="mr-2 h-4 w-4" />
          Join 5,000+ Trusted Explorers
        </div>

        <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl drop-shadow-md leading-[1.1]">
          Elevate Your <br className="hidden md:block" />
          <span className="text-primary italic">Travel Experience</span>
        </h1>

        <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
          Unlock the full potential of GoPal. Get verified, connect faster, and
          find your perfect travel companion with our premium plans.
        </p>
      </div>

      <div className="container mx-auto mt-20 px-4">
        <PricingSwitch />
      </div>

      <div className="mt-20">
        <FAQSection />
      </div>
    </main>
  );
};

export default MembershipPage;
