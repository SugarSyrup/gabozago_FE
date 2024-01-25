import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import MyTripPage from "./pages/MyTripPage";
import TestPage from "./pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/mytrip",
    element: <MyTripPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
