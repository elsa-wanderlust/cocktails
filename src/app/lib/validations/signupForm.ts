import { z } from "zod";

export const signupFormSchema = z.object({
  email: z.string().email(),
  firstName: z.string().min(1).max(18),
  lastName: z.string().min(1).max(18),
  dob: z.date(),
  password: z.string().min(6),
});
