export const dynamic = "force-dynamic";

import CallToAction from "@/components/modules/Home/CallToAction";
import FeaturedPlans from "@/components/modules/Home/FeaturedPlans";
import HeroSection from "@/components/modules/Home/HeroSection";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import PopularDestinations from "@/components/modules/Home/PopularDestinations";
import StatsSection from "@/components/modules/Home/StatsSection";
import Testimonials from "@/components/modules/Home/Testimonials/Testimonials";
import WhyChooseUs from "@/components/modules/Home/WhyChooseUs";
import { getUserInfo } from "@/services/auth/getUserInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoPal | Find Your Perfect Travel Buddy & Explore the World",
  description:
    "Connect with compatible travelers, plan meetups, and turn solo trips into shared adventures. Join GoPal - the secure platform for finding travel companions globally.",
  keywords: [
    "Travel Buddy",
    "Travel Companion",
    "Find Travelers",
    "Solo Travel",
    "Travel Meetup",
    "GoPal",
    "Trip Planner",
    "Backpacking",
    "Travel Community",
  ],
};
const HomePage = async () => {
  const { data: user } = await getUserInfo();

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero Section: First Impression */}
      <HeroSection />

      {/* 2. Stats Section: Building Trust instantly */}
      <StatsSection />

      {/* 3. Featured Plans: The most important dynamic content */}
      {user && user?.user?.role === "TRAVELER" && <FeaturedPlans />}

      {/* 4. Popular Destinations: General Inspiration */}
      <PopularDestinations />

      {/* 5. How It Works: If they are interested, show them how to proceed */}
      <HowItWorks />

      {/* 6. Why Choose GoPal: Benefits */}
      <WhyChooseUs />

      {/* 7. Testimonials: Social Proof */}
      <Testimonials />

      {/* 8. Final CTA: Final push to register */}
      <CallToAction />
    </main>
  );
};

export default HomePage;
