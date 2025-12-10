import CallToAction from "@/components/modules/Home/CallToAction";
import FeaturedPlans from "@/components/modules/Home/FeaturedPlans";
import HeroSection from "@/components/modules/Home/HeroSection";
import HowItWorks from "@/components/modules/Home/HowItWorks";
import PopularDestinations from "@/components/modules/Home/PopularDestinations";
import StatsSection from "@/components/modules/Home/StatsSection";
import Testimonials from "@/components/modules/Home/Testimonials";
import WhyChooseUs from "@/components/modules/Home/WhyChooseUs";

const HomePage = async () => {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero Section: First Impression */}
      <HeroSection />

      {/* 2. Stats Section: Building Trust instantly */}
      <StatsSection />

      {/* 3. Featured Plans: The most important dynamic content */}
      {/* লগইন ইউজার তার ম্যাচ পাবে, আর গেস্টরা রিয়েল ট্রিপের স্লাইডার দেখবে */}
      <FeaturedPlans />

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
