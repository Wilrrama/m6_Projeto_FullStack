import { z } from "zod";

export const updateUserSchema = z
  .object({
    full_name: z.string().min(4, "Nome Inválido!"),
    email: z.string().email("Forneça um e-mail válido."),
    password: z.string().min(4, "Senha Inválida."),
    confirm: z.string().min(4, "Senha Inválida"),
    phone: z
      .string()
      .min(11, "Número Inválido!")
      .regex(/^[0-9]+$/, "Este campo só aceita números."),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senhas precisam ser iguais",
    path: ["confirm"],
  });
