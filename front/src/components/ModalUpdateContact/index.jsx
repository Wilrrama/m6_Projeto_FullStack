import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Modal } from "../Modal";
import { Input } from "../../fragments/Input";
import { Form } from "../../fragments/Form";
import { ModalContainerAddContact } from "../ModalAddContact/styles";
import { useContact } from "../../hooks/useContact";
import { updateSchema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { GrDocumentUpdate } from "react-icons/gr";
import { toast } from "react-toastify";

export const ModalUpdateContact = ({ toggleModal, contactId }) => {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateSchema),
  });
  const { updateContact, getContactById } = useContact();

  useEffect(() => {
    const getContact = async () => {
      try {
        const contactData = await getContactById(contactId);
        setValue("full_name", contactData.full_name);
        setValue("email", contactData.email);
        setValue("phone", contactData.phone);
      } catch (error) {
        toast.error("Erro ao atualizar contato", { autoClose: 500 });
        console.error("Erro ao buscar os dados do contato:", error);
      }
    };
    getContact();
  }, [contactId, setValue]);

  const submit = async (formData) => {
    await updateContact(contactId, formData);
    reset();
    toggleModal();
  };

  return (
    <Modal toggleModal={toggleModal}>
      <ModalContainerAddContact>
        <div>
          <h4>Atualizar Contato</h4>
        </div>
        <Form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            id="name"
            placeholder="Digite seu nome completo"
            {...register("full_name")}
            error={errors.full_name}
          />

          <Input
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
            error={errors.email}
          />

          <Input
            type="text"
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
