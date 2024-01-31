import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import MyTripPage from "./pages/MyTripPage";
import TestPage from "./pages/TestPage";
import MyTripDetailPage from "./pages/MyTripDetailPage";
import MyTripCreatePage from "./pages/MyTripCreatePage";

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
        path: "/mytrip/create",
        element: <MyTripCreatePage />,
    },
    {
        path: "/mytrip/:id",
        element: <MyTripDetailPage />,
    },
    {
        path: "/test",
        element: <TestPage />,
    },
]);

export default router;
