import { Router } from "express";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import {
  createContactController,
  deleteContactController,
  readByIdContactController,
  readContactController,
  updateContactController,
} from "../controllers/contacts.controller";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes: Router = Router();

contactsRoutes.use(ensureAuthMiddleware);
contactsRoutes.use("/:id", ensureIsOwnerMiddleware);

contactsRoutes.post("", createContactController);
contactsRoutes.get("", readContactController);
contactsRoutes.get("/:id", readByIdContactController);
contactsRoutes.delete("/:id", deleteContactController);
contactsRoutes.patch("/:id", updateContactController);

export { contactsRoutes };
