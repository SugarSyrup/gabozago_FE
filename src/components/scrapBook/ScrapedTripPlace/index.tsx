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
import isLocationTermsAgreed from '@_utils/isLocationTerms';
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';
import eventPush from '@_utils/GA4EventPush';
import themeSwiftCode from '@_utils/themeSwiftCode';
import ThemeIcon from '@_common/ThemeIcon';

interface Props {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  isEditMode: boolean;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function ScrapedTripPlace({setIsLoading, isEditMode, setIsEditMode}: Props) {
  const navigate = useNavigate();

  const filter = useRecoilValue<TFilter>(scrapPlaceFilterState);
  const setFilter = useSetRecoilState(scrapPlaceFilterState);
  const resetFilter = useResetRecoilState(scrapPlaceFilterState);
  const setPopupUI = useSetRecoilState(popupValue);

  const [places, setPlaces] = useState<TPlace[]>([]);
  const [count, setCount] = useState<number>(0);
  const [maximunCount, setMaximumCount] = useState<number>(0);
  const [deletePlaces, setDeletePlaces] = useState<number[]>([]);
  const [next, setNext] = useState<string | null>(null);

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
      isLocationTermsAgreed().then((isAgreed) => {
        if(isAgreed) {
          setIsLoading(true);
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
              setIsLoading(false);
            });
          });          
        } else {
          setPopupUI({
            Custom: (
              <S.PopupContainer>
                <Typography.Headline size="sm" color="black" noOfLine={3}>
                  <p style={{ textAlign: 'center' }}>
                    위치 정보 이용 약관에 <br />
                    동의해 주세요!
                  </p>
                </Typography.Headline>
                <Typography.Body size="lg" color="#727272" noOfLine={4}>
                  <p style={{ textAlign: 'center' }}>
                    위치 기반 서비스를 이용하시려면,
                    <br />
                    먼저 약관 동의가 필요해요
                  </p>
                </Typography.Body>
                <S.CheckBoxContainer>
                  <input
                    type="checkbox"
                    onClick={() => {
                      post('/settings/terms', {
                        term: 'TERMS01',
                      })
                        .then(() => {
                          toast.custom(() => (
                            <Toast>
                              <Typography.Body size="lg" color="white">
                                위치정보 이용약관에 동의하셨습니다. (24. {new Date().getMonth()}.{' '}
                                {new Date().getDate()})
                              </Typography.Body>
                            </Toast>
                          ));
                        })
                        .catch(() => {
                          toast.custom(() => (
                            <Toast>
                              <Typography.Body size="lg" color="white">
                                위치정보 이용약관에 거부하였습니다. (24. {new Date().getMonth()}.{' '}
                                {new Date().getDate()})
                              </Typography.Body>
                            </Toast>
                          ));
                        });
                    }}
                  />
                  <label>
                    <Typography.Body size="md" color="#424242">
                      약관에 확인하였으며, 동의합니다
                    </Typography.Body>
                  </label>
                  <div
                    style={{
                      position: 'absolute',
                      right: '0px',
                    }}
                    onClick={() => {
                      window.location.href =
                        'http://teamfore.notion.site/f5afac74fa1f4abb8a4ca09c5e8d47bf?pvs=25';
                    }}
                  >
                    <Typography.Body size="md" color="#5276FA">
                      <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                        약관 보기
                      </span>
                    </Typography.Body>
                  </div>
                </S.CheckBoxContainer>
                <S.ButtonContainer>
                  <div
                    onClick={() => {
                      popupClose();
                    }}
                  >
                    <span style={{ color: '#A6A6A6' }}>나중에 할게요</span>
                  </div>
                  <div
                    onClick={() => {
                      popupClose();
                    }}
                  >
                    <span style={{ color: '#5276FA' }}>확인</span>
                  </div>
                </S.ButtonContainer>
              </S.PopupContainer>
            ),
          });
          popupOpen();
        }
      });
      
    }
  };

  useEffect(() => {
    getPlaces();
    isLocationTermsAgreed().then((isAgreed) => {
      if(!isAgreed && filter.sort === '거리순') {
        setFilter({
          ...filter,
          sort: '담은순',
        })
      }
    });
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
                <S.EditModeSelectButton
                  onClick={() => {
                    if (deletePlaces.includes(item.placeId)) {
                      setDeletePlaces(deletePlaces.filter((id) => id !== item.placeId));
                    } else {
                      setDeletePlaces([...deletePlaces, item.placeId]);
                    }
                  }}
                >
                  {deletePlaces.includes(item.placeId) ? <SelectFilledIcon /> : <SelectIcon />}
                </S.EditModeSelectButton>
              )}
              {/* {item.thumbnailURL ? (
                <S.ThumbnailWrapper src={item.thumbnailURL} alt={item.name} />
              ) : (
                <S.NoThumbnailWrapper>
                  <img src={NoThumbnailImg} alt="No Thumbnail" />
                </S.NoThumbnailWrapper>
              )} */}
              {!isEditMode && <ThemeIcon id={item.theme.slice(3)} width={20} height={20} color="#5276FA"/>}
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
                eventPush('스크랩.트립버킷.지도보기');
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
              eventPush('스크랩.트립버킷사용해보기');
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
