import { useContact } from "../../../../hooks/useContact";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

import {
  ContactContainer,
  ContactName,
  ContactEmail,
  ContactPhone,
  ContactCreated,
  ButtonContainer,
  UpdateButtonContact,
  DeleteButtonContact,
} from "../styles";
import { ModalUpdateContact } from "../../../../components/ModalUpdateContact";

export const Contacts = () => {
  const { deleteContact, contactList } = useContact();
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [isOpenModalUpdateContact, setIsOpenModalUpdateContact] =
    useState(false);

  const handleDelete = async (contactId) => {
    await deleteContact(contactId);
    console.log("Contact deleted");
  };

  const toggleModalUpdateContact = (contactId) => {
    setSelectedContactId(contactId);
    setIsOpenModalUpdateContact(!isOpenModalUpdateContact);
  };

  return (
    <>
      {contactList.map((contact) => (
        <li key={contact.id}>
          <ContactContainer>
            <ContactName>
              <p>
                <IoMdPerson />
              </p>
              <span>{contact.full_name}</span>
            </ContactName>
            <ContactEmail>
              <span>
                <a href={`mailto:${contact.email}`}>
                  <MdEmail />
                </a>
              </span>
              <p>{contact.email}</p>
            </ContactEmail>
            <ContactPhone>
              <span>
                <a
                  className="phone-link"
                  href={`https://api.whatsapp.com/send?phone=${encodeURIComponent(
                    contact.phone
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquarePhone />
                </a>
              </span>
              <p>{contact.phone}</p>
            </ContactPhone>
            {/* <ContactCreated>{contact.createdAt}</ContactCreated> */}
          </ContactContainer>

          <ButtonContainer>
            <UpdateButtonContact
              onClick={() => toggleModalUpdateContact(contact.id)}
            >
              <GrDocumentUpdate />
            </UpdateButtonContact>
            <DeleteButtonContact onClick={() => handleDelete(contact.id)}>
              <MdDeleteForever />
            </DeleteButtonContact>
          </ButtonContainer>
        </li>
      ))}
      {isOpenModalUpdateContact && selectedContactId && (
        <ModalUpdateContact
          toggleModal={() => toggleModalUpdateContact(null)}
          contactId={selectedContactId}
        />
      )}
    </>
  );
};
