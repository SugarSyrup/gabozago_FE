import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import SchedulePage from "./pages/SchedulePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/schedule",
    element: <SchedulePage />,
  },
]);

export default router;
