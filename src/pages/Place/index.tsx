import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

import LocationIcon from '@_icons/location.svg?react';
import PhoneIcon from '@_icons/phone.svg?react';
import TimeIcon from '@_icons/clock.svg?react';
import LinkIcon from '@_icons/web.svg?react';
import CalendarAddIcon from '@_icons/calendar_add_border.svg?react';
import ParkIcon from '@_icons/park.svg?react';
import DogIcon from '@_icons/dog.svg?react';
import WheelChairIcon from '@_icons/wheelChair.svg?react';
import BabyCarrigeIcon from '@_icons/babyCarrige.svg?react';
import ScrapIcon from '@_icons/bookmark.svg?react';
import ScrapFiiledIcon from '@_icons/bookmark_filled.svg?react';
import ArrowTopIcon from '@_icons/arrow_top.svg?react';
import PetDenyIcon from '@_icons/pet_deny.svg?react';
import ParkDenyIcon from '@_icons/park_deny.svg?react';
import WheelChairDenyIcon from '@_icons/wheelChair_deny.svg?react';
import BabyCarrigeDenyIcon from '@_icons/babyCarrige_deny.svg?react';
import RightChevronIcon from '@_icons/chevron_right.svg?react';
import MapIcon from '@_icons/map.svg?react';

import NaverMapIMG from '@_imgs/maps/NaverMap.png';
import KakaoMapIMG from '@_imgs/maps/KakaoMap.png';
import TMapIMG from '@_imgs/maps/Tmap.png';

import { HeaderWithBack } from '@_common/Header';
import OutlineButton from '@_common/Button/OutlineButton';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
import BottomButtonContainer from '@_common/BottomButtonContainer';

import AdditionalText from '../../components/place/AdditionalText';
import PlaceGoogleMap from '../../components/journal/GoogleMap';
import { get, post } from '@_utils/api';

import * as S from './style';
import NaverMap from '../../components/scrapBook/NaverMap';
import TabBar from '@_common/TabBar';
import TripBucketContent from '../../components/place/TripBucketContent';
import BlogContent from '../../components/place/BlogContent';
import ExtraInfoContent from '../../components/place/ExtraInfoContent';

type TData = {
  basicInformation: {
    name: string;
    category: string;
    address: {
      old: string;
      road: string;
    };
    number: string;
    kakaoPlaceId: string;
    coordinate: [number, number];
    scrap: {
      count: number;
      isScraped: boolean;
    };
  };

  tripBucket: {
    contents: {
      id: number;
      thumbnailURL: string;
      source: string;
      title: string;
    }[];
    memo: string;
  };

  blog: {
    title: string;
    blogName: string;
    date: string;
    thumbnailURL: string;
    contentURL: string;
  }[];

  etcInfomation: {
    openingHours: string;
    website: string;
    additionalInfomation: string;
    amenitiesAndService: {
      parking: boolean;
      pet: boolean;
      barrierFree: boolean;
      stroller: boolean;
    };
  };
};

function PlacePage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [data, setData] = useState<TData>();
  const tabs = [
    { id: 1, name: '트립 버킷', content: <TripBucketContent data={data?.tripBucket} /> },
    { id: 2, name: '블로그', content: <BlogContent data={data?.blog} /> },
    { id: 3, name: '정보', content: <ExtraInfoContent data={data?.etcInfomation} /> },
  ];
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);

  useEffect(() => {
    get<TData>(`/place/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <PageTemplate
      header={
        <HeaderWithBack>{data ? <span>{data.basicInformation.name}</span> : ''}</HeaderWithBack>
      }
      nav={null}
    >
      {data?.basicInformation !== undefined && (
        <S.ContentContainer>
          <NaverMap coordinate={data.basicInformation.coordinate} />

          <S.PlaceHeaderContainer>
            <S.PlaceHeader>
              <Typography.Headline size="md" color="#000">
                {data.basicInformation.name}
              </Typography.Headline>
              <Typography.Body size="lg" color="#A6A6A6">
                {data.basicInformation.category}
              </Typography.Body>
              <OutlineButton
                style={{
                  borderColor: '#5276FA',
                  backgroundColor: data.basicInformation.scrap.isScraped ? '#F3F6FF' : 'white',
                }}
                onClick={() => {
                  post('/scrap/place', {
                    placeId: id,
                    isTripBucket: false,
                  }).then(() => {
                    setData({
                      ...data,
                      basicInformation: {
                        ...data.basicInformation,
                        scrap: {
                          ...data.basicInformation.scrap,
                          isScraped: !data.basicInformation.scrap.isScraped,
                          count: data.basicInformation.scrap.isScraped
                            ? data.basicInformation.scrap.count - 1
                            : data.basicInformation.scrap.count + 1,
                        },
                      },
                    });
                  });
                }}
              >
                <S.ScrapButton isScraped={data.basicInformation.scrap.isScraped}>
                  <Typography.Title size="sm" color="inherit">
                    {data.basicInformation.scrap.count}
                  </Typography.Title>
                  {data.basicInformation.scrap.isScraped ? <ScrapFiiledIcon /> : <ScrapIcon />}
                </S.ScrapButton>
              </OutlineButton>
            </S.PlaceHeader>
          </S.PlaceHeaderContainer>

          <S.BasicInformationContainer>
            <S.InfomationList>
              {data.basicInformation.address && (
                <S.InfomationItem>
                  <LocationIcon />
                  <S.InfomationText>
                    {data.basicInformation.address.road}
                    <br />
                    <S.AddressOld>[지번]</S.AddressOld>
                    {data.basicInformation.address.old}
                  </S.InfomationText>
                </S.InfomationItem>
              )}
              {data.basicInformation.number && (
                <S.InfomationItem>
                  <PhoneIcon />
                  <S.InfomationText>{data.basicInformation.number}</S.InfomationText>
                </S.InfomationItem>
              )}
            </S.InfomationList>
          </S.BasicInformationContainer>

          <S.SeperateLine />

          <S.MapButtonsContainer>
            <S.InfomationItem
              onClick={() => {
                window.location.href = `kakaomap://place?id=${data.basicInformation.kakaoPlaceId}`;
              }}
            >
              <MapIcon />
              <S.InfomationText>상세 정보 보러가기</S.InfomationText>
            </S.InfomationItem>
            <S.MapButtons>
              <S.MapButton
                onClick={() => {
                  window.location.href = `kakaomap://place?id=${data.basicInformation.kakaoPlaceId}`;
                }}
              >
                <img src={KakaoMapIMG} alt="KakaoMap" />
                <Typography.Title size="lg">카카오</Typography.Title>
              </S.MapButton>
              <S.MapButtonSperateLine />
              <S.MapButton
                onClick={() => {
                  window.location.href = `nmap://place?lat=${data.basicInformation.coordinate[0]}&lng=${data.basicInformation.coordinate[1]}&appname=gabozago.kr`;
                }}
              >
                <img src={NaverMapIMG} alt="TMap" />
                <Typography.Title size="lg">네이버</Typography.Title>
              </S.MapButton>
              <S.MapButtonSperateLine />
              <S.MapButton
                onClick={() => {
                  window.location.href = `https://apis.openapi.sk.com/tmap/app/routes?appKey=${import.meta.env.VITE_TMAP_API_KEY}&goalname=${data.basicInformation.name}&goalx=${data.basicInformation.coordinate[0]}&goaly=${data.basicInformation.coordinate[1]}`;
                }}
              >
                <img src={TMapIMG} alt="TMap" />
                <Typography.Title size="lg">티맵</Typography.Title>
              </S.MapButton>
            </S.MapButtons>
          </S.MapButtonsContainer>

          <S.SeperateLine />

          <S.PlaceAddButton>
            <CalendarAddIcon />
            <Typography.Title size="lg" color="#484848">
              내 일정에 추가하기
            </Typography.Title>
          </S.PlaceAddButton>

          <S.PageSeperateLine />

          <TabBar
            tabs={tabs}
            focusedTabIndex={focusedTabIndex}
            setFocusedTabIndex={setFocusedTabIndex}
          />
          {tabs[focusedTabIndex].content}
        </S.ContentContainer>
      )}
    </PageTemplate>
  );
}

export default PlacePage;
