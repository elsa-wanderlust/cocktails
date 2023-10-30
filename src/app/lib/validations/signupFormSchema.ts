import { ZodError, z } from "zod";

export const signupFormSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name is required" })
      .max(18, { message: "First name must be 18 characters or les" }),
    lastName: z
      .string()
      .min(1, { message: "Last name is required" })
      .max(18, { message: "Last name must be 18 characters or les" }),
    email: z.string().email({ message: "Email must be a valid email address" }),
    age: z.string(),
    password: z
      .string()
      .min(6, { message: "password must be at least 6 characters" }),
    confPassword: z.string(),
  })
  .refine((data) => data.password === data.confPassword, {
    message: "passwords must match",
    path: ["confPassword"],
  })
  .refine((data) => parseInt(data.age) >= 18, {
    message: "your must be at least 18 years old to sign up",
    path: ["age"],
  });
