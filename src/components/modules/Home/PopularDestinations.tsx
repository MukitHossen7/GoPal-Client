"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Users } from "lucide-react";

const CATEGORIES = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "https://i.ibb.co/xt4jqfzv/istockphoto-675172642-612x612.jpg",
    count: "200+ Travelers",
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://i.ibb.co/1fKWgKh2/istockphoto-635758088-612x612.jpg",
    count: "500+ Travelers",
  },
  {
    id: 3,
    name: "Kyoto, Japan",
    image:
      "https://i.ibb.co/tMy2nNv1/67b7b12ace55b1bf141eb8f3-638e6beeed8f00344dc59789-japademy-kyoto-kinkakuji-temple-one.jpg",
    count: "150+ Travelers",
  },
  {
    id: 4,
    name: "Santorini, Greece",
    image: "https://i.ibb.co/ZRmXc3y1/istockphoto-1145450965-612x612.jpg",
    count: "80+ Travelers",
  },
  {
    id: 5,
    name: "Dubai, UAE",
    image: "https://i.ibb.co/Xr9WCVWt/rhv1pjxdhgpajzsszcfb.jpg",
    count: "300+ Travelers",
  },
  {
    id: 6,
    name: "New York, USA",
    image: "https://i.ibb.co/G3rkXMG3/New-York.jpg",
    count: "400+ Travelers",
  },
  {
    id: 7,
    name: "Rome, Italy",
    image: "https://i.ibb.co/DDcMDTL1/rome-header.jpg",
    count: "250+ Travelers",
  },
  {
    id: 8,
    name: "Bangkok, Thailand",
    image: "https://i.ibb.co/8n9NJLx5/Wat-Arun-Temple.webp",
    count: "350+ Travelers",
  },
  {
    id: 9,
    name: "Sydney, Australia",
    image: "https://i.ibb.co/vCKsywhX/Sydney-Night-Photography.webp",
    count: "180+ Travelers",
  },
  {
    id: 10,
    name: "Istanbul, Turkey",
    image: "https://i.ibb.co/FqNX7ZPg/images-2.jpg",
    count: "210+ Travelers",
  },
];

const PopularDestinations = () => {
  // Autoplay delay increased to 4000ms for a more professional reading speed
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header - Real Site Style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-xs mb-3"
            >
              <div className="h-1 w-8 bg-primary rounded-full" />
              Explore the World
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
            >
              Trending Destinations
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-muted-foreground text-lg leading-relaxed"
            >
              Discover the most sought-after places and find compatible travel
              partners ready to explore with you.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              href="/explore"
              className="group flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors border-b-2 border-primary/20 pb-1"
            >
              Browse All Destinations
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Carousel Component */}
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
            <CarouselContent className="-ml-4 md:-ml-6">
              {CATEGORIES.map((cat, index) => (
                <CarouselItem
                  key={cat.id}
                  className="pl-4 md:pl-6 basis-[85%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link href={`/travel-plans?destination=${cat.name}`}>
                      <Card className="group relative aspect-[3/4] overflow-hidden rounded-2xl border-none shadow-none transition-all duration-500 hover:shadow-2xl">
                        {/* High-quality Image Handling */}
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          sizes="(max-width: 768px) 85vw, (max-width: 1200px) 33vw, 25vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />

                        {/* Professional Overlay - Darker at bottom for readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

                        {/* Top Badge: Stats */}
                        <div className="absolute top-4 left-4 z-20">
                          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
                            <Users
                              size={12}
                              className="text-primary-foreground"
                            />
                            {cat.count.split(" ")[0]} Active
                          </div>
                        </div>

                        {/* Bottom Content */}
                        <div className="absolute bottom-0 left-0 p-6 z-20 w-full transition-transform duration-500 group-hover:-translate-y-2">
                          <div className="flex items-center gap-1 text-primary-foreground/80 mb-2">
                            <MapPin size={14} />
                            <span className="text-xs font-bold uppercase tracking-tighter">
                              Global Hub
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                            {cat.name}
                          </h3>
                          <div className="flex items-center gap-2 text-white/60 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span>View Travel Buddies</span>
                            <ArrowRight size={14} />
                          </div>
                        </div>

                        {/* Subtle Border Glow on Hover (Not Vibe Coding, but Modern UI) */}
                        <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/40 rounded-2xl transition-all duration-500 pointer-events-none" />
                      </Card>
                    </Link>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Custom Styled Navigation Buttons */}
            <div className="flex justify-end gap-3 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 rounded-full border-2 border-border bg-background hover:bg-primary hover:text-white transition-all shadow-sm" />
              <CarouselNext className="static translate-y-0 h-10 w-10 rounded-full border-2 border-border bg-background hover:bg-primary hover:text-white transition-all shadow-sm" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
