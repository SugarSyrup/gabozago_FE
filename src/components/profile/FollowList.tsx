import { FollowerType } from "../../assets/data/followers";
import * as S from "../../styles/ProfilePage/FollowList.style";

import FollowItem from "./FollowItem";

interface Props {
    data: FollowerType[];
}

function FollowList({data}:Props) {
    return(
        <S.Container>
            <S.Header>
                <S.FollowCounts>
                    {data.length} 
                    <span>명</span>
                </S.FollowCounts>
                {/* TODO: [디자인] filter 종류 정리되는 데로 추가 */}
            </S.Header>
            <S.List>
                {
                    data.map((follower) => <FollowItem name={follower.name} key={follower.id} id={follower.id}/>)
                }
            </S.List>
        </S.Container>
    );
}

export default FollowList