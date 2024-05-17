import { post } from "../../../utils/api";

import ClapIcon from "../../../assets/icons/clap.svg?react";
import ClapMainIcon from "../../../assets/icons/clap_blue.svg?react";
import CommentIcon from "../../../assets/icons/comment.svg?react";
import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";
import ShareIcon from "../../../assets/icons/share.svg?react";

import * as S from "./style";

interface Props {
    postId: string;
    isClap: boolean;
    claps:number;
    comment:number;
    onCommentClick: () => void;
    bookmark:number;
    onShareClick: () => void;
}

function BottomNav({postId, isClap, claps, comment, onCommentClick, bookmark, onShareClick}: Props) {
    return(
        <S.Navigation>
            <S.NavigationItem onClick={() => {
                post<{
                    message: "CREATE SUCCESS" | "DELETE SUCCESS"
                }>(`/clap/community`, {
                    community: 'article',
                    postId: postId
                }).then((response) => {
                    if(response.data.message == "CREATE SUCCESS" || response.data.message == "DELETE SUCCESS") {
                        window.location.reload();
                    }
                });
            }}>
                {
                    isClap ? 
                    <ClapMainIcon />
                    :
                    <ClapIcon />
                } 
                <span>{claps}</span>
            </S.NavigationItem>
            <S.NavigationItem onClick={onCommentClick}>
                <CommentIcon />
                <span>{comment}</span>
            </S.NavigationItem>
            <S.NavigationItem onClick={() => {
                //[SugarSyrup] @TODO: 북마크 기능 가져오기 from 숏폼
            }}>
                <BookMarkIcon />
                <span>{bookmark}</span>
            </S.NavigationItem>
            <S.NavigationItem onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                onShareClick();
            }}>
                <ShareIcon />
            </S.NavigationItem>
        </S.Navigation>
    )
}

export default BottomNav;