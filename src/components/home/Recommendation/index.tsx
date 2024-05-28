import { useEffect, useState } from "react";

import Headline from "../../common/Typography/Headline";
import Label from "../../common/Typography/Label";
import Title from "../../common/Typography/Title";

import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";

import * as S from "./style";
import ShortFormList from "../journals/shortform/ShortFormList";
import { get } from "../../../utils/api";
import useScrapModal from "../../video/useScrapModal";
import { useNavigate } from "react-router-dom";

interface TArticle {
    "next": null | string,
    "previous": null | string,
    "results": {
        "id": number,
        "title": string,
        "thumbnailURL": string,
        "subtitle": string,
        "isBookmarked": boolean
    }[]
}

interface TShortForms {
    "next": string | null,
    "previous": string | null,
    "results": {
        "id": number,
        "title": string,
        "videoId": string,
        "region": string[],
        "theme": string[],
        "views": number
    }[]
}

function Recommendation() {
    const navigate = useNavigate();
    const [articleData, setArticleData] = useState<TArticle['results']>([]);
    const [shortformData, setShortformData] = useState<TShortForms['results']>([]);
    const [currentArticleId, setCurrentArticleId] = useState<number>(0);
    const {ScrapModal, scrapModalOpen, scrapModalClose} = useScrapModal({
        id: currentArticleId,
        type: "article",
    });

    useEffect(() => {
        get<TArticle>('/community/article?ordering=weekly_popular&size=10')
            .then((response) => {
                setArticleData(response.data.results);
            })
        get<TShortForms>('/community/short-form?ordering=alltime_popular')
            .then((response) => {
                setShortformData(response.data.results);
            })
    }, [])

    return(
        <>
            <ScrapModal />
            <S.ContentsContainer>
                <Headline size="sm">금주 인기 아티클 Top 5 🔥</Headline>
                <S.Slider>
                    {
                        articleData?.slice(0,5).map((article) => <S.TopSliderItem>
                                <S.SliderImg src={article.thumbnailURL} onClick={() => {navigate(`/article/${article.id}`)}} />
                                <div onClick={() => {navigate(`/article/${article.id}`)}}>
                                    <Label size="lg" noOfLine={2} >{article.title}</Label>
                                </div>
                                <S.BookMarkWrapper  onClick={() => {
                                    setCurrentArticleId(article.id);
                                    scrapModalOpen();
                                }}>
                                    <BookMarkIcon/>
                                </S.BookMarkWrapper>
                            </S.TopSliderItem>
                        )
                    }
                </S.Slider>
            </S.ContentsContainer>
            <S.ContentsContainer>
                <Title size="lg">인기 Top 6-10 아티클</Title>
                <S.Slider>
                    {
                        articleData?.slice(5,articleData.length).map((article) => <S.SliderItem>
                                <S.SliderImg src={article.thumbnailURL} onClick={() => {navigate(`/article/${article.id}`)}} />
                                <div onClick={() => {navigate(`/article/${article.id}`)}}>
                                    <Label size="lg" noOfLine={2} >{article.title}</Label>
                                </div>
                                <S.BookMarkWrapper  onClick={() => {
                                    setCurrentArticleId(article.id);
                                    scrapModalOpen();
                                }}>
                                    <BookMarkIcon/>
                                </S.BookMarkWrapper>
                            </S.SliderItem>
                        )
                    }
                </S.Slider>
            </S.ContentsContainer>
            <S.ContentSpace />
            <S.ContentsContainer>
                <Headline size="sm">인기 숏폼 콘텐츠</Headline>
                <S.ShortFormListContainer>
                    <ShortFormList data={shortformData}/>
                </S.ShortFormListContainer>
            </S.ContentsContainer>
        </>
    )
}

export default Recommendation;