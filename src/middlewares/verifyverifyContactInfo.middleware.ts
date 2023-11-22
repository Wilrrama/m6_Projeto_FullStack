import { NextFunction, Request, Response } from "express";
import { contactRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";
import Contact from "../entities/Contact.entity";

export const verifyContactInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { foundUser } = res.locals;
  const { email, phone } = req.body;

  // Se o usuário não foi encontrado ou se email e phone não foram fornecidos, passa para o próximo middleware
  if (!foundUser || (!email && !phone)) {
    return next();
  }

  // Procura por um contato com o email ou telefone fornecido
  const foundContact: Contact | null = await contactRepo.findOneBy({
    email,
    phone,
  });

  // Verifica se o contato pertence ao mesmo usuário
  if (foundContact && foundContact.user.id === foundUser.id) {
    throw new AppError("Email or phone already exists for this user", 409);
  }

  // Se não encontrou nenhum contato com o email ou telefone, passa para o próximo middleware
  return next();
};
