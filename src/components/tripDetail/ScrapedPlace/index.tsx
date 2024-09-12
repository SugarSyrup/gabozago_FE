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
import { TFilter } from '../../../assets/types/FilterTypes';

interface Props {
  popupOpen: () => void;
  setNewLocation: React.Dispatch<React.SetStateAction<string>>;
  setNewRegion: React.Dispatch<React.SetStateAction<string>>;
  locations: string[] | undefined;
}

interface Place {
  thumbnailURL: string;
  id: number;
  name: string;
  theme: string[];
  address: string;
  memo?: string;
}

function ScrapedPlace({ popupOpen, setNewLocation, setNewRegion, locations }: Props) {
  const [filter, setFilter] = useRecoilState<TFilter>(scrapPlaceFilterState);
  const activeFilter = useRecoilValue(activeScrapPlaceFilterListState);
  const [places, setPlaces] = useState<Place[]>([]);
  const [selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);
  const [next, setNext] = useState<string | null>(null);
  const infiniteRef = useRef<HTMLDivElement>(null);

  const getPlaces = async () => {
    const { data } = await get<{
      next: string | null;
      previous: string | null;
      results: Place[];
    }>('scrap/place', {
      params: {
        location: filter.location?.join(','),
      },
    });
    setPlaces(data.results);
    setNext(data.next);
  };

  useEffect(() => {
    getPlaces();
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
          setNext(response.data.next.replace('http', 'https'));
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
          filters={[{ name: 'location', options: null }]}
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
              <S.StyledLink to={`/place/${item.id}`}>
                <S.PlaceInfoBox>
                  <S.TopInfoBox>
                    <S.PlaceNameSpan>{item.name}</S.PlaceNameSpan>
                    <S.PlaceThemeSpan>{item.theme}</S.PlaceThemeSpan>
                  </S.TopInfoBox>
                  <S.AddressParagraph>{item.address}</S.AddressParagraph>
                </S.PlaceInfoBox>
              </S.StyledLink>
            </div>
            <S.Button
              isActive={
                selectedPlaces.find((selectedPlace) => selectedPlace.id === item.id) !== undefined
              }
              onClick={() => {
                if (
                  selectedPlaces.find((selectedPlace) => selectedPlace.id === item.id) !== undefined
                ) {
                  setSelectedPlaces((prev) =>
                    prev.filter((SelectedPlace) => SelectedPlace.id !== item.id),
                  );
                } else {
                  get<{ region: string }>(`/place/${item.id}`).then((response) => {
                    setSelectedPlaces((prev) => [
                      ...prev,
                      {
                        name: item.name,
                        thumbnail: '',
                        id: item.id,
                        location: response.data.region,
                      },
                    ]);

                    if (locations && !locations.includes(response.data.region)) {
                      setNewLocation(response.data.region);
                      setNewRegion(item.name);
                      popupOpen();
                    }
                  });
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
