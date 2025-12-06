export interface IReview {
  id: string;
  rating: number;
  comment: string;
  createdAt: string;
  traveler: {
    name: string;
    profileImage: string;
  };
}
