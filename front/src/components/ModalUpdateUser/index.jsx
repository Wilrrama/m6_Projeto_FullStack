import { useForm } from "react-hook-form";
import { GrDocumentUpdate } from "react-icons/gr";
import { Modal } from "../Modal";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { updateUserSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../../fragments/Form";
import { Input } from "../../fragments/Input";
import { ModalContainerAddContact } from "../ModalAddContact/styles";
import { toast } from "react-toastify";
import { api } from "../../services/api";

export const ModalUpdateUser = ({ toggleModal }) => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateUserSchema),
  });
  const { user } = useAuth();
  const [updatedUser, setUpdatedUser] = useState(user);

  useEffect(() => {
    const userString = localStorage.getItem("@USER");
    const userLocalStorageData = JSON.parse(userString);
    setValue("full_name", userLocalStorageData.full_name);
    setValue("email", userLocalStorageData.email);
    setValue("password", userLocalStorageData.password);
    setValue("phone", userLocalStorageData.phone);
  }, [setValue]);

  const updateUser = async (data) => {
    const userString = localStorage.getItem("@USER");
    const userLocalStorageData = JSON.parse(userString);
    const res = await api.patch(`/users/${userLocalStorageData.id}`, data);
    setUpdatedUser(res.data);
    localStorage.setItem("@USER", JSON.stringify(res.data));
    window.location.reload();
    toast.success("Perfil atualizado com sucesso");
    console.log(res);
  };

  const onSubmit = async (data) => {
    await updateUser(data);
    reset();
    console.log("cliclou");
    console.log(data);
  };

  return (
    <Modal toggleModal={toggleModal}>
      <ModalContainerAddContact>
        <div>
          <h4>Atualizar Usuário</h4>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            //label="Nome Completo"
            id="name"
            placeholder="Digite seu nome completo"
            {...register("full_name")}
            error={errors.full_name}
          />

          <Input
            type="email"
            //label="E-mail"
            id="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
            error={errors.email}
          />

          <Input
            type="password"
            //label="Senha"
            id="password"
            placeholder="Digite a senha"
            {...register("password")}
            error={errors.password}
          />

          <Input
            type="password"
            //label="Confirme Senha"
            id="confirm"
            placeholder="Confirme a senha"
            {...register("confirm")}
            error={errors.confirm}
          />

          <Input
            type="text"
            //label="Telefone"
            id="phone"
            placeholder="Digite o numero do telefone"
            {...register("phone")}
            error={errors.phone}
          />
          <div>
            <span>Atualizar</span>
            <button type="submit">
              <GrDocumentUpdate />
            </button>
          </div>
        </Form>
      </ModalContainerAddContact>
    </Modal>
  );
};
