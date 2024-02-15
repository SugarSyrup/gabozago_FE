import * as S from "../../styles/tripDetail/RecommendationListItem.style";

import Button from "../common/Button";

import ClapIcon from "../../assets/icons/clap.svg?react";
import StarIcon from "../../assets/icons/star.svg?react";

interface Props {
    name: string;
    theme: string;
    hearts: number;
    rating: number;
    thumbnail?: string;
}

function RecommendationListItem({
    thumbnail,
    name,
    theme,
    hearts,
    rating,
}: Props) {
    return (
        <S.Container>
            <S.LeftItems>
                <S.Thumbnail>
                    <img src={thumbnail} />
                </S.Thumbnail>
                <S.Infomation>
                    <S.Name>{name}</S.Name>
                    <S.Desc>
                        <span>{theme}</span>
                        <span>•</span>
                        <ClapIcon />
                        <span>{hearts}</span>
                        <StarIcon />
                        <span>{rating}</span>
                    </S.Desc>
                </S.Infomation>
            </S.LeftItems>
            <Button size="sm" type="normal">
                선택
            </Button>
        </S.Container>
    );
}

export default RecommendationListItem;
