import { z } from "zod";
import { userSchema } from "./user.schemas";

const contactSchema = z.object({
  id: z.number().positive(),
  full_name: z.string().max(150),
  email: z.string().email(),
  phone: z.number().positive(),
  createdAt: z.string(),
  userId: z.number().positive(),
  user: userSchema,
});

const contactCreateSchema = contactSchema.omit({
  id: true,
  user: true,
  createdAt: true,
});

const contactUpdateSchema = contactCreateSchema.partial();
const contactReadSchema = contactSchema.array();

export {
  contactSchema,
  contactCreateSchema,
  contactUpdateSchema,
  contactReadSchema,
};
