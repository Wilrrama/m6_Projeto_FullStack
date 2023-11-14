import { Request, Response } from "express";
import User from "../entities/User.entity";
import { userServices } from "../services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: User = await userServices.createUserService(req.body);
  return res.status(201).json(user);
};

const readAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: User[] = await userServices.readAllUsersService();
  return res.status(200).json(users);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: User = await userServices.retrievedUserService(
    Number(req.params.userId)
  );
  return res.status(200).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await userServices.deleteUserService(Number(req.params.userId));
  return res.status(204).json();
};

export default {
  createUserController,
  readAllUsersController,
  retrieveUserController,
  deleteUserController,
};
