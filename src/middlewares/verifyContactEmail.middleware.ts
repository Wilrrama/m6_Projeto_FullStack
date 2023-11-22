import { NextFunction, Request, Response } from "express";
import { contactRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";
import Contact from "../entities/Contact.entity";
import { FindOneOptions } from "typeorm";

interface ExtendedFindOptions extends FindOneOptions<Contact> {
  where?: {
    email: any;
    userId: {
      $ne: any;
    };
  };
}

export const verifyContactEmailForUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email, userId } = req.body;

  if (!email || !userId) {
    return next();
  }

  const options: ExtendedFindOptions = {
    where: {
      email,
      userId: { $ne: userId },
    },
  };

  const foundContact: Contact | null = await contactRepo.findOne(options);

  if (foundContact) {
    throw new AppError("Email already exists for a different user", 409);
  }

  return next();
};
