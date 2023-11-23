import { z } from "zod";
import {
  userSchema,
  userSchemaRequest,
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { DeepPartial, Repository } from "typeorm";
import { User } from "../entities/user.entitie";

type TUser = z.infer<typeof userSchema>;
type TUserRequest = z.infer<typeof userSchemaRequest>;
type TUserResponse = z.infer<typeof userSchemaResponse>;
type TUsersResponse = z.infer<typeof usersSchemaResponse>;
type TUserUpdate = DeepPartial<User>;
export type TUserRepo = Repository<User>;

export { TUser, TUserRequest, TUserResponse, TUsersResponse, TUserUpdate };
