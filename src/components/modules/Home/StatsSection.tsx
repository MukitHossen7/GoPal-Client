"use client";

import { useInView } from "framer-motion";
import { Star, Globe, ShieldCheck } from "lucide-react";
import { useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Animated Counter Component
const Counter = ({ from, to }: { from: number; to: number }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView || !nodeRef.current) return;

    const node = nodeRef.current;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue = Math.floor(from + (to - from) * easeOutQuart);

      // Format number (e.g., 1000 -> 1k is handled by text outside, this just counts)
      node.textContent = currentValue.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [from, to, isInView]);

  return (
    <span ref={nodeRef} className="font-bold tabular-nums text-foreground" />
  );
};

const StatsSection = () => {
  return (
    <section className="border-b bg-background py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:divide-x lg:divide-border">
          {/* Stat 1: Total Travelers (With Avatar Stack) */}
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex -space-x-3 mb-1">
              {/* Mock Avatars for Social Proof */}
              {[1, 2, 3, 4].map((i) => (
                <Avatar key={i} className="border-2 border-background h-8 w-8">
                  <AvatarImage src={`https://i.pravatar.cc/100?u=${i}`} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <h3 className="text-3xl font-bold text-primary">
              <Counter from={0} to={10000} />+
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              Happy Travelers
            </p>
          </div>

          {/* Stat 2: Verified Profiles */}
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-sm font-medium text-muted-foreground">
              Verified Profiles
            </p>
          </div>

          {/* Stat 3: Destinations */}
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <Globe size={20} />
            </div>
            <h3 className="text-3xl font-bold">
              <Counter from={0} to={50} />+
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              Countries Covered
            </p>
          </div>

          {/* Stat 4: Support / Satisfaction */}
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
              <Star size={20} />
            </div>
            <h3 className="text-3xl font-bold">4.9/5</h3>
            <p className="text-sm font-medium text-muted-foreground">
              User Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
