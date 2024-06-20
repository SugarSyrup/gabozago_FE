import { useState } from 'react';

import * as S from './style';
import { userReviewData } from '../../../assets/data/userpageData';

import UserReviewFilter from '../UserReviewFilter';
import UserReviewList from '../UserReviewList';

function UserReview() {
  const [filter, setFilter] = useState<'all' | 'post' | 'video' | 'shot' | 'photo'>('all');

  return (
    <S.Container>
      <UserReviewFilter filter={filter} setFilter={setFilter} />
      <UserReviewList
        data={userReviewData.filter((review) => (filter === 'all' ? true : review.type === filter))}
      />
    </S.Container>
  );
}

export default UserReview;
