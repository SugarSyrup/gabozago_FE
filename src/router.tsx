import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import MyTripPage from "./pages/MyTripPage";
import TestPage from "./pages/TestPage";
import MyTripDetailPage from "./pages/MyTripDetailPage";
import MyTripLocationSelectPage from "./pages/MyTripLocationSelectPage";
import MyTripDatesSelectPage from "./pages/MyTripDatesSelectPage";
import MyTripLocationSearchPage from "./pages/MyTripLocationSearchPage";
import MyTripPlaceCreatePage from "./pages/MyTripPlaceCreatePage";
import MyPage from "./pages/MyPage";
import { userData } from "./assets/data/userData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/mytrip",
        element: <MyTripPage />,
        children: [         
            {
                path: "create",
                element: <MyTripDatesSelectPage />,
            },
            {
                path: "create/location",
                element: <MyTripLocationSelectPage />,
            },
            {
                path: ":id",
                element: <MyTripDetailPage />,
            },
            {
                path: ":id/search",
                element: <MyTripLocationSearchPage />,
            },
            {
                path: ":id/search/:newPlace",
                element: <MyTripLocationSearchPage />,
            },
            {
                path: ":id/create",
                element: <MyTripPlaceCreatePage />
            },   
        ]
    },
    {
        path:"/mypage/:id",
        element:<MyPage />,
        loader: async() => {
            return userData;
        }
    },
    {
        path: "/test",
        element: <TestPage />,
    },
]);

export default router;
