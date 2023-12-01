import { styled } from "styled-components";

export const StyledControllerLogin = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 2px;
  }

  div {
    form {
      margin-bottom: 2px;
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

        border: 2px solid ${(props) => props.theme.colors.primary};
        border-radius: 4px;

        font-weight: 400;
        font-size: 15px;
      }

      label {
        font-weight: 700;
        font-size: 1rem;
      }

      button {
        margin-top: 5px;
        color: whitesmoke;
        font-weight: 700;
        font-size: 1rem;

        width: 250px;
        height: 40px;

        background-color: ${(props) => props.theme.colors.primary};
        border-radius: 4px;
      }
    }
  }

  h3 {
    font-weight: 700;
    font-size: 1rem;
    margin: 5px;
  }
  button {
    color: whitesmoke;
    font-weight: 700;
    font-size: 1rem;

    width: 250px;
    height: 40px;

    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 4px;
  }

  p {
    font-weight: 700;
    color: #c10228;
  }
`;

function getBackgroundColor(primaryColor) {
  switch (primaryColor) {
    case "#3498db": // Azul
      return "green"; // Cor de fundo para azul
    case "#000000": // Preto
      return "yellow"; // Cor de fundo para preto
    // Adicione outros casos conforme necessário
    default:
      return "transparent"; // Cor de fundo padrão
  }
}
