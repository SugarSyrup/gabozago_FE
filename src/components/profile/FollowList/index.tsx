import { FollowerType } from '../../../assets/data/followers';
import * as S from './style';

import FollowItem from '../FollowItem';

interface Props {
  data: FollowerType[];
  isMyProfile: boolean;
}

function FollowList({ data, isMyProfile }: Props) {
  return (
    <S.Container>
      <S.Header>
        <S.FollowCounts>
          {data.length}
          <span>명</span>
        </S.FollowCounts>
        {/* TODO: [디자인] filter 종류 정리되는 데로 추가 */}
      </S.Header>
      <S.List>
        {data.map((follower) => (
          <FollowItem
            name={follower.name}
            key={follower.id}
            id={follower.id}
            isMyProfile={isMyProfile}
          />
        ))}
      </S.List>
    </S.Container>
  );
}

export default FollowList;
