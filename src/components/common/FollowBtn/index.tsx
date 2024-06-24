import { useState } from 'react';
import * as S from './style';

import PlusIcon from '../../../assets/icons/plus.svg?react';
import CheckIcon from '../../../assets/icons/check.svg?react';

interface Props {
  isFollowing: boolean;
  // @TODO : userId 를 Props로 받아온 후 처리 or onClick을 받아온후 처리
}

function FollowBtn({ isFollowing }: Props) {
  const [isFollow, setIsFollow] = useState(isFollowing);
  // TODO 팔로우 버튼 선택시 팔로우 <-> 팔로잉 기능 동작
  return (
    <S.Container
      isFollowing={isFollow}
      onClick={() => {
        setIsFollow((prev) => !prev);
      }}
    >
      {isFollow ? (
        <>
          <CheckIcon />
          <span>팔로잉</span>
        </>
      ) : (
        <>
          <PlusIcon />
          <span>팔로우</span>
        </>
      )}
    </S.Container>
  );
}

export default FollowBtn;
