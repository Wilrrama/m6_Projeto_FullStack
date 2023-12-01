import { Footer } from "./components/Footer/index.jsx";
import { Header } from "./components/Header/index.jsx";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { RoutesMain } from "./routes/index.jsx";
import { ResetStyles } from "./styles/ResetStyles.js";
import { ThemeProvider } from "styled-components";
import light from "../src/styles/themes/light";
import dark from "../src/styles/themes/dark";
import { useState } from "react";
import { ContactProvider } from "./providers/ContactProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  const [theme, setTheme] = useState(light);

  const onChangeTheme = () => {
    setTheme(theme === light ? dark : light);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <ResetStyles />
          <ToastContainer />
          <Header onChangeTheme={onChangeTheme} theme={theme} />
          <AuthProvider>
            <ContactProvider>
              <RoutesMain />
            </ContactProvider>
          </AuthProvider>
          <div style={{ flex: 1 }}></div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
