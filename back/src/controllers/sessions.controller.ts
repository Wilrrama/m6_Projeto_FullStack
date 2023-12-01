import { Request, Response } from "express";
import { TSessionReturn } from "../interfaces/session.interfaces";
import { createSessionService } from "../services/sessions.service";

const createSessionController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const token: TSessionReturn = await createSessionService(req.body);
  return res.status(201).json(token);
};

export default { createSessionController };
