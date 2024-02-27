import { Dispatch } from "react";
import * as S from "../../styles/mypage/MyReviewFilter.style";

interface Props {
    filter: "post" | "comment";
    setFilter: Dispatch<React.SetStateAction<"post" | "comment">>;
    shareCount: number;
    commentCount: number;
}

function MyActivityFilter({filter, setFilter, shareCount, commentCount} : Props) {
    return(
        <S.FilterList>
            <S.FilterItem isHighlight={filter === "post"} onClick={() => {setFilter("post")}} >공감한 글 {shareCount}</S.FilterItem>
            <S.FilterItem isHighlight={filter === "comment"} onClick={() => {setFilter("comment")}} >댓글단 글 {commentCount}</S.FilterItem>
        </S.FilterList>
    );
}

export default MyActivityFilter;