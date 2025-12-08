import { UserPlus, Map, Plane } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Sign Up & Profile",
    description:
      "Create your profile, add your interests, and verify your identity to join the community.",
    icon: UserPlus,
  },
  {
    id: 2,
    title: "Create or Find a Plan",
    description:
      "Post your upcoming trip details or browse existing travel plans from other users.",
    icon: Map,
  },
  {
    id: 3,
    title: "Connect & Travel",
    description:
      "Chat with compatible travelers, plan the details, and start your journey together.",
    icon: Plane,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            How GoPal Works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Start your shared adventure in 3 simple steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group relative rounded-2xl border bg-card p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <step.icon size={32} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
