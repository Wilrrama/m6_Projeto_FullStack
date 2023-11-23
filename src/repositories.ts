import { AppDataSource } from "./data-source";
import { User } from "./entities/user.entitie";
import { TUserRepo } from "./interfaces/users.interfaces";

export const userRepo: TUserRepo = AppDataSource.getRepository(User);
