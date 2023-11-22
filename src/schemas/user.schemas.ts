import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  full_name: z.string().max(150),
  email: z.string().email(),
  password: z.string(),
  phone: z.number().positive(),
  createdAt: z.string(),
});

const userCreateSchema = userSchema.omit({
  id: true,
  createdAt: true,
});

const userReturnSchema = userSchema.omit({ password: true });
const usersReadSchema = userReturnSchema.array();
const userUpdateSchema = userReturnSchema.partial();

export {
  userSchema,
  userCreateSchema,
  userReturnSchema,
  usersReadSchema,
  userUpdateSchema,
};
