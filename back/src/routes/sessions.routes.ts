import { Router } from "express";
import sessionsController from "../controllers/sessions.controller";

const sessionRouter: Router = Router();

sessionRouter.post("", sessionsController.createSessionController);

export { sessionRouter };
