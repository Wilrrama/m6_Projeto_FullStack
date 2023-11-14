import express, { Application, json } from "express";
import { userControllers } from "./controllers";

const app: Application = express();

app.use(json());

app.post("/users", userControllers.createUserController);
app.get("/users", userControllers.readeAllUsersController);

export default app;
