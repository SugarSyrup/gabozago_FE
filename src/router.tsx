import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import MyTripPage from "./pages/MyTripPage";
import TestPage from "./pages/TestPage";
import MyTripDetailPage from "./pages/MyTripDetailPage";
import MyTripLocationSelectPage from "./pages/MyTripLocationSelectPage";
import MyTripDatesSelectPage from "./pages/MyTripDatesSelectPage";

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
        element: <MyTripDatesSelectPage />
    },
    {
        path: "/mytrip/create/location",
        element: <MyTripLocationSelectPage />,
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
