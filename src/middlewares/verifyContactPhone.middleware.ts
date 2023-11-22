import { NextFunction, Request, Response } from "express";
import { contactRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";
import Contact from "../entities/Contact.entity";

export const verifyContactPhone = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const phone: number = req.body.phone;

  if (!phone) return next();

  const foundContact: Contact | null = await contactRepo.findOneBy({ phone });

  if (foundContact) throw new AppError("Phone number already exists", 409);

  return next();
};
