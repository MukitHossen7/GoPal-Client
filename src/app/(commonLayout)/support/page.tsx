"use client";

import { motion } from "framer-motion";
import {
  Search,
  UserCircle,
  CreditCard,
  ShieldCheck,
  Map,
  ChevronRight,
  LifeBuoy,
  AlertCircle,
} from "lucide-react";
// import { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Help Center | Support & Safety Guide - GoPal",
//   description:
//     "Find answers to all your questions about GoPal. Learn how to find travel buddies, manage your premium subscription, and stay safe during your adventures.",
//   keywords: [
//     "GoPal Help Center",
//     "Travel Buddy Support",
//     "Subscription FAQ",
//     "Travel Safety Tips",
//     "Account Troubleshooting",
//     "GoPal Verification Guide",
//   ],
// };

const categories = [
  {
    icon: UserCircle,
    title: "Account & Profile",
    desc: "Manage your travel interests, visited countries, and profile settings.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Map,
    title: "Trips & Matching",
    desc: "How to create travel plans and find compatible buddies for your journey.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: CreditCard,
    title: "Billing & Subscription",
    desc: "Manage premium plans, Stripe payments, and verified badge purchases.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Safety",
    desc: "Community guidelines, reporting users, and staying safe offline.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
];

const SupportPage = () => {
  return (
    <div className="bg-background min-h-screen pb-20 overflow-x-hidden font-sans">
      {/* 1. Hero Section with Search */}
      <section className="relative h-[45vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container relative z-10 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter italic"
          >
            How can we help?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto relative group"
          >
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search for articles, guides, or safety tips..."
              className="w-full h-16 pl-16 pr-6 rounded-2xl bg-white border-none shadow-2xl focus:ring-4 focus:ring-primary/20 outline-none text-lg"
            />
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 -mt-16 relative z-20">
        {/* 2. Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-card border border-border shadow-sm hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <cat.icon size={28} />
              </div>
              <h3 className="text-xl font-black mb-3 tracking-tight">
                {cat.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {cat.desc}
              </p>
              <div className="flex items-center text-primary font-bold text-xs uppercase tracking-widest gap-2">
                Browse Topics <ChevronRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Featured Articles Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black mb-10 tracking-tight italic flex items-center gap-3">
              <LifeBuoy className="text-primary" /> Top Featured Articles
            </h2>
            <div className="space-y-4">
              {[
                "How to verify your profile for a Badge?",
                "What to do if a travel buddy cancels?",
                "Subscription plans and billing cycles explained.",
                "How GoPal handles your privacy and data.",
                "Reporting suspicious activity in the community.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="p-6 rounded-2xl bg-secondary/30 border border-border flex items-center justify-between cursor-pointer group"
                >
                  <span className="font-bold text-lg">{text}</span>
                  <ChevronRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* 4. Safety Spotlight Card */}
          <div className="bg-primary p-10 rounded-[3rem] text-primary-foreground relative overflow-hidden flex flex-col justify-center shadow-2xl">
            <div className="absolute top-0 right-0 p-10 opacity-10 rotate-12">
              <ShieldCheck size={180} />
            </div>
            <div className="relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6 backdrop-blur-md border border-white/30">
                <AlertCircle size={24} />
              </div>
              <h3 className="text-3xl font-black mb-4 tracking-tighter leading-tight italic">
                Our Safety Commitment
              </h3>
              <p className="opacity-80 mb-8 leading-relaxed">
                Your safety is our priority. Learn about our multi-step
                verification and how we protect explorers.
              </p>
              <button className="w-full py-4 bg-white text-primary font-black rounded-xl uppercase tracking-widest text-xs hover:bg-secondary transition-colors">
                Safety Guide
              </button>
            </div>
          </div>
        </div>

        {/* 5. Help Escalation Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="bg-card border-2 border-dashed border-primary/30 p-12 rounded-[4rem] text-center max-w-4xl mx-auto shadow-sm"
        >
          <h2 className="text-3xl font-black mb-4 italic tracking-tight">
            Still can&apos;t find what you need?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Our community success team is available 24/7 to help you out.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="px-12 py-5 bg-primary text-primary-foreground font-black rounded-2xl shadow-xl shadow-primary/30 uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all">
              Start Live Chat
            </button>
            <button className="px-12 py-5 bg-secondary text-foreground font-black rounded-2xl border border-border uppercase tracking-[0.2em] text-xs hover:bg-muted transition-all">
              Submit a Ticket
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SupportPage;
