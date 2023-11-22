import { z } from "zod";
import {
  userCreateSchema,
  userReturnSchema,
  userSchema,
  usersReadSchema,
} from "../schemas/user.schemas";
import { DeepPartial, Repository } from "typeorm";
import User from "../entities/User.entity";

export type TUserResponse = z.infer<typeof userSchema>;
export type TUserCreate = z.infer<typeof userCreateSchema>;
export type TUserRead = z.infer<typeof usersReadSchema>;
export type TUserReturn = z.infer<typeof userReturnSchema>;
export type TUserUpdate = DeepPartial<User>;
export type TUserRepo = Repository<User>;
