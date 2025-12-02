import z from "zod";

export const loginValidationZodSchema = z.object({
  email: z.email({
    error: "Invalid email address.",
  }),
  password: z
    .string()
    .min(8, {
      error: "Password must be at least 8 characters.",
    })
    .max(10, {
      error: "Password must be 10 characters or less.",
    }),
});
