import { Request, Response } from "express";
import {
  createContactService,
  deleteContactService,
  readAllContactService,
  updateContactService,
} from "../services/contacts.service";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.userId;

  const newContact = await createContactService(req.body, userId);

  return res.status(201).json(newContact);
};

const readContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.userId;

  const contacts = await readAllContactService(userId);

  return res.json(contacts);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contactId = Number(req.params.id);
  await deleteContactService(contactId);

  return res.status(204).send();
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updatedValues = req.body;
  const contactId: number = Number(req.params.id);

  const updateTask = await updateContactService(updatedValues, contactId);

  return res.json(updateTask);
};

export {
  createContactController,
  readContactController,
  deleteContactController,
  updateContactController,
};
