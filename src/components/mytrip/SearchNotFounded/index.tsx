import SearchIcon from '../../../assets/icons/search.svg?react';
import * as S from './style';

function SearchNotFounded() {
  return (
    <S.Container>
      <SearchIcon />
      <S.MainText>검색 결과가 없습니다.</S.MainText>
      <S.Desc>찾으시는 도시명이 정확한지 확인해보세요. </S.Desc>
    </S.Container>
  );
}

export default SearchNotFounded;
