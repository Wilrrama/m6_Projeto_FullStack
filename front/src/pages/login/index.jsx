import { useForm } from "react-hook-form";
import { loginSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledControllerLogin } from "./styles";
import { Link } from "react-router-dom";

import { Form } from "../../fragments/Form";
import { Input } from "../../fragments/Input";
import { Button } from "../../fragments/Button";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { userLogin } = useAuth();

  const submitLogin = (formData) => {
    userLogin(formData);
    reset();
  };

  return (
    <>
      <StyledControllerLogin>
        <h1>Login</h1>
        <div>
          <Form onSubmit={handleSubmit(submitLogin)}>
            <Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            {errors.email ? <p>{errors.email.message}</p> : null}

            <Input
              type="password"
              id="password"
              placeholder="Digite a senha"
              {...register("password")}
            />
            {errors.password ? <p>{errors.password.message}</p> : null}
            <div>
              <Button name="Acessar" type="submit" />
            </div>
          </Form>
        </div>
        <h3>Ainda não possui uma conta?</h3>
        <Link to="/register">
          <Button name="Cadastre-se" />
        </Link>
      </StyledControllerLogin>
    </>
  );
};
