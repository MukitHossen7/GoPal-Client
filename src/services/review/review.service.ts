/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { serverFetch } from "@/utility/serverFetchHelper";

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
