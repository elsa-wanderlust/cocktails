import { ZodError, z } from "zod";

export const signupFormSchema = z
  .object({
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
  .refine((data) => parseInt(data.age) <= 150, {
    message: `your must be less than 150 years old to sign up`,
    path: ["age"],
  })
  .refine((data) => parseInt(data.age) >= 18, {
    message: "your must be at least 18 years old to sign up",
    path: ["age"],
  });
