import { z } from "zod";
import {
  contactSchema,
  contactSchemaRequest,
  contactSchemaResponse,
  contactsSchemaResponse,
} from "../schemas/contacts.schema";
import { Repository } from "typeorm";
import { Contact } from "../entities/contact.entitie";
import { userSchemaUpdate } from "../schemas/users.schema";

type TContact = z.infer<typeof contactSchema>;
type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContactResponse = z.infer<typeof contactSchemaResponse>;
type TContactsResponse = z.infer<typeof contactsSchemaResponse>;
type TContactUpdate = z.infer<typeof userSchemaUpdate>;
type TContactRepo = Repository<Contact>;

export {
  TContact,
  TContactRequest,
  TContactResponse,
  TContactsResponse,
  TContactUpdate,
  TContactRepo,
};
