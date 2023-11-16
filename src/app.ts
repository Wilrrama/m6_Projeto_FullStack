import "express-async-errors";
import express, { Application, json } from "express";
import { userRouter } from "./routes/user.router";
import { handleError } from "./middlewares/handleError.middleware";
import { contactRouter } from "./routes/contact.router";

const app: Application = express();

app.use(json());
app.use("/users", userRouter);
app.use("/contacts", contactRouter);
app.use(handleError);

export default app;
