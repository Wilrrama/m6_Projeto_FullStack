import { NextFunction, Request, Response } from "express";
import { contactRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";
import Contact from "../entities/Contact.entity";
import { FindOneOptions } from "typeorm";

interface ExtendedFindOptions extends FindOneOptions<Contact> {
  where?: {
    phone: any;
    userId: {
      $ne: any;
    };
  };
}

export const verifyContactPhoneForUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { phone, userId } = req.body;

  if (!phone || !userId) {
    return next();
  }

  const options: ExtendedFindOptions = {
    where: {
      phone,
      userId: { $ne: userId },
    },
  };

  const foundContact: Contact | null = await contactRepo.findOne(options);

  if (foundContact) {
    throw new AppError("Phone number already exists for a different user", 409);
  }

  return next();
};
