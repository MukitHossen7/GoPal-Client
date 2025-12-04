export interface Traveler {
  name: string;
  email: string;
  averageRating: number;
}

export interface ITravelPlan {
  id: string;
  title: string;
  description: string;
  destination: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  budgetRange: string;
  travelType: "FAMILY" | "FRIENDS" | "SOLO" | "COUPLE" | "GROUP";
  visibility: boolean;
  traveler: Traveler;
}
