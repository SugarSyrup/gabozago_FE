import { useState } from "react";
import PageTemplate from "../components/common/PageTemplate";
import BackButton from "../components/mytrip/BackButton";
import useSearchInput from "../hooks/useSearchInput";

import * as S from "../styles/pages/MyLocationSearchPage.style";
import Heading from "../components/common/Heading";
import RecommendationListItem from "../components/tripDetail/RecommendationListItem";
import RecommendationReviewItem from "../components/tripDetail/RecommendationReviewItem";
import { Button } from "../styles/common/Button.style";

function MyTripLocationSearchPage() {
    const [tabNavIdx, setTabNavIdx] = useState<number>(1);
    const [inputRef, SearchInput] = useSearchInput({
        placeholder: "장소명을 입력하세요",
    });

    return (
        <PageTemplate nav={false} header={false}>
            <S.Header>
                <BackButton></BackButton>
                <SearchInput />
            </S.Header>
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
            <S.Contents>
                <Heading size="sm">실시간 부산 HOT 여행지</Heading>
                <S.RecommendationList>
                    <RecommendationListItem
                        name="장소명"
                        theme="테마"
                        hearts={1}
                        rating={1}
                    />
                    <RecommendationListItem
                        name="장소명"
                        theme="테마"
                        hearts={1}
                        rating={1}
                    />
                    <RecommendationListItem
                        name="장소명"
                        theme="테마"
                        hearts={1}
                        rating={1}
                    />
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
                <Button size="lg" type="normal" disabled={true}>
                    장소를 선택해주세요
                </Button>
            </S.Footer>
        </PageTemplate>
    );
}

export default MyTripLocationSearchPage;
