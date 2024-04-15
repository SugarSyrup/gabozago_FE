import { createBrowserRouter } from "react-router-dom";
import MyTripPage from "./pages/mytrip/MyTripPage";
import TestPage from "./pages/TestPage";
import MyTripDetailPage from "./pages/mytrip/DetailPage";
import MyTripLocationSelectPage from "./pages/mytrip/LocationSelectPage";
import MyTripDatesSelectPage from "./pages/mytrip/DatesSelectPage";
import MyTripLocationSearchPage from "./pages/mytrip/LocationSearchPage";
import MyTripPlaceCreatePage from "./pages/mytrip/PlaceCreatePage";
import ScrapBookPage from "./pages/scrapbook/ScrapBookPage";
import ScrapBookGroupPage from "./pages/scrapbook/ScrapBookGroupPage";
import ProfilePage from "./pages/profile/ProfilePage";
import UserEditPage from "./pages/profile/UserEditPage";
import UserFollowPage from "./pages/profile/UserFollowPage";
import HomePage from "./pages/home/HomePage";
import ShortFormPage from "./pages/journal/ShortformPage";
import SnapshotPage from "./pages/journal/SnapshotPage";

import { userData } from "./assets/data/userData";
import PostPage from "./pages/journal/PostPage";
import VideoPage from "./pages/journal/VideoPage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import SettingsPage from "./pages/profile/SettingsPage";
import TermsPage from "./pages/TermsPage";
import ResignPage from "./pages/ResignPage";

const router = createBrowserRouter([
  {
    path: "*",
    element: <HomePage />,
  },
  /* ---- 여행기 페이지 ---- */
  {
    path: "/journal/shortform/:id",
    element: <ShortFormPage />,
  },
  {
    path: "/journal/snapshot/:id",
    element: <SnapshotPage />,
  },
  {
    path: "/journal/post/:id",
    element: <PostPage />,
  },
  {
    path: "/journal/video/:id",
    element: <VideoPage />,
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
    path: "/profile/:uid",
    element: <ProfilePage />,
    loader: async () => {
      return userData;
    },
  },
  {
    path: "/profile/:uid/follow",
    element: <UserFollowPage />,
  },
  {
    // TODO : [LOGIN 기능 정의 이후] LOGIN 정보를 기반으로 접근 허용 / 거부
    path: "/profile/edit",
    element: <UserEditPage />,
    loader: async () => {
      return userData;
    },
  },
  {
    path: "/profile/settings",
    element: <SettingsPage />,
    loader: async () => {
      return userData;
    },
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
  /* ---- 로그인 페이지 ---- */
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  // 기타
  {
    path: "/terms/:id",
    element: <TermsPage />,
  },
  {
    path: "/leave",
    element: <ResignPage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
