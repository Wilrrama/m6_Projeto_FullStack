import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.error";
import Contact from "../entities/Contact.entity";
import { contactRepo } from "../repositories";

export const verifyContactId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundContact: Contact | null = await contactRepo.findOneBy({
    id: Number(req.params.contactId),
  });

  if (!foundContact) throw new AppError("Contact not found.", 404);

  res.locals = { ...res.locals, foundContact };

  return next();
};
