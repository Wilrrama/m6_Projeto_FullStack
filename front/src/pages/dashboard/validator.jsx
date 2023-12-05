import { z } from "zod";

export const registerSchema = z.object({
  full_name: z.string(),
  email: z.string().email("Formeça um e-mail válido."),
  password: z.string().min(1, "Senha incorreta."),
  phone: z.string(),
});
