import logo from "../../assets/images/logo.png";
import { StyledHeader } from "./styles.js";
import Switch from "react-switch";
import lightTheme from "../../styles/themes/light.js";
import darkTheme from "../../styles/themes/dark.js";

export const Header = ({ onChangeTheme, theme }) => {
  const getCurrentDate = () => {
    const currentDate = new Date();
    const options = { year: "numeric", month: "long", day: "numeric" };
    return currentDate.toLocaleDateString(undefined, options);
  };

  const getCurrentTime = () => {
    const currentTime = new Date();
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return currentTime.toLocaleTimeString(undefined, options);
  };

  return (
    <StyledHeader>
      <img src={logo} alt="Logotipo da Lista de Contatos" />
      <div>
        <h4>Projeto FullStack</h4>
        <h4>Lista de Contatos</h4>
      </div>
      <div>
        <p>{getCurrentDate()}</p>
        <p>{getCurrentTime()}</p>
        <Switch
          onChange={onChangeTheme}
          checked={theme === lightTheme}
          height={20}
          checkedIcon={false}
          handDiameter={20}
          offColor={theme.colors.secondary}
          onColor={theme.colors.secondary}
        />
        <h6>
          by{" "}
          <a
            href="https://www.linkedin.com/in/wilson-alves-franchi-dos-santos-b3ba3332/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wilson
          </a>
        </h6>
      </div>
    </StyledHeader>
  );
};
