import { Repository } from "typeorm";
import User from "../entities/User.entity";
import { AppDataSource } from "../data-source";

const createUserService = async (payload: Omit<User, "id">) => {
  const repo: Repository<User> = AppDataSource.getRepository(User);
  const user: User = await repo.save(payload);
  return user;
};

const readAllUsersService = async (): Promise<Array<User>> => {
  const repo: Repository<User> = AppDataSource.getRepository(User);
  const users: Array<User> = await repo.find();
  return users;
};

export default { createUserService, readAllUsersService };
