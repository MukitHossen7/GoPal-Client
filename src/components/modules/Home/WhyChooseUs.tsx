"use client";

import {
  ShieldCheck,
  Users,
  Wallet,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description:
      "Travel with confidence. Every user goes through a multi-step verification process to ensure safety and trust.",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    border: "hover:border-blue-500/50",
  },
  {
    icon: Users,
    title: "Smart Matching",
    description:
      "Stop scrolling endlessly. Our AI-driven algorithm connects you with travelers who share your specific interests.",
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    border: "hover:border-emerald-500/50",
  },
  {
    icon: Wallet,
    title: "Cost Sharing",
    description:
      "Save money on accommodation and transport by splitting costs with your travel buddies transparently.",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    border: "hover:border-orange-500/50",
  },
  {
    icon: HeartHandshake,
    title: "Community First",
    description:
      "More than just a trip. Join a global community of explorers sharing stories, tips, and lifelong friendships.",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    border: "hover:border-purple-500/50",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-[500px] w-full -translate-x-1/2 opacity-10 blur-[100px] bg-primary/20" />
      <div className="absolute bottom-0 right-0 -z-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Content Hierarchy */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Core Benefits
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl font-bold tracking-tight text-foreground md:text-4xl leading-[1.1]"
            >
              Elevate Your Experience With{" "}
              <span className="text-primary">GoPal</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-md"
            >
              GoPal transforms the way you explore the world by connecting you
              with compatible travel partners who share your passion and pace.
              Our platform provides a secure ecosystem where verified explorers
              can co-create detailed itineraries, share travel costs
              transparently, and build meaningful connections that last a
              lifetime.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <Link href="/about">
                <button className="group flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300 cursor-pointer">
                  Learn more about our safety standards
                  <ArrowRight size={20} className="transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Professional Feature Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`group relative rounded-3xl border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 ${feature.border} shadow-none hover:shadow-xl hover:shadow-primary/5`}
              >
                {/* Icon with Glowing Effect */}
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 ${feature.color}`}
                >
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-foreground">
                  {feature.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>

                {/* Subtle Decorative Line */}
                <div className="absolute bottom-6 right-8 h-1 w-12 rounded-full bg-border transition-all duration-300 group-hover:w-20 group-hover:bg-primary/30" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
