import { Router } from "express";
import { userControllers } from "../controllers";
import { verifyId } from "../middlewares/verifyId.middleware";

export const userRouter: Router = Router();

userRouter.post("", userControllers.createUserController);
userRouter.get("", userControllers.readAllUsersController);

userRouter.use("/:userId", verifyId);

userRouter.get("/:userId", userControllers.retrieveUserController);
userRouter.delete("/:userId", userControllers.deleteUserController);
userRouter.patch("/:userId", userControllers.upddateUserController);
