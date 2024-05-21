import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PageTemplate from "../../../components/common/PageTemplate";
import Heading from "../../../components/common/Heading";
import BackButton from "../../../components/common/BackButton";
import useSearchInput from "../../../hooks/useSearchInput";
import Typography from "../../../components/common/Typography";

import RecommendationListItem from "../../../components/tripDetail/RecommendationListItem";
import SelectedLocations from "../../../components/tripDetail/SelectedPlaces";
import RecommendationReviewItem from "../../../components/tripDetail/RecommendationReviewItem";
import SearchPlaces from "../../../components/tripDetail/SearchPlaces";

import * as S from "./style";
import {
  recommendPlaces,
  places,
  PlaceType,
} from "../../../assets/data/Places";


function MyTripLocationSearchPage() {
  const { newPlace } = useParams();
  const [tabNavIdx, setTabNavIdx] = useState<number>(1);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchedPlaces, setSearchedPlaces] = useState<PlaceType[]>([]);
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

  useEffect(() => {
    if (newPlace && inputRef.current) {
      inputRef.current.value = newPlace;
      setIsSearching(true);
      setSearchedPlaces(searchResult(newPlace));
    }

    //[SugarSyrup] @TODO: mytrip 에서 지역정보를 가져오게끔 수정 -> 지역 정보를 검색에도 전달하기
    //[SugarSyrup] @TODO: 내 여행지 추천 시 지역 정보 가져오기 
    //[SugarSyrup] @TODO: 내 여행지를 포함한 콘텐츠 가져오기
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
        <>
          <S.Contents>
            <Typography.Title size="lg">부산 HOT 여행지</Typography.Title>
            <S.RecommendationList>
              {recommendPlaces.map(({ name, theme, id }) => (
                <RecommendationListItem
                  name={name}
                  theme={theme}
                  id={id}
                />
              ))}
            </S.RecommendationList>
            <Heading size="sm">추가한 여행지를 포함한 콘텐츠 제공</Heading>
            <S.RecommendatoinReviewList>
              <RecommendationReviewItem
                name="제목"
                location="지역"
                hearts={1}
                comments={1}
                scraps={1}
              />
              <RecommendationReviewItem
                name="제목"
                location="지역"
                hearts={1}
                comments={1}
                scraps={1}
              />
              <RecommendationReviewItem
                name="제목"
                location="지역"
                hearts={1}
                comments={1}
                scraps={1}
              />
            </S.RecommendatoinReviewList>
          </S.Contents>
        </>
      )}
    </PageTemplate>
  );
}

export default MyTripLocationSearchPage;
