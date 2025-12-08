import { Button } from "@/components/ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="relative py-24 bg-primary overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">
          Ready to Start Your Adventure?
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-blue-100">
          Join thousands of travelers who are finding their perfect travel
          buddies every day. It&apos;s free to join!
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/register">
            <Button
              size="lg"
              className="h-14 w-full rounded-full bg-white px-8 text-lg font-bold text-primary hover:bg-gray-100 sm:w-auto"
            >
              Create Your Account
            </Button>
          </Link>
          <Link href="/travel-plans">
            <Button
              size="lg"
              variant="outline"
              className="h-14 w-full rounded-full border-2 border-white/30 bg-transparent px-8 text-lg font-bold text-white hover:bg-white/10 sm:w-auto"
            >
              Explore Plans
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
