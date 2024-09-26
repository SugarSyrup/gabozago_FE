import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import * as S from './style';
import SearchIcon from '../../../assets/icons/search.svg?react';
import RecommendationListItem from '../RecommendationListItem';
import SelectedPlaceItem from '../SelectedPlaceItem';
import { selectedPlacesState } from '../../../recoil/mytrip/selectedPlacesState';
import { get } from '@_utils/api';
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
  name: string;
  category: string;
  addressShort: string;
  location: string;
  thumbnailURL: null | string;
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
          {searchedPlaces.map(
            ({ name, category, id, location: placeLocation, addressShort, thumbnailURL }) => (
              <RecommendationListItem
                name={name}
                theme={category}
                location={placeLocation}
                id={id}
                keyword={keyword}
                setNewLocation={setNewLocation}
                popupOpen={popupOpen}
                thumbnail={thumbnailURL}
                locations={location}
                address={addressShort}
                key={id}
              />
            ),
          )}
          {/* <S.AddPlace>
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
          </S.AddPlace> */}
        </S.SearchPlacesList>
      ) : (
        <S.SearchedNotFounded>
          <SearchIcon />
          <S.Title>검색 결과가 없습니다.</S.Title>
          <S.Desc>찾으시는 장소가 없나요?</S.Desc>
          {/* <S.Desc>찾으시는 장소가 없나요?직접 등록해보세요!</S.Desc> */}
          {/* <S.Button
            onClick={() => {
              navigate(`/mytrip/${tripId}/create`);
            }}
          >
            새로운 장소 추가하기
          </S.Button> */}
        </S.SearchedNotFounded>
      )}
    </>
  );
}

export default SearchPlaces;
