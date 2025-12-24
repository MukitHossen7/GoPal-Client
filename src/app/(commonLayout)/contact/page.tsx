import ContactFormAndLocation from "@/components/modules/Contact/ContactFormAndLocation";
import ContactHero from "@/components/modules/Contact/ContactHero";
import SafetyHub from "@/components/modules/Contact/SafetyHub";
import SupportCards from "@/components/modules/Contact/SupportCards";

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
