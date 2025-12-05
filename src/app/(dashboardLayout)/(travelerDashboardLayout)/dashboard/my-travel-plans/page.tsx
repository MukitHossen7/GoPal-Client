import TravelPlanManager from "@/components/modules/Traveler/MyTravelPlan/TravelPlanManager";
import { getMyTravelPlans } from "@/services/traveler/travelPlan.service";

const MyTravelPlansPage = async () => {
  const { data: travelPlans } = await getMyTravelPlans();

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight ">My Travel Plans</h1>
        <p className="text-muted-foreground mt-2">
          Manage your upcoming trips, budgets, and itineraries all in one place.
        </p>
      </div>

      <TravelPlanManager initialData={travelPlans} />
    </div>
  );
};

export default MyTravelPlansPage;
