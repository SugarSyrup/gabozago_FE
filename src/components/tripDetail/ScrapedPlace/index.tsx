import { useEffect, useRef, useState } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { selectedPlacesState } from '../../../recoil/mytrip/selectedPlacesState';
import BookMarkIcon from '../../../assets/icons/bookmark_filled.svg?react';
import { get } from '@_utils/api';
import {
  activeScrapPlaceFilterListState,
  scrapPlaceFilterState,
} from '../../../recoil/filters/scrapPlaceFilterState';
import FilterList from '../../common/FilterList';
import Typography from '../../common/Typography';
import * as S from './style';
import { SelectOptions, TFilter } from '../../../assets/types/FilterTypes';
import { articleOrderingOptions } from '@_recoil/filters/scrapArticleFilter';

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

function ScrapedPlace({ popupOpen, setNewLocation, setNewRegion, locations }: Props) {
  const [filter, setFilter] = useRecoilState<TFilter>(scrapPlaceFilterState);
  const activeFilter = useRecoilValue(activeScrapPlaceFilterListState);
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);
  const [next, setNext] = useState<string | null>(null);
  const infiniteRef = useRef<HTMLDivElement>(null);

  const getPlaces = async (ordering: string) => {
    const { data } = await get<{
      next: string | null;
      previous: string | null;
      results: Place[];
    }>('scrap/place', {
      params: {
        ordering,
        location: filter.location?.join(','),
        theme: filter.theme?.map((item) => `PLC${themeSwiftCode(item)}`).join(','),
      },
    });
    setPlaces(data.results);
    setNext(data.next?.replace('http://', 'https://'));
  };

  useEffect(() => {
    if (filter.sort === '담은순') {
      getPlaces('scraped');
    } else {
      getPlaces('distance');
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
      <S.FilterContainer>
        <FilterList
          filterType="scrapPlace"
          // filters={[{ name: 'location', options: null }]}
          filters={[
            {
              name: 'sort',
              options: {
                options: articleOrderingOptions,
              } as SelectOptions,
            },
            { name: 'location', options: null },
            {
              name: 'theme',
              options: {
                options: [
                  { label: '음식점', value: '음식점' },
                  { label: '카페', value: '카페' },
                  { label: '관광명소', value: '관광명소' },
                  { label: '레포츠', value: '레포츠' },
                  { label: '쇼핑', value: '쇼핑' },
                  { label: '문화시설', value: '문화시설' },
                  { label: '여가시설', value: '여가시설' },
                  { label: '편의시설', value: '편의시설' },
                  { label: '숙박시설', value: '숙박시설' },
                  { label: '주차장', value: '주차장' },
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
