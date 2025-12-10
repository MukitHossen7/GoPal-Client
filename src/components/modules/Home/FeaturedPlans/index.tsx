// import { getCurrentUser } from "@/services/AuthService";
import { getMatchesTravelPlan } from "@/services/traveler/travelPlan.service";
import GuestPlanShowcase from "./GuestPlanShowcase";
import MatchedPlans from "./MatchedPlans";

const DEMO_PLANS = [
  {
    id: "a7f74963-0c8d-497c-b37f-d8831906ea3e",
    title: "Backpacking Adventure in Nepal",
    description:
      "A thrilling 8-day backpacking trip through Himalayan trails, local villages, and scenic viewpoints.",
    destination: "Pokhara, Nepal",
    imageUrl:
      "https://res.cloudinary.com/dpie1yvrg/image/upload/v1765190633/hjbvkm3b57j-1765190633362-istockphoto-499630236-612x612-jpg.jpg.jpg",
    startDate: "2025-12-25T00:00:00.000Z",
    endDate: "2025-12-29T00:00:00.000Z",
    budgetRange: "$700 - $1200",
    travelType: "FRIENDS",
    traveler: {
      name: "Raju Hossen",
      profileImage:
        "https://res.cloudinary.com/dpie1yvrg/image/upload/v1765190363/w69l97noh7r-1765190363870-7e6a64d605fb512b51ee4140671156eb-jpg.jpg.jpg",
      averageRating: 4.4,
    },
  },
  {
    id: "b5319718-397b-46fc-9adf-af4f122970b5",
    title: "Adventure Retreat in New Zealand",
    description:
      "An 8-day adrenaline-filled trip featuring bungee jumping, hiking, and fjord tours.",
    destination: "Queenstown, New Zealand",
    imageUrl:
      "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764938375/5sh62e63fwt-1764938374150-images-1-jpeg.jpeg.jpg",
    startDate: "2025-12-05T00:00:00.000Z",
    endDate: "2025-12-10T00:00:00.000Z",
    budgetRange: "$1000 - $1800",
    travelType: "COUPLE",
    traveler: {
      name: "Developer Mukit",
      profileImage:
        "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764931751/s8ecezex49a-1764931749981-gratisography-augmented-reality-800x525-jpg.jpg.jpg",
      averageRating: 5,
    },
  },
  {
    id: "19d538fe-7e86-420a-96ad-2ae04957c5dc",
    title: "Cultural Exploration in Japan",
    description:
      "A 7-day journey through Tokyo, Kyoto, and Nara exploring temples, food markets, and traditions.",
    destination: "Tokyo & Kyoto, Japan",
    imageUrl:
      "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764932065/8q0pcosymhi-1764932062529-travelling-solo-featured-webp.webp.webp",
    startDate: "2025-12-26T00:00:00.000Z",
    endDate: "2025-12-30T00:00:00.000Z",
    budgetRange: "$1000 - $2500",
    travelType: "FRIENDS",
    traveler: {
      name: "Developer Mukit",
      profileImage:
        "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764931751/s8ecezex49a-1764931749981-gratisography-augmented-reality-800x525-jpg.jpg.jpg",
      averageRating: 5,
    },
  },
  {
    id: "6445265f-7040-4936-b9f3-7f71cdfedfc2",
    title: "Safari Adventure in Tanzania",
    description:
      "Experience a thrilling 6-day wildlife safari across Serengeti and Ngorongoro with guided tours.",
    destination: "Serengeti, Tanzania",
    imageUrl:
      "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764931822/9cap3d7kl1e-1764931820239-beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand335224-849-avif.avif.avif",
    startDate: "2025-12-12T00:00:00.000Z",
    endDate: "2025-12-20T00:00:00.000Z",
    budgetRange: "$1200 - $2000",
    travelType: "FRIENDS",
    traveler: {
      name: "Developer Mukit",
      profileImage:
        "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764931751/s8ecezex49a-1764931749981-gratisography-augmented-reality-800x525-jpg.jpg.jpg",
      averageRating: 5,
    },
  },
  {
    id: "e561bb41-02e8-41bf-8676-97e0a4e7ad0b",
    title: "Cultural Exploration in India",
    description:
      "A 12-day cultural journey exploring historical forts, temples, festivals, and vibrant markets.",
    destination: "Delhi, Jaipur, Agra",
    imageUrl: null, // Image null থাকলে কার্ড কম্পোনেন্ট ডিফল্ট ইমেজ দেখাবে
    startDate: "2025-10-01T00:00:00.000Z",
    endDate: "2025-10-13T00:00:00.000Z",
    budgetRange: "$900 - $1600",
    travelType: "SOLO",
    traveler: {
      name: "Olivia Wilson",
      profileImage:
        "https://res.cloudinary.com/dpie1yvrg/image/upload/v1764851559/vsr15cftu98-1764851559074-single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo-jpg.jpg.jpg",
      averageRating: 5,
    },
  },
];

const FeaturedPlans = async () => {
  const user = false; // TODO: Replace with real check, e.g., await getCurrentUser()

  // Guest Showcase with Demo Data
  if (!user) {
    return <GuestPlanShowcase plans={DEMO_PLANS} />;
  }

  const result = await getMatchesTravelPlan();
  console.log("রিয়েল ডাটা ফেচ করো", result);

  const matchedPlans = result?.data || [];

  return <MatchedPlans plans={matchedPlans} />;
};

export default FeaturedPlans;
