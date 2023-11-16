import { Router } from "express";
import { verifyContactId } from "../middlewares/verifyContactId.middleware";
import { contactControllers } from "../controllers";

export const contactRouter: Router = Router();

contactRouter.post("", contactControllers.createContactController);
contactRouter.get("", contactControllers.readAllContactsController);

contactRouter.use("/:contactId", verifyContactId);

contactRouter.get("/:contactId", contactControllers.retrieveContactController);
contactRouter.delete("/:contactId", contactControllers.deleteContactController);
contactRouter.patch("/:contactId", contactControllers.updateContactController);
