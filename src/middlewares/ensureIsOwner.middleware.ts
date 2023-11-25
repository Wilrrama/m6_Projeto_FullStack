import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.error";
import { contactRepo } from "../repositories";

export const ensureIsOwnerMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const contactId: number = Number(req.params.id);
  const userId: number = Number(res.locals.userId);

  const contact = await contactRepo.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    throw new AppError("Contato não encontrado", 404);
  }

  if (contact.user.id !== userId) {
    throw new AppError("Permissões insuficientes", 403);
  }

  return next();
};
