import { AppError } from "../errors/AppError.error";
import {
  TContact,
  TContactRequest,
  TContactResponse,
  TContactUpdate,
  TContactsResponse,
} from "../interfaces/contacts.interfaces";
import { contactRepo, userRepo } from "../repositories";

const createContactService = async (
  payload: TContactRequest,
  userId: number
): Promise<TContactResponse> => {
  // Verifica se o usuário existe
  const user = await userRepo.findOne({
    where: {
      id: userId,
    },
  });

  if (!user) throw new AppError("Usuário não encontrado", 404);

  // Verifica se o e-mail ou telefone já estão cadastrados para o usuário
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

  // Se tudo estiver correto, cria o contato
  const contact: TContact = contactRepo.create({
    ...payload,
    user,
  });

  await contactRepo.save(contact);

  return contact;
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

export {
  createContactService,
  readAllContactService,
  deleteContactService,
  updateContactService,
};
