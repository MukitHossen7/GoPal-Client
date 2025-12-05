/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { TravelType } from "@/types/travelPlan.interface";
import { IInputErrorState } from "@/utility/getInputFieldError";
import { serverFetch } from "@/utility/serverFetchHelper";
import { zodValidator } from "@/utility/zodValidator";
import { createTravelPlanZodSchema } from "@/zod/travelPlan.validation";
import { revalidatePath, revalidateTag } from "next/cache";

// --- CREATE ACTION ---

export async function createTravelPlan(
  _prevState: IInputErrorState,
  formData: FormData
) {
  try {
    const imageFile = formData.get("imageUrl") as File;
    const startDateString = formData.get("startDate") as string;
    const endDateString = formData.get("endDate") as string;

    const rawPayload = {
      title: formData.get("title"),
      destination: formData.get("destination"),
      description: formData.get("description"),
      budgetRange: formData.get("budgetRange"),
      startDate: startDateString ? new Date(startDateString) : undefined,
      endDate: endDateString ? new Date(endDateString) : undefined,
      travelType: formData.get("travelType"),
      visibility: formData.get("visibility") === "on",
    };

    const validatedPayload = zodValidator(
      rawPayload,
      createTravelPlanZodSchema
    );

    if (!validatedPayload.success) {
      console.log("Validation Errors:", validatedPayload.errors);
      return {
        success: false,
        message: "Validation failed",
        errors: validatedPayload.errors?.map((err: any) => ({
          field: String(err.field),
          message: err.message,
        })),
      } as IInputErrorState;
    }

    const dataToSave = validatedPayload.data!;

    const planData = {
      ...dataToSave,
      startDate: (dataToSave?.startDate as Date)?.toISOString(),
      endDate: (dataToSave?.endDate as Date)?.toISOString(),
    };

    const backendFormData = new FormData();
    backendFormData.append("data", JSON.stringify(planData));

    if (imageFile && imageFile.size > 0) {
      backendFormData.append("file", imageFile);
    }

    const res = await serverFetch.post("/travel-plans", {
      body: backendFormData,
    });

    const result = await res.json();

    if (!result.success) {
      throw new Error(result.message || "Failed to create plan");
    }
    revalidatePath("/my-travel-plans");
    return {
      success: true,
      message: "Travel plan created successfully!",
    };
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.error("Create Plan Error:", error);
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}
// --- UPDATE ACTION ---
export async function updateTravelPlan(
  _prevState: IInputErrorState,
  formData: FormData
): Promise<IInputErrorState> {
  const id = formData.get("id") as string;

  const rawData = {
    title: formData.get("title") as string,
    destination: formData.get("destination") as string,
    description: formData.get("description") as string,
    budgetRange: formData.get("budgetRange") as string,
    startDate: formData.get("startDate") as string,
    endDate: formData.get("endDate") as string,
    travelType: formData.get("travelType") as TravelType,
    imageUrl: formData.get("imageUrl") as string,
    visibility: formData.get("visibility") === "on",
  };

  // Validation
  const errors: { field: string; message: string }[] = [];
  if (!id) return { success: false, message: "ID missing for update" };
  if (!rawData.title)
    errors.push({ field: "title", message: "Title is required" });
  if (!rawData.destination)
    errors.push({ field: "destination", message: "Destination is required" });

  if (errors.length > 0) {
    return {
      success: false,
      message: "Validation failed",
      errors: errors,
      data: rawData,
    };
  }

  try {
    console.log(`Updating Plan ID: ${id}`, rawData);
    await wait(1000);

    revalidatePath("/my-travel-plans");
    return {
      success: true,
      message: "Travel plan updated successfully!",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Something went wrong",
    };
  }
}

// --- DELETE ACTION ---
export async function deleteTravelPlanAction(
  _prevState: IInputErrorState,
  formData: FormData
): Promise<IInputErrorState> {
  const id = formData.get("id") as string;

  if (!id) {
    return { success: false, message: "ID is required for deletion." };
  }

  try {
    console.log(`Deleting Plan ID: ${id}`);
    await wait(1000);

    revalidatePath("/my-travel-plans");
    return {
      success: true,
      message: "Travel plan deleted successfully!",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Delete failed",
    };
  }
}

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
        next: { tags: ["MY_TRAVEL_PLANS"] },
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
