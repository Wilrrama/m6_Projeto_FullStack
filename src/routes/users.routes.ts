import { Router } from "express";
import {
  createUsersController,
  deleteUsersController,
  readAllUsersController,
  readUsersByIdController,
  updateUsersController,
} from "../controllers/users.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest } from "../schemas/users.schema";

const usersRoutes: Router = Router();

usersRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSchemaRequest),
  createUsersController
);
usersRoutes.get("", readAllUsersController);
usersRoutes.get("/:id", readUsersByIdController);
usersRoutes.delete("/:id", deleteUsersController);
usersRoutes.patch("/:id", updateUsersController);

export { usersRoutes };
