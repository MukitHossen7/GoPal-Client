/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TravelPlanCard from "./FeaturedPlansCard";

const GuestPlanShowcase = ({ plans }: { plans: any[] }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Trending Travel Plans
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover upcoming trips created by travelers worldwide. Join them
            and make unforgettable memories.
          </p>
        </motion.div>

        {/* Carousel Section */}
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
              {plans?.map((plan) => (
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
            <CarouselPrevious className="hidden md:flex -left-4 h-8 w-8 border-2" />
            <CarouselNext className="hidden md:flex -right-4 h-8 w-8 border-2" />
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <Link href="/register">
            <Button
              size="lg"
              className="rounded-full px-8 h-12 text-lg shadow-none shadow-primary/20 hover:shadow-primary/40 transition-all cursor-pointer"
            >
              Start Your Journey &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuestPlanShowcase;
