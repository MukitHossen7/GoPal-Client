"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Globe, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    name: "IATA Member",
    year: "Since 2021",
    icon: <Globe className="w-8 h-8 text-primary" />,
    desc: "Global standard for air travel safety and reliability.",
  },
  {
    name: "PATA Certified",
    year: "Verified",
    icon: <Award className="w-8 h-8 text-primary" />,
    desc: "Pacific Asia Travel Association official partner.",
  },
  {
    name: "Safe Travels",
    year: "WTTC Approved",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    desc: "Recognized for global health and hygiene protocols.",
    featured: true,
  },
];

const partners = [
  "Emirates",
  "Qatar Airways",
  "Marriott",
  "Hilton",
  "Turkish Airlines",
  "Expedia",
  "Airbnb",
  "Singapore Airlines",
  "Hyatt",
  "Accor",
];

export default function TrustPartners() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-[1px] w-8 bg-primary/40"></span>
            <span className="text-primary font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs">
              Reliability
            </span>
            <span className="h-[1px] w-8 bg-primary/40"></span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-foreground md:text-4xl tracking-tight mb-6"
          >
            Certified Excellence <br /> &{" "}
            <span className="text-primary italic font-light">
              Global Partners
            </span>
          </motion.h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-10 rounded-[2.5rem] border transition-all duration-500 hover:shadow-md group ${
                cert.featured
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                  : "bg-card border-border hover:border-primary/20"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6 ${
                  cert.featured ? "bg-white/20" : "bg-primary/10"
                }`}
              >
                {cert.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="text-xl font-bold tracking-tight">
                  {cert.name}
                </h4>
                <CheckCircle2
                  className={`w-4 h-4 ${
                    cert.featured ? "text-white" : "text-primary"
                  }`}
                />
              </div>
              <p
                className={`text-[10px] uppercase tracking-widest mb-4 font-bold opacity-60`}
              >
                {cert.year}
              </p>
              <p
                className={`text-sm leading-relaxed font-light ${
                  cert.featured ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {cert.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Industry Partners Marquee - Professional Redesign */}
        <div className="relative mt-10">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-border/60"></div>
              <p className="text-muted-foreground font-semibold text-[10px] tracking-[0.4em] uppercase opacity-60 px-4">
                Global Affiliations
              </p>
              <div className="h-[1px] flex-1 bg-border/60"></div>
            </div>

            {/* Professional Marquee Container with Refined Masking */}
            <div className="relative w-full overflow-hidden">
              {/* Advanced Masking Overlay */}
              <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

              <div className="group flex overflow-hidden p-4 [--gap:3rem] [--duration:40s] hover:[animation-play-state:paused]">
                {/* Loop 1 */}
                <div className="flex shrink-0 animate-marquee flex-row justify-around gap-[var(--gap)] min-w-full">
                  {partners.map((partner, i) => (
                    <div
                      key={i}
                      className="relative flex items-center justify-center min-w-[160px] px-8 py-6 rounded-[2rem] border border-border/40 bg-secondary/20 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-background hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group/item"
                    >
                      {/* Subtle indicator dot */}
                      <div className="absolute top-3 right-5 w-1 h-1 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors"></div>

                      <span className="text-xl md:text-2xl font-bold tracking-tighter text-muted-foreground/40 transition-colors duration-300 group-hover/item:text-primary">
                        {partner}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Loop 2 (Continuous) */}
                <div
                  aria-hidden="true"
                  className="flex shrink-0 animate-marquee flex-row justify-around gap-[var(--gap)] min-w-full"
                >
                  {partners.map((partner, i) => (
                    <div
                      key={`dup-${i}`}
                      className="relative flex items-center justify-center min-w-[160px] px-8 py-6 rounded-[2rem] border border-border/40 bg-secondary/20 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:bg-background hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group/item"
                    >
                      <div className="absolute top-3 right-5 w-1 h-1 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors"></div>

                      <span className="text-xl md:text-2xl font-bold tracking-tighter text-muted-foreground/40 transition-colors duration-300 group-hover/item:text-primary">
                        {partner}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
