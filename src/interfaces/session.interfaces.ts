import { z } from "zod";
import { sessionCreateSchema } from "../schemas/session.schemas";

export type TSessionCreate = z.infer<typeof sessionCreateSchema>;
export type TSessionReturn = { token: string };
