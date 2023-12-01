import { userSchema } from "./users.schema";

export const sessionCreateSchema = userSchema.pick({
  email: true,
  password: true,
});
