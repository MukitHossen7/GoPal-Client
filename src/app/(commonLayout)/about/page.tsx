import AboutHero from "@/components/modules/About/AboutHero";
import MeetExperts from "@/components/modules/About/MeetExperts";
import MissionVision from "@/components/modules/About/MissionVision";
import OurStory from "@/components/modules/About/OurStory";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <MeetExperts />
    </main>
  );
}
