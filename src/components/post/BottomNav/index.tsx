import ClapIcon from "../../../assets/icons/clap.svg?react";
import CommentIcon from "../../../assets/icons/comment.svg?react";
import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";
import ShareIcon from "../../../assets/icons/share.svg?react";

import * as S from "./style";

interface Props {
    postId: string;
    isClap: boolean;
    claps:number;
    comment:number;
    bookmark:number;
    shares: number;
}

function BottomNav({postId, isClap, claps, comment, bookmark, shares}: Props) {
    // TODO: 각 BottomNav 클릭시 action 추가

    return(
        <S.Navigation>
            <S.NavigationItem>
                {/* TODO: isClap 유무 확인하기 */}
                <ClapIcon />
                <span>{claps}</span>
            </S.NavigationItem>
            <S.NavigationItem>
                <CommentIcon />
                <span>{comment}</span>
            </S.NavigationItem>
            <S.NavigationItem>
                <BookMarkIcon />
                <span>{bookmark}</span>
            </S.NavigationItem>
            <S.NavigationItem>
                <ShareIcon />
                <span>{shares}</span>
            </S.NavigationItem>
        </S.Navigation>
    )
}

export default BottomNav;