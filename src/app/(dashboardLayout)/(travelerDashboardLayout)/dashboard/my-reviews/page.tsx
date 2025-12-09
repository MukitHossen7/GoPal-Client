// src/app/(dashboard)/dashboard/my-reviews/page.tsx
import { getMyReviews } from "@/services/review/review.service";
import EmptyState from "@/components/shared/EmptyState";
import { Metadata } from "next";
import ReviewListTable from "@/components/modules/Traveler/Reviews/ReviewListTable";

export const metadata: Metadata = {
  title: "My Reviews | Travel Buddy",
  description: "Manage your travel reviews and ratings.",
};

const MyReviewsPage = async () => {
  const { data: myReviews } = await getMyReviews();

  return (
    <div className="container mx-auto py-10 space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">My Reviews</h2>
        <p className="text-muted-foreground">
          Manage and track all the reviews you have shared.
        </p>
      </div>

      {/* Client Component for Interactivity & Animation */}
      {myReviews && myReviews.length > 0 ? (
        <ReviewListTable initialReviews={myReviews} />
      ) : (
        <EmptyState message="You haven't posted any reviews yet" />
      )}
    </div>
  );
};

export default MyReviewsPage;
