"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, Map, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Stylized Elements */}
      <div className="absolute inset-0 bg-primary/5 -z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="relative bg-primary rounded-[3rem] p-8 md:p-20 overflow-hidden shadow-none">
          {/* Abstract Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full border-[1px] border-white/20 rounded-full scale-150 -translate-x-1/2" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-8">
                <Sparkles className="w-4 h-4 text-accent" /> Ready for your next
                journey?
              </div>
              <h2 className="text-3xl font-bold  md:text-4xl text-white mb-8 leading-tight tracking-tight">
                Stop Dreaming, <br />
                <span className="text-white/80 italic font-light">
                  Start Exploring Together.
                </span>
              </h2>
              <p className="text-primary-foreground/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
                Our story is just the beginning. Join our global community today
                and turn your travel bucket list into shared memories.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-2xl hover:bg-secondary transition-all group"
                >
                  Join the Community
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/travel-plans"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all"
                >
                  Find a Buddy
                </Link>
              </div>
            </motion.div>

            {/* Visual Element (Icon/Stat Grid) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center group hover:bg-white/20 transition-all">
                <Compass className="w-10 h-10 text-white mb-4 group-hover:rotate-45 transition-transform duration-500" />
                <span className="text-2xl font-bold text-white">500+</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">
                  Active Plans
                </span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] flex flex-col items-center justify-center text-center mt-8 group hover:bg-white/20 transition-all">
                <Map className="w-10 h-10 text-white mb-4 group-hover:-translate-y-1 transition-transform" />
                <span className="text-2xl font-bold text-white">120+</span>
                <span className="text-white/60 text-xs uppercase tracking-widest">
                  Destinations
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Trust Badge Bar Below CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="container mx-auto px-4 mt-10"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all">
          <p className="text-muted-foreground font-bold tracking-widest uppercase text-[10px]">
            Trusted By Partners Globaly
          </p>

          <div className="text-foreground font-black text-xl">Tripadvisor</div>
          <div className="text-foreground font-black text-xl">Booking.com</div>
          <div className="text-foreground font-black text-xl">Expedia</div>
        </div>
      </motion.div>
    </section>
  );
}
