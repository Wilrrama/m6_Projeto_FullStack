import { NextFunction, Request, Response } from "express";
import User from "../entities/User.entity";
import { userRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";

export const verifyUserPhone = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const phone: number = req.body.phone;

  if (!phone) return next();

  const foundUser: User | null = await userRepo.findOneBy({ phone });

  if (foundUser) throw new AppError("Phone number already exists", 409);

  return next();
};
