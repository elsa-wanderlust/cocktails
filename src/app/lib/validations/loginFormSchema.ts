import { ZodError, z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Email must be a valid email address" }),
  password: z.string(),
});
