import { createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);
  const [contactId, setContactId] = useState(null);

  const createContact = async (formData) => {
    try {
      const response = await api.post("/contacts", formData);
      setContactList((prevContactList) => [...prevContactList, response.data]);
      window.location.reload();
      toast.success("Contato Cadastrado", { autoClose: 500 });
    } catch (error) {
      toast.error("Contato já cadastrado ou pertence a outro usuário", {
        autoClose: 500,
      });
      console.log(error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await api.delete(`contacts/${id}`);

      setContactList((prevContactList) =>
        prevContactList.filter((contact) => contact.id !== id)
      );
      toast.success("Contato Deletado", { autoClose: 500 });
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Erro ao deletar contato", { autoClose: 500 });
    }
  };

  const updateContact = async (id, updatedData) => {
    try {
      const response = await api.patch(`contacts/${id}`, updatedData);
      setContactList((prevContactList) =>
        prevContactList.map((contact) =>
          contact.id === id ? response.data : contact
        )
      );
      setContactId(id);
      toast.success("Contato Atualizado", { autoClose: 500 });
    } catch (error) {
      toast.error("Erro ao atualizar contato", { autoClose: 500 });
      console.error("Erro ao atualizar contato:", error);
    }
  };

  const getContactById = async (id) => {
    const response = await api.get(`contacts/${id}`);
    return response.data;
  };

  return (
    <ContactContext.Provider
      value={{
        deleteContact,
        contactList,
        createContact,
        setContactList,
        updateContact,
        contactId,
        getContactById,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
