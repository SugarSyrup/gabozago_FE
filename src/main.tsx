import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { RecoilRoot } from "recoil";
import GlobalFont from "./styles/GlobalFont";
import GlobalStyle from "./styles/GlobalStyle";

//This is develop branch
ReactDOM.createRoot(document.getElementById("root")!).render(
    <RecoilRoot>
        <GlobalFont />
        <GlobalStyle />
        <RouterProvider router={router} />
    </RecoilRoot>
);
