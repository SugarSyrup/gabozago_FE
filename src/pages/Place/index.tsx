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

import { HeaderWithBack } from '@_common/Header';
import OutlineButton from '@_common/Button/OutlineButton';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
import BottomButtonContainer from '@_common/BottomButtonContainer';

import AdditionalText from '../../components/place/AdditionalText';
import PlaceGoogleMap from '../../components/journal/GoogleMap';
import { get, post } from '@_utils/api';

import * as S from './style';

type TData = {
  name: string;
  category: string;
  address: string;
  trafficInformation: string;
  number: string;
  openingHours: string;
  website: string;
  additionalInformation: string;
  latitude: number;
  longitude: number;
  thumbnailURL: string;

  scrap: {
    count: number;
    isScraped: boolean;
  };

  saved: {
    contentLink: string;
    memo: string;
  };

  details: {
    parking: boolean | null;
    pet: boolean | null;
    barrierFree: boolean | null;
    stroller: boolean | null;
  };
};

function PlacePage() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

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
        searchParams.get('isMyTrip') !== 'true' && (
          <BottomButtonContainer
            onClick={() => {
              navigate(`/mytrip/place/${id}`);
            }}
            bgColor="blue"
          >
            <S.BottomContainer>
              <CalendarAddIcon />
              <Typography.Title size="lg" color="inherit">
                내 일정에 추가하기
              </Typography.Title>
            </S.BottomContainer>
          </BottomButtonContainer>
        )
      }
    >
      {data !== undefined && (
        <S.ContentContainer>
          {data.thumbnailURL === null ? (
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
              <img src={data.thumbnailURL} key={data.name} alt={`${data.name} IMG`} />
            </S.ImgSlider>
          )}

          {/* Text Infomation */}
          <S.TextContainer>
            <S.PlaceTitle ref={titleRef}>
              <Typography.Headline size="md" color="#000">
                {data.name}
              </Typography.Headline>
              <Typography.Body size="lg" color="#A6A6A6">
                {data.category}
              </Typography.Body>
              <OutlineButton
                bgColor={data.scrap.isScraped ? 'blue' : undefined}
                onClick={() => {
                  post('/scrap/place', {
                    placeId: id,
                    isTripBucket: false,
                  }).then(() => {
                    setData({
                      ...data,
                      scrap: {
                        ...data.scrap,
                        isScraped: !data.scrap.isScraped,
                        count: data.scrap.isScraped ? data.scrap.count - 1 : data.scrap.count + 1,
                      },
                    });
                  });
                }}
              >
                <S.ScrapButton isScraped={data.scrap.isScraped}>
                  <Typography.Title size="sm" color="inherit">
                    {data.scrap.count}
                  </Typography.Title>
                  {data.scrap.isScraped ? <ScrapFiiledIcon /> : <ScrapIcon />}
                </S.ScrapButton>
              </OutlineButton>
            </S.PlaceTitle>

            {/* ContentList */}
            <S.ContentList>
              <S.InfomationList>
                {data.address && (
                  <S.InfomationItem>
                    <LocationIcon />
                    <S.InfomationText>{data.address}</S.InfomationText>
                  </S.InfomationItem>
                )}
                {data.number && (
                  <S.InfomationItem>
                    <PhoneIcon />
                    <S.InfomationText>{data.number}</S.InfomationText>
                  </S.InfomationItem>
                )}
                {data.openingHours && (
                  <S.InfomationItem>
                    <TimeIcon />
                    {/* <PlaceOperateTime opening_hours={data.openingHours} /> */}
                    <AdditionalText data={data.openingHours}>
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

                {data.additionalInformation && (
                  <S.InfomationItem>
                    <TimeIcon />
                    {/* <PlaceOperateTime opening_hours={data.opening_hours} /> */}
                    <AdditionalText data={data.additionalInformation}>
                      <S.InfomationText>부가 정보</S.InfomationText>
                    </AdditionalText>
                  </S.InfomationItem>
                )}
              </S.InfomationList>
            </S.ContentList>

            {data.thumbnailURL !== null && (
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
            )}

            {data.saved.contentLink !== null && (
              <>
                <S.SeperateLine />
                <S.MemoContainer>
                  <S.MemoHeader>
                    <Typography.Headline size="sm" color="inherit">
                      저장된 메모
                    </Typography.Headline>
                    <div
                      style={{
                        display: 'flex',
                        gap: '4px',
                        alignItems: 'center',
                        cursor: 'pointer',
                      }}
                      onClick={() => {
                        navigate(`/place/${id}/edit?memo=${data.saved.memo}`);
                      }}
                    >
                      <Typography.Title size="sm" color="#5276FA">
                        수정
                      </Typography.Title>
                      <RightChevronIcon />
                    </div>
                  </S.MemoHeader>
                  <S.MemoDataList>
                    <S.MemoItem>
                      <Typography.Title size="md" color="inherit">
                        링크
                      </Typography.Title>
                      <S.MemoLink
                        onClick={() => {
                          window.location.href = data.saved.contentLink;
                        }}
                      >
                        {data.saved.contentLink}
                      </S.MemoLink>
                    </S.MemoItem>
                    <S.MemoItem>
                      <Typography.Title size="md" color="inherit">
                        메모
                      </Typography.Title>
                      <S.Memo>{data.saved.memo}</S.Memo>
                    </S.MemoItem>
                  </S.MemoDataList>
                </S.MemoContainer>
              </>
            )}
            <S.SeperateLine />

            {data.details.parking === null &&
            data.details.pet === null &&
            data.details.barrierFree === null &&
            data.details.stroller === null ? (
              <></>
            ) : (
              <>
                <S.ExtraInfomationContainer>
                  <Typography.Headline size="sm" color="inherit">
                    상세 정보
                  </Typography.Headline>
                  <S.ExtraInfomation>
                    {data.details.parking !== null &&
                      (data.details.parking ? (
                        <S.ExtraInfomationItem>
                          <ParkIcon />
                          <Typography.Label size="lg" color="inherit">
                            주차
                          </Typography.Label>
                        </S.ExtraInfomationItem>
                      ) : (
                        <S.ExtraInfomationItem>
                          <ParkDenyIcon />
                          <Typography.Label size="lg" color="inherit">
                            주차
                            <br />
                            불가
                          </Typography.Label>
                        </S.ExtraInfomationItem>
                      ))}
                    {data.details.pet !== null &&
                      (data.details.pet ? (
                        <S.ExtraInfomationItem>
                          <DogIcon />
                          <Typography.Label size="lg" color="inherit">
                            반려동물 출입
                          </Typography.Label>
                        </S.ExtraInfomationItem>
                      ) : (
                        <S.ExtraInfomationItem>
                          <PetDenyIcon />
                          <Typography.Label size="lg" color="inherit">
                            반려동물 출입
                            <br />
                            불가
                          </Typography.Label>
                        </S.ExtraInfomationItem>
                      ))}
                    {data.details.barrierFree !== null &&
                      (data.details.barrierFree ? (
                        <S.ExtraInfomationItem>
                          <WheelChairIcon />
                          <Typography.Label size="lg" color="inherit">
                            배리어프리
                          </Typography.Label>
                        </S.ExtraInfomationItem>
                      ) : (
                        <S.ExtraInfomationItem>
                          <WheelChairDenyIcon />
                          <Typography.Label size="lg" color="inherit">
                            배리어프리
                            <br />
                            불가
                          </Typography.Label>
                        </S.ExtraInfomationItem>
                      ))}
                    {data.details.stroller !== null &&
                      (data.details.stroller ? (
                        <S.ExtraInfomationItem>
                          <BabyCarrigeIcon />
                          <Typography.Label size="lg" color="inherit">
                            유모차 대여
                          </Typography.Label>
                        </S.ExtraInfomationItem>
                      ) : (
                        <S.ExtraInfomationItem>
                          <BabyCarrigeDenyIcon />
                          <Typography.Label size="lg" color="inherit">
                            유모차 대여
                            <br />
                            불가
                          </Typography.Label>
                        </S.ExtraInfomationItem>
                      ))}
                  </S.ExtraInfomation>
                </S.ExtraInfomationContainer>
                <S.SeperateLine />
              </>
            )}

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
