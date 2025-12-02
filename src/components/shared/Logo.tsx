"use client";
import { Plane, MapPin, Compass } from "lucide-react";

interface LogoProps {
  variant?: "icon" | "full" | "minimal";
  className?: string;
}

export const Logo = ({ variant = "full", className = "" }: LogoProps) => {
  // ১. মডার্ন আইকনিক লোগো (প্লেন + টেক্সট) - অ্যাডভেঞ্চার বোঝায়
  if (variant === "full") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground shadow-sm">
          <Plane
            className="w-5 h-5 -rotate-45 translate-x-0.5"
            strokeWidth={2.5}
          />
        </div>
        <span className="text-2xl font-bold tracking-tight text-foreground">
          Go<span className="text-primary">Pal</span>
        </span>
      </div>
    );
  }

  // ২. পিন স্টাইল লোগো (লোকেশন পিন) - মিটআপ বা ডেস্টিনেশন বোঝায়
  if (variant === "minimal") {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <MapPin className="w-6 h-6 text-primary fill-primary/20" />
        <span className="text-xl font-bold font-mono tracking-tighter text-foreground">
          GoPal
        </span>
      </div>
    );
  }

  // ৩. শুধুমাত্র আইকন (মোবাইল বা ফুটারের ছোট ভার্সনের জন্য)
  if (variant === "icon") {
    return (
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-blue-400 text-white shadow-lg ${className}`}
      >
        <Compass className="w-6 h-6 animate-pulse-slow" />
      </div>
    );
  }

  return null;
};
