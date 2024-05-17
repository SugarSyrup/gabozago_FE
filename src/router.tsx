import { createBrowserRouter } from "react-router-dom";
import { userData } from "./assets/data/userData";

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
import PostPage from "./pages/journal/PostPage";
import VideoPage from "./pages/journal/VideoPage";
import LoginPage from "./pages/auth/LoginPage";
import SignUpPage from "./pages/auth/SignUpPage";
import ArticlePage from "./pages/ArticlePage";
import PlacePage from "./pages/PlacePage";
import SettingsPage from "./pages/profile/SettingsPage";
import TermsPage from "./pages/TermsPage";
import ResignPage from "./pages/resign/ResignPage";
import ResignDonePage from "./pages/resign/ResignDonePage";
import AnnouncePage from "./pages/cscenter/AnnouncePage";
import AnnounceDetailPage from "./pages/cscenter/AnnounceDetailPage";
import FeedBackPage from "./pages/cscenter/FeedBackPage";
import CSCenterPage from "./pages/cscenter/CSCenterPage";
import FAQPage from "./pages/cscenter/FAQPage";
import FAQDetailPage from "./pages/cscenter/FAQDetailPage";
import InquiryPage from "./pages/cscenter/InquiryPage";
import InquiryHistoryPage from "./pages/cscenter/InquiryHistoryPage";
import ArticleTestPage from "./pages/ArticleTestPage";

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
    path: "/profile",
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
  /* ---- 고객센터 페이지 ---- */
  {
    // 고객센터/도움말
    path: "/cscenter",
    element: <CSCenterPage />,
  },
  {
    // FAQ 페이지
    path: "/cscenter/faq",
    element: <FAQPage />,
  },
  {
    // FAQ 상세 페이지
    path: "/cscenter/faq/:id",
    element: <FAQDetailPage />,
  },
  {
    // 문의 하기
    path: "/cscenter/inquiry",
    element: <InquiryPage />,
  },
  {
    // 내 문의 내역
    path: "/cscenter/history",
    element: <InquiryHistoryPage />,
  },
  {
    // 공지사항
    path: "/cscenter/announce",
    element: <AnnouncePage />,
  },
  {
    // 공지사항 상세보기
    path: "/cscenter/announce/:id",
    element: <AnnounceDetailPage />,
  },
  {
    // 의견 보내기
    path: "/cscenter/feedback",
    element: <FeedBackPage />,
  },
  {
    // 장소 페이지
    path: "/place/:id",
    element: <PlacePage />,
  },
  // 아티클 
  {
    path:"/article/test",
    element:<ArticleTestPage />
  },
  {
    path:"/article/:id",
    element:<ArticlePage />
  },
  {
    // 약관
    path: "/terms/:id",
    element: <TermsPage />,
  },
  {
    // 탈퇴하기
    path: "/leave",
    element: <ResignPage />,
  },
  {
    // 탈퇴 완료
    path: "/leave/done",
    element: <ResignDonePage />,
  },
  {
    // 테스트
    path: "/test",
    element: <TestPage />,
  },
]);

export default router;
