import { Repository } from "typeorm";
import User from "../entities/User.entity";
import { AppDataSource } from "../data-source";

const createUserService = async (payload: Omit<User, "id">) => {
  const repo: Repository<User> = AppDataSource.getRepository(User);
  const user: User = await repo.save(payload);
  return user;
};

export default { createUserService };
