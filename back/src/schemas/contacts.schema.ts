import { z } from "zod";
import { userSchema } from "./users.schema";

const contactSchema = z.object({
  id: z.number().positive(),
  full_name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  createdAt: z.string(),
  user: userSchema,
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  createdAt: true,
  user: true,
});

const contactSchemaResponse = contactSchemaRequest;

const contactsSchemaResponse = z.array(contactSchema);

const contactSchemaUpdate = contactSchema.omit({ id: true }).partial();

export {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactsSchemaResponse,
  contactSchemaUpdate,
};
