import { StyledFooter } from "./styles";
import kenzie from "../../assets/images/kenzie.png";

export const Footer = () => {
  return (
    <StyledFooter>
      <a
        href="https://kenzie.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button>
          <img src={kenzie} alt="Logo Kenzie" />
        </button>
      </a>
      <p>A Escola desenvolvedora de desenvolvedores</p>
    </StyledFooter>
  );
};
