import express, { Application, json } from "express";
import { userRouter } from "./routes/user.router";

const app: Application = express();

app.use(json());

app.use("/users", userRouter);

export default app;
