/* eslint-disable prettier/prettier */
import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import SelectIcon from '@_icons/select.svg?react';
import SelectFilledIcon from '@_icons/select_filled.svg?react';
import MapIcon from '@_icons/map.svg?react';
import { deletes, get, post } from '@_utils/api';
import NoThumbnailImg from '@_imgs/NoThumbnail.png';
import { popupValue } from '@_recoil/common/PopupValue';
import { TPlace } from '@_types/Place.type';
import ImportantIcon from '@_icons/exclamation_circle.svg?react';

import Typography from '../../common/Typography';
import { scrapPlaceFilterState } from '../../../recoil/filters/scrapPlaceFilterState';
import { TFilter } from '../../../assets/types/FilterTypes';
import usePopup from '../../../hooks/usePopup';

import * as S from './style';

function ScrapedTripPlace() {
  const navigate = useNavigate();

  const filter = useRecoilValue<TFilter>(scrapPlaceFilterState);
  const resetFilter = useResetRecoilState(scrapPlaceFilterState);
  const setPopupUI = useSetRecoilState(popupValue);

  const [places, setPlaces] = useState<TPlace[]>([]);
  const [count, setCount] = useState<number>(0);
  const [maximunCount, setMaximumCount] = useState<number>(0);
  const [deletePlaces, setDeletePlaces] = useState<number[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [next, setNext] = useState<string | null>(null);

  function themeSwiftCode(keyword: string) {
    switch (keyword) {
      case '음식점':
        return '01';
      case '카페':
        return '02';
      case '관광명소':
        return '03';
      case '레포츠':
        return '04';
      case '쇼핑':
        return '05';
      case '문화시설':
        return '06';
      case '여가시설':
        return '07';
      case '편의시설':
        return '08';
      case '숙박시설':
        return '09';
      case '주차장':
        return '10';
      default:
        return '';
    }
  }

  const { popupOpen, popupClose } = usePopup();
  const infiniteRef = useRef<HTMLDivElement>(null);

  const getPlaces = () => {
    if (filter.sort === '담은순') {
      get<{
        next: string | null;
        previous: string | null;
        count: number;
        results: TPlace[];
      }>('scrap/place', {
        params: {
          ordering: 'scraped',
          location: filter.location?.join(','),
          theme: filter.theme?.map((item) => `PLC${themeSwiftCode(item)}`).join(','),
        },
      }).then(({ data }) => {
        setPlaces(data.results);
        setCount(data.count);
        setNext(data.next?.replace('http://', 'https://'));
      });
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        get<{
          next: string | null;
          previous: string | null;
          count: number;
          results: TPlace[];
        }>('scrap/place', {
          params: {
            ordering: 'distance',
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
            location: filter.location?.join(','),
            theme: filter.theme?.map((item) => `PLC${themeSwiftCode(item)}`).join(','),
          },
        }).then(({ data }) => {
          setPlaces(data.results);
          setCount(data.count);
          setNext(data.next?.replace('http://', 'https://'));
        });
      });
    }
  };

  useEffect(() => {
    getPlaces();
  }, [filter]);

  useEffect(() => {
    get<{
      next: string | null;
      previous: string | null;
      count: number;
      results: TPlace[];
    }>('scrap/place', {
      params: {
        ordering: 'scraped',
        location: filter.location?.join(','),
        theme: filter.theme?.map((item) => `PLC${themeSwiftCode(item)}`).join(','),
      },
    }).then(({ data }) => {
      setPlaces(data.results);
      setCount(data.count);
      setMaximumCount(data.count);
      setNext(data.next?.replace('http://', 'https://'));
    });
    resetFilter();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && next) {
          get<{
            next: string | null;
            previous: string | null;
            count: number;
            results: TPlace[];
          }>(next).then((res) => {
            setPlaces([...places, ...res.data.results]);
            setCount(res.data.count);
            setNext(res.data.next?.replace('http://', 'https://'));
          });
        }
      });
    }, options);

    if (infiniteRef.current) {
      observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <>
      <S.ContentsHeader>
        <Typography.Title size="md" color="inherit">
          {isEditMode ? (
            <p
              onClick={() => {
                setIsEditMode(false);
              }}
            >
              취소
            </p>
          ) : (
            <>
              전체 <S.FontHighlight>{count}</S.FontHighlight>
            </>
          )}
        </Typography.Title>
        <Typography.Title size="sm" color="#A6A6A6">
          {isEditMode ? (
            <p
              onClick={() => {
                if (deletePlaces.length > 0) {
                  setPopupUI({
                    Icon: <ImportantIcon />,
                    Header: `${deletePlaces.length}개의 장소를 삭제하시겠어요?`,
                    Warning: '삭제한 장소는 복구할 수 없어요.',
                    CloseButton: {
                      text: '취소',
                      onClick: () => {
                        setDeletePlaces([]);
                        popupClose();
                      }
                    },
                    ConfirmButton: {
                      onClick: () => {
                        deletes(`/scrap/place?id=${deletePlaces.join(',')}`).then(() => {
                          setDeletePlaces([]);
                          window.location.reload();
                        })
                      },
                      text: '확인',
                    },
                  });
                  popupOpen();
                }
              }}
            >
              {deletePlaces.length === 0 ? (
                '삭제하기'
              ) : (
                <S.FontHighlight isRead>삭제하기</S.FontHighlight>
              )}
            </p>
          ) : (
            <p
              onClick={() => {
                if (count > 0) {
                  setIsEditMode(true);
                }
              }}
              style={{
                cursor: count === 0 ? 'default' : 'pointer',
              }}
            >
              {count === 0 ? '편집하기' : <S.FontHighlight>편집하기</S.FontHighlight>}
            </p>
          )}
        </Typography.Title>
      </S.ContentsHeader>
      {places.length !== 0 ? (
        <S.PlaceList>
          {places.map((item) => (
            <S.PlaceItem
              key={item.placeId}
              $isChecked={isEditMode && deletePlaces.includes(item.placeId)}
              onClick={() => {
                if (!isEditMode) {
                  navigate(`/place/${item.placeId}`);
                }
              }}
            >
              {isEditMode && (
                <div
                  onClick={() => {
                    if (deletePlaces.includes(item.placeId)) {
                      setDeletePlaces(deletePlaces.filter((id) => id !== item.placeId));
                    } else {
                      setDeletePlaces([...deletePlaces, item.placeId]);
                    }
                  }}
                >
                  {deletePlaces.includes(item.placeId) ? <SelectFilledIcon /> : <SelectIcon />}
                </div>
              )}
              {item.thumbnailURL ? (
                <S.ThumbnailWrapper src={item.thumbnailURL} alt={item.name} />
              ) : (
                <S.NoThumbnailWrapper>
                  <img src={NoThumbnailImg} alt="No Thumbnail" />
                </S.NoThumbnailWrapper>
              )}
              <S.PlaceInfomation>
                <Typography.Title size="md" color="inherit">
                  {item.name}
                </Typography.Title>
                <S.PlaceThemeNAddress>
                  <Typography.Label size="lg" color="#424242">
                    {item.category}
                  </Typography.Label>
                  <S.InfoSeperateLine />
                  <Typography.Label size="lg" color="#424242">
                    {item.addressShort}
                  </Typography.Label>
                </S.PlaceThemeNAddress>
                {item.memo && (
                  <Typography.Label size="lg" color="#A6A6A6">
                    {item.memo}
                  </Typography.Label>
                )}
              </S.PlaceInfomation>
            </S.PlaceItem>
          ))}
          <div ref={infiniteRef} />
          {!isEditMode && (
            <S.MapButton
              onClick={() => {
                navigate(`/scrapbook/placemap?count=${maximunCount}`);
              }}
            >
              <MapIcon />
              <Typography.Title size="lg" color="inherit">
                지도 보기
              </Typography.Title>
            </S.MapButton>
          )}
        </S.PlaceList>
      ) : (
        <S.NoScrapedPlace>
          <Typography.Headline size="sm" color="inherit">
            스크랩한 장소가 없어요
          </Typography.Headline>
          <Typography.Title size="md" color="inherit" noOfLine={2}>
            트립 버킷으로 흩어진 여행지를
            <br />
            저장해보세요.
          </Typography.Title>

          <S.TripBucketButton
            onClick={() => {
              navigate('/onboarding/tripbucket');
            }}
          >
            <Typography.Label size="lg" color="inherit">
              트립 버킷 사용해보기
            </Typography.Label>
          </S.TripBucketButton>
        </S.NoScrapedPlace>
      )}
    </>
  );
}

export default ScrapedTripPlace;
