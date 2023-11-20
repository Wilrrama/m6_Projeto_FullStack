import { z } from "zod";
import { userSchema } from "./user.schemas";

export const contactSchema = z.object({
  id: z.number().positive(),
  full_name: z.string().max(150),
  email: z.string().email(),
  phone: z.number().positive(),
  createdAt: z.string(),
  user: userSchema,
});

export const contactCreateSchema = contactSchema.omit({
  id: true,
});
