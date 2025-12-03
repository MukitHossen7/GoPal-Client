import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, absolutely. You can cancel via profile settings. You'll retain access until the billing cycle ends.",
  },
  {
    question: "What does the Verified Badge do?",
    answer:
      "It adds a blue checkmark to your profile, increasing trust. Verified profiles get 3x more responses.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "We use Stripe/SSLCommerz for encrypted transactions. We never store your card details.",
  },
  {
    question: "Can I upgrade from Monthly to Yearly?",
    answer:
      "Yes! The unused balance of your current month will be applied as a discount to the yearly plan.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 7-day money-back guarantee if you're not satisfied with the premium features.",
  },
  {
    question: "What happens when subscription ends?",
    answer:
      "Your account reverts to free. You keep your history, but lose premium features like unlimited chats.",
  },
];

const FAQSection = () => {
  return (
    <section className="mx-auto mt-24 max-w-6xl px-4 md:px-0 mb-20">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-3 mb-4">
          <HelpCircle className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Common questions about our premium membership.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/30"
          >
            <h3 className="mb-3 font-semibold text-foreground text-lg">
              {faq.question}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
