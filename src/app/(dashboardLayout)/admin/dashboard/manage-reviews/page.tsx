import Pagination from "@/components/shared/Pagination";
import ReviewsTable from "@/components/modules/Admin/ManageReviews/ReviewsTable"; // Adjust path
import { getAllReviews } from "@/services/review/review.service"; // Adjust path

type SearchParams = {
  searchParams: {
    page?: string;
  };
};

const ManageReviewsPage = async ({ searchParams }: SearchParams) => {
  // Await searchParams in Next.js 15+
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const limit = 10;

  // Query construction
  // (Assuming your getAllReviews supports query params like other services)
  // If not, you might need to modify your service to accept params like ?page=1&limit=10
  const queryParams = new URLSearchParams();
  queryParams.append("page", page.toString());
  queryParams.append("limit", limit.toString());

  // Data Fetching
  const { data: reviews, meta } = await getAllReviews(queryParams.toString());

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Manage Reviews</h1>
          <p className="text-muted-foreground">
            Monitor and moderate user feedback and ratings.
          </p>
        </div>
      </div>

      {/* Reviews Table */}
      <ReviewsTable reviews={reviews || []} />

      {/* Pagination (Conditionally Rendered) */}
      {reviews && reviews.length > 0 && (
        <div className="flex justify-end mt-4">
          <Pagination
            currentPage={meta?.page || 1}
            totalPage={meta?.totalPages || 1}
          />
        </div>
      )}
    </div>
  );
};

export default ManageReviewsPage;
