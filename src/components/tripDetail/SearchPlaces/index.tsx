import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import * as S from './style';
import SearchIcon from '../../../assets/icons/search.svg?react';
import RecommendationListItem from '../RecommendationListItem';
import SelectedPlaceItem from '../SelectedPlaceItem';
import { selectedPlacesState } from '../../../recoil/mytrip/selectedPlacesState';
import { get } from '../../../utils/api';
import useDebounce from '../../../hooks/useDebounce';

interface Props {
  tripId: number;
  location: string[];
  keyword: string;
  popupOpen: () => void;
  setNewLocation: React.Dispatch<React.SetStateAction<string>>;
}

interface TPlace {
  id: number;
  image: null | string;
  location: string;
  name: string;
  theme: string;
}

function SearchPlaces({ tripId, keyword, location, popupOpen, setNewLocation }: Props) {
  const [selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);
  const [searchedPlaces, setSearchedPlaces] = useState<TPlace[]>([]);
  const keywords = useDebounce(keyword, 500);
  const navigate = useNavigate();

  function onDelete(id: number) {
    setSelectedPlaces((prev) => prev.filter((SelectedPlace) => SelectedPlace.id !== id));
  }

  useEffect(() => {
    get<TPlace[]>(
      `/place/list-search?location=${location.toLocaleString()}&query=${keywords}`,
    ).then((response) => {
      setSearchedPlaces(response.data);
    });
  }, [keywords]);

  return (
    <>
      {searchedPlaces.length !== 0 ? (
        <S.SearchPlacesList>
          {searchedPlaces.map(({ name, theme, id, location: placeLocation }) => (
            <RecommendationListItem
              name={name}
              theme={theme}
              location={placeLocation}
              id={id}
              keyword={keyword}
              setNewLocation={setNewLocation}
              popupOpen={popupOpen}
              locations={location}
            />
          ))}
          <S.AddPlace>
            <S.Explain>
              <span>찾으시는 장소가 없나요?</span>
              <span>직접 등록해보세요!</span>
            </S.Explain>
            <S.Button
              onClick={() => {
                navigate(`/mytrip/${tripId}/create`);
              }}
            >
              새로운 장소 추가하기
            </S.Button>
          </S.AddPlace>
        </S.SearchPlacesList>
      ) : (
        <S.SearchedNotFounded>
          <SearchIcon />
          <S.Title>검색 결과가 없습니다.</S.Title>
          <S.Desc>찾으시는 장소가 없나요?직접 등록해보세요!</S.Desc>
          <S.Button
            onClick={() => {
              navigate(`/mytrip/${tripId}/create`);
            }}
          >
            새로운 장소 추가하기
          </S.Button>
        </S.SearchedNotFounded>
      )}
    </>
  );
}

export default SearchPlaces;
