import User from "../entities/User.entity";
import { userRepo } from "../repositories";

const createUserService = async (payload: Omit<User, "id">): Promise<User> => {
  const newUser: User = userRepo.create(payload);
  const saveUser = await userRepo.save(newUser);

  return saveUser;
};

const readAllUsersService = async (): Promise<User[]> => {
  const users: User[] = await userRepo.find();
  return users;
};

const updateUserService = async (
  user: User,
  payload: Partial<User>
): Promise<User> => {
  return await userRepo.save({ ...user, ...payload });
};

const deleteUserService = async (user: User): Promise<void> => {
  await userRepo.remove(user);
};

export default {
  createUserService,
  readAllUsersService,
  deleteUserService,
  updateUserService,
};
