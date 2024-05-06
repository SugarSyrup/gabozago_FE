import { userCommentsType } from "../../../assets/data/userpageData";
import CommentIcon from "../../../assets/icons/comment_fill.svg?react";
import Typography from "../../common/Typography";

import * as S from "./style";

interface Props {
    data: userCommentsType[];
}

function UserCommentsList({data}: Props) {
    return(
        <S.List>
            {data.map(({comment, postName}) => 
                <>
                    <S.Item>
                        <CommentIcon />
                        <S.Text>
                            <Typography.Title size="md">{comment}</Typography.Title>
                            <Typography.Label size="md" color="#A6A6A6">{postName}</Typography.Label>
                        </S.Text>
                    </S.Item>
                </>
            )}
        </S.List>
    );
}

export default UserCommentsList;