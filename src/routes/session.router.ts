import { Router } from "express";
import { sessionControllers } from "../controllers";

export const sessionRouter: Router = Router();

sessionRouter.post("", sessionControllers.createSessionController);
