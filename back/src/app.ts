import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { usersRoutes } from "./routes/users.routes";
import { handleError } from "./middlewares/handleError.middleware";
import { sessionRouter } from "./routes/sessions.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import cors from "cors";
import swaggerDocument from "./swagger.json";
import swaggerUiExpress from "swagger-ui-express";

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  "/api-documentation",
  swaggerUiExpress.serve,
  swaggerUiExpress.setup(swaggerDocument)
);
app.use("/users", usersRoutes);
app.use("/login", sessionRouter);
app.use("/contacts", contactsRoutes);
app.use(handleError);

export default app;
