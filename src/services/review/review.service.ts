/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/utility/serverFetchHelper";
import { revalidatePath } from "next/cache";

export const addReview = async (
  planId: string,
  data: { rating: number; comment: string }
) => {
  try {
    const res = await serverFetch.post("/reviews", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        travelPlanId: planId,
        rating: Number(data.rating),
        comment: data.comment,
      }),
    });
    const result = await res.json();

    if (!result.success) {
      throw new Error(result.message || "Review create failed");
    }

    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      error: error.message || "Review create failed",
    };
  }
};

export const getReviews = async (planId: string) => {
  try {
    const res = await serverFetch.get(`/reviews/${planId}`, {
      cache: "no-store",
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Review get failed");
    }

    return data;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      error: error.message || "Review get failed",
    };
  }
};

export const getMyReviews = async () => {
  try {
    const res = await serverFetch.get(`/reviews/my-reviews`, {
      cache: "no-store",
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to fetch my reviews");
    }

    return data;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      error: error.message || "Failed to fetch my reviews",
    };
  }
};

export const updateReview = async (
  reviewId: string,
  data: { rating?: number; comment?: string }
) => {
  try {
    const reviewData = {
      rating: Number(data.rating),
      comment: data.comment,
    };
    const res = await serverFetch.patch(`/reviews/${reviewId}`, {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewData),
    });

    const result = await res.json();

    if (!result.success) {
      throw new Error(result.message || "Failed to update review");
    }
    if (result.success) {
      revalidatePath("/dashboard/my-reviews");
    }

    return result;
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log("Update Review Error:", error);
    return {
      success: false,
      error: error.message || "Failed to update review",
    };
  }
};

export const getAllReviews = async (queryString?: string) => {
  try {
    const res = await serverFetch.get(
      `/reviews${
        queryString ? `?${queryString}` : "?sortBy=createdAt&sortOrder=desc"
      }`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();
    if (!data.success) {
      throw new Error(data.message || "Failed to fetch reviews.");
    }

    return data;
  } catch (error: any) {
    // Let Next.js redirect errors pass through
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    console.error("Get All Reviews Error:", error);

    return {
      success: false,
      message: error?.message || "Failed to fetch all reviews.",
    };
  }
};

export const deleteReview = async (reviewId: string) => {
  try {
    const res = await serverFetch.delete(`/reviews/${reviewId}`, {
      cache: "no-store",
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to delete review.");
    }
    if (data.success) {
      revalidatePath("/dashboard/my-reviews");
    }

    return data;
  } catch (error: any) {
    // Next.js redirect errors must pass-through
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }

    console.error("Delete Review Error:", error);

    return {
      success: false,
      message: error?.message || "Failed to delete review.",
    };
  }
};
