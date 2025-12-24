"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Trophy, Heart } from "lucide-react";
import Image from "next/image";

const milestones = [
  {
    year: "2023",
    title: "The Spark of an Idea",
    description:
      "It all started with a solo trip to the Himalayas. Our founder realized that the beauty of travel is doubled when shared. This led to the birth of Travel Buddy – a mission to ensure no explorer ever feels alone.",
    icon: <Calendar className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800&auto=format&fit=crop",
  },
  {
    year: "2024",
    title: "Building the Community",
    description:
      "We launched our beta version with just 500 travelers. Within six months, our community grew to 5,000 members across 10 countries, proving that the world was hungry for meaningful travel connections.",
    icon: <Users className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop",
  },
  {
    year: "2025",
    title: "Global Recognition",
    description:
      "Travel Buddy was recognized as one of the most innovative travel platforms. We introduced verified profiles and premium matching, ensuring the highest level of safety and trust for our users.",
    icon: <Trophy className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    year: "2025",
    title: "Beyond Just Travel",
    description:
      "Today, we are more than a platform; we are a global family. With over 50,000+ success stories and countless lifelong friendships made, we continue to bridge the gap between solo dreams and shared realities.",
    icon: <Heart className="w-6 h-6" />,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function OurStory() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground md:text-4xl mb-4 tracking-tight"
          >
            Our Journey <span className="text-primary">& Story</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
          >
            From a simple realization in the mountains to a global community of
            thousands.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line (Desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-border hidden md:block"></div>

          {/* Vertical Left Line (Mobile) */}
          <div className="absolute left-4 transform w-[2px] h-full bg-border md:hidden"></div>

          <div className="space-y-20 md:space-y-24">
            {milestones.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center justify-between ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[45%] pl-12 md:pl-0">
                  <div
                    className={`p-8 rounded-[2rem] bg-card border border-border shadow-none hover:shadow-sm transition-shadow`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 text-primary rounded-xl">
                        {item.icon}
                      </div>
                      <span className="text-2xl font-black text-primary/40">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle Indicator */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                </div>

                {/* Image Side */}
                <div className="w-full md:w-[45%] mt-8 md:mt-0 pl-12 md:pl-0">
                  <div className="relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
