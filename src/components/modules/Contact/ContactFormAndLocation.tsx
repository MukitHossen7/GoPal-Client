"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  Clock,
  Facebook,
  GithubIcon,
  Linkedin,
  MapPin,
  Send,
} from "lucide-react";

const ContactFormAndLocation = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-7 bg-card border-none border-border p-8 md:p-12 rounded-[2.5rem] shadow-sm"
      >
        <h2 className="text-3xl font-bold mb-8 tracking-tight">
          Send a Message
        </h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border focus:border-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border focus:border-primary outline-none transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">
              Inquiry Category
            </label>
            <div className="relative">
              <select className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border focus:border-primary outline-none appearance-none cursor-pointer">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Report a User / Safety Concern</option>
                <option>Business / Partnership</option>
              </select>
              <ChevronDown
                className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50"
                size={20}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold uppercase tracking-wider ml-1 opacity-70">
              Message
            </label>
            <textarea
              rows={5}
              placeholder="How can we help you explore more?"
              className="w-full px-6 py-4 rounded-2xl bg-secondary/50 border border-border focus:border-primary outline-none transition-all resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 bg-primary text-primary-foreground font-bold rounded-2xl shadow-none shadow-primary/30 flex items-center justify-center gap-3 uppercase tracking-widest"
          >
            Send Message <Send size={20} />
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="lg:col-span-5 space-y-8"
      >
        <div className="bg-primary/5 border-none border-primary/10 p-8 rounded-[2.5rem] space-y-6 shadow-none">
          <h3 className="text-2xl font-bold mb-4">Our Headquarters</h3>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-background  border-border flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary" />
            </div>
            <div>
              <p className="font-bold">Virtual & Physical HQ</p>
              <p className="text-muted-foreground">
                123 Travel Tower, Level 4, Gulshan-2, Dhaka 1212
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary" />
            </div>
            <div>
              <p className="font-bold">Working Hours</p>
              <p className="text-muted-foreground">
                Sat - Thu: 10:00 AM - 08:00 PM
              </p>
              <p className="text-xs text-primary mt-1 font-semibold underline cursor-pointer">
                Emergency Support: 24/7 Available
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card shadow-sm border-none border-border p-8 rounded-[2.5rem]">
          <h3 className="text-xl font-bold mb-6">Join Our Community</h3>
          <div className="flex gap-4">
            {[
              {
                icon: Facebook,
                label: "Facebook Group",
                link: "https://www.facebook.com/mukit.hossen.487594",
              },
              {
                icon: GithubIcon,
                label: "GitHub",
                link: "https://github.com/MukitHossen7",
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                link: "www.linkedin.com/in/mukithossen",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                whileHover={{ y: -5 }}
                className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground flex items-center gap-2">
            Join 50K+ explorers in our official{" "}
            <span className="text-primary font-bold underline cursor-pointer">
              Facebook Community Group
            </span>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactFormAndLocation;
