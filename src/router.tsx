import { createBrowserRouter } from 'react-router-dom';

import { TUserProfile } from './assets/types/TUserProfile';

/* ---- 홈 페이지 ---- */
import HomePage from './pages/Home';

/* ---- 홈 페이지 ---- */
import NotificationPage from './pages/NotificationPage';

/* ---- 로그인 페이지 ---- */
import { LoginPage, SignUpPage, RedirectPage } from './pages/Auth';

/* ---- 아티클 페이지 ---- */
import { ArticlePage, ArticlesPage } from './pages/Article';

/* ---- 내 여행 페이지 ---- */
import {
  MyTripDatesSelectPage,
  MyTripLocationSelectPage,
  MyTripLocationSearchPage,
  MyTripPlaceCreatePage,
  MyTripDetailPage,
  MemoPage,
  MyTripPage,
  ViewAllPage,
  PlaceAddPage,
  MyTripDatesModifyPage,
} from './pages/Mytrip';

/* ---- 스크랩 페이지 ---- */
import {
  ScrapBookPage,
  ScrapBookGroupPage,
  ScrapContentPage,
  ScrapBookPlaceMapPage,
  ContentMemoEditPage,
  ContentPlaceSearchPage,
} from './pages/Scrap';

/* ---- 장소 페이지 ---- */
import PlacePage from './pages/Place';

/* ---- 유저 프로필 페이지 ---- */
import {
  TermsPage,
  ProfilePage,
  UserEditPage,
  SettingsPage,
  ResignDonePage,
  ResignPage,
} from './pages/Profile';

/* ---- 고객센터 페이지 ---- */
import {
  AnnouncePage,
  AnnounceDetailPage,
  FeedBackPage,
  CSCenterPage,
  FAQPage,
  FAQDetailPage,
  InquiryDetailPage,
  InquiryPage,
  InquiryHistoryPage,
} from './pages/Cscenter';

import { get, post } from '@_utils/api';
import IsLoginTemplate from '@_common/isLoginTemplate';
import { LocationResponseType } from './pages/Mytrip/LocationSelectPage';
import ErrorHandlingPage from './pages/ErrorHandling';
import TripBucketPage from './pages/OnBoarding/TripBucketPage';
import PlaceMyTripCreate from './pages/PlaceMyTripCreate';
import PlaceMemoEditPage from './pages/PlaceMemoEditPage';
import ScrapBookPlaceAddPage from './pages/Scrap/ScrapBookPlaceAddPage';

const router = createBrowserRouter([
  /* ---- 홈 페이지 ---- */
  {
    path: '/',
    element: <HomePage />,
    // errorElement: <ErrorHandlingPage />,
  },
  {
    path: '/notifications',
    element: (
      <IsLoginTemplate>
        <NotificationPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/onboarding/tripbucket',
    element: <TripBucketPage />,
  },

  /* ---- 아티클 페이지 ---- */
  {
    path: '/articles',
    element: <ArticlesPage />,
  },
  {
    path: '/article/:id',
    element: <ArticlePage />,
    loader: async () => {
      if (localStorage.getItem('access_token')) {
        const { data } = await get<TUserProfile>('/user/profile');
        return data.avatarURL;
      }

      return {};
    },
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
  {
    path: '/:type/redirect',
    element: <RedirectPage />,
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
      const { data } = await get<LocationResponseType[]>('/region');
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
        <MyTripDatesModifyPage />
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
    path: '/scrapbook/place/add',
    element: (
      <IsLoginTemplate>
        <ScrapBookPlaceAddPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/scrapbook/placemap',
    element: (
      <IsLoginTemplate>
        <ScrapBookPlaceMapPage />
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
  {
    path: '/scrapbook/content/:id',
    element: (
      <IsLoginTemplate>
        <ScrapContentPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/scrap/content/:id/edit',
    element: (
      <IsLoginTemplate>
        <ContentMemoEditPage />
      </IsLoginTemplate>
    ),
  },
  {
    path: '/scrapbook/content/:id/search',
    element: (
      <IsLoginTemplate>
        <ContentPlaceSearchPage />
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
  {
    // 장소 페이지
    path: '/place/:id/edit',
    element: (
      <IsLoginTemplate>
        <PlaceMemoEditPage />
      </IsLoginTemplate>
    ),
  },
  {
    // 장소 페이지
    path: '/place/mytrip/create',
    element: (
      <IsLoginTemplate>
        <PlaceMyTripCreate />
      </IsLoginTemplate>
    ),
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
