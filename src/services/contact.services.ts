import { contactRepo } from "../repositories";
import Contact from "../entities/Contact.entity";

const createContactService = async (
  payload: Omit<Contact, "id">
): Promise<Contact> => {
  const newContact: Contact = contactRepo.create(payload);
  const saveContact = await contactRepo.save(newContact);

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
