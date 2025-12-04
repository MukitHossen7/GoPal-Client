import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { ITravelPlan } from "@/types/travelPlan.interface";
import { TravelCard } from "@/components/modules/TravelPlan/TravelCard.tsx";
import { getTravelPlans } from "@/services/traveler/travelPlan.service";

export default async function TravelPlansPage() {
  const plans = (await getTravelPlans()) || [];
  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-black py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-3 text-zinc-900 dark:text-white">
              Explore <span className="text-primary">Travel Plans</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Join exciting journeys, meet new friends, and explore the world
              together. Find your perfect travel buddy today.
            </p>
          </div>

          {/* Simple Search Filter (Can be moved to a Client Component) */}
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search destination..."
                className="pl-9 bg-white dark:bg-zinc-900"
              />
            </div>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans?.data?.map((plan: ITravelPlan, index: number) => (
            <TravelCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {plans?.data?.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              No travel plans found at the moment.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
