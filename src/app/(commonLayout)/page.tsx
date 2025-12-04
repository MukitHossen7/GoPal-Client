import CallToAction from "@/components/modules/Home/CallToAction";
import FeaturedTravelers from "@/components/modules/Home/FeaturedTravelers";
import HeroSection from "@/components/modules/Home/HeroSection";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import PopularDestinations from "@/components/modules/Home/PopularDestinations";
import StatsSection from "@/components/modules/Home/StatsSection";
import Testimonials from "@/components/modules/Home/Testimonials";
import WhyChooseUs from "@/components/modules/Home/WhyChooseUs";
import { getRecommendedTravelers } from "@/services/traveler/traveler.service";
import { ITraveler } from "@/types/traveler.interface";

const HomePage = async () => {
  const { data: matchesTravelers } = await getRecommendedTravelers();

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero Section with Banner & Search */}
      <HeroSection />

      {/* 2. Stats / Trust Badges (UPDATED: Professional & Animated) */}
      <StatsSection />

      {/* 3. Popular Destinations */}
      <PopularDestinations />

      {/* 4. How It Works (3 Steps) */}
      <HowItWorks />

      {/* 5. Featured Travelers (Logged in users will see Matches here) */}
      <FeaturedTravelers matchesTravelers={matchesTravelers as ITraveler[]} />

      {/* 6. Why Choose GoPal */}
      <WhyChooseUs />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. Final CTA */}
      <CallToAction />
    </main>
  );
};

export default HomePage;
