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
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

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
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  );
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div className="mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Trending Destinations
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the perfect travel buddy based on what you love to do.
          </p>
        </div>
      </div>

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
          {CATEGORIES?.map((cat) => (
            <CarouselItem
              key={cat.id}
              className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Link href="/travel-plans">
                <Card className="group relative overflow-hidden rounded-xl shadow-none border-none h-[350px] cursor-pointer">
                  {/* Background Image */}
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Content */}
                  <CardContent className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <h3 className="text-2xl font-bold mb-1 group-hover:text-primary-foreground/90 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-300 opacity-90">
                      {cat.count} Waiting
                    </p>

                    {/* Hover Effect Line */}
                    <div className="w-0 group-hover:w-full h-1 bg-primary mt-3 transition-all duration-500 rounded-full" />
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 h-8 w-8" />
        <CarouselNext className="hidden md:flex -right-4 h-8 w-8" />
      </Carousel>
    </section>
  );
};

export default PopularDestinations;
