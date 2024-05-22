import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageTemplate from "../../../components/common/PageTemplate";
import BackButton from "../../../components/common/BackButton";
import Typography from "../../../components/common/Typography";
import useSearchInput from "../../../hooks/useSearchInput";

import SelectedLocations from "../../../components/tripDetail/SelectedPlaces";
import SearchPlaces from "../../../components/tripDetail/SearchPlaces";
import LocationHotPlaces from "../../../components/tripDetail/LocationHotPlaces";
import { get } from "../../../utils/api";

import * as S from "./style";

//삭제 예정
import {
  places,
  PlaceType,
} from "../../../assets/data/Places";
import LocationRecommendContents from "../../../components/tripDetail/LocationRecommendContents";


function MyTripLocationSearchPage() {
  const { id, newPlace } = useParams();
  const [tabNavIdx, setTabNavIdx] = useState<number>(1);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchedPlaces, setSearchedPlaces] = useState<PlaceType[]>([]);
  const [locations, setLocations] = useState<string[]>();
  const [inputRef, SearchInput] = useSearchInput({
    placeholder: "장소명을 입력하세요",
    onChange: onChange,
    backgroundColor: "white",
    borderColor: "#ADADAD",
  });

  function onChange() {
    if (inputRef.current) {
      if (inputRef.current.value === "") {
        setIsSearching(false);
      } else {
        setIsSearching(true); 
        setSearchedPlaces(searchResult(inputRef.current.value));
      }
    }
  }

  function searchResult(keyword: string) {
    return places.filter((place) => place.name.includes(keyword));
  }

  useLayoutEffect(() => {
    get<{
      location: string[];
    }>(`/my-travel/${id}`)
      .then((response) => {
        console.log(response.data.location);
        setLocations(response.data.location);
      })
  }, [])

  useEffect(() => {
    if (newPlace && inputRef.current) {
      inputRef.current.value = newPlace;
      setIsSearching(true);
      setSearchedPlaces(searchResult(newPlace));
    }
  }, []);

  return (
    <PageTemplate
      nav={
        <S.Footer>
          <SelectedLocations />
        </S.Footer>
      }
    >
      <S.Header>
        <S.SearchBar>
          <BackButton></BackButton>
          <SearchInput />
        </S.SearchBar>
        {!isSearching && (
          <S.TabNavigation>
            <S.NavigationItem
              isHighlight={tabNavIdx === 1}
              onClick={() => {
                setTabNavIdx(1);
              }}
            >
              <Typography.Title size="md" color="inherit">장소 선택</Typography.Title>
            </S.NavigationItem>
            <>
              <S.NavigationItem
                isHighlight={tabNavIdx === 2}
                onClick={() => {
                  setTabNavIdx(2);
                }}
              >
                <Typography.Title size="md" color="inherit">저장한 장소</Typography.Title>
              </S.NavigationItem>
              <S.HighlightLine isHighlight={tabNavIdx === 1} />
            </>
          </S.TabNavigation>
        )}
      </S.Header>
      {isSearching ? (
        <>
          <SearchPlaces
            searchedPlaces={searchedPlaces}
            keyword={inputRef.current?.value}
          />
        </>
      ) : (
        // Default, 장소 선택 탭
        <>
          <S.Contents>
            {
              locations &&
              <>
                <LocationHotPlaces locations={locations} />
                <LocationRecommendContents locations={locations} />
              </>
            }
          </S.Contents>
        </>
      )}
    </PageTemplate>
  );
}

export default MyTripLocationSearchPage;
