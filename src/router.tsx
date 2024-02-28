import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import MyTripPage from "./pages/MyTripPage";
import TestPage from "./pages/TestPage";
import MyTripDetailPage from "./pages/MyTripDetailPage";
import MyTripLocationSelectPage from "./pages/MyTripLocationSelectPage";
import MyTripDatesSelectPage from "./pages/MyTripDatesSelectPage";
import MyTripLocationSearchPage from "./pages/MyTripLocationSearchPage";
import MyTripPlaceCreatePage from "./pages/MyTripPlaceCreatePage";
import ScrapBookPage from "./pages/scrapbook/ScrapBookPage";
import ScrapBookGroupPage from "./pages/scrapbook/ScrapBookGroupPage";
import ProfilePage from "./pages/ProfilePage";
import { userData } from "./assets/data/userData";
import UserEditPage from "./pages/UserEditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  /* ---- 내 여행 페이지 ---- */
  {
    path: "/mytrip",
    element: <MyTripPage />,
  },
  {
    path: "/mytrip/create",
    element: <MyTripDatesSelectPage />,
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
    path: "/mytrip/:id/search",
    element: <MyTripLocationSearchPage />,
  },
  {
    path: "/mytrip/:id/search/:newPlace",
    element: <MyTripLocationSearchPage />,
  },
  {
    path: "/mytrip/:id/create",
    element: <MyTripPlaceCreatePage />,
  },
  /* ---- 유저 프로필 페이지 ---- */
  {
      path:"/profile/:id",
      element:<ProfilePage />,
      loader: async() => {
          return userData;
      }
  },
  {
    path:"/profile/:id/edit",
    element: <UserEditPage />,
    loader: async() => {
        return userData;
    }
  },
  /* ---- 스크랩 페이지 ---- */
  {
    path: "/scrapbook",
    element: <ScrapBookPage />,
  },
  {
    path: "/scrapbook/:id",
    element: <ScrapBookGroupPage />,
  },
  // 기타
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
