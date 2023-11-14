import "express-async-errors";
import express, { Application, json } from "express";
import { userRouter } from "./routes/user.router";
import { handleError } from "./middlewares/handleError.middleware";

const app: Application = express();

app.use(json());
app.use("/users", userRouter);
app.use(handleError);

export default app;
