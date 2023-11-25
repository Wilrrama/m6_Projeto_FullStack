import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import {
  createContactController,
  deleteContactController,
  readContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.use(ensureAuthMiddleware);
contactsRoutes.use("/:id", ensureIsOwnerMiddleware);

contactsRoutes.post("", createContactController);
contactsRoutes.get("", readContactController);
contactsRoutes.get("/:id", readContactController);
contactsRoutes.delete("/:id", deleteContactController);
contactsRoutes.patch("/:id", updateContactController);

export { contactsRoutes };
