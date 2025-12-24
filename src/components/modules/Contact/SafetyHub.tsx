"use client";

import { ExternalLink, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const SafetyHub = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative overflow-hidden bg-primary p-10 md:p-12 rounded-[3rem]  text-primary-foreground group shadow-none"
    >
      <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform">
        <ShieldCheck size={200} />
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Travel Buddy Safety Hub</h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed">
            Your safety is our top priority. Please follow our community
            guidelines before meeting a travel companion and while planning your
            trip.
          </p>
        </div>
        <button className="px-8 py-4 bg-white text-primary font-bold rounded-2xl shadow-xl hover:bg-secondary transition-all flex items-center gap-3 uppercase tracking-tighter">
          Read Safety Tips <ExternalLink size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default SafetyHub;
