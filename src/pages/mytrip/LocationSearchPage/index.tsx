import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageTemplate from "../../../components/common/PageTemplate";
import BackButton from "../../../components/common/BackButton";
import Typography from "../../../components/common/Typography";
import useSearchInput from "../../../hooks/useSearchInput";

import SelectedLocations from "../../../components/tripDetail/SelectedPlaces";
import SearchPlaces from "../../../components/tripDetail/SearchPlaces";
import LocationHotPlaces from "../../../components/tripDetail/LocationHotPlaces";
import LocationRecommendContents from "../../../components/tripDetail/LocationRecommendContents";
import { get } from "../../../utils/api";

import * as S from "./style";



function MyTripLocationSearchPage() {
  const { id, newPlace } = useParams();
  const [tabNavIdx, setTabNavIdx] = useState<number>(1);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [locations, setLocations] = useState<string[]>();
  const [keyword, setKeyword] = useState<string>("");
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
        setKeyword(inputRef.current.value);
      }
    }
  }


  useEffect(() => {
    get<{
      location: string[];
    }>(`/my-travel/${id}`)
      .then((response) => {
        setLocations(response.data.location);
      })
  }, [])

  useEffect(() => {
    if (newPlace && inputRef.current) {
      inputRef.current.value = newPlace;
      setIsSearching(true);
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
            location={locations === undefined ? [] : locations}
            keyword={keyword}
          />
        </>
      ) : (
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
