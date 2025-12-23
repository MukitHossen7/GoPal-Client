"use client";

import { cn } from "@/lib/utils";
import { Star, MapPin, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

// --- Marquee Component (Infinite Scroll Logic) ---
export const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  ...props
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div
      {...props}
      className={cn(
        "flex w-full overflow-hidden [--gap:1.5rem] [gap:var(--gap)] flex-row",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around [gap:var(--gap)] flex-row animate-marquee",
          reverse && "direction-reverse",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children} {/* Duplicate children for seamless infinite scroll */}
      </div>
    </div>
  );
};

// --- ReviewCard Component (Professional UI) ---
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
        "relative w-80 cursor-pointer overflow-hidden rounded-2xl border p-6 transition-all duration-300",
        // Light & Dark Styles using your globals.css variables
        "border-border bg-card/50 backdrop-blur-sm hover:bg-accent/30",
        "hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1.5"
      )}
    >
      <div className="flex flex-col gap-4">
        {/* Rating and Decorative Quote */}
        <div className="flex items-center justify-between">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={cn(
                  i < rating
                    ? "fill-orange-400 text-orange-400"
                    : "text-muted fill-muted/30"
                )}
              />
            ))}
          </div>
          <Quote className="text-primary/10 -rotate-12" size={28} />
        </div>

        {/* Comment with professional typography */}
        <blockquote className="text-[14.5px] leading-relaxed text-foreground/90 font-medium">
          &ldquo;{comment}&rdquo;
        </blockquote>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 mt-2 border-t border-border/50 pt-4">
          <div className="relative h-11 w-11 shrink-0">
            {/* 
                FIX: Added 'fill' and 'sizes' to handle Next.js Image optimization 
                Parent div already has 'relative h-11 w-11'
            */}
            <Image
              src={img || "https://avatar.vercel.sh/placeholder"}
              alt={`${name}'s profile`}
              fill
              sizes="44px"
              className="rounded-full object-cover border-2 border-primary/20 shadow-sm"
            />
            {/* Verified Badge */}
            <div
              className="absolute -bottom-0.5 -right-0.5 bg-green-500 border-2 border-background h-3.5 w-3.5 rounded-full z-10"
              title="Verified Explorer"
            />
          </div>

          <div className="flex flex-col overflow-hidden">
            <figcaption className="text-sm font-bold text-foreground truncate">
              {name}
            </figcaption>
            <div className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-tighter">
              <MapPin size={10} strokeWidth={3} />
              {destination}
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
};
