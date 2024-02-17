import { useState } from "react";
import PageTemplate from "../components/common/PageTemplate";
import BackButton from "../components/mytrip/BackButton";
import useSearchInput from "../hooks/useSearchInput";

import * as S from "../styles/pages/MyLocationSearchPage.style";
import Heading from "../components/common/Heading";
import RecommendationListItem from "../components/tripDetail/RecommendationListItem";
import RecommendationReviewItem from "../components/tripDetail/RecommendationReviewItem";
import SelectedLocations from "../components/tripDetail/SelectedLocations";
import { recommendLocations } from "../assets/data/recommendLocations";

function MyTripLocationSearchPage() {
    const [tabNavIdx, setTabNavIdx] = useState<number>(1);
    const [inputRef, SearchInput] = useSearchInput({
        placeholder: "장소명을 입력하세요",
    });

    return (
        <PageTemplate nav={false} header={false}>
            <S.Header>
                <S.SearchBar>
                    <BackButton></BackButton>
                    <SearchInput />
                </S.SearchBar>
                <S.TabNavigation>
                    <S.NavigationItem
                        isHighlight={tabNavIdx === 1}
                        onClick={() => {
                            setTabNavIdx(1);
                        }}
                    >
                        장소 선택
                    </S.NavigationItem>
                    <S.NavigationItem
                        isHighlight={tabNavIdx === 2}
                        onClick={() => {
                            setTabNavIdx(2);
                        }}
                    >
                        저장한 장소
                    </S.NavigationItem>
                    <S.HighlightLine isHighlight={tabNavIdx === 1} />
                </S.TabNavigation>
            </S.Header>
            <S.Contents>
                <Heading size="sm">실시간 부산 HOT 여행지</Heading>
                <S.RecommendationList>
                    {
                        recommendLocations.map(({name, theme, hearts, rating, id}) => <RecommendationListItem name={name} hearts={hearts} theme={theme} rating={rating} id={id}/>)
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
            <S.Footer>
                <SelectedLocations />
            </S.Footer>
        </PageTemplate>
    );
}

export default MyTripLocationSearchPage;
