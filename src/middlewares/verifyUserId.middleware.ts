import { NextFunction, Request, Response } from "express";
import User from "../entities/User.entity";
import { userRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";

export const verifyUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundUser: User | null = await userRepo.findOneBy({
    id: Number(req.params.userId),
  });

  if (!foundUser) throw new AppError("User not found.", 404);

  res.locals = { ...res.locals, foundUser };

  return next();
};
