import React from "react";
import { I18nextProvider } from "react-i18next";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
// import theme from "./chakra-ui/theme";
import theme from "./theme";
import { KBarWrapper } from "./components/command-bar"

// import "bootstrap/dist/css/bootstrap.css";
// import "./index.css";
import "./global.css";
import "./normalize.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";
import i18n from "../i18n";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <ChakraProvider theme={theme}>
          <KBarWrapper>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            {/* <App /> */}
            <RouterProvider router={router} />
          </KBarWrapper>
        </ChakraProvider>
      </I18nextProvider>
  </React.StrictMode>
);