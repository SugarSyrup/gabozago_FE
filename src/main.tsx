import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

import { GlobalFont, GlobalStyle, theme } from "./styles";
import router from "./router";

//This is develop branch
ReactDOM.createRoot(document.getElementById("root")!).render(
    <RecoilRoot>
        <GlobalFont />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </RecoilRoot>
);
