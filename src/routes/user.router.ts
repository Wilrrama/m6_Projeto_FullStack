import { Router } from "express";
import { userControllers } from "../controllers";
import { verifyUserId } from "../middlewares/verifyUserId.middleware";
import { verifyUserEmail } from "../middlewares/verifyUserEmail.middleware";

export const userRouter: Router = Router();

userRouter.post("", verifyUserEmail, userControllers.createUserController);
userRouter.get("", userControllers.readAllUsersController);

userRouter.use("/:userId", verifyUserId);

userRouter.get("/:userId", userControllers.retrieveUserController);
userRouter.delete("/:userId", userControllers.deleteUserController);
userRouter.patch("/:userId", userControllers.upddateUserController);
