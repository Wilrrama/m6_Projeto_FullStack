import { z } from "zod";

export const contactSchema = z.object({
  full_name: z.string().min(4, "Nome Inválido!"),
  email: z.string().email("Forneça um e-mail válido."),
  phone: z
    .string()
    .min(13, "Número Inválido!")
    .regex(/^[0-9]+$/, "Este campo só aceita números."),
});
