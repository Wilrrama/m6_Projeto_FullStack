import { z } from "zod";

export const userSchema = z.object({
  id: z.number().positive(),
  full_name: z.string().max(150),
  email: z.string().email(),
  password: z.string(),
  phone: z.number().positive(),
  createdAt: z.string(),
});

export const userCreateSchema = userSchema.omit({
  id: true,
});

export const userReturnSchema = userSchema.omit({ password: true });
export const usersReadSchema = userReturnSchema.array();
export const userUpdateSchema = userReturnSchema.partial();
