"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { getCookies } from "@/services/auth/tokenHandler";

// Monthly Plan Features (Some features are missing/limited)
const monthlyFeatures = [
  { text: "Verified Traveler Badge", included: true },
  { text: "Unlimited Connection Requests", included: true },
  { text: "Priority Support (Email)", included: true },
  { text: "See Who Viewed Profile", included: false },
  { text: "Exclusive Travel Deals", included: false },
  { text: "Offline Mode Access", included: false },
];

// Yearly Plan Features (All included)
const yearlyFeatures = [
  { text: "Verified Traveler Badge", included: true },
  { text: "Unlimited Connection Requests", included: true },
  { text: "Priority Support (24/7 Live Chat)", included: true },
  { text: "See Who Viewed Profile", included: true },
  { text: "Exclusive Travel Deals", included: true },
  { text: "Offline Mode Access", included: true },
];

const PricingSwitch = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [loading, setLoading] = useState(false);

  // --- Payment Handler ---
  const handleSubscription = async (
    planType: "Monthly" | "Yearly",
    amount: number
  ) => {
    setLoading(true);

    try {
      // 1. Get Token (Change this logic based on how you store token)
      const token = await getCookies("accessToken");

      console.log(token);

      if (!token) {
        toast.error("Please login to subscribe!");
        // router.push("/login"); return;
        setLoading(false);
        return;
      }

      console.log({ subscriptionType: planType, amount: amount });

      // 2. Make API Request
      // const response = await fetch(
      //   "https://go-pal-server.vercel.app/api/v1/payments/subscribe",
      //   {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: `${token}`, // Bearer লাগলে `Bearer ${token}` দিবা
      //     },
      //     body: JSON.stringify({
      //       subscriptionType: planType,
      //       amount: amount,
      //     }),
      //   }
      // );

      // const result = await response.json();

      // 3. Handle Success & Redirect
      // if (result?.success && result?.data?.paymentUrl) {
      //   toast.success("Redirecting to payment gateway...");
      //   window.location.href = result.data.paymentUrl; // Auto Redirect
      // } else {
      //   toast.error("Failed to initiate payment. Try again.");
      // }
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* 1. Toggle Switch */}
      <div className="mb-12 flex items-center justify-center gap-4 bg-background p-2 rounded-full border shadow-sm">
        <span
          className={cn(
            "text-sm font-semibold transition-colors px-3 cursor-pointer select-none",
            !isYearly ? "text-primary" : "text-muted-foreground"
          )}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </span>
        <div
          onClick={() => setIsYearly(!isYearly)}
          className="relative h-7 w-12 cursor-pointer rounded-full bg-muted transition-colors hover:bg-muted/80 data-[state=checked]:bg-primary"
          data-state={isYearly ? "checked" : "unchecked"}
        >
          <motion.div
            className="absolute left-1 top-1 h-5 w-5 rounded-full bg-white shadow-sm"
            animate={{ x: isYearly ? 20 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>
        <span
          className={cn(
            "text-sm font-semibold transition-colors px-3 cursor-pointer flex items-center gap-2 select-none",
            isYearly ? "text-primary" : "text-muted-foreground"
          )}
          onClick={() => setIsYearly(true)}
        >
          Yearly
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 text-[10px] px-1.5 py-0"
          >
            Save 67%
          </Badge>
        </span>
      </div>

      {/* 2. Pricing Cards Grid (Fixed Max Width Issue) */}
      <div className="grid w-full gap-8 md:grid-cols-2 lg:gap-10 max-w-6xl mx-auto">
        {/* Plan 1: Monthly */}
        <Card className="flex flex-col border-border bg-card shadow-sm transition-all hover:border-primary/30 hover:shadow-md h-full">
          <CardHeader>
            <h3 className="text-xl font-bold text-foreground">
              Monthly Explorer
            </h3>
            <p className="text-sm text-muted-foreground">
              Short-term commitment, full flexibility.
            </p>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="mb-6">
              <span className="text-4xl font-bold text-foreground">$50</span>
              <span className="text-muted-foreground font-medium">/mo</span>
            </div>
            <ul className="space-y-3">
              {monthlyFeatures.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  {feature.included ? (
                    <div className="rounded-full bg-primary/10 p-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                  ) : (
                    <div className="rounded-full bg-muted p-0.5">
                      <X className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                  )}
                  <span
                    className={
                      feature.included
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full font-semibold"
              size="lg"
              variant="outline"
              disabled={loading}
              onClick={() => handleSubscription("Monthly", 50)}
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Choose Monthly"
              )}
            </Button>
          </CardFooter>
        </Card>

        {/* Plan 2: Yearly (Recommended) */}
        <motion.div
          whileHover={{ y: -8 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative h-full"
        >
          <Card className="relative flex h-full flex-col border-primary bg-card shadow-xl ring-2 ring-primary/10">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-fit">
              <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white shadow-lg">
                <Sparkles className="mr-1 h-3 w-3 fill-yellow-300 text-yellow-300" />
                Recommended
              </Badge>
            </div>

            <CardHeader>
              <h3 className="text-xl font-bold text-primary">Global Nomad</h3>
              <p className="text-sm text-muted-foreground">
                Best value for dedicated travelers.
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold text-foreground">$200</span>
                <span className="text-muted-foreground font-medium">/yr</span>
                <span className="text-sm font-medium text-muted-foreground line-through decoration-destructive decoration-2 opacity-70">
                  $600
                </span>
              </div>
              <ul className="space-y-3">
                {yearlyFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium"
                  >
                    <div className="rounded-full bg-primary/10 p-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg"
                size="lg"
                disabled={loading}
                onClick={() => handleSubscription("Yearly", 200)}
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Get Yearly Access"
                )}
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSwitch;
