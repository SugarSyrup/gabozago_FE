import { createBrowserRouter } from "react-router-dom";
import MyTripPage from "./pages/mytrip/MyTripPage";
import TestPage from "./pages/TestPage";
import PlacePage from "./pages/PlacePage";
import TermsPage from "./pages/TermsPage";

import MyTripDetailPage from "./pages/mytrip/DetailPage";
import MyTripLocationSelectPage from "./pages/mytrip/LocationSelectPage";
import MyTripDatesSelectPage from "./pages/mytrip/DatesSelectPage";
import MyTripLocationSearchPage from "./pages/mytrip/LocationSearchPage";
import MyTripPlaceCreatePage from "./pages/mytrip/PlaceCreatePage";
import ViewAllPage from "./pages/mytrip/ViewAllPage";

import ScrapBookPage from "./pages/scrapbook/ScrapBookPage";
import ScrapBookGroupPage from "./pages/scrapbook/ScrapBookGroupPage";

import ProfilePage from "./pages/profile/ProfilePage";
import UserEditPage from "./pages/profile/UserEditPage";
import UserFollowPage from "./pages/profile/UserFollowPage";

import HomePage from "./pages/home/HomePage";
import SettingsPage from "./pages/profile/SettingsPage";

import ShortFormPage from "./pages/journal/ShortformPage";
import SnapshotPage from "./pages/journal/SnapshotPage";
import PostPage from "./pages/journal/PostPage";
import VideoPage from "./pages/journal/VideoPage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";

import { userData } from "./assets/data/userData";

import ResignPage from "./pages/resign/ResignPage";
import ResignDonePage from "./pages/resign/ResignDonePage";
import AnnouncePage from "./pages/cscenter/AnnouncePage";
import AnnounceDetailPage from "./pages/cscenter/AnnounceDetailPage";
import FeedBackPage from "./pages/cscenter/FeedBackPage";
import CSCenterPage from "./pages/cscenter/CSCenterPage";
import FAQPage from "./pages/cscenter/FAQPage";
import InquiryPage from "./pages/cscenter/InquiryPage";
import InquiryHistoryPage from "./pages/cscenter/InquiryHistoryPage";

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
    path: "/mytrip/all",
    element: <ViewAllPage />
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
  {
    path: "/place/:id",
    element: <PlacePage />
  },
  /* ---- 고객센터 페이지 ---- */
  {
    path: "/cscenter",
    element: <CSCenterPage />,
  },
  {
    path: "/cscenter/inquiry",
    element: <InquiryPage />,
  },
  {
    path: "/cscenter/history",
    element: <InquiryHistoryPage />,
  },
  {
    path: "/cscenter/announce",
    element: <AnnouncePage />,
  },
  {
    path: "/cscenter/announce/:id",
    element: <AnnounceDetailPage />,
  },
  {
    path: "/cscenter/faq",
    element: <FAQPage />,
  },
  {
    path: "/cscenter/feedback",
    element: <FeedBackPage />,
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
    path: "/leave/done",
    element: <ResignDonePage />,
  },
  {
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
