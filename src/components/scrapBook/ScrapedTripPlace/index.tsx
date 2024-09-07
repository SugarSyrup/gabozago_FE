import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';

import SelectIcon from '@_icons/select.svg?react';
import SelectFilledIcon from '@_icons/select_filled.svg?react';
import MapIcon from '@_icons/map.svg?react';
import { get, post } from '@_utils/api';
import NoThumbnailImg from '@_imgs/NoThumbnail.png';
import { popupValue } from '@_recoil/common/PopupValue';
import { TPlace } from '@_types/Place.type';

import Typography from '../../common/Typography';
import { scrapPlaceFilterState } from '../../../recoil/filters/scrapPlaceFilterState';
import { TFilter } from '../../../assets/types/FilterTypes';
import usePopup from '../../../hooks/usePopup';

import * as S from './style';

function ScrapedTripPlace() {
  const navigate = useNavigate();

  const filter = useRecoilValue<TFilter>(scrapPlaceFilterState);
  const resetFilter = useResetRecoilState(scrapPlaceFilterState);

  const [places, setPlaces] = useState<TPlace[]>([]);
  const [deletes, setDeletes] = useState<number[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [next, setNext] = useState<string | null>(null);
  const { popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);

  const infiniteRef = useRef<HTMLDivElement>(null);
  // @TODO: Place 공통 코드 정리
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
          theme: filter.theme?.join(','),
        },
      }).then(({ data }) => {
        setPlaces(data.results);
        setNext(data.next);
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
            theme: filter.theme?.join(','),
          },
        }).then(({ data }) => {
          setPlaces(data.results);
          setNext(data.next);
        });
      });
    }
  };

  useEffect(() => {
    getPlaces();
  }, [filter]);

  useEffect(() => {
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
            results: TPlace[];
          }>(next).then((res) => {
            setPlaces([...places, ...res.data.results]);
            setNext(res.data.next);
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
              전체 <S.FontHighlight>{places.length}</S.FontHighlight>
            </>
          )}
        </Typography.Title>
        <Typography.Title size="sm" color="#A6A6A6">
          {isEditMode ? (
            <p
              onClick={() => {
                if (deletes.length > 0) {
                  setPopupUI({
                    Header: 'N개의 장소를 삭제하시겠어요?',
                    Warning: '삭제한 장소는 복구할 수 없어요.',
                    CloseButton: {
                      text: '취소',
                    },
                    ConfirmButton: {
                      onClick: () => {
                        // @TODO: 삭제 요청 API
                      },
                      text: '확인',
                    },
                  });
                }
              }}
            >
              {places.length === 0 ? (
                '삭제하기'
              ) : (
                <S.FontHighlight isRead>삭제하기</S.FontHighlight>
              )}
            </p>
          ) : (
            <p
              onClick={() => {
                if (places.length > 0) {
                  setIsEditMode(true);
                }
              }}
              style={{
                cursor: places.length === 0 ? 'default' : 'pointer',
              }}
            >
              {places.length === 0 ? '편집하기' : <S.FontHighlight>편집하기</S.FontHighlight>}
            </p>
          )}
        </Typography.Title>
      </S.ContentsHeader>
      {places.length !== 0 ? (
        <S.PlaceList>
          {places.map((item) => (
            <S.PlaceItem
              key={item.placeId}
              $isChecked={isEditMode && deletes.includes(item.placeId)}
            >
              {isEditMode && (
                <div
                  onClick={() => {
                    if (deletes.includes(item.placeId)) {
                      setDeletes(deletes.filter((id) => id !== item.placeId));
                    } else {
                      setDeletes([...deletes, item.placeId]);
                    }
                  }}
                >
                  {deletes.includes(item.placeId) ? <SelectFilledIcon /> : <SelectIcon />}
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
                navigate('/scrapbook/placemap');
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

          {/* @TODO: 버킷 안내 페이지 이동 */}
          <S.TripBucketButton>
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
