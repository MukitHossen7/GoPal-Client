"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Section with Optimized Next.js Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co/TDFkZ3D0/father-and-son-2258681-1280.jpg"
          alt="Travel Adventure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Professional gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent md:via-primary/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10 ">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
            Join the Global Community
          </motion.div>

          {/* Heading with Professional Typography */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-[1.05] mb-8"
          >
            Don&apos;t Just Dream It, <br />
            <span className=" underline decoration-secondary/50 underline-offset-8">
              Explore
            </span>{" "}
            It Together.
          </motion.h2>

          {/* Subtext explaining the platform value */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg  text-white/90 mb-12 max-w-xl leading-relaxed font-medium"
          >
            Ready to find your perfect travel buddy? Join thousands of explorers
            who share costs, plan itineraries, and create safe, unforgettable
            memories.
          </motion.p>

          {/* Core Feature Points */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12"
          >
            {[
              "100% Verified Profiles",
              "AI-Powered Buddy Matching",
              "Shared Trip Cost Planning",
              "Secure Community Messaging",
            ].map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white/90">
                <CheckCircle2 size={20} className="text-green-400 shrink-0" />
                <span className="text-sm md:text-base font-semibold">
                  {feature}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-5"
          >
            <Link href="/register" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="h-12 lg:h-16 w-full sm:w-72 rounded-xl bg-white text-primary hover:bg-gray-100 font-bold text-lg shadow-2xl shadow-black/30 group transition-all duration-300"
              >
                Create Account Free
                <ArrowRight
                  size={20}
                  className="ml-2 transition-transform group-hover:translate-x-1.5"
                />
              </Button>
            </Link>

            <Link href="/travel-plans" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="h-12 lg:h-16 w-full sm:w-64 rounded-xl border-2 border-white/40 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 font-bold text-lg transition-all"
              >
                Explore Plans
              </Button>
            </Link>
          </motion.div>

          {/* Trust & Social Proof with Optimized Images */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center gap-5 text-white/70 text-sm font-medium"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-10 w-10 rounded-full border-2 border-primary bg-muted overflow-hidden"
                >
                  <Image
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt="Community Member"
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <p className="text-white font-bold">15,000+ Verified Travelers</p>
              <p className="text-xs text-white/50">
                Sharing adventures across 120+ countries
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
