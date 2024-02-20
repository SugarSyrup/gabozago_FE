import * as S from "../../styles/tripDetail/RecommendationReviewItem.style";
import ClapIcon from "../../assets/icons/clap.svg?react";
import BookMarkIcon from "../../assets/icons/bookmarkBlack.svg?react";
import CommentIcon from "../../assets/icons/comment.svg?react";
import ShareIcon from "../../assets/icons/share.svg?react";
import RightChevronIcon from "../../assets/icons/rightChevron.svg?react";

interface Props {
    name: string;
    location: string;
    hearts: number;
    comments: number;
    scraps: number;
    shares: number;
    thumbnail?: string;
}

function RecommendationReviewItem({
    name,
    location,
    hearts,
    comments,
    scraps,
    shares,
    thumbnail,
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
                        <span>{location}</span>
                        <span>•</span>
                        <ClapIcon />
                        <span>{hearts}</span>
                        <CommentIcon />
                        <span>{comments}</span>
                        <BookMarkIcon />
                        <span>{scraps}</span>
                        <ShareIcon />
                        <span>{shares}</span>
                    </S.Desc>
                </S.Infomation>
            </S.LeftItems>
            <RightChevronIcon />
        </S.Container>
    );
}

export default RecommendationReviewItem;
