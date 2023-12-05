import { Link } from "react-router-dom";
import {
  StyledButtonBack,
  StyledButtonContainerRegister,
  StyledControllerRegister,
  StyledButtonRegister,
} from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "./validator";
import { Form } from "../../fragments/Form";
import { Input } from "../../fragments/Input";
import { useAuth } from "../../hooks/useAuth";

export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });
  const { userRegister } = useAuth();

  const submitRegister = (formData) => {
    userRegister(formData);
    reset();
  };

  return (
    <StyledControllerRegister>
      <h1>Cadastre-se</h1>
      <Form onSubmit={handleSubmit(submitRegister)}>
        <Input
          type="text"
          label="Nome Completo"
          id="name"
          placeholder="Digite seu nome completo"
          {...register("full_name")}
          error={errors.full_name}
        />

        <Input
          type="email"
          label="E-mail"
          id="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
          error={errors.email}
        />

        <Input
          type="password"
          label="Senha"
          id="password"
          placeholder="Digite a senha"
          {...register("password")}
          error={errors.password}
        />

        <Input
          type="password"
          label="Confirme Senha"
          id="password"
          placeholder="Confirme a senha"
          {...register("confirm")}
          error={errors.confirm}
        />

        <Input
          type="text"
          label="Telefone"
          id="phone"
          placeholder="Digite o numero do telefone"
          {...register("phone")}
          error={errors.phone}
        />

        <StyledButtonContainerRegister>
          <Link to="/">
            <StyledButtonBack> Voltar </StyledButtonBack>
          </Link>
          <StyledButtonRegister type="submit">Cadastrar</StyledButtonRegister>
        </StyledButtonContainerRegister>
      </Form>
    </StyledControllerRegister>
  );
};
