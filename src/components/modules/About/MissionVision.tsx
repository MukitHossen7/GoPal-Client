"use client";

import { motion } from "framer-motion";
import { Target, Eye, Globe2, ShieldCheck, HeartHandshake } from "lucide-react";
import Image from "next/image";

const values = [
  {
    icon: <Globe2 className="w-6 h-6" />,
    title: "Global Connectivity",
    desc: "Bridging the gap between cultures by connecting explorers from every corner of the world.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Safety First",
    desc: "Implementing rigorous verification to ensure every shared journey is secure and trustworthy.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6" />,
    title: "Shared Experiences",
    desc: "Transforming solo travels into meaningful friendships and collective adventures.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Visuals */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-none z-10">
              <Image
                src="https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop"
                alt="Travel Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>

            {/* Floating Experience Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-card/80 backdrop-blur-xl p-8 rounded-[2rem] border border-border shadow-xl z-20 hidden md:block max-w-[280px]"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <Globe2 className="w-6 h-6" />
                </div>
                <span className="font-bold text-lg">100+ Countries</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Successfully connected travelers across all continents.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side: Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm block mb-4">
                Our Purpose
              </span>
              <h2 className="text-3xl font-bold text-foreground md:text-4xl  tracking-tight mb-6 leading-tight">
                Empowering the World <br /> to{" "}
                <span className="text-primary italic">Explore Together</span>
              </h2>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group p-8 rounded-[2.5rem] bg-secondary border border-border/50 hover:border-primary/30 transition-all duration-500 shadow-none"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-background rounded-2xl text-primary shadow-sm">
                  <Target className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    To create a seamless and secure ecosystem where travelers
                    can find compatible companions, share costs, and build
                    lifelong connections while exploring the globe.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="group p-8 rounded-[2.5rem] bg-background border border-border hover:shadow-md transition-all duration-500 shadow-none"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                  <Eye className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    To become the world&apos;s most trusted travel social
                    network, redefining solo travel by making &apos;shared
                    adventures&apos; the standard for every modern explorer.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Core Values Row */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 transform group-hover:rotate-6 transition-transform">
                {val.icon}
              </div>
              <h4 className="font-bold text-lg mb-2">{val.title}</h4>
              <p className="text-muted-foreground text-sm font-light leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
