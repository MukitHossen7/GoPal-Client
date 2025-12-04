/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/utility/serverFetchHelper";

export async function getTravelPlans(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/travel-plans${
        queryString ? `?${queryString}` : "?sortBy=createdAt&sortOrder=desc"
      }`,
      {
        cache: "no-store",
      }
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error fetching travel plans:", error);
    return {
      success: false,
      message: "Failed to fetch travel plans",
      data: [],
      meta: { page: 1, limit: 10, total: 0, totalPages: 0 },
    };
  }
}

export async function getMyTravelPlans(queryString?: string) {
  try {
    const response = await serverFetch.get(
      `/travel-plans/my-plans${
        queryString ? `?${queryString}` : "?sortBy=createdAt&sortOrder=desc"
      }`,
      {
        cache: "no-store",
      }
    );
    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error("Error fetching travel plans:", error);
    return {
      success: false,
      message: "Failed to fetch travel plans",
      data: [],
      meta: { page: 1, limit: 10, total: 0, totalPages: 0 },
    };
  }
}

export async function getTravelPlanById(id: string) {
  if (!id) {
    return {
      success: false,
      message: "Travel Plan ID is required",
      data: null,
    };
  }

  try {
    const response = await serverFetch.get(`/travel-plans/${id}`, {
      cache: "no-store",
    });

    const result = await response.json();

    return result?.data;
  } catch (error: any) {
    console.error(`Error fetching travel plan with id ${id}:`, error);
    return {
      success: false,
      message: error.message || "Failed to fetch travel plan details",
      data: null,
    };
  }
}
