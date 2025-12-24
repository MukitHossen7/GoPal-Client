import AboutCTA from "@/components/modules/About/AboutCTA";
import AboutHero from "@/components/modules/About/AboutHero";
import MeetExperts from "@/components/modules/About/MeetExperts";
import MissionVision from "@/components/modules/About/MissionVision";
import OurStory from "@/components/modules/About/OurStory";
import TrustPartners from "@/components/modules/About/TrustPartners";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Our Mission to Connect Global Explorers - GoPal",
  description:
    "Learn the story behind GoPal. We are on a mission to transform solo journeys into shared adventures by connecting compatible travelers and building a trusted community of world explorers.",
  keywords: [
    "About GoPal",
    "Our Story",
    "Travel Buddy Mission",
    "Connecting Travelers",
    "Solo Travel Community",
    "Travel Meetup Platform",
    "Adventure Planning Team",
    "GoPal Vision",
    "Trusted Travel Partners",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <MeetExperts />
      <TrustPartners />
      <AboutCTA />
    </main>
  );
}
