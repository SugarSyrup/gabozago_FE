import Button from "../common/Button";

import * as S from "../../styles/ProfilePage/FollowBtn.style";

import PlusIcon from "../../assets/icons/plus.svg?react";
import CheckIcon from "../../assets/icons/check.svg?react";

interface Props {
    isFollowing: boolean
}

function FollowBtn({isFollowing} : Props) {
    // TODO 팔로우 버튼 선택시 팔로우 <-> 팔로잉 기능 동작
    return(
    <S.Container isFollowing>
        {
            isFollowing?
            <>
                <CheckIcon />
                <span>팔로잉</span>
            </>
            :
            <>
                <PlusIcon />
                <span>팔로우</span>
            </>
        }
    </S.Container>
    );
}

export default FollowBtn