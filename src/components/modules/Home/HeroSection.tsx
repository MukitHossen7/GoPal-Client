"use client";
import SearchBar from "@/components/shared/SearchBar";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden py-20 md:py-0">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl">
            Find Your Perfect <br />
            <span className="text-primary-foreground text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Travel Buddy
            </span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-200 md:text-xl">
            Don&apos;t explore the world alone. Connect with like-minded
            travelers, plan trips, and create unforgettable memories together.
          </p>
        </motion.div>

        {/* Search Bar Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mx-auto max-w-4xl"
        >
          <SearchBar />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
