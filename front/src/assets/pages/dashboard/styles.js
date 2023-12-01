import { styled } from "styled-components";

export const DashboardHeader = styled.header`
  border: #b0b6eb 3px solid;
  //background-color: #6170e3;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
  color: aliceblue;
  display: flex;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const UpdateButton = styled.button`
  color: orange;
  font-size: 20px;
  font-weight: 700;
`;

export const DeleteUserButton = styled.button`
  color: red;
  font-size: 25px;
  font-weight: 700;
`;

export const ButtonContainerUser = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const ExitButton = styled.button`
  width: 100px;
  height: 25px;
  color: whitesmoke;
  background: #b0b6eb;
  border-radius: 4px;
  font-weight: 700;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
`;

export const UserContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
  font-size: 15px;
`;

export const Title = styled.div`
  margin-top: 7px;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 20px;
    margin: 0;
    text-align: center;
    flex-grow: 1;
  }
  Button {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    margin-right: 20px;
    :hover {
      font-size: 25px;
      color: green;
    }
  }
`;

export const ContactList = styled.ul`
  margin-left: 1%;
  margin-right: 1%;
  display: flex;
  flex-wrap: wrap;
  gap: 3%;

  li {
    border: black 3px solid;
    display: flex;
    margin-bottom: 5px;
    flex-direction: column;
  }
`;

export const ContactName = styled.div`
  display: flex;
`;

export const ContactEmail = styled.div`
  display: flex;
  span {
    color: blue;
    a {
      :hover {
        font-size: 20px;
      }
    }
  }
`;

export const ContactPhone = styled.div`
  display: flex;

  span {
    color: green;
    a {
      :hover {
        font-size: 20px;
      }
    }
  }
`;

export const ContactCreated = styled.div``;

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1px;
`;

export const UpdateButtonContact = styled.button`
  font-size: 17px;
  color: orange;
  :hover {
    font-size: 25px;
  }
`;

export const DeleteButtonContact = styled.button`
  font-size: 22px;
  color: red;
  :hover {
    font-size: 25px;
  }
`;
