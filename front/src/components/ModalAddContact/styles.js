import styled from "styled-components";

export const ModalContainerAddContact = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #f76868;
  }

  div {
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
    h2 {
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;

    input {
      border: 1px solid black;
      height: 25px;
      padding-left: 5px;

      ::placeholder {
        color: black;
      }
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      button {
        font-size: 20px;
        padding-top: 5px;
        :hover {
          font-size: 30px;
          color: green;
        }
      }
    }
  }
`;
