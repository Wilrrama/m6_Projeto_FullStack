import { contactRepo, userRepo } from "../repositories";
import Contact from "../entities/Contact.entity";
import {
  TContactCreate,
  TContactReturn,
} from "../interfaces/contact.interfaces";
import User from "../entities/User.entity";
import { AppError } from "../errors/AppError.error";
import { contactCreateSchema, contactSchema } from "../schemas/contact.schemas";

const createContactService = async (payload: TContactCreate): Promise<any> => {
  const user = await userRepo.findOne({
    where: { id: payload.userId },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  const newContact: Contact = contactRepo.create({ ...payload, user });
  const saveContact = await contactRepo.save(newContact);

  // return contactCreateSchema.parse(saveContact);
  return saveContact;
};

const readAllContactsService = async (): Promise<Contact[]> => {
  const contacts: Contact[] = await contactRepo.find();
  return contacts;
};

const updateContactService = async (
  contact: Contact,
  payload: Partial<Contact>
): Promise<Contact> => {
  return await contactRepo.save({ ...contact, ...payload });
};

const deleteContactService = async (contact: Contact): Promise<void> => {
  await contactRepo.remove(contact);
};

export default {
  createContactService,
  readAllContactsService,
  updateContactService,
  deleteContactService,
};
