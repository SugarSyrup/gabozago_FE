import { useEffect, useState } from "react";
import { recommendPlaces, places, PlaceType } from "../../../assets/data/Places";
import * as S from "./style";

import PageTemplate from "../../../components/common/PageTemplate";
import Heading from "../../../components/common/Heading";
import useSearchInput from "../../../hooks/useSearchInput";

import BackButton from "../../../components/mytrip/BackButton";
import RecommendationListItem from "../../../components/tripDetail/RecommendationListItem";
import SelectedLocations from "../../../components/tripDetail/SelectedLocations";
import RecommendationReviewItem from "../../../components/tripDetail/RecommendationReviewItem";
import SearchPlaces from "../../../components/tripDetail/SearchPlaces";
import { useParams } from "react-router-dom";


function MyTripLocationSearchPage() {
    const {newPlace} = useParams();
    const [tabNavIdx, setTabNavIdx] = useState<number>(1);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchedPlaces, setSearchedPlaces] = useState<PlaceType[]>([]);
    const [inputRef, SearchInput] = useSearchInput({
        placeholder: "장소명을 입력하세요",
        onChange: onChange,
        backgroundColor:"white",
        borderColor:"#ADADAD"
    });

    function onChange() {
        if(inputRef.current) {
            if(inputRef.current.value === "") {
                setIsSearching(false);
            } else {
                setIsSearching(true);
                setSearchedPlaces(searchResult(inputRef.current.value));
            }
        }
    }

    function searchResult(keyword: string) {
        return places.filter((place) =>
            place.name.includes(keyword)
        )
    }


    useEffect(() => {
        if(newPlace && inputRef.current) {
            inputRef.current.value = newPlace;
            setIsSearching(true);
            setSearchedPlaces(searchResult(newPlace));
        }
    }, []);
    return (
        <PageTemplate nav={
            <S.Footer>
                <SelectedLocations />
            </S.Footer>
        }>
            <S.Header>
                <S.SearchBar>
                    <BackButton></BackButton>
                    <SearchInput />
                </S.SearchBar>
                {!isSearching &&
                    <S.TabNavigation>
                        <S.NavigationItem
                            isHighlight={tabNavIdx === 1}
                            onClick={() => {
                                setTabNavIdx(1);
                            }}
                        >
                            장소 선택
                        </S.NavigationItem>
                            <>
                                <S.NavigationItem
                                    isHighlight={tabNavIdx === 2}
                                    onClick={() => {
                                        setTabNavIdx(2);
                                    }}
                                >
                                    저장한 장소
                                </S.NavigationItem>
                                <S.HighlightLine isHighlight={tabNavIdx === 1} />
                            </>
                    </S.TabNavigation>
                }
            </S.Header>
            {isSearching ?
            <>
                <SearchPlaces
                    searchedPlaces={searchedPlaces}
                    keyword={inputRef.current?.value}
                />
            </>
            :
            <>
                <S.Contents>
                    <Heading size="sm">실시간 부산 HOT 여행지</Heading>
                    <S.RecommendationList>
                        {
                            recommendPlaces.map(({name, theme, hearts, rating, id}) => <RecommendationListItem name={name} hearts={hearts} theme={theme} rating={rating} id={id}/>)
                        }
                    </S.RecommendationList>
                    <Heading size="sm">
                        추가한 여행지를 포함한 리뷰가 있어요!
                    </Heading>
                    <S.RecommendatoinReviewList>
                        <RecommendationReviewItem
                            name="제목"
                            location="지역"
                            hearts={1}
                            comments={1}
                            scraps={1}
                            shares={1}
                        />
                        <RecommendationReviewItem
                            name="제목"
                            location="지역"
                            hearts={1}
                            comments={1}
                            scraps={1}
                            shares={1}
                        />
                        <RecommendationReviewItem
                            name="제목"
                            location="지역"
                            hearts={1}
                            comments={1}
                            scraps={1}
                            shares={1}
                        />
                    </S.RecommendatoinReviewList>
                </S.Contents>
            </>
            }
        </PageTemplate>
    );
}

export default MyTripLocationSearchPage;
