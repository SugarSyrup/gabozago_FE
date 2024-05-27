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
                {
                    articleData.map((article) => <ArticleItem 
                        id={article.id}
                        title={article.title}
                        desc={article.subtitle}
                        thumbnailURL={article.thumbnailURL}
                        isBookmarked={article.isBookmarked}
                    />)
                }
            </S.ArticleList>
        </S.Container>
    )
}

export default Articles;