import BlurFade2 from "@/components/magicui/blur-fade2";
import { TravelerContactInfo } from "@/components/modules/Explore-Travelers/Traveler-Contact-Info";
import { TravelerDetails } from "@/components/modules/Explore-Travelers/Traveler-Details";
import { TravelerProfileCard } from "@/components/modules/Explore-Travelers/Traveler-Profile-Card";
import { getTravelerById } from "@/services/traveler/traveler.service";

export default async function TravelerPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const { data: traveler } = await getTravelerById(id);
  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-zinc-950/50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <BlurFade2 delay={0.1} inView>
          <TravelerProfileCard traveler={traveler} />
        </BlurFade2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar (Contact Info) */}
          <div className="lg:col-span-1">
            <BlurFade2 delay={0.2} inView className="h-full">
              <TravelerContactInfo traveler={traveler} />
            </BlurFade2>
          </div>

          {/* Right Main Content (Details) */}
          <div className="lg:col-span-2">
            <BlurFade2 delay={0.3} inView>
              <TravelerDetails traveler={traveler} />
            </BlurFade2>
          </div>
        </div>
      </div>
    </div>
  );
}
