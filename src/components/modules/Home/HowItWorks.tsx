"use client";
import { motion } from "framer-motion";
import { UserPlus, Map, Plane, ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Sign Up & Profile",
    description:
      "Create your profile, add your interests, and verify your identity to join our trusted community.",
    icon: UserPlus,
    color: "bg-blue-500/10",
    textColor: "text-blue-600",
  },
  {
    id: 2,
    title: "Create or Find a Plan",
    description:
      "Post your upcoming trip details or browse existing travel plans from other adventurous users.",
    icon: Map,
    color: "bg-emerald-500/10",
    textColor: "text-emerald-600",
  },
  {
    id: 3,
    title: "Connect & Travel",
    description:
      "Chat with compatible travelers, plan the details, and start your journey together safely.",
    icon: Plane,
    color: "bg-orange-500/10",
    textColor: "text-orange-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      {/* Background Subtle Elements */}
      <div className="absolute top-0 left-1/2 -z-10 h-[400px] w-full -translate-x-1/2 opacity-20 blur-[120px] bg-primary/30" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="relative mb-20 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          >
            Your Journey with <span className="text-primary">GoPal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
          >
            Start your shared adventure in three simple steps. We make it easy
            to find the perfect companion for your next destination.
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting Line (Desktop Only) */}
          <div className="absolute top-1/4 left-0 hidden w-full px-24 md:block">
            <div className="h-[2px] w-full border-t-2 border-dashed border-primary/20" />
          </div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative flex flex-col items-center text-center"
            >
              {/* Step Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-background px-3 py-1 text-xs font-bold text-primary shadow-none border border-border">
                STEP 0{step.id}
              </div>

              {/* Icon Container */}
              <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-[2.5rem] bg-card border border-border shadow-none transition-all duration-500 group-hover:rotate-[10deg] group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl transition-colors ${step.color}`}
                >
                  <step.icon
                    size={32}
                    className="text-primary transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="relative z-10 space-y-4">
                <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>

              {/* Arrow Indicator for Mobile */}
              {index !== steps.length - 1 && (
                <div className="mt-8 flex items-center justify-center text-primary/30 md:hidden">
                  <ArrowRight size={24} className="rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action Bottom (Optional but Pro look) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <Link href="/register">
            <button className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-none transition-all hover:bg-primary/90 hover:shadow-primary/25 active:scale-95">
              Get Started Now
              <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
