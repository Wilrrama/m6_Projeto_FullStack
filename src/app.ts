import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { usersRoutes } from "./routes/users.routes";
import { handleError } from "./middlewares/handleError.middleware";
import { sessionRouter } from "./routes/sessions.routes";
import { contactsRoutes } from "./routes/contacts.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/login", sessionRouter);
app.use("/contacts", contactsRoutes);
app.use(handleError);

export default app;
