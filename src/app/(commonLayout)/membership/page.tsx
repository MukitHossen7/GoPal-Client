import FAQSection from "@/components/modules/Membership/FAQSection";
import PricingSwitch from "@/components/modules/Membership/PricingSwitch";
import { CheckCircle2 } from "lucide-react";

const MembershipPage = () => {
  return (
    <main className="min-h-screen bg-background pb-20 pt-16">
      {/* 1. Hero / Header Section */}
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 inline-flex items-center rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-primary">
          <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
          Join 5,000+ Premium Members
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
          Upgrade Your{" "}
          <span className="text-primary text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Journey
          </span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Unlock exclusive features, find travel buddies faster, and enjoy a
          verified, ad-free experience. Invest in memories that last a lifetime.
        </p>
      </div>

      {/* 2. Interactive Pricing Table */}
      <div className="container mx-auto mt-16 px-4">
        <PricingSwitch />
      </div>

      {/* 3. FAQ Section */}
      <FAQSection />
    </main>
  );
};

export default MembershipPage;
