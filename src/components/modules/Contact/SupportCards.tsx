"use client";

import { motion } from "framer-motion";
import {
  Mail,
  CreditCard,
  MessageCircle,
  ArrowRight,
  Clock,
} from "lucide-react";

const SupportCards = () => {
  const cards = [
    {
      icon: Mail,
      title: "Email Support",
      info: "hossenmukit7@gmail.com",
      sub: "Average response: 2h",
      status: "Available",
      action: "Send Email",
      href: "mailto:hossenmukit7@gmail.com",
      color: "var(--primary)",
      lightColor: "oklch(0.45 0.14 255 / 0.1)",
    },
    {
      icon: CreditCard,
      title: "Billing & Plans",
      info: "Subscription Help",
      sub: "Refunds & Upgrades",
      status: "Active",
      action: "Get Help",
      href: "/membership",
      color: "oklch(0.6 0.16 150)",
      lightColor: "oklch(0.6 0.16 150 / 0.1)",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Chat",
      info: "+880 1326153447",
      sub: "Instant Support",
      status: "Online",
      action: "Start Chat",
      href: "https://wa.me/8801326153447",
      color: "oklch(0.7 0.18 80)", // Amber tone
      lightColor: "oklch(0.7 0.18 80 / 0.1)",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-20">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // Custom ease for professional feel
          }}
          viewport={{ once: true }}
          className="group relative flex flex-col h-full"
        >
          {/* Card Body */}
          <div className="relative z-10 flex flex-col h-full p-10 rounded-[3rem] bg-card border border-border/60 shadow-none  transition-all duration-700 overflow-hidden">
            {/* Background Decorative Element */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"
              style={{ backgroundColor: card.color }}
            />

            {/* Header: Icon & Badge */}
            <div className="flex justify-between items-center mb-10">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[10deg]"
                style={{ backgroundColor: card.lightColor, color: card.color }}
              >
                <card.icon size={30} strokeWidth={1.5} />
              </div>

              <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/80 border border-border/50 backdrop-blur-md">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: card.color }}
                ></span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] opacity-80">
                  {card.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-3 tracking-tighter group-hover:text-primary transition-colors duration-300">
                {card.title}
              </h3>
              <p className="text-foreground/80 font-medium text-base mb-2 leading-tight">
                {card.info}
              </p>
              <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
                <Clock size={15} />
                <span>{card.sub}</span>
              </div>
            </div>

            {/* --- Professional "Magnetic" Button --- */}
            <div className="mt-auto">
              <motion.a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-full py-5 px-8 rounded-2xl bg-secondary overflow-hidden group/btn transition-all duration-300"
                whileTap={{ scale: 0.97 }}
              >
                {/* Button Fill Background on Hover */}
                <div className="absolute inset-0 w-0 bg-primary group-hover/btn:w-full transition-all duration-500 ease-[cubic-bezier(0.785,0.135,0.15,0.86)]" />

                <div className="relative z-10 flex items-center justify-between w-full font-bold text-xs uppercase tracking-[0.2em] group-hover/btn:text-primary-foreground transition-colors duration-300">
                  {card.action}

                  {/* Icon Animation: Sliding Arrow */}
                  <div className="relative w-5 h-4 overflow-hidden">
                    <ArrowRight
                      size={20}
                      className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover/btn:translate-x-full group-hover/btn:opacity-0"
                    />
                    <ArrowRight
                      size={20}
                      className="absolute inset-0 -translate-x-full opacity-0 transition-all duration-500 ease-in-out group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
                    />
                  </div>
                </div>
              </motion.a>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="h-1 w-12 rounded-full bg-primary/20" />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SupportCards;
