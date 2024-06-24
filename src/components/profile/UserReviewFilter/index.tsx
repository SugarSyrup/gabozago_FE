import { Dispatch } from 'react';
import * as S from './style';

interface Props {
  filter: 'all' | 'post' | 'video' | 'shot' | 'photo';
  setFilter: Dispatch<React.SetStateAction<'all' | 'post' | 'video' | 'shot' | 'photo'>>;
}

function UserReviewFilter({ filter, setFilter }: Props) {
  return (
    <S.FilterList>
      <S.FilterItem
        isHighlight={filter === 'all'}
        onClick={() => {
          setFilter('all');
        }}
      >
        전체
      </S.FilterItem>
      <S.FilterItem
        isHighlight={filter === 'post'}
        onClick={() => {
          setFilter('post');
        }}
      >
        게시글
      </S.FilterItem>
      <S.FilterItem
        isHighlight={filter === 'video'}
        onClick={() => {
          setFilter('video');
        }}
      >
        영상
      </S.FilterItem>
      <S.FilterItem
        isHighlight={filter === 'shot'}
        onClick={() => {
          setFilter('shot');
        }}
      >
        숏폼
      </S.FilterItem>
      <S.FilterItem
        isHighlight={filter === 'photo'}
        onClick={() => {
          setFilter('photo');
        }}
      >
        사진
      </S.FilterItem>
    </S.FilterList>
  );
}

export default UserReviewFilter;
