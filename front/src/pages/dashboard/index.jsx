import { useEffect, useState } from "react";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { IoMdPersonAdd } from "react-icons/io";
import { FaRegFilePdf } from "react-icons/fa6";
import {
  DashboardHeader,
  User,
  UserContact,
  UpdateButton,
  ExitButton,
  Title,
  ContactList,
  DeleteUserButton,
  PDFButton,
} from "./styles";
import { api } from "../../services/api";
import { useContact } from "../../hooks/useContact";
import { useAuth } from "../../hooks/useAuth";
import { ModalAddContact } from "../../components/ModalAddContact";
import { Contacts } from "./Contacts";
import { ModalUpdateUser } from "../../components/ModalUpdateUser";
import generatePDF, { Margin } from "react-to-pdf";

const options = {
  method: "open",
  page: {
    margin: Margin.SMALL,
    format: "A4",
    orientation: "portrait",
  },
};

const getTargetElement = () => document.getElementById("content-id");

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
  };

  return (
    <>
      <main id="content-id">
        <DashboardHeader>
          <div>
            <User>
              {/* <h5> Usuário:</h5> */}
              <p> {user && user.full_name}</p>
            </User>
            <UserContact>
              {/* <span>Email:</span> */}
              <p>{user && user.email}</p>
              {/* <p>Telefone:</p> */}
              <p>{user && user.phone}</p>
            </UserContact>
          </div>
          {/* <ButtonContainerUser> */}
          <PDFButton onClick={() => generatePDF(getTargetElement, options)}>
            <FaRegFilePdf />
          </PDFButton>
          <UpdateButton onClick={toggleModalUpdateUser}>
            <GrDocumentUpdate />
          </UpdateButton>
          <DeleteUserButton onClick={() => handleDelete(user.id)}>
            <MdDeleteForever />
          </DeleteUserButton>
          {/* </ButtonContainerUser> */}
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
            <ModalUpdateUser toggleModal={toggleModalUpdateUser} />
          )}
        </section>
      </main>
    </>
  );
};
