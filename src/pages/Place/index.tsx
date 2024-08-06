import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

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
import ArrowTopIcon from '@_icons/arrow_top.svg?react';

import { HeaderWithBack } from '@_common/Header';
import OutlineButton from '@_common/Button/OutlineButton';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
import BottomButtonContainer from '@_common/BottomButtonContainer';

import AdditionalText from '../../components/place/AdditionalText';
import PlaceGoogleMap from '../../components/journal/GoogleMap';
import { get } from '@_utils/api';

import * as S from './style';

type TData = {
  region: string;
  name: string;
  theme: string;
  address: string;
  number: string;
  opening_hours: string;
  website: string;
  image: string[];
  latitude: string;
  longitude: string;
};

function PlacePage() {
  const { id } = useParams();
  const [data, setData] = useState<TData>();
  const titleRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    get<TData>(`/place/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    if (!titleRef.current) return;

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const entryIntersectionRatio = Math.floor(entry.intersectionRatio * 100) / 100;
          if (entryIntersectionRatio >= 0.6) {
            headerRef.current?.style.setProperty('opacity', `0`);
          } else {
            headerRef.current?.style.setProperty('opacity', `1`);
          }
        });
      },
      {
        threshold: [0.6, 0.625, 0.65, 0.675, 0.7, 0.725, 0.75, 0.775, 0.8, 0.825, 0.85, 0.875, 0.9],
      },
    );
    observer.observe(titleRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <PageTemplate
      header={
        <HeaderWithBack>
          {data ? <S.HeaderName ref={headerRef}>{data.name}</S.HeaderName> : ''}
        </HeaderWithBack>
      }
      nav={
        <BottomButtonContainer onClick={() => {}} bgColor="blue">
          <S.BottomContainer>
            <CalendarAddIcon />
            <Typography.Title size="lg" color="inherit">
              내 일정에 추가하기
            </Typography.Title>
          </S.BottomContainer>
        </BottomButtonContainer>
      }
    >
      {data !== undefined && (
        <S.ContentContainer>
          {data.image.length === 0 ? (
            <PlaceGoogleMap
              height="200px"
              center={{
                lat: Number(data.latitude),
                lng: Number(data.longitude),
              }}
              markers={[
                {
                  lat: Number(data.latitude),
                  lng: Number(data.longitude),
                },
              ]}
            />
          ) : (
            <S.ImgSlider>
              {data.image.map((img, index) => (
                <img src={img} key={img} alt={`${index} IMG`} />
              ))}
            </S.ImgSlider>
          )}

          {/* Text Infomation */}
          <S.TextContainer>
            <S.PlaceTitle ref={titleRef}>
              <Typography.Headline size="md" color="#000">
                {data.name}
              </Typography.Headline>
              <Typography.Body size="lg" color="#A6A6A6">
                {data.theme}
              </Typography.Body>
              <OutlineButton>
                <S.ScrapButton>
                  <Typography.Title size="sm" color="inherit">
                    999
                  </Typography.Title>
                  <ScrapIcon />
                </S.ScrapButton>
              </OutlineButton>
            </S.PlaceTitle>

            {/* ContentList */}
            <S.ContentList>
              <S.InfomationList>
                <S.InfomationItem>
                  <LocationIcon />
                  <S.InfomationText>{data.address}</S.InfomationText>
                </S.InfomationItem>
                <S.InfomationItem>
                  <PhoneIcon />
                  <S.InfomationText>{data.number}</S.InfomationText>
                </S.InfomationItem>
                {data.opening_hours && (
                  <S.InfomationItem>
                    <TimeIcon />
                    {/* <PlaceOperateTime opening_hours={data.opening_hours} /> */}
                    <AdditionalText data={data.opening_hours}>
                      <S.InfomationText>운영시간</S.InfomationText>
                    </AdditionalText>
                  </S.InfomationItem>
                )}
                {data.website && (
                  <S.InfomationItem>
                    <LinkIcon />
                    <S.InfomationLink to={data.website}>{data.website}</S.InfomationLink>
                  </S.InfomationItem>
                )}
                {/* @TODO: 부가정보 추가시 삽입 */}
                {data.opening_hours && (
                  <S.InfomationItem>
                    <TimeIcon />
                    {/* <PlaceOperateTime opening_hours={data.opening_hours} /> */}
                    <AdditionalText data={data.opening_hours}>
                      <S.InfomationText>운영시간</S.InfomationText>
                    </AdditionalText>
                  </S.InfomationItem>
                )}
              </S.InfomationList>
            </S.ContentList>
            <PlaceGoogleMap
              height="144px"
              center={{
                lat: Number(data.latitude),
                lng: Number(data.longitude),
              }}
              markers={[
                {
                  lat: Number(data.latitude),
                  lng: Number(data.longitude),
                },
              ]}
            />
            <S.SeperateLine />

            {/* Memo */}
            <S.MemoContainer>
              <Typography.Headline size="sm" color="inherit">
                저장된 메모
              </Typography.Headline>
              <S.MemoDataList>
                <S.MemoItem>
                  <Typography.Title size="md" color="inherit">
                    링크
                  </Typography.Title>
                  <S.MemoLink>http://instagram.com/mogumogu_bake_jeonpo</S.MemoLink>
                </S.MemoItem>
                <S.MemoItem>
                  <Typography.Title size="md" color="inherit">
                    메모
                  </Typography.Title>
                  <S.Memo>
                    여기 웨이팅 짱짱 많아서 미리 예약하고 가야함. 진짜 꼭! 그리고 소금빵이 진짜
                    맛있어서 소금빵 꼭 먹어야지 히히 맛있겠당
                  </S.Memo>
                </S.MemoItem>
              </S.MemoDataList>
            </S.MemoContainer>
            <S.SeperateLine />

            {/* Extra Info */}
            <S.ExtraInfomationContainer>
              <Typography.Headline size="sm" color="inherit">
                상세 정보
              </Typography.Headline>
              <S.ExtraInfomation>
                <S.ExtraInfomationItem>
                  <ParkIcon />
                  <Typography.Label size="lg" color="inherit">
                    주차
                  </Typography.Label>
                </S.ExtraInfomationItem>
                <S.ExtraInfomationItem>
                  <DogIcon />
                  <Typography.Label size="lg" color="inherit">
                    반려동물 출입
                  </Typography.Label>
                </S.ExtraInfomationItem>
                <S.ExtraInfomationItem>
                  <WheelChairIcon />
                  <Typography.Label size="lg" color="inherit">
                    베리어프리
                  </Typography.Label>
                </S.ExtraInfomationItem>
                <S.ExtraInfomationItem>
                  <BabyCarrigeIcon />
                  <Typography.Label size="lg" color="inherit">
                    유모차 대여
                  </Typography.Label>
                </S.ExtraInfomationItem>
              </S.ExtraInfomation>
            </S.ExtraInfomationContainer>
            <S.SeperateLine />

            {/* UpButton */}
            <S.UpButton
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <ArrowTopIcon />
            </S.UpButton>
          </S.TextContainer>
        </S.ContentContainer>
      )}
    </PageTemplate>
  );
}

export default PlacePage;
