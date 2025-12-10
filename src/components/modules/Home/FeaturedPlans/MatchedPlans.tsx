import { Button } from "@/components/ui/button";
import { ITravelPlan } from "@/types/travelPlan.interface";
import Link from "next/link";
import TravelPlanCard from "./FeaturedPlansCard";

const MatchedPlans = ({ plans }: { plans: ITravelPlan[] }) => {
  return (
    <section className="container mx-auto py-20 px-4">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">
            Recommended For You
          </h2>
          <p className="text-muted-foreground mt-2">
            We found these trips based on your interests.
          </p>
        </div>
        <Link href="/travel-plans">
          <Button variant="outline">Browse All Plans</Button>
        </Link>
      </div>

      {plans?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.slice(0, 4).map((plan) => (
            <TravelPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted/30 rounded-xl border border-dashed">
          <p className="text-muted-foreground">
            No specific matches found yet. Update your interests!
          </p>
          <Link href="/travel-plans" className="mt-4 inline-block">
            <Button>Explore All</Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default MatchedPlans;
