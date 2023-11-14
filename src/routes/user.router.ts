import { Router } from "express";
import { userControllers } from "../controllers";

export const userRouter: Router = Router();

userRouter.post("", userControllers.createUserController);
userRouter.get("", userControllers.readAllUsersController);
userRouter.get("/:userId", userControllers.retrieveUserController);
userRouter.delete("/:userId", userControllers.deleteUserController);
