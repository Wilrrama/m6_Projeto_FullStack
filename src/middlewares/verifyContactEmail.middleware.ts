import { NextFunction, Request, Response } from "express";
import { contactRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";
import Contact from "../entities/Contact.entity";

export const verifyContactEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;

  if (!email) return next();

  const foundContact: Contact | null = await contactRepo.findOneBy({ email });

  if (foundContact) throw new AppError("Email already exists", 409);

  return next();
};
