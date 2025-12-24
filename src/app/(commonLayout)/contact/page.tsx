import ContactFormAndLocation from "@/components/modules/Contact/ContactFormAndLocation";
import ContactHero from "@/components/modules/Contact/ContactHero";
import SafetyHub from "@/components/modules/Contact/SafetyHub";
import SupportCards from "@/components/modules/Contact/SupportCards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | 24/7 Support & Traveler Safety Assistance - GoPal",
  description:
    "Have questions about finding a travel buddy or your subscription? Get in touch with GoPal. Our team is here 24/7 to help with technical support, safety concerns, and partnership inquiries.",
  keywords: [
    "Contact GoPal",
    "Travel Buddy Support",
    "Customer Service",
    "Safety Reporting",
    "Travel Partnership",
    "Subscription Help",
    "GoPal Help Center",
    "Traveler Assistance",
    "Technical Support for Travelers",
  ],
};

const ContactPage = () => {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <ContactHero />
      <div className="container mx-auto px-4 py-20">
        <SupportCards />
        <ContactFormAndLocation />
        <SafetyHub />
      </div>
    </div>
  );
};

export default ContactPage;
