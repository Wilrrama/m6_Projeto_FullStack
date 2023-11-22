import { z } from "zod";
import { contactCreateSchema, contactSchema } from "../schemas/contact.schemas";
import { DeepPartial, Repository } from "typeorm";
import Contact from "../entities/Contact.entity";

export type TContactCreate = z.infer<typeof contactCreateSchema>;
export type TContactReturn = z.infer<typeof contactSchema>;
export type TContactRepo = Repository<Contact>;
export type TContactUpdate = DeepPartial<TContactCreate>;
