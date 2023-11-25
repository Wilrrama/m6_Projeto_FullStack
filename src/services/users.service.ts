import { hash, hashSync } from "bcryptjs";
import {
  TUser,
  TUserRequest,
  TUserResponse,
  TUserUpdate,
  TUsersResponse,
} from "../interfaces/users.interfaces";
import { userRepo } from "../repositories";
import {
  userSchemaResponse,
  usersSchemaResponse,
} from "../schemas/users.schema";
import { AppError } from "../errors/AppError.error";

const createUsersService = async ({
  full_name,
  email,
  password,
  phone,
}: TUserRequest): Promise<TUserResponse> => {
  const findUserByEmail = await userRepo.findOne({
    where: { email },
  });

  if (findUserByEmail) throw new AppError("E-mail já está em uso", 409);

  const findUserByPhone = await userRepo.findOne({
    where: { phone },
  });

  if (findUserByPhone)
    throw new AppError("Número de telefone já está em uso", 409);

  const hashedPassword = await hash(password, 10);

  const user = userRepo.create({
    full_name,
    email,
    password: hashedPassword,
    phone,
  });

  await userRepo.save(user);

  return userSchemaResponse.parse(user);
};

const readAllUsersServices = async (): Promise<TUsersResponse> => {
  const users: TUsersResponse = await userRepo.find();
  return usersSchemaResponse.parse(users);
};

const readUsersByIdService = async (id: number) => {
  const user = await userRepo.findOne({
    where: {
      id,
    },
    relations: {
      contacts: true,
    },
  });

  if (!user) {
    throw new AppError("User not found", 409);
  }

  return userSchemaResponse.parse(user);
};

const deleteUsersService = async (id: number) => {
  const user = await userRepo.findOne({
    where: {
      id,
    },
  });

  if (!user) {
    throw new AppError("User not found", 409);
  }

  await userRepo.remove(user);

  return;
};

const updateUsersService = async (
  id: number,
  payload: TUserRequest
): Promise<TUserUpdate> => {
  const { full_name, email, phone, password } = payload;

  const foundUser = await userRepo.findOne({
    where: {
      id,
    },
  });

  if (!foundUser) {
    throw new AppError("User not found", 404);
  }

  if (email && email !== foundUser.email) {
    const existingEmailUser = await userRepo.findOne({
      where: {
        email,
      },
    });
    if (existingEmailUser) {
      throw new AppError("E-mail já está em uso", 409);
    }
  }

  if (phone && phone !== foundUser.phone) {
    const existingPhoneUser = await userRepo.findOne({
      where: {
        phone,
      },
    });
    if (existingPhoneUser) {
      throw new AppError("Número de telefone já está em uso", 409);
    }
  }

  foundUser.full_name = full_name || foundUser.full_name;
  foundUser.email = email || foundUser.email;
  foundUser.phone = phone || foundUser.phone;
  foundUser.password = password ? hashSync(password, 8) : foundUser.password;

  await userRepo.save(foundUser);

  return userSchemaResponse.parse(foundUser);
};

export {
  createUsersService,
  readAllUsersServices,
  readUsersByIdService,
  deleteUsersService,
  updateUsersService,
};
