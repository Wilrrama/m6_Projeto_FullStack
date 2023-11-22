import { Repository } from "typeorm";
import { AppDataSource } from "./data-source";
import User from "./entities/User.entity";
import Contact from "./entities/Contact.entity";
import { TContactRepo } from "./interfaces/contact.interfaces";
import { TUserRepo } from "./interfaces/user.interfaces";

export const userRepo: TUserRepo = AppDataSource.getRepository(User);
export const contactRepo: TContactRepo = AppDataSource.getRepository(Contact);
