import { useEffect, useState } from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { useAuth } from "../../../hooks/useAuth";
import {
  DashboardHeader,
  User,
  UserContact,
  UpdateButton,
  ExitButton,
  Title,
  ContactList,
  DeleteUserButton,
  ButtonContainerUser,
} from "./styles";
import { api } from "../../../services/api";
import { useContact } from "../../../hooks/useContact";
import { Modal } from "../../../components/Modal";
import { ModalAddContact } from "../../../components/ModalAddContact";
import { Contacts } from "./Contacts";

export const Dashboard = () => {
  const { userLogout, user, userDelete } = useAuth();
  const { setContactList, deleteContact, contactList } = useContact();
  const [isOpenModalAddContact, setIsOpenModalAddContact] = useState(false);
  const [isOpenModalUpdateUser, setIsOpenModalUpdateUser] = useState(false);

  const toggleModalUpdateUser = () =>
    setIsOpenModalUpdateUser(!isOpenModalUpdateUser);

  const toggleModalAddContact = () =>
    setIsOpenModalAddContact(!isOpenModalAddContact);

  useEffect(() => {
    (async () => {
      const response = await api.get("/contacts");
      setContactList(response.data);
    })();
  }, []);

  const handleDelete = async (userId) => {
    //confirm("Deseja excluir o usuário e todos os contatos");
    await userDelete(userId);
    window.location.reload();
    console.log("User deleted");
  };

  return (
    <>
      <DashboardHeader>
        <div>
          <User>
            <h5> Usuário:</h5>
            <span> {user && user.full_name}</span>
          </User>
          <UserContact>
            <h5>Email:</h5>
            <span>{user && user.email}</span>
            <h5>Telefone:</h5>
            <span>{user && user.phone}</span>
          </UserContact>
        </div>
        <ButtonContainerUser>
          <UpdateButton onClick={toggleModalUpdateUser}>
            <GrDocumentUpdate />
          </UpdateButton>
          <DeleteUserButton onClick={() => handleDelete(user.id)}>
            <MdDeleteForever />
          </DeleteUserButton>
        </ButtonContainerUser>
        <ExitButton onClick={() => userLogout()}>Sair</ExitButton>
      </DashboardHeader>
      <section>
        <Title>
          <h1> Meus Contatos</h1>
          <button onClick={toggleModalAddContact}>
            Adicionar
            <IoMdPersonAdd />
          </button>
        </Title>

        <ContactList>
          <Contacts onDeleteContact={deleteContact} />
        </ContactList>

        {isOpenModalAddContact && (
          <ModalAddContact toggleModal={toggleModalAddContact} />
        )}

        {isOpenModalUpdateUser && (
          <Modal toggleModal={toggleModalUpdateUser}>Update User</Modal>
        )}
      </section>
    </>
  );
};
