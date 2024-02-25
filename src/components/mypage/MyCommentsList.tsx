import * as S from "../../styles/mypage/MyCommentsList.style";

import { myCommentsType } from "../../assets/data/mypageData";
import CommentIcon from "../../assets/icons/comment_fill.svg?react";

interface Props {
    data: myCommentsType[];
}

function MyCommentsList({data}: Props) {
    return(
        <S.List>
            {data.map(({comment, postName}) => 
                <S.Item>
                    <S.Comment>
                        <CommentIcon />
                        {comment}
                    </S.Comment>
                    <S.Title>{postName}</S.Title>
                </S.Item>
            )}
        </S.List>
    );
}

export default MyCommentsList;