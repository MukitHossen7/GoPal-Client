"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Github,
} from "lucide-react";
import { Logo } from "./Logo";

const PublicFooter = () => {
  const currentYear = new Date().getFullYear();

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative border-t bg-background  pb-8 overflow-hidden">
      {/* Decorative Background Element (Real Site Vibe) */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section: Newsletter/CTA (Professional sites always have this) */}

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Logo variant="full" />
            <p className="text-sm text-muted-foreground leading-relaxed font-medium">
              Transforming solo journeys into shared adventures. Find compatible
              travel buddies, share costs, and build a vibrant community of
              world explorers with GoPal.
            </p>
            <div className="flex items-center space-x-3">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/mukit.hossen.487594",
                },
                { icon: Github, href: "https://github.com/MukitHossen7" },
                { icon: Linkedin, href: "www.linkedin.com/in/mukithossen" },
              ].map((social, idx) => (
                <Link
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links (Discover) */}
          <div className="lg:pl-8">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
              Discover
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "Explore Travelers", path: "/explore-travelers" },
                { name: "Travel Buddy", path: "/travel-plans" },
                { name: "Membership Plans", path: "/membership" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-2 transition-all duration-300 text-primary"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company & Support */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
              Company
            </h3>
            <ul className="space-y-4">
              {[
                { name: "About GoPal", path: "/about" },
                { name: "Contact Us", path: "/contact" },
                { name: "Safety Tips", path: "#" },
                { name: "Privacy Policy", path: "#" },
                { name: "Terms of Service", path: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group flex items-center text-sm font-semibold text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:mr-2 transition-all duration-300 text-primary"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-foreground/70">
              Get in Touch
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-medium text-muted-foreground leading-snug">
                  Level-4, 34, Awal Centre, <br />
                  Banani, Dhaka - 1213
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  +880 12326153447
                </span>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  hossenmukit7@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Legal & Social */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
            &copy; {currentYear}{" "}
            <span className="text-primary italic">GoPal</span>. Crafted for
            Global Explorers.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all"
            >
              Status: System Operational
            </Link>
            <Link
              href="#"
              className="text-[10px] font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-all"
            >
              English (US)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
