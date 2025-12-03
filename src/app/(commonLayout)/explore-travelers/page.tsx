import SearchFilters from "@/components/modules/Explore-Travelers/SearchFilters";
import TravelerGrid from "@/components/modules/Explore-Travelers/TravelerGrid";
import { Button } from "@/components/ui/button";
import { ITraveler } from "@/types/traveler.interface";

// --- Mock Data (Replace with real Fetch call) ---
const mockData = [
  {
    id: "83bf9ee1-3cbc-4a3e-8683-1eeba22ee856",
    name: "Grace Robinson",
    email: "grace.robinson@example.com",
    contactNumber: "01987456321",
    address: "Paris, France",
    profileImage:
      "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764606213/k4z1d7bejnr-1764606213500-images-1-jpeg.jpeg.jpg",
    bio: "Romantic soul who enjoys art, wine, and beautiful architecture.",
    travelInterests: ["Art Galleries", "Wine Tasting", "City Walking Tours"],
    visitedCountries: ["France", "Belgium", "Spain"],
    currentLocation: "Paris, France",
    averageRating: 0,
    isVerifiedTraveler: false,
    subscriptionEndDate: null,
    createdAt: "2025-12-01T16:07:43.352Z",
  },
  {
    id: "3571f8b7-17cd-4df5-a7e3-6ce87138ff54",
    name: "Mason Clark",
    email: "mason.clark@example.com",
    contactNumber: "01945233698",
    address: "Dubai, UAE",
    profileImage:
      "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764606457/xr0570cq3w-1764606457443-gros-plan-travailleurs-masculins-controlent-corde-balancoire-vers-bas-hauteur-corde-du-reservoir-inspection-epaisseur-du-fond-gaz-du-reservoir-ciel-bleu478515-3825-avif.avif.avif",
    bio: "Luxury traveler who enjoys futuristic architecture and desert adventures.",
    travelInterests: ["Desert Safari", "City Lights", "Luxury Hotels"],
    visitedCountries: ["UAE", "Qatar", "Saudi Arabia"],
    currentLocation: "Dubai, UAE",
    averageRating: 0,
    isVerifiedTraveler: false,
    subscriptionEndDate: null,
    createdAt: "2025-12-01T16:07:32.865Z",
  },
  {
    id: "915d6b43-05f8-4119-a9df-8d8c64051cf1",
    name: "Logan White",
    email: "logan.white@example.com",
    contactNumber: "01689745236",
    address: "Toronto, Canada",
    profileImage:
      "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764606094/t3x43uwhzz-1764606094398-view-young-person-rock-climbing-practicing-bouldering-training23-2151683659-avif.avif.avif",
    bio: "Adventure seeker with a love for mountains and cold climates.",
    travelInterests: ["Skiing", "Mountain Hiking", "Wildlife Tours"],
    visitedCountries: ["Canada", "Norway", "Switzerland", "USA"],
    currentLocation: "Toronto, Canada",
    averageRating: 0,
    isVerifiedTraveler: true,
    subscriptionEndDate: "2025-12-01T16:07:14.683Z",
    createdAt: "2025-12-01T16:07:14.683Z",
  },
  // ... Add more mock data here from your JSON
] as ITraveler[];

// Simulated Backend Fetch Function
async function getTravelers(searchParams: {
  [key: string]: string | string[] | undefined;
}) {
  // In a real app, you would do:
  // const res = await fetch(`https://api.example.com/travelers?searchTerm=${searchParams.searchTerm}...`, { cache: 'no-store' });
  // return res.json();

  // Simulating delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  let filteredData = [...mockData];
  const term =
    typeof searchParams.searchTerm === "string"
      ? searchParams.searchTerm.toLowerCase()
      : "";
  const interest =
    typeof searchParams.interest === "string" ? searchParams.interest : "";

  if (term) {
    filteredData = filteredData.filter(
      (t) =>
        t.name.toLowerCase().includes(term) ||
        t.currentLocation?.toLowerCase().includes(term)
    );
  }

  if (interest && interest !== "all") {
    filteredData = filteredData.filter((t) =>
      t.travelInterests.some((i) =>
        i.toLowerCase().includes(interest.toLowerCase())
      )
    );
  }

  return filteredData;
}

// --- Page Component ---
export default async function ExplorePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Fetch data on the server based on URL params
  const travelers = await getTravelers(searchParams);

  return (
    <div className="min-h-screen bg-background pb-20 pt-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Explore Travelers
            </h1>
            <p className="max-w-xl text-muted-foreground">
              Connect with travelers worldwide. Find your perfect travel buddy
              based on interests, location, and vibe.
            </p>
          </div>
        </div>

        {/* Client Component: Handles URL updates */}
        <SearchFilters />

        {/* Client Component: Handles Animation & Grid */}
        <TravelerGrid travelers={travelers} />

        {/* Static Pagination (Can be made dynamic later) */}
        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <Button variant="outline" disabled>
              Previous
            </Button>
            <Button variant="default" className="w-10">
              1
            </Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
