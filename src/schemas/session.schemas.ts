import { userSchema } from "./user.schemas";

export const sessionCreateSchema = userSchema.pick({
  email: true,
  password: true,
});
