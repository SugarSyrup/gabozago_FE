import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import SearchIcon from "../../../assets/icons/search.svg?react";
import RecommendationListItem from "../RecommendationListItem";
import SelectedPlaceItem from "../SelectedPlaceItem";
import { selectedPlacesState } from "../../../recoil/mytrip/selectedPlacesState";
import { useEffect, useState } from "react";
import { get } from "../../../utils/api";
import useDebounce from "../../../hooks/useDebounce";

interface Props {
  location: string[];
  keyword: string;
}

interface TPlace {
  id: number,
  image: null | string,
  location: string,
  name: string,
  theme: string,
}

function SearchPlaces({ keyword, location }: Props) {
  const [selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);
  const [searchedPlaces, setSearchedPlaces] = useState<TPlace[]>([]);
  const keywords = useDebounce(keyword, 500);
  const navigate = useNavigate();

  function onDelete(id: number) {
    setSelectedPlaces((prev) =>
      prev.filter((SelectedPlace) => SelectedPlace.id !== id)
    );
  }

  useEffect(() => {
    get<TPlace[]>(`/place/list-search?location=${location.toString()}&query=${keywords}`)
      .then((response) => {
        setSearchedPlaces(response.data);
      })
  }, [keywords])

  return (
    <>
      {searchedPlaces.length !== 0 ? (
        <S.SearchPlacesList>
          {searchedPlaces.map(({ name, theme, id }) => (
            <RecommendationListItem
              name={name}
              theme={theme}
              location={location}
              id={id}
              keyword={keyword}
            />
          ))}
          <S.AddPlace>
            <S.Explain>
              <span>찾으시는 장소가 없나요?</span>
              <span>직접 등록해보세요!</span>
            </S.Explain>
            <S.Button
              onClick={() => {
                navigate("/mytrip/123/create");
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
              navigate("/mytrip/123/create");
            }}
          >
            새로운 장소 추가하기
          </S.Button>
        </S.SearchedNotFounded>
      )}
      <S.SelectedPlacesList>
        {selectedPlaces.map(({ name, id }) => (
          <SelectedPlaceItem name={name} key={id} id={id} onDelete={onDelete} />
        ))}
      </S.SelectedPlacesList>
    </>
  );
}

export default SearchPlaces;
