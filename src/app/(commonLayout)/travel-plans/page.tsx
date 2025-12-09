import BlurFade from "@/components/magicui/blur-fade";

import { getTravelPlans } from "@/services/traveler/travelPlan.service";
import { IMeta, ITravelPlan } from "@/types/travelPlan.interface";
import { SearchX, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchFilter from "@/components/shared/SearchFilter";
import { TravelCard } from "@/components/modules/TravelPlan/TravelCard.tsx";
import Pagination from "@/components/shared/Pagination";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function TravelPlansPage(props: Props) {
  const searchParams = await props.searchParams;
  const params = new URLSearchParams();
  Object.keys(searchParams).forEach((key) => {
    const value = searchParams[key];
    if (value) {
      if (Array.isArray(value)) {
        value.forEach((val) => params.append(key, val));
      } else {
        params.append(key, value);
      }
    }
  });

  const queryString = params.toString();

  const { data: plans, meta }: { data: ITravelPlan[]; meta: IMeta } =
    await getTravelPlans(queryString);

  // const showSearch = plans && plans.length > 0;

  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-black py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header & Search Section */}
        <BlurFade delay={0.1} inView>
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-zinc-900 dark:text-white flex items-center gap-3">
                Explore <span className="text-primary">Travel Plans</span>
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Join exciting journeys, meet new friends, and explore the world
                together. Find your perfect travel buddy today.
              </p>
            </div>

            {/* Conditional Search Filter */}

            <div className="flex gap-2 w-full md:w-auto items-center">
              <div className="w-full md:w-80">
                <SearchFilter
                  placeholder="Search by destination or title..."
                  paramName="searchTerm"
                />
              </div>
              {/* Optional Filter Button (Future Use) */}
              <Button variant="outline" size="icon" className="shrink-0">
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* Content Grid */}
        {plans && plans.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans?.map((plan: ITravelPlan, index: number) => (
              <BlurFade key={plan.id} delay={0.2 + index * 0.05} inView>
                <TravelCard plan={plan} index={index} />
              </BlurFade>
            ))}
          </div>
        ) : (
          // Empty State Design
          <BlurFade delay={0.2} inView>
            <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-zinc-900 rounded-3xl border-2 border-dashed border-gray-200 dark:border-zinc-800 text-center">
              <div className="bg-gray-100 dark:bg-zinc-800 p-4 rounded-full shadow-sm mb-4">
                <SearchX className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-200">
                No Plans Found
              </h3>
              <p className="text-muted-foreground max-w-sm mt-2">
                {params.has("searchTerm")
                  ? "We couldn't find any plans matching your search. Try different keywords."
                  : "There are no travel plans available at the moment."}
              </p>
            </div>
          </BlurFade>
        )}

        {plans && plans?.length > 0 && meta && meta.totalPages > 1 && (
          <div className="py-12 flex justify-center">
            <Pagination currentPage={meta.page} totalPage={meta.totalPages} />
          </div>
        )}
      </div>
    </div>
  );
}
