import { AppDataSource } from "./data-source";
import { Contact } from "./entities/contact.entitie";
import { User } from "./entities/user.entitie";
import { TContactRepo } from "./interfaces/contacts.interfaces";
import { TUserRepo } from "./interfaces/users.interfaces";

export const userRepo: TUserRepo = AppDataSource.getRepository(User);
export const contactRepo: TContactRepo = AppDataSource.getRepository(Contact);
