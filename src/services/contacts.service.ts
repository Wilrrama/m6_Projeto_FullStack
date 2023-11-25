import { AppError } from "../errors/AppError.error";
import {
  TContact,
  TContactRequest,
  TContactResponse,
  TContactsResponse,
} from "../interfaces/contacts.interfaces";
import { contactRepo, userRepo } from "../repositories";
import { contactSchemaResponse } from "../schemas/contacts.schema";

const createContactService = async (
  payload: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  const user = await userRepo.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) throw new AppError("Usuário não encontrado", 404);

  const existingContact = await contactRepo.findOne({
    where: [
      { email: payload.email, user },
      { phone: payload.phone, user },
    ],
  });

  if (existingContact) {
    if (existingContact.email === payload.email) {
      throw new AppError("E-mail já cadastrado para este usuário", 400);
    } else {
      throw new AppError("Telefone já cadastrado para este usuário", 400);
    }
  }

  const contact: TContact = contactRepo.create({
    ...payload,
    user,
  });

  await contactRepo.save(contact);

  return contactSchemaResponse.parse(contact);
};

const readAllContactService = async (
  userId: number
): Promise<TContactsResponse> => {
  const user = await userRepo.findOne({
    where: {
      id: userId,
    },
    relations: {
      contacts: true,
    },
  });

  if (!user) {
    throw new AppError("Usuário não encontrado", 404);
  }

  return user.contacts;
};

const deleteContactService = async (contactId: number): Promise<void> => {
  const contact = await contactRepo.findOne({ where: { id: contactId } });

  if (!contact) {
    throw new AppError("Contato não encontrado", 404);
  }

  await contactRepo.remove(contact);
};

const updateContactService = async (
  data: TContactRequest,
  contactId: number
): Promise<TContactResponse> => {
  const updateContact = await contactRepo.findOneBy({ id: contactId });

  if (!updateContact) {
    throw new AppError("Contato não encontrado", 404);
  }

  const newTaskData = contactRepo.create({
    ...updateContact,
    ...data,
  });

  await contactRepo.save(newTaskData);

  return newTaskData;
};

const readByIdContactService = async (
  contactId: number
): Promise<TContactResponse> => {
  const contact = await contactRepo.findOne({
    where: { id: contactId },
  });

  if (!contact) {
    throw new AppError("Contato não encontrado", 404);
  }

  return contactSchemaResponse.parse(contact);
};

export {
  createContactService,
  readAllContactService,
  deleteContactService,
  updateContactService,
  readByIdContactService,
};
