import User from "../entities/User.entity";
import { AppError } from "../errors/AppError.error";
import { userRepo } from "../repositories";

const createUserService = async (payload: Omit<User, "id">): Promise<User> => {
  const newUser: User = await userRepo.save(payload);
  return newUser;
};

const readAllUsersService = async (): Promise<User[]> => {
  const users: User[] = await userRepo.find();
  return users;
};

const retrievedUserService = async (userId: number): Promise<User> => {
  const user: User | null = await userRepo.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  return user;
};

const deleteUserService = async (userId: number): Promise<void> => {
  const user: User | null = await userRepo.findOne({ where: { id: userId } });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  await userRepo.remove(user);
};

export default {
  createUserService,
  readAllUsersService,
  retrievedUserService,
  deleteUserService,
};
