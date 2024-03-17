import * as S from "./style";

import { userCommentsType } from "../../../assets/data/userpageData";
import CommentIcon from "../../../assets/icons/comment_fill.svg?react";

interface Props {
    data: userCommentsType[];
}

function UserCommentsList({data}: Props) {
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

export default UserCommentsList;