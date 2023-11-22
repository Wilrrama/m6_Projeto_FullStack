import { Router } from "express";
import { verifyContactId } from "../middlewares/verifyContactId.middleware";
import { contactControllers } from "../controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import {
  contactCreateSchema,
  contactUpdateSchema,
} from "../schemas/contact.schemas";
import { verifyContactPhoneForUserId } from "../middlewares/verifyContactPhone.middleware";
import { verifyContactEmailForUserId } from "../middlewares/verifyContactEmail.middleware";

export const contactRouter: Router = Router();

contactRouter.post(
  "",
  validateBody(contactCreateSchema),
  contactControllers.createContactController
);
contactRouter.get("", contactControllers.readAllContactsController);

contactRouter.use("/:contactId", verifyContactId);

contactRouter.get("/:contactId", contactControllers.retrieveContactController);
contactRouter.delete("/:contactId", contactControllers.deleteContactController);
contactRouter.patch(
  "/:contactId",
  validateBody(contactUpdateSchema),
  contactControllers.updateContactController
);
