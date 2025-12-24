"use client";

import { motion } from "framer-motion";
import { MapPin, MousePointerClick } from "lucide-react";
import Image from "next/image";

const ContactHero = () => {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden flex items-center justify-center py-16 md:py-20 xl:py-0">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop"
          alt="Travel Background"
          fill
          priority
          className="object-cover"
        />
        {/* Real Site Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background/75"></div>
      </motion.div>

      {/* Content Container */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        {/* Breadcrumb - Professional Detail */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 text-white/80 text-sm mb-6 uppercase tracking-widest font-medium"
        >
          <span>Home</span>
          <span className="w-1 h-1 bg-primary rounded-full"></span>
          <span className="text-primary-foreground font-semibold">
            Contact Us
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-md "
        >
          Help us make your next <br />
          <span className="text-primary">adventure better.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 font-light leading-relaxed"
        >
          Have questions about travel buddies or subscription plans? Our team is
          here to help you 24/7. Let’s connect and explore the world together.
        </motion.p>

        {/* Floating Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent"></div>
          <MousePointerClick className="text-primary w-5 h-5" />
        </motion.div>
      </div>

      {/* Stats/Badges for Trust (Real Site Feature) */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4"
        >
          <div className="bg-primary/20 p-3 rounded-full">
            <MapPin className="text-primary w-6 h-6" />
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-semibold">Global Support</p>
            <p className="text-white/60 text-xs">Available in 50+ Countries</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
