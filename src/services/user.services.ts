import User from "../entities/User.entity";
import {
  TUserCreate,
  TUserRead,
  TUserReturn,
  TUserUpdate,
} from "../interfaces/user.interfaces";
import { userRepo } from "../repositories";
import {
  userReturnSchema,
  userUpdateSchema,
  usersReadSchema,
} from "../schemas/user.schemas";

const createUserService = async (
  payload: TUserCreate
): Promise<TUserReturn> => {
  const newUser: User = userRepo.create(payload);
  await userRepo.save(newUser);

  return userReturnSchema.parse(newUser);
};

const readAllUsersService = async (): Promise<TUserRead> => {
  const users: TUserRead = await userRepo.find();
  return usersReadSchema.parse(users);
};

const deleteUserService = async (user: User): Promise<void> => {
  await userRepo.remove(user);
};

const updateUserService = async (
  user: User,
  payload: TUserUpdate
): Promise<TUserUpdate> => {
  const updateUser = await userRepo.save({ ...user, ...payload });
  return userUpdateSchema.parse(updateUser);
};

export default {
  createUserService,
  readAllUsersService,
  deleteUserService,
  updateUserService,
};
