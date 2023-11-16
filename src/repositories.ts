import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import User from "./entities/User.entity";
import Contact from "./entities/Contact.entity";

export const userRepo: Repository<User> = AppDataSource.getRepository(User);
export const contactRepo: Repository<Contact> =
  AppDataSource.getRepository(Contact);
