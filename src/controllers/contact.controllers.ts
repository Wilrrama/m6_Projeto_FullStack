import { Request, Response } from "express";
import Contact from "../entities/Contact.entity";
import { contactServices } from "../services";
import User from "../entities/User.entity";
import { TContactRead } from "../interfaces/contact.interfaces";

const createContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // const userId = res.locals.userId;
  const contact = await contactServices.createContactService(req.body);
  return res.status(201).json(contact);
};

const readAllContactsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const contacts: TContactRead = await contactServices.readAllContactsService();
  return res.status(200).json(contacts);
};

const retrieveContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(res.locals.foundContact);
};

const updateContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundContact } = res.locals;
  const contact: Contact = await contactServices.updateContactService(
    foundContact,
    req.body
  );

  return res.status(200).json(contact);
};

const deleteContactController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await contactServices.deleteContactService(res.locals.foundContact);
  return res.status(204).json();
};

export default {
  createContactController,
  readAllContactsController,
  retrieveContactController,
  deleteContactController,
  updateContactController,
};
