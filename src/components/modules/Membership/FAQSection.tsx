// import { HelpCircle } from "lucide-react";

// const faqs = [
//   {
//     question: "Can I cancel my subscription anytime?",
//     answer:
//       "Yes, absolutely. You can cancel via profile settings. You'll retain access until the billing cycle ends.",
//   },
//   {
//     question: "What does the Verified Badge do?",
//     answer:
//       "It adds a blue checkmark to your profile, increasing trust. Verified profiles get 3x more responses.",
//   },
//   {
//     question: "Is my payment information secure?",
//     answer:
//       "We use Stripe/SSLCommerz for encrypted transactions. We never store your card details.",
//   },
//   {
//     question: "Can I upgrade from Monthly to Yearly?",
//     answer:
//       "Yes! The unused balance of your current month will be applied as a discount to the yearly plan.",
//   },
//   {
//     question: "Do you offer refunds?",
//     answer:
//       "We offer a 7-day money-back guarantee if you're not satisfied with the premium features.",
//   },
//   {
//     question: "What happens when subscription ends?",
//     answer:
//       "Your account reverts to free. You keep your history, but lose premium features like unlimited chats.",
//   },
// ];

// const FAQSection = () => {
//   return (
//     <section className="mx-auto mt-24 max-w-6xl px-4  mb-20">
//       <div className="mb-12 text-center">
//         <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
//           <HelpCircle className="h-6 w-6 text-primary" />
//         </div>
//         <h2 className="text-3xl font-bold text-foreground md:text-4xl">
//           Frequently Asked Questions
//         </h2>
//         <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
//           Common questions about our premium membership.
//         </p>
//       </div>

//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
//           >
//             <h3 className="mb-3 font-semibold text-foreground text-lg">
//               {faq.question}
//             </h3>
//             <p className="text-sm text-muted-foreground leading-relaxed">
//               {faq.answer}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default FAQSection;
"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, MessageCircleQuestion } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, absolutely. You can cancel via profile settings at any time. You'll retain access to all premium features until your current billing cycle ends.",
  },
  {
    question: "What does the Verified Badge do?",
    answer:
      "The Verified Badge adds a blue checkmark to your profile, signaling to the community that your identity is confirmed. Our data shows verified profiles get 3x more responses and higher trust ratings.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Security is our priority. We use industry-standard encryption through Stripe and SSLCommerz. Your sensitive card details are never stored on our servers.",
  },
  {
    question: "Can I upgrade from Monthly to Yearly?",
    answer:
      "Yes! You can upgrade at any point. The unused portion of your monthly subscription will be automatically calculated as a discount toward your new yearly plan.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We believe in our platform, but if you're not satisfied, we offer a 7-day money-back guarantee for first-time premium subscribers.",
  },
  {
    question: "What happens when my subscription ends?",
    answer:
      "Your account will simply revert to the free version. All your trip history and profile data will remain safe, though premium features like unlimited messaging will be restricted.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Default open first one

  return (
    <section className="mx-auto py-12 max-w-6xl px-4  relative">
      {/* Background Subtle Shape */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/5 blur-3xl -z-10" />

      {/* Header Section */}
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-bold text-primary mb-6"
        >
          <HelpCircle size={16} />
          Support Center
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Everything you need to know about GoPal membership and billing. Can’t
          find what you’re looking for? Reach out to our support team.
        </motion.p>
      </div>

      {/* Accordion Logic */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={cn(
              "group overflow-hidden rounded-2xl border transition-all duration-300",
              openIndex === index
                ? "bg-card border-primary shadow-xl shadow-primary/5"
                : "bg-background border-border hover:border-primary/50"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between p-6 text-left"
            >
              <span
                className={cn(
                  "text-lg font-bold transition-colors",
                  openIndex === index
                    ? "text-primary"
                    : "text-foreground group-hover:text-primary"
                )}
              >
                {faq.question}
              </span>
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300",
                  openIndex === index
                    ? "bg-primary text-primary-foreground rotate-180"
                    : "bg-muted text-muted-foreground"
                )}
              >
                <ChevronDown size={18} strokeWidth={3} />
              </div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-base leading-relaxed text-muted-foreground border-t border-border/50 pt-4 mt-1">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Still Have Questions CTA - Makes it feel like a real product page */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 rounded-3xl bg-secondary/50 p-8 text-center border border-border"
      >
        <div className="flex justify-center mb-4 text-primary">
          <MessageCircleQuestion size={40} />
        </div>
        <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
        <p className="text-muted-foreground mb-6">
          If you cannot find answer to your question in our FAQ, you can always
          contact us.
        </p>
        <Link href="/contact">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold shadow-none shadow-primary/20 hover:opacity-90 transition-all active:scale-95">
            Contact Support
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default FAQSection;
