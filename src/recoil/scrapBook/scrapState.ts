import { atom } from 'recoil';

export interface JournalGroup {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  journals: Journal[];
}

export interface Journal {
  id: number;
  title: string;
  createdAt: string;
  updatedAt: string;
  username: string;
  thumbnail: string;
  location: string[]; // 지역
  theme?: string; // 여행 테마
  headCount?: number; // 인원
  budget?: number; // 여행 경비
  departureDate?: string; // 여행 출발 날짜
  arrivalDate?: string; // 여행 도착 날짜
  like: number; // 리스펙 수
  scraped: number; // 스크랩 수
  viewCount: number; // 조회수
}

const defaultJournalGroups: JournalGroup[] = [
  {
    id: 1,
    title: '부산',
    createdAt: '20221010120408',
    updatedAt: '20221010120410',
    journals: [
      {
        id: 1,
        title: '서울다녀왔음',
        createdAt: '20221010120410',
        updatedAt: '20221010120410',
        username: '사자',
        thumbnail: 'https://placehold.co/600x400?text=Hello+World',
        location: ['서울'], // 지역
        theme: '힐링', // 여행 테마
        headCount: 1, // 인원
        budget: 300000, // 여행 경비
        departureDate: '20221010120410', // 여행 출발 날짜
        arrivalDate: '20221020120510', // 여행 도착 날짜
        like: 30, // 리스펙 수
        scraped: 50, // 스크랩 수
        viewCount: 230, // 조회수
      },
    ],
  },
  {
    id: 2,
    title: '서울',
    createdAt: '20221010120408',
    updatedAt: '20221010120410',
    journals: [
      {
        id: 1,
        title: '서울다녀왔음',
        createdAt: '20221010120410',
        updatedAt: '20221010120410',
        username: '사자',
        thumbnail: '',
        location: ['서울'], // 지역
        theme: '힐링', // 여행 테마
        headCount: 1, // 인원
        budget: 300000, // 여행 경비
        departureDate: '20221010120410', // 여행 출발 날짜
        arrivalDate: '20221020120510', // 여행 도착 날짜
        like: 30, // 리스펙 수
        scraped: 50, // 스크랩 수
        viewCount: 230, // 조회수
      },
    ],
  },
  {
    id: 3,
    title: '서울',
    createdAt: '20221010120408',
    updatedAt: '20221010120410',
    journals: [
      {
        id: 1,
        title: '서울다녀왔음',
        createdAt: '20221010120410',
        updatedAt: '20221010120410',
        username: '사자',
        thumbnail: '',
        location: ['서울'], // 지역
        theme: '힐링', // 여행 테마
        headCount: 1, // 인원
        budget: 300000, // 여행 경비
        departureDate: '20221010120410', // 여행 출발 날짜
        arrivalDate: '20221020120510', // 여행 도착 날짜
        like: 30, // 리스펙 수
        scraped: 50, // 스크랩 수
        viewCount: 230, // 조회수
      },
    ],
  },
];

export const scrapedJournalGroupsState = atom({
  key: 'scrapedJournalGroupsState',
  default: defaultJournalGroups,
});

interface ScrapedPlace {
  id: string | number;
  placeName: string;
  theme: string;
  address: string;
  images: string[];
  createdAt: string;
}

const defaultScrapedPlaces: ScrapedPlace[] = [
  {
    id: '20230101120408',
    placeName: '순천만 국가정원',
    theme: '테마공원',
    address: '전남 순천시 국가정원1호길 47',
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipMEdPOZD3iu6GdW8pMaME-lxuv_UmpbTiOPHn1A=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMSPPTGgvqIexrkh7o-czpIS-Ty8y7EqXSj1vCE=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMSPPTGgvqIexrkh7o-czpIS-Ty8y7EqXSj1vCE=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMEdPOZD3iu6GdW8pMaME-lxuv_UmpbTiOPHn1A=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMSPPTGgvqIexrkh7o-czpIS-Ty8y7EqXSj1vCE=s1360-w1360-h1020',
      'https://lh3.googleusercontent.com/p/AF1QipMSPPTGgvqIexrkh7o-czpIS-Ty8y7EqXSj1vCE=s1360-w1360-h1020',
    ],
    createdAt: '20230101120408',
  },
  {
    id: '202301011204010',
    placeName: '순천만 국가정원',
    theme: '테마공원',
    address: '전남 순천시 국가정원1호길 47',
    images: [
      'https://lh3.googleusercontent.com/p/AF1QipMEdPOZD3iu6GdW8pMaME-lxuv_UmpbTiOPHn1A=s1360-w1360-h1020',
    ],
    createdAt: '20230101120408',
  },
];

export const scrapedPlacesState = atom({
  key: 'scrapedPlacesState',
  default: defaultScrapedPlaces,
});
