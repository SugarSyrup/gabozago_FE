import * as S from "../../styles/mypage/MyReviewList.style";

import ClapIcon from "../../assets/icons/clap.svg?react";
import CommentIcon from "../../assets/icons/comment.svg?react";
import { myReviewType } from "../../assets/data/mypageData";

interface Props {
    data: myReviewType[],
}

function MyReviewList({data}: Props) {
    return(
        <S.List>
            {
                data.map(({title, type, claps, comments, thumbnail}) => 
                    <S.Item>
                        <S.TextContainer>
                            <S.Name>{title}</S.Name>
                            <S.Desc>
                                <span><ClapIcon /> {claps}</span> 
                                <span><CommentIcon style={{fill:"#727272"}}/> {comments}</span>
                            </S.Desc>
                        </S.TextContainer>
                        <S.ThumbnailWrapper>
                            
                            {thumbnail && <img src={thumbnail} alt={title} />}
                        </S.ThumbnailWrapper>
                    </S.Item>
                )
            }
        </S.List>
    );
}

export default MyReviewList;