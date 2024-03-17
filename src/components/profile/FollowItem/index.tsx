import * as S from "./style";
import UserIcon from "../../../assets/icons/user.svg?react";
import { useNavigate } from "react-router-dom";

interface Props {
    avatarURL?: string;
    name: string;
    id: number;
    isMyProfile: boolean;
}

function FollowItem({avatarURL, name, id, isMyProfile}: Props) {
    const navigate = useNavigate();

    return(
        <S.Container>
            <S.UserInfo onClick={() => {navigate(`/profile/${id}`)}}> 
                {avatarURL ? 
                    <S.Avatar src={avatarURL} alt={name} />
                    :
                    <UserIcon />
                }
                <S.Name>{name}</S.Name>
            </S.UserInfo>
            {isMyProfile && 
                <S.DeleteBtn onClick={() => {
                    // TODO: [백엔드] DELETE Request
                }}>삭제</S.DeleteBtn>
            }
        </S.Container>
    );
}

export default FollowItem;