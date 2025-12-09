"use client";
import { motion } from "framer-motion";
import HomeSearchBar from "./HomeSearchBar";

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
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl lg:text-7xl drop-shadow-md">
            Find Your Perfect <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              Travel Buddy
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl drop-shadow-sm">
            Don&apos;t explore the world alone. Connect with like-minded
            travelers, plan trips, and create unforgettable memories together.
          </p>
        </motion.div>

        {/* Animated Search Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full"
        >
          <HomeSearchBar />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
