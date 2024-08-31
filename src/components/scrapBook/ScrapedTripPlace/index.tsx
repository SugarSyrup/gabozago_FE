import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import * as S from './style';
import SelectIcon from '@_icons/select.svg?react';
import SelectFilledIcon from '@_icons/select_filled.svg?react';
import { get, post } from '@_utils/api';
import Typography from '../../common/Typography';
import { scrapPlaceFilterState } from '../../../recoil/filters/scrapPlaceFilterState';
import { TFilter } from '../../../assets/types/FilterTypes';
import NoThumbnailImg from '@_imgs/NoThumbnail.png';
import MapIcon from '@_icons/map.svg?react';
import { popupValue } from '@_recoil/common/PopupValue';
import usePopup from '../../../hooks/usePopup';

interface Place {
  thumbnailURL: string;
  id: number;
  name: string;
  theme: string[];
  address: string;
  memo?: string;
}

function ScrapedTripPlace() {
  const navigate = useNavigate();

  const filter = useRecoilValue<TFilter>(scrapPlaceFilterState);
  const resetFilter = useResetRecoilState(scrapPlaceFilterState);

  const [places, setPlaces] = useState<Place[]>([
    {
      thumbnailURL: '',
      id: 0,
      name: '',
      theme: [],
      address: '',
      memo: '',
    },
    {
      thumbnailURL: '',
      id: 1,
      name: '',
      theme: [],
      address: '',
      memo: '',
    },
    {
      thumbnailURL: '',
      id: 2,
      name: '',
      theme: [],
      address: '',
      memo: '',
    },
  ]);
  const [deletes, setDeletes] = useState<number[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [next, setNext] = useState<string | null>(null);
  const { popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);

  const infiniteRef = useRef<HTMLDivElement>(null);

  const getPlaces = async () => {
    const { data } = await get<{
      next: string | null;
      previous: string | null;
      results: Place[];
    }>('folder/scrap/place', {
      params: {
        sort: filter.sort,
        location: filter.location?.join(','),
        theme: filter.theme?.join(','),
      },
    });
    setPlaces((prev) => [...prev, ...data.results]);
    setNext(data.next);
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
            results: Place[];
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
          {/* TODO: data.length */}
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
        {/* @TODO: 편집 모드 UI 및 버튼 기능 구성 */}
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
              {places.length === 0 ? '삭제하기' : <S.FontHighlight isRed>삭제하기</S.FontHighlight>}
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
            <S.PlaceItem key={item.id} $isChecked={isEditMode && deletes.includes(item.id)}>
              {isEditMode && (
                <div
                  onClick={() => {
                    if (deletes.includes(item.id)) {
                      setDeletes(deletes.filter((id) => id !== item.id));
                    } else {
                      setDeletes([...deletes, item.id]);
                    }
                  }}
                >
                  {deletes.includes(item.id) ? <SelectFilledIcon /> : <SelectIcon />}
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
                    {item.theme}
                  </Typography.Label>
                  <S.InfoSeperateLine />
                  <Typography.Label size="lg" color="#424242">
                    {item.address}
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
