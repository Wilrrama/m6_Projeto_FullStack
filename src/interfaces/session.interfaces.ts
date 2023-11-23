import { z } from "zod";
import { sessionCreateSchema } from "../schemas/sessions.schema";

type TSessionCreate = z.infer<typeof sessionCreateSchema>;
type TSessionReturn = { token: string };

export { TSessionCreate, TSessionReturn };
