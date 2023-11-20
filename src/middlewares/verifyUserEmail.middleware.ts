import { NextFunction, Request, Response } from "express";
import User from "../entities/User.entity";
import { userRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";

export const verifyUserEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email;

  if (!email) return next();

  const foundUser: User | null = await userRepo.findOneBy({ email });

  if (foundUser) throw new AppError("Email already exists", 409);

  return next();
};
