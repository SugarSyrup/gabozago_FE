import * as S from "../../styles/ProfilePage/FollowItem.style";

import UserIcon from "../../assets/icons/user.svg?react";

interface Props {
    avatarURL?: string;
    name: string;
}

function FollowItem({avatarURL, name}: Props) {
    return(
        <S.Container>
            <S.UserInfo>
                {avatarURL ? 
                    <S.Avatar src={avatarURL} alt={name} />
                    :
                    <UserIcon />
                }
                <S.Name>{name}</S.Name>
            </S.UserInfo>
            <S.DeleteBtn>삭제</S.DeleteBtn>
        </S.Container>
    );
}

export default FollowItem;