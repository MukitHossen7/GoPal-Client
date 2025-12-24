"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, Globe2, Award } from "lucide-react";
import Image from "next/image";

const team = [
  {
    name: "Mukit Hossen",
    role: "Founder & Chief Explorer",
    bio: "With over 15 years of solo travel experience across 60 countries, Arif founded Travel Buddy to ensure no one has to explore the world's beauty alone.",
    image: "https://i.ibb.co/Kx8bLWBY/174138051.jpg",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
    tag: "The Visionary",
  },
  {
    name: "Mim Akter",
    role: "Lead Tour Architect",
    bio: "Sarah is a specialist in crafting off-beat itineraries. She believes the best travel memories are made when you step off the tourist trail with a friend.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
    tag: "Expert Curator",
  },
  {
    name: "Md. Sifat Hossain",
    role: "Head of Safety & Community",
    bio: "A former security consultant, David ensures that our matching algorithm and community guidelines keep our travelers safe at every step of their journey.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    socials: { linkedin: "#", twitter: "#", instagram: "#" },
    tag: "Safety First",
  },
];

export default function MeetExperts() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border mb-6 text-primary text-xs font-bold uppercase tracking-widest">
              <Award className="w-4 h-4" /> Trusted by 50K+ Travelers
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl tracking-tight leading-tight">
              The Minds Behind Your <br />
              <span className="text-primary italic font-light leading-snug">
                Shared Adventures
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-sm font-light leading-relaxed"
          >
            Meet the seasoned travelers and industry experts who work tirelessly
            to turn your solo trips into lifelong connections.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              {/* Image Container with Custom Border */}
              <div className="relative h-[450px] w-full rounded-[3.5rem] overflow-hidden mb-8 border border-border/50 shadow-none transition-all duration-500 group-hover:shadow-md group-hover:border-primary/20">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />

                {/* Overlay Badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-[10px] uppercase font-bold text-white tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {member.tag}
                  </div>
                </div>

                {/* Social Overlay */}
                <div className="absolute bottom-6 left-6 right-6 translate-y-12 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-card/80 backdrop-blur-xl p-4 rounded-3xl flex items-center justify-around border border-border">
                    <a
                      href={member.socials.linkedin}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.socials.instagram}
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Globe2 className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio & Info */}
              <div className="px-4">
                <h3 className="text-2xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground font-light leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
