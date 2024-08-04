import RightChevronIcon from '@_icons/chevron_right.svg?react';

import * as S from './style';

function TripBucketList() {
  return (
    <S.Container>
      <S.Item>
        <S.PlaceImg />
        <S.PlaceDesc>
          <S.Name>이재모피자</S.Name>
          <S.Address>부산중구</S.Address>
        </S.PlaceDesc>
        <RightChevronIcon />
      </S.Item>
      <S.SeperateLine />
      <S.Item>
        <S.PlaceImg />
        <S.PlaceDesc>
          <S.Name>이재모피자</S.Name>
          <S.Address>부산중구</S.Address>
        </S.PlaceDesc>
        <RightChevronIcon />
      </S.Item>
      <S.SeperateLine />
      <S.Item>
        <S.PlaceImg />
        <S.PlaceDesc>
          <S.Name>이재모피자</S.Name>
          <S.Address>부산중구</S.Address>
        </S.PlaceDesc>
        <RightChevronIcon />
      </S.Item>
    </S.Container>
  );
}

export default TripBucketList;
