import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import { selectedPlacesState } from '../../../recoil/mytrip/selectedPlacesState';
import BookMarkIcon from '../../../assets/icons/bookmark_filled.svg?react';
import { get, post } from '@_utils/api';
import {
  activeScrapPlaceFilterListState,
  scrapPlaceFilterState,
} from '../../../recoil/filters/scrapPlaceFilterState';
import FilterList from '../../common/FilterList';
import Typography from '../../common/Typography';
import * as S from './style';
import { SelectOptions, TFilter } from '../../../assets/types/FilterTypes';
import { articleOrderingOptions } from '@_recoil/filters/scrapArticleFilter';
import isLocationTermsAgreed from '@_utils/isLocationTerms';
import { popupValue } from '@_recoil/common/PopupValue';
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';
import usePopup from '../../../hooks/usePopup';
import SpinnerWrapper from '@_common/SpinnerWrapper';
import themeSwiftCode from '@_utils/themeSwiftCode';

interface Props {
  popupOpen: () => void;
  setNewLocation: React.Dispatch<React.SetStateAction<string>>;
  setNewRegion: React.Dispatch<React.SetStateAction<string>>;
  locations: string[] | undefined;
}

interface Place {
  thumbnailURL: string;
  placeId: number;
  name: string;
  category: string[];
  addressShort: string;
  location: string;
  memo?: string;
}

function ScrapedPlace({ popupOpen, setNewLocation, setNewRegion, locations }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useRecoilState<TFilter>(scrapPlaceFilterState);
  const activeFilter = useRecoilValue(activeScrapPlaceFilterListState);
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);
  const [next, setNext] = useState<string | null>(null);
  const infiniteRef = useRef<HTMLDivElement>(null);
  const setPopupUI = useSetRecoilState(popupValue);
  const { popupClose } = usePopup();

  const getPlaces = async (ordering: string) => {
    const params = {
      ordering,
      location: filter.location?.join(','),
      theme: filter.theme?.map((item) => `PLC${themeSwiftCode(item)}`).join(','),
    };

    if (ordering === 'distance') {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition((position) => {
        get<{
          next: string | null;
          previous: string | null;
          results: Place[];
        }>('scrap/place', {
          params: {
            ...params,
            latitude: position.coords.latitude.toFixed(6),
            longitude: position.coords.longitude.toFixed(6),
          },
        }).then(({ data }) => {
          setPlaces(data.results);
          setNext(data.next?.replace('http://', 'https://'));
          setIsLoading(false);
        });
      });
    } else {
      get<{
        next: string | null;
        previous: string | null;
        results: Place[];
      }>('scrap/place', {
        params,
      }).then(({ data }) => {
        setPlaces(data.results);
        setNext(data.next?.replace('http://', 'https://'));
      });
    }
  };

  useEffect(() => {
    if (filter.sort === '담은순') {
      getPlaces('scraped');
    } else {
      isLocationTermsAgreed().then((isAgreed) => {
        if (isAgreed) {
          setFilter((prev) => ({ ...prev, sort: '담은순' }));
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
                          setFilter((prev) => ({ ...prev, sort: '거리순' }));
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
                          setFilter((prev) => ({ ...prev, sort: '담은순' }));
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
                      getPlaces('distance');
                      popupClose();
                    }}
                  >
                    <span style={{ color: '#A6A6A6' }}>나중에 할게요</span>
                  </div>
                  <div
                    onClick={() => {
                      getPlaces('distance');
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
        } else {
          getPlaces('distance');
        }
      });
    }
  }, [filter]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && next) {
        get<{
          next: string;
          previous: string;
          results: Place[];
        }>(next).then((response) => {
          setPlaces([...places, ...response.data.results]);
          setNext(response.data.next.replace('http://', 'https://'));
        });
      }
    }, options);

    if (infiniteRef.current) {
      observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <>
      {isLoading && <SpinnerWrapper />}
      <S.FilterContainer>
        <FilterList
          filterType="scrapPlace"
          // filters={[{ name: 'location', options: null }]}
          filters={[
            {
              name: 'sort',
              options: {
                defaultSelected: ['담은순'],
                multiple: false,
                options: [
                  { label: '담은순', value: '담은순' },
                  { label: '거리순', value: '거리순' },
                ],
              },
            },
            { name: 'location', options: null },
            {
              name: 'theme',
              options: {
                options: [
                  { label: '음식점', value: '음식점' },
                  { label: '카페', value: '카페' },
                  { label: '관광명소', value: '관광명소' },
                  { label: '대형마트', value: '대형마트' },
                  { label: '문화시설', value: '문화시설' },
                  { label: '편의시설', value: '편의시설' },
                  { label: '숙박시설', value: '숙박시설' },
                  { label: '주차장', value: '주차장' },
                  { label: '기타', value: '기타' },
                ],
              },
            },
          ]}
          filterState={filter}
          setFilterState={setFilter}
          activeFilterState={activeFilter}
        />
      </S.FilterContainer>
      <S.PlaceList>
        {places.map((item, index) => (
          <S.PlaceItem key={index}>
            <div>
              <S.BookMarkButton>
                <BookMarkIcon />
              </S.BookMarkButton>
              <S.StyledLink to={`/place/${item.placeId}`}>
                <S.PlaceInfoBox>
                  <S.TopInfoBox>
                    <S.PlaceNameSpan>{item.name}</S.PlaceNameSpan>
                    <S.PlaceThemeSpan>{item.category}</S.PlaceThemeSpan>
                  </S.TopInfoBox>
                  <S.AddressParagraph>{item.addressShort}</S.AddressParagraph>
                </S.PlaceInfoBox>
              </S.StyledLink>
            </div>
            <S.Button
              isActive={
                selectedPlaces.find((selectedPlace) => selectedPlace.id === item.placeId) !==
                undefined
              }
              onClick={() => {
                if (
                  selectedPlaces.find((selectedPlace) => selectedPlace.id === item.placeId) !==
                  undefined
                ) {
                  setSelectedPlaces((prev) =>
                    prev.filter((SelectedPlace) => SelectedPlace.id !== item.placeId),
                  );
                } else {
                  setSelectedPlaces((prev) => [
                    ...prev,
                    {
                      name: item.name,
                      thumbnail: '',
                      id: item.placeId,
                      location: item.location,
                    },
                  ]);
                  setNewLocation(item.location);

                  if (locations && !locations.includes(item.location)) {
                    popupOpen();
                  }
                }
              }}
            >
              <Typography.Label size="lg" color="inherit">
                선택
              </Typography.Label>
            </S.Button>
          </S.PlaceItem>
        ))}
      </S.PlaceList>
      <div ref={infiniteRef} />
    </>
  );
}

export default ScrapedPlace;
