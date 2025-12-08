/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import Image from "next/image";

// Mock Review Data
const reviews = [
  {
    name: "Jack Anderson",
    username: "@jack_travels",
    body: "Found my hiking partner for the Swiss Alps here. The trip was amazing!",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  },
  {
    name: "Sarah Jen",
    username: "@sarah_j",
    body: "I was afraid to travel solo to Japan. GoPal matched me with a great group!",
    img: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    name: "John Doe",
    username: "@johndoe",
    body: "The verified badge feature gave me peace of mind. Highly recommended.",
    img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
  },
  {
    name: "Emily Watson",
    username: "@emily_w",
    body: "Best app for budget travelers. Shared costs saved me over $500.",
    img: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    name: "Michael Brown",
    username: "@mike_b",
    body: "User interface is so clean and easy to use. Love the vibe here.",
    img: "https://i.pravatar.cc/150?u=a04258114e29026708c",
  },
  {
    name: "Lisa Ray",
    username: "@lisa_ray",
    body: "Made lifelong friends on my trip to Bali. Thank you GoPal!",
    img: "https://i.pravatar.cc/150?u=a04258114e29026709c",
  },
];

// Review Card Component
const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-80 cursor-pointer overflow-hidden rounded-xl border p-6",
        // Light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // Dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          className="rounded-full"
          width={40}
          height={40}
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
        <div className="ml-auto flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>
      </div>
      <blockquote className="mt-4 text-sm italic text-gray-600 dark:text-gray-300">
        “{body}”
      </blockquote>
    </figure>
  );
};

// Marquee Animation Component
const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="mb-12 text-center container mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Trusted by Adventurers
        </h2>
        <p className="mt-4 text-muted-foreground">
          Read success stories from our global community.
        </p>
      </div>

      <div className="relative flex h-[400px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {reviews.slice(0, reviews.length / 2).map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {reviews.slice(reviews.length / 2).map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>

        {/* Gradients for fade effect on edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </div>
    </section>
  );
};

export default Testimonials;
