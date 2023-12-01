import { Request, Response } from "express";
import {
  createUsersService,
  deleteUsersService,
  readAllUsersServices,
  readUsersByIdService,
  updateUsersService,
} from "../services/users.service";
const createUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newUser = await createUsersService(req.body);

  return res.status(201).json(newUser);
};

const readAllUsersController = async (req: Request, res: Response) => {
  const users = await readAllUsersServices();

  return res.json(users);
};

const readUsersByIdController = async (req: Request, res: Response) => {
  const userId = Number(req.params.id);
  const user = await readUsersByIdService(userId);

  return res.json(user);
};

const deleteUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);
  await deleteUsersService(userId);
  return res.status(204).json();
};

const updateUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = Number(req.params.id);
  const { full_name, email, phone, password } = req.body;
  const updatedUser = await updateUsersService(userId, req.body);
  return res.json(updatedUser);
};

export {
  createUsersController,
  readAllUsersController,
  readUsersByIdController,
  deleteUsersController,
  updateUsersController,
};
