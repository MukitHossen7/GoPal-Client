"use client";

import { ShieldCheck, Users, Wallet, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Profiles",
    description:
      "Travel with confidence. Every user goes through a multi-step verification process to ensure safety and trust.",
    color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    icon: Users,
    title: "Smart Matching",
    description:
      "Stop scrolling endlessly. Our AI-driven algorithm connects you with travelers who share your specific interests and budget.",
    color:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
  },
  {
    icon: Wallet,
    title: "Cost Sharing",
    description:
      "Save money on accommodation and transport by splitting costs with your travel buddies transparently.",
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    icon: HeartHandshake,
    title: "Community First",
    description:
      "More than just a trip. Join a global community of explorers sharing stories, tips, and lifelong friendships.",
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Why Travelers Choose <span className="text-primary">GoPal</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We make finding the perfect travel companion safe, easy, and fun.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl border bg-card p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color}`}
              >
                <feature.icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
