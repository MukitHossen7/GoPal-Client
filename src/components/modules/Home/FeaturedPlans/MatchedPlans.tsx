"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { ITravelPlan } from "@/types/travelPlan.interface";
import Link from "next/link";
import TravelPlanCard from "./FeaturedPlansCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MatchedPlans = ({ plans }: { plans: ITravelPlan[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );

  return (
    <section className="container mx-auto py-20 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Matches Found
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trips You Might Love
          </h2>
          <p className="text-muted-foreground mt-1">
            Based on your interest in Hiking, Food, and Nature.
          </p>
        </div>
        <Link href="/travel-plans">
          <Button variant="outline" className="rounded-full">
            View All Plans
          </Button>
        </Link>
      </div>

      {/* Content Section: Carousel or Fallback */}
      {plans.length > 0 ? (
        <div className="relative">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {plans.map((plan) => (
                <CarouselItem
                  key={plan.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="p-1 h-full">
                    <TravelPlanCard plan={plan} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Navigation Buttons */}
            <CarouselPrevious className="hidden md:flex -left-4 h-8 w-8 border-2 bg-background hover:bg-primary hover:text-white transition-colors" />
            <CarouselNext className="hidden md:flex -right-4 h-8 w-8 border-2 bg-background hover:bg-primary hover:text-white transition-colors" />
          </Carousel>
        </div>
      ) : (
        /* Empty State Fallback */
        <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed">
          <p className="text-muted-foreground">
            No specific matches found yet. Update your interests!
          </p>
          <Link href="/travel-plans" className="mt-4 inline-block">
            <Button>Explore All</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default MatchedPlans;
