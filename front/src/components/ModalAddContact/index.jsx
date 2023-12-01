import { useForm } from "react-hook-form";
import { Modal } from "../Modal";
import { useContact } from "../../hooks/useContact";
import { Input } from "../../fragments/Input";
import { Form } from "../../fragments/Form";
import { ModalContainerAddContact } from "./styles";
import { IoMdPersonAdd } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "./validator";

export const ModalAddContact = ({ toggleModal }) => {
  const { createContact } = useContact();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const submit = async (formData) => {
    await createContact(formData);
    reset();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <ModalContainerAddContact>
        <div>
          <h4>Adicionar Contato</h4>
        </div>
        <Form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            // label="Nome Completo"
            id="name"
            placeholder="Nome completo"
            {...register("full_name")}
            error={errors.full_name}
          />

          <Input
            type="email"
            //label="E-mail"
            id="email"
            placeholder="E-mail"
            {...register("email")}
            error={errors.email}
          />

          <Input
            type="text"
            //  label="Telefone"
            id="phone"
            placeholder="Telefone"
            {...register("phone")}
            error={errors.phone}
          />
          <div>
            <span>Adiconar</span>
            <button type="submit">
              <IoMdPersonAdd />
            </button>
          </div>
        </Form>
      </ModalContainerAddContact>
    </Modal>
  );
};
