import { styled } from "styled-components";

export const StyledControllerRegister = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  p {
    font-weight: 400;
    color: #c10228;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 5px;
    input {
      display: flex;
      flex-direction: column;
      gap: 5px;

      width: 250px;
      height: 40px;
      padding-left: 20px;

      //background: #b0b6eb;
      border: 2px solid ${(props) => props.theme.colors.primary};
      border-radius: 4px;

      font-weight: 400;
      font-size: 15px;
    }

    label {
      font-weight: 700;
      font-size: 1rem;
    }
  }
`;

export const StyledButtonContainerRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  .back {
    color: whitesmoke;
    font-weight: 700;
    font-size: 1rem;
    width: 150px;
    height: 50px;
    background-color: #6170e3; /* Cor para o botão Voltar */
    border: 1px solid #6170e3;
  }

  .register {
    background-color: #6170e3; /* Cor para o botão Cadastrar */
    border: 1px solid #6170e3;
  }
  /* .back {
    color: whitesmoke;
    font-weight: 700;
    font-size: 1rem;

    width: 150px;
    height: 50px;

    background: #6170e3;
    border: 1px solid #6170e3;
    border-radius: 4px;
  } */
`;

export const StyledButtonBack = styled.button`
  margin-top: 5px;
  margin-bottom: 5px;
  color: whitesmoke;
  font-weight: 700;
  font-size: 1rem;

  width: 120px;
  height: 40px;

  //background: #b0b6eb;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid #6170e3;
  border-radius: 4px;
`;

export const StyledButtonRegister = styled.button`
  color: whitesmoke;
  font-weight: 700;
  font-size: 1rem;

  width: 120px;
  height: 40px;

  background-color: ${(props) => props.theme.colors.primary};
  //background: #6170e3;
  border: 1px solid #6170e3;
  border-radius: 4px;
`;
