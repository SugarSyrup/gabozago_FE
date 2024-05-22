import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import LeftChevronIcon from "../../../assets/icons/chevron_left.svg?react";
import { activeJournalFilterListState, journalFilterState } from "../../../recoil/journals/journalState";

import PageTemplate from "../../../components/common/PageTemplate";
import Typography from "../../../components/common/Typography";
import useSearchInput from "../../../hooks/useSearchInput";

import SelectedLocations from "../../../components/tripDetail/SelectedPlaces";
import SearchPlaces from "../../../components/tripDetail/SearchPlaces";
import LocationHotPlaces from "../../../components/tripDetail/LocationHotPlaces";
import LocationRecommendContents from "../../../components/tripDetail/LocationRecommendContents";
import ScrapedPlace from "../../../components/tripDetail/ScrapedPlace";
import { get } from "../../../utils/api";

import * as S from "./style";



function MyTripLocationSearchPage() {
  const { id, day } = useParams();
  const navigate = useNavigate();
  const [tabNavIdx, setTabNavIdx] = useState<number>(1);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [locations, setLocations] = useState<string[]>();
  const [keyword, setKeyword] = useState<string>("");
  const setActiveFilters = useSetRecoilState(journalFilterState);
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
        setActiveFilters(prev => ({ ...prev, ["location"]: response.data.location }))
      })
  }, [])

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
          <LeftChevronIcon 
            onClick={() => {
              if(isSearching && inputRef.current) {
                inputRef.current.value = "";
                setIsSearching(false);
              } else {
                navigate(-1);
              }
            }}
          />
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
      {isSearching &&
        <>
          <SearchPlaces
            location={locations === undefined ? [] : locations}
            keyword={keyword}
          />
        </>
      }
      <S.Contents>
      {
        !isSearching && tabNavIdx === 1 &&
          <>
              {
                locations &&
                <>
                  <LocationHotPlaces locations={locations} />
                  <LocationRecommendContents locations={locations} />
                </>
              }
          </>
      }
      {
        !isSearching && tabNavIdx === 2 &&
          <ScrapedPlace />
      }
      </S.Contents>
    </PageTemplate>
  );
}

export default MyTripLocationSearchPage;
