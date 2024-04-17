import { useEffect, useRef } from "react";

import {data} from "../../assets/data/articleData";

import StationContainer from "../../components/article/StationContainer";
import BackButton from "../../components/common/BackButton";
import PageTemplate from "../../components/common/PageTemplate";
import BottomNav from "../../components/post/BottomNav";
import CheckPoints from "../../components/article/CheckPoints";

import * as S from "./style";

function ArticlePage() {
    const ContentRef = useRef<HTMLDivElement>(null);
    const ThumbnailWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ContentRef.current) {
            ContentRef.current.innerHTML = data.data + "<script>console.log('abc')</script>";
        }
    }, [])

    return(
        <PageTemplate nav={<BottomNav postId="123" isClap={data.isClapped} claps={data.claps} comment={data.comment} onCommentClick={() => {}} bookmark={data.bookmark} shares={1} />}>
            <S.BackButtonWrapper>
                <BackButton />
            </S.BackButtonWrapper>
            <S.ThumbnailWrapper ref={ThumbnailWrapperRef}>
                <img src={data.thumbnailURL} />
            </S.ThumbnailWrapper>
            <S.Header paddingTop={ThumbnailWrapperRef.current?.offsetHeight}>
                <S.Type>
                    Article
                </S.Type>
                <S.Title>
                    {data.title}
                </S.Title>
            </S.Header>
            <S.StationContainer>
                <S.StationTitle>Station 보기</S.StationTitle>
                <StationContainer data={data.stations}/>

                <S.NextArticle>
                    <span>2편 : ‘{data.nextArticle.name}’ 이어보기</span>
                </S.NextArticle>
            </S.StationContainer>
            <S.Content ref={ContentRef}>
            </S.Content>

            <CheckPoints data={data.checkPonints} />

            <S.NextArticleLink to={`/article/${data.nextArticle.id}`}>
                2편에서 체크포인트 확인하기 &gt;
            </S.NextArticleLink>
        </PageTemplate>
    )
}

export default ArticlePage;