import UsersTable from "@/components/modules/Admin/ManageUsers/UsersTable";
import Pagination from "@/components/shared/Pagination";
import { getAllTravelers } from "@/services/traveler/traveler.service";

type SearchParams = {
  searchParams: {
    page?: string;
    searchTerm?: string;
  };
};

const ManageUsersPage = async ({ searchParams }: SearchParams) => {
  // Await searchParams in Next.js 15+ (if you are using latest version)
  // Or directly use it if older version
  const params = await searchParams;

  const page = Number(params?.page) || 1;
  const limit = 10;

  // Construct Query String
  const queryParams = new URLSearchParams();
  queryParams.append("page", page.toString());
  queryParams.append("limit", limit.toString());
  if (params?.searchTerm) {
    queryParams.append("searchTerm", params.searchTerm);
  }

  // Fetch Data from Server
  const { data: travelers, meta } = await getAllTravelers(
    queryParams.toString()
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Manage Users</h1>
          <p className="text-muted-foreground">
            View and manage all registered travelers.
          </p>
        </div>

        {/* Optional: Search Input placeholder */}
        <div className="relative w-full sm:w-64">
          {/* Search Component will go here */}
        </div>
      </div>

      {/* Main Table Component */}
      <UsersTable users={travelers || []} />

      {/* Pagination - Only show if data exists */}
      {travelers && travelers.length > 0 && (
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

export default ManageUsersPage;
