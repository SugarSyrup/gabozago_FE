import * as S from "./style";

import ClapIcon from "../../../assets/icons/clap_gray_secondary.svg?react";
import CommentIcon from "../../../assets/icons/comment.svg?react";
import UserIcon from "../../../assets/icons/user.svg?react";
import ImgIcon from "../../../assets/icons/image.svg?react";
import { userClapsType } from "../../../assets/data/userpageData";
import Typography from "../../common/Typography";

interface Props {
    data: userClapsType[]
}

function UserClapsPostList({data}: Props) {
    return(
        <S.List>
            {
                data.map(({title, username, claps, comments, thumbnailURL, avatarURL}) => 
                    <S.Item>
                        <S.ThumbnailWrapper>
                            {thumbnailURL ? 
                                <img src={thumbnailURL} alt={title} /> 
                                : 
                                <ImgIcon />
                            }
                        </S.ThumbnailWrapper>
                        <S.TextContainer>
                            <Typography.Title size="md" noOfLine={3}>{title}</Typography.Title>
                            <S.User>
                                {avatarURL ? 
                                    <img src={avatarURL} alt={username} /> 
                                    : <UserIcon />
                                }
                                <Typography.Label size="md" color="inherit">{username}</Typography.Label>
                            </S.User>
                            <S.Info>
                                <span><ClapIcon /><Typography.Label size="md">{claps}개</Typography.Label></span>
                                <span><CommentIcon /><Typography.Label size="md">{comments}개</Typography.Label></span>
                            </S.Info>
                        </S.TextContainer>
                    </S.Item>
                )
            }
        </S.List>
    )
}

export default UserClapsPostList;