import { z } from "zod";
import {
  contactCreateSchema,
  contactReadSchema,
  contactSchema,
} from "../schemas/contact.schemas";
import { DeepPartial, Repository } from "typeorm";
import Contact from "../entities/Contact.entity";

export type TContactCreate = z.infer<typeof contactCreateSchema>;
export type TContactReturn = z.infer<typeof contactSchema>;
export type TContactRead = z.infer<typeof contactReadSchema>;
export type TContactRepo = Repository<Contact>;
export type TContactUpdate = DeepPartial<TContactCreate>;
