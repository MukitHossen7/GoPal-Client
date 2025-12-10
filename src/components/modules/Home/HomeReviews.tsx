/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { cn } from "@/lib/utils";
import { Star, MapPin } from "lucide-react";
import Image from "next/image";

// Review Card Component Updated
export const ReviewCard = ({
  img,
  name,
  destination,
  comment,
  rating,
}: {
  img: string;
  name: string;
  destination: string;
  comment: string;
  rating: number;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-6 transition-colors",
        // Light styles
        "border-zinc-200 bg-white hover:bg-zinc-50",
        // Dark styles
        "dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900"
      )}
    >
      <div className="flex justify-between">
        <div className="flex flex-row items-center gap-4">
          {/* Profile Image */}
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-zinc-100 dark:border-zinc-800">
            <Image
              className="object-cover"
              fill
              alt={name}
              src={img || "https://github.com/shadcn.png"}
            />
          </div>

          <div className="flex flex-col">
            <figcaption className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              {name}
            </figcaption>
            <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
              <MapPin className="w-3 h-3" /> {destination}
            </p>
          </div>
        </div>

        {/* Dynamic Star Rating */}
        <div className="mt-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={cn(
                "transition-all",
                i < rating
                  ? "fill-yellow-400 text-yellow-400" // Filled Star
                  : "fill-zinc-200 text-zinc-200 dark:fill-zinc-800 dark:text-zinc-800" // Empty Star
              )}
            />
          ))}
        </div>
      </div>
      <blockquote className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 line-clamp-3">
        “{comment}”
      </blockquote>
    </figure>
  );
};

// Marquee Animation Component (No Changes Needed here, kept as is)
export const Marquee = ({
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
