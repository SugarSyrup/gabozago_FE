import { useEffect, useState } from "react";
import { get } from "../../../utils/api";
import ArticleItem from "../ArticleItem";

import * as S from "./style";

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

function Articles() {
    const [articleData, setArticleData] = useState<TArticle['results']>([]);

    useEffect(() => {
        get<TArticle>('/community/article?ordering=latest')
            .then((response) => {
                setArticleData(response.data.results);
            })
    }, [])

    return (
        <S.Container>
            <S.ArticleList>
                <ArticleItem 
                    id={1}
                    title="2년만에 15개 점포로 확장한, 제과점 대표의 ‘디저트’와 함께하는 여행방법"
                    desc="로컬 디저트, 성장한 브랜드, 여행지 선택 방법에 대한 이야기"
                />
                {
                    articleData.map((article) => <ArticleItem 
                        id={article.id}
                        title={article.title}
                        desc={article.subtitle}
                    />)
                }
                
            </S.ArticleList>
        </S.Container>
    )
}

export default Articles;