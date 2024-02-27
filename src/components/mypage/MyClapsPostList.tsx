import * as S from "../../styles/mypage/MyClapsPostList.style";

import ClapIcon from "../../assets/icons/clap.svg?react";
import CommentIcon from "../../assets/icons/comment.svg?react";
import UserIcon from "../../assets/icons/user.svg?react";
import { myClapsType } from "../../assets/data/mypageData";

interface Props {
    data: myClapsType[]
}

function MyClapsPostList({data}: Props) {
    return(
        <S.List>
            {
                data.map(({title, username, claps, comments, thumbnailURL, avatarURL}) => 
                    <S.Item>
                        <S.ThumbnailWrapper>
                            {thumbnailURL && <img src={thumbnailURL} alt={title} />}
                        </S.ThumbnailWrapper>
                        <S.TextContainer>
                            <S.Name>{title}</S.Name>
                            <S.Info>
                                <S.Desc>
                                    {avatarURL ? 
                                        <img src={avatarURL} alt={username} /> 
                                        : <UserIcon />
                                    } 
                                    {username}
                                </S.Desc>
                                <S.Desc>
                                    <span><ClapIcon style={{fill:"#727272"}}/> {claps}</span> 
                                    <span><CommentIcon/> {comments}</span>
                                </S.Desc>
                            </S.Info>
                        </S.TextContainer>
                    </S.Item>
                )
            }
        </S.List>
    )
}

export default MyClapsPostList;