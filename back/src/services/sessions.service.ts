import { compare } from "bcryptjs";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/AppError.error";
import {
  TSessionCreate,
  TSessionReturn,
} from "../interfaces/session.interfaces";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async ({
  email,
  password,
}: TSessionCreate): Promise<TSessionReturn> => {
  const foundUser: User | null = await userRepo.findOneBy({ email });
  if (!foundUser) throw new AppError("Dados Inválidos", 401);

  const samePwd: boolean = await compare(password, foundUser.password);
  if (!samePwd) throw new AppError("Dados Inválidos", 401);

  const token: string = sign(
    { name: foundUser.full_name },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export { createSessionService };
