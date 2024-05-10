import { useRef } from "react";
import { Link } from "react-router-dom";

import {data} from "../../assets/data/articleData";

import StationContainer from "../../components/article/StationContainer";
import BackButton from "../../components/common/BackButton";
import PageTemplate from "../../components/common/PageTemplate";
import BottomNav from "../../components/post/BottomNav";
import CheckPoints from "../../components/article/CheckPoints";

import ContentStation from "../../components/article/ContentStation";
import Editor from "../../components/article/Editor";
import PlacePhoto from "../../components/article/PlacePhoto";
import PlaceInfo from "../../components/article/PlaceInfo";
import InterviewProfile from "../../components/article/InterviewProfile";
import Interview from "../../components/article/Interview";

import * as S from "./style";

function ArticlePage() {
    const ThumbnailWrapperRef = useRef<HTMLDivElement>(null);

    return(
        <PageTemplate nav={<BottomNav postId="123" isClap={data.isClapped} claps={data.claps} comment={data.comment} onCommentClick={() => {}} bookmark={data.bookmark} shares={1} />}>
            <S.BackButtonWrapper>
                <BackButton />
            </S.BackButtonWrapper>
            <S.ThumbnailWrapper ref={ThumbnailWrapperRef}>
                <img src="123.png" />
            </S.ThumbnailWrapper>
            <S.Header paddingTop={ThumbnailWrapperRef.current?.offsetHeight}>
                <S.Type>
                    Article by. 가보자고
                </S.Type>
                <S.Title>
                    {data.title}
                </S.Title>
            </S.Header>
            <S.StationContainer>
                <S.StationTitle>Station 보기</S.StationTitle>
                <StationContainer data={data.stations}/>

                <S.NextArticle>
                    <span>2편 : <Link to={`/article/${data.nextArticle.id}`}>‘{data.nextArticle.name}’</Link> 이어보기</span>
                </S.NextArticle>
            </S.StationContainer>
            <S.Content>
                {
                    data.contents.map((content) => {
                        switch (content.type){
                            case "station":
                                return <ContentStation index={content.index} name={content.name} />
                            case "editor" :
                                return <Editor content={content.content !== undefined ? content.content : "error"} />
                            case "interview":
                                return <Interview content={content.content !== undefined ? content.content : "error"} />
                            case "profile":
                                return <InterviewProfile photoURL={content.photoURL} name={content.name} division={content.division} desc={content.desc} />
                            case "photo":
                                return <PlacePhoto photoURLs={content.photoURLs} desc={content.desc} />
                            case "place":
                                return <PlaceInfo placeId={1} imgURL={content.imageURL}/>
                        }
                    })
                }
            </S.Content>

            <CheckPoints data={data.checkPonints} />
            <S.NextArticle>
                <span>2편 : <Link to={`/article/${data.nextArticle.id}`}>‘{data.nextArticle.name}’</Link> 이어보기</span>
            </S.NextArticle>

            <S.Empty />
        </PageTemplate>
    )
}

export default ArticlePage;