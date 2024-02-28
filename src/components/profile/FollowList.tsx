import * as S from "../../styles/ProfilePage/FollowList.style";
import FollowItem from "./FollowItem";

interface Props {
    data: [];
}

function FollowList({data}:Props) {
    return(
        <S.Container>
            <S.Header>
                <S.FollowCounts>
                    {data.length} 
                    <span>명</span>
                </S.FollowCounts>
                {/* TODO: 정렬 */}
            </S.Header>
            <S.List>
                <FollowItem name="이유진" />
                <FollowItem name="이유진" />
                <FollowItem name="이유진" />
                <FollowItem name="이유진" />
            </S.List>
        </S.Container>
    );
}

export default FollowList