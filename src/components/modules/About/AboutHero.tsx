"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative min-h-[85vh] w-full flex items-center justify-center overflow-hidden py-16 md:py-20 lg:py-0">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co/WWd56DdZ/images-2.jpg"
          alt="Luxury Ocean View"
          fill
          priority
          className="object-cover scale-105 grayscale hover:grayscale-0 transition-all duration-1000"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-primary/10 to-background/20 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-primary-foreground/90 bg-primary/20 backdrop-blur-md px-4 py-1 rounded-full uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold mb-6 inline-block border border-white/10"
        >
          Discover Our Legacy
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white mb-6 leading-tight tracking-tight"
        >
          We Craft{" "}
          <span className="text-primary drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]">
            Memories
          </span>
          , <br />
          <span className="italic font-light opacity-90">Not Just Trips.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed px-4"
        >
          Travel Buddy is a premium global community for explorers. We believe
          in connecting souls, not just matching itineraries.
        </motion.p>
      </div>

      {/* Aesthetic Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        <span className="text-[10px] uppercase tracking-widest text-white/40">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
