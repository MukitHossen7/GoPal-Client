import { ITraveler } from "@/types/traveler.interface";

import TravelerGrid from "../Explore-Travelers/TravelerGrid";

interface FeaturedTravelersProps {
  matchesTravelers: ITraveler[] | null | undefined;
}

const FeaturedTravelers = ({ matchesTravelers }: FeaturedTravelersProps) => {
  const displayedTravelers = matchesTravelers
    ? matchesTravelers.slice(0, 4)
    : [];
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Connect with Like-Minded Travelers
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Based on your profile, we&apos;ve found these travelers who share
            similar destinations and hobbies.
          </p>
        </div>

        <TravelerGrid travelers={displayedTravelers as ITraveler[]} />
      </div>
    </section>
  );
};

export default FeaturedTravelers;
