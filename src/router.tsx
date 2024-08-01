import { createBrowserRouter } from 'react-router-dom';

import { TUserProfile } from './assets/types/TUserProfile';
import MyTripPage from './pages/mytrip/MyTripPage';
import PlacePage from './pages/PlacePage';
import TermsPage from './pages/TermsPage';

import MyTripDetailPage from './pages/mytrip/DetailPage';
import MyTripLocationSelectPage, { locationResponseType } from './pages/mytrip/LocationSelectPage';
import MyTripDatesSelectPage from './pages/mytrip/DatesSelectPage';
import MyTripLocationSearchPage from './pages/mytrip/LocationSearchPage';
import MyTripPlaceCreatePage from './pages/mytrip/PlaceCreatePage';
import ViewAllPage from './pages/mytrip/ViewAllPage';
import ScrapBookPage from './pages/scrapbook/ScrapBookPage';
import ScrapBookGroupPage from './pages/scrapbook/ScrapBookGroupPage';
import ProfilePage from './pages/profile/ProfilePage';
import UserEditPage from './pages/profile/UserEditPage';
import HomePage from './pages/home/HomePage';
import SettingsPage from './pages/profile/SettingsPage';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import ArticlePage from './pages/ArticlePage';
import ResignPage from './pages/resign/ResignPage';
import ResignDonePage from './pages/resign/ResignDonePage';
import AnnouncePage from './pages/cscenter/AnnouncePage';
import AnnounceDetailPage from './pages/cscenter/AnnounceDetailPage';
import FeedBackPage from './pages/cscenter/FeedBackPage';
import CSCenterPage from './pages/cscenter/CSCenterPage';
import FAQPage from './pages/cscenter/FAQPage';
import FAQDetailPage from './pages/cscenter/FAQDetailPage';
import InquiryPage from './pages/cscenter/InquiryPage';
import InquiryHistoryPage from './pages/cscenter/InquiryHistoryPage';
import PlaceAddPage from './pages/mytrip/PlaceAddPage';
import { get } from './utils/api';
import InquiryDetailPage from './pages/cscenter/InquiryDetailPage';
import IsLoginTemplate from './components/common/isLoginTemplate';
import MemoPage from './pages/mytrip/MemoPage';
import ArticlesPage from './pages/home/ArticlePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/articles',
    element: <ArticlesPage />,
  },

  /* ---- 내 여행 페이지 ---- */
  {
    path: '/mytrip',
    element: (
      <IsLoginTemplate>
        <MyTripPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/mytrip/all',
    element: (
      <IsLoginTemplate>
        <ViewAllPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/mytrip/create',
    element: (
      <IsLoginTemplate>
        <MyTripDatesSelectPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/mytrip/create/location',
    element: (
      <IsLoginTemplate>
        <MyTripLocationSelectPage />
      </IsLoginTemplate>
    ),
    loader: async () => {
      const { data } = await get<locationResponseType[]>('/region');
      return data;
    },
  },
  {
    path: '/mytrip/place/:id',
    element: (
      <IsLoginTemplate>
        <PlaceAddPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/mytrip/:id',
    element: (
      <IsLoginTemplate>
        <MyTripDetailPage />
      </IsLoginTemplate>
    ),
    loader: async () => {
      const { data } = await get<TUserProfile>('/user/profile');
      return data.nickname;
    },
  },
  {
    path: '/mytrip/:id/memo',
    element: (
      <IsLoginTemplate>
        <MemoPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/mytrip/:id/dateChange',
    element: (
      <IsLoginTemplate>
        <MyTripDatesSelectPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/mytrip/:id/:day/search',
    element: (
      <IsLoginTemplate>
        <MyTripLocationSearchPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/mytrip/:id/create',
    element: (
      <IsLoginTemplate>
        <MyTripPlaceCreatePage />
      </IsLoginTemplate>
    ),
  },
  /* ---- 유저 프로필 페이지 ---- */
  {
    path: '/profile',
    element: (
      <IsLoginTemplate>
        <ProfilePage />
      </IsLoginTemplate>
    ),
    loader: async () => {
      if (localStorage.getItem('access_token')) {
        const { data } = await get<TUserProfile>('/user/profile');
        return data;
      }
      return {
        id: -1,
        nickname: 'string',
        description: 'string',
        avatarURL: '1',
      };
    },
  },
  {
    // TODO : [LOGIN 기능 정의 이후] LOGIN 정보를 기반으로 접근 허용 / 거부
    path: '/profile/edit',
    element: (
      <IsLoginTemplate>
        <UserEditPage />
      </IsLoginTemplate>
    ),
    loader: async () => {
      const { data } = await get<TUserProfile>('/user/profile');
      return data;
    },
  },
  {
    path: '/profile/settings',
    element: (
      <IsLoginTemplate>
        <SettingsPage />
      </IsLoginTemplate>
    ),
    loader: async () => {
      const { data } = await get<TUserProfile>('/user/profile');
      return data;
    },
  },
  /* ---- 스크랩 페이지 ---- */
  {
    path: '/scrapbook',
    element: (
      <IsLoginTemplate>
        <ScrapBookPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/scrapbook/:id',
    element: (
      <IsLoginTemplate>
        <ScrapBookGroupPage />
      </IsLoginTemplate>
    ),
  },
  /* ---- 로그인 페이지 ---- */
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  /* ---- 고객센터 페이지 ---- */
  {
    // 고객센터/도움말
    path: '/cscenter',
    element: (
      <IsLoginTemplate>
        <CSCenterPage />
      </IsLoginTemplate>
    ),
  },
  {
    // FAQ 페이지
    path: '/cscenter/faq',
    element: (
      <IsLoginTemplate>
        <FAQPage />
      </IsLoginTemplate>
    ),
  },
  {
    // FAQ 상세 페이지
    path: '/cscenter/faq/:id',
    element: (
      <IsLoginTemplate>
        <FAQDetailPage />
      </IsLoginTemplate>
    ),
  },
  {
    // 문의 하기
    path: '/cscenter/inquiry',
    element: <InquiryPage />,
    loader: async () => {
      const { data } = await get<TUserProfile>('/user/profile');
      return data.nickname;
    },
  },
  {
    // 내 문의 detail page
    path: '/cscenter/inquiry/:id',
    element: (
      <IsLoginTemplate>
        <InquiryDetailPage />
      </IsLoginTemplate>
    ),
  },
  {
    // 내 문의 내역
    path: '/cscenter/history',
    element: (
      <IsLoginTemplate>
        <InquiryHistoryPage />
      </IsLoginTemplate>
    ),
  },
  {
    // 공지사항
    path: '/cscenter/announce',
    element: (
      <IsLoginTemplate>
        <AnnouncePage />
      </IsLoginTemplate>
    ),
  },
  {
    // 공지사항 상세보기
    path: '/cscenter/announce/:id',
    element: (
      <IsLoginTemplate>
        <AnnounceDetailPage />
      </IsLoginTemplate>
    ),
  },
  {
    // 의견 보내기
    path: '/cscenter/feedback',
    element: (
      <IsLoginTemplate>
        <FeedBackPage />
      </IsLoginTemplate>
    ),
  },
  {
    // 장소 페이지
    path: '/place/:id',
    element: (
      <IsLoginTemplate>
        <PlacePage />
      </IsLoginTemplate>
    ),
  },
  // 아티클
  {
    path: '/article/:id',
    element: <ArticlePage />,
    loader: async () => {
      if (localStorage.getItem('access_token')) {
        const { data } = await get<TUserProfile>('/user/profile');
        return data.avatarURL;
      }
      return '';
    },
  },
  {
    // 약관
    path: '/terms/:id',
    element: <TermsPage />,
  },
  {
    // 탈퇴하기
    path: '/leave',
    element: (
      <IsLoginTemplate>
        <ResignPage />
      </IsLoginTemplate>
    ),
    loader: async () => {
      if (localStorage.getItem('access_token')) {
        const { data } = await get<TUserProfile>('/user/profile');
        return data.nickname;
      }
      return '';
    },
  },
  {
    // 탈퇴 완료
    path: '/leave/done',
    element: (
      <IsLoginTemplate>
        <ResignDonePage />
      </IsLoginTemplate>
    ),
  },
]);

export default router;
