import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";
import Typography from "../../common/Typography";

import * as S from "./style";

function Articles() {
    return (
        <S.Container>
            <S.ArticleList>
                <S.ArticleItem isMainArticle={true}>
                    <S.ThumbnailWrapper>
                        <S.Thumbnail />
                        <BookMarkIcon />
                        <div>
                            <Typography.Title size="sm" color="white">4월 두 번째, Weekly Article</Typography.Title>
                            <Typography.Headline size="lg" color="white">제과점 대표 이야기</Typography.Headline>
                        </div>
                    </S.ThumbnailWrapper>
                    <div>
                        <Typography.Headline size="sm" noOfLine={2}>2년만에 15개 점포로 확장한, 제과점 대표의 ‘디저트’와 함께하는 여행방법</Typography.Headline>
                        <Typography.Title size="md">로컬 디저트, 성장한 브랜드, 여행지 선택 방법에 대한 이야기</Typography.Title>
                    </div>
                    <Typography.Title size="sm" color="#5276FA">by. 가보자고</Typography.Title>
                </S.ArticleItem>
                <S.ArticleItem isMainArticle={false}>
                    <S.ThumbnailWrapper>
                        <S.Thumbnail />
                        <BookMarkIcon />
                        <div>
                            <Typography.Title size="sm" color="white">4월 두 번째, Weekly Article</Typography.Title>
                            <Typography.Headline size="lg" color="white">제과점 대표 이야기</Typography.Headline>
                        </div>
                    </S.ThumbnailWrapper>
                    <div>
                        <Typography.Headline size="sm" noOfLine={2}>2년만에 15개 점포로 확장한, 제과점 대표의 ‘디저트’와 함께하는 여행방법</Typography.Headline>
                        <Typography.Title size="md">로컬 디저트, 성장한 브랜드, 여행지 선택 방법에 대한 이야기</Typography.Title>
                    </div>
                    <Typography.Title size="sm" color="#5276FA">by. 가보자고</Typography.Title>
                </S.ArticleItem>
            </S.ArticleList>
        </S.Container>
    )
}

export default Articles;