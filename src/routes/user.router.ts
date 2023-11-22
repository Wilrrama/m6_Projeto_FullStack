import { Router } from "express";
import { userControllers } from "../controllers";
import { verifyUserId } from "../middlewares/verifyUserId.middleware";
import { verifyUserEmail } from "../middlewares/verifyUserEmail.middleware";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema, userUpdateSchema } from "../schemas/user.schemas";
import { verifyUserPhone } from "../middlewares/verifyUserPhone.middleware";

export const userRouter: Router = Router();

userRouter.post(
  "",
  verifyUserEmail,
  verifyUserPhone,
  validateBody(userCreateSchema),
  userControllers.createUserController
);
userRouter.get("", userControllers.readAllUsersController);

userRouter.use(
  "/:userId",
  verifyUserId,
  verifyUserPhone,
  validateBody(userUpdateSchema)
);

userRouter.get("/:userId", userControllers.retrieveUserController);
userRouter.delete("/:userId", userControllers.deleteUserController);
userRouter.patch("/:userId", userControllers.upddateUserController);
