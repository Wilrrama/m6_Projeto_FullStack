import { Request, Response } from "express";
import User from "../entities/User.entity";
import { userServices } from "../services";
import {
  TUserRead,
  TUserReturn,
  TUserUpdate,
} from "../interfaces/user.interfaces";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user = await userServices.createUserService(req.body);
  return res.status(201).json(user);
};

const readAllUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: TUserRead = await userServices.readAllUsersService();
  return res.status(200).json(users);
};

const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(res.locals.foundUser);
};

const upddateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundUser } = res.locals;
  const user: TUserUpdate = await userServices.updateUserService(
    foundUser,
    req.body
  );

  return res.status(200).json(user);
};

const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await userServices.deleteUserService(res.locals.foundUser);
  return res.status(204).json();
};

export default {
  createUserController,
  readAllUsersController,
  retrieveUserController,
  deleteUserController,
  upddateUserController,
};
