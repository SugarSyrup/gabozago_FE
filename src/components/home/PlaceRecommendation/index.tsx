import Typography from '@_common/Typography';
import BGIMG from '../../../assets/imgs/PlaceRecommendBG.png';
import RightChevronIcon from '@_icons/chevron_right.svg?react';

import * as S from './style';

function PlaceRecommendation() {
  return (
    <S.Container>
      <img src={BGIMG} alt="PlaceRecommendationBGImg" />
      <S.Slider>
        <S.SliderItem>
          <Typography.Title size="lg" color="inherit" noOfLine={2}>
            전국 랭킹
            <br />
            TOP 5
          </Typography.Title>
          <S.RecommendList>
            <S.RecommendItem>
              <S.PlaceImg src="asdf.png" />
              <S.RecommendItemDesc>
                <Typography.Label size="md" color="inherit">
                  열라짬뽕 부산점
                </Typography.Label>
                <Typography.Label size="sm" color="inherit">
                  부산
                </Typography.Label>
              </S.RecommendItemDesc>
              <RightChevronIcon />
            </S.RecommendItem>
            <S.RecommendItem>
              <S.PlaceImg src="asdf.png" />
              <S.RecommendItemDesc>
                <Typography.Label size="md" color="inherit">
                  열라짬뽕 부산점
                </Typography.Label>
                <Typography.Label size="sm" color="inherit">
                  부산
                </Typography.Label>
              </S.RecommendItemDesc>
              <RightChevronIcon />
            </S.RecommendItem>
            <S.RecommendItem>
              <S.PlaceImg src="asdf.png" />
              <S.RecommendItemDesc>
                <Typography.Label size="md" color="inherit">
                  열라짬뽕 부산점
                </Typography.Label>
                <Typography.Label size="sm" color="inherit">
                  부산
                </Typography.Label>
              </S.RecommendItemDesc>
              <RightChevronIcon />
            </S.RecommendItem>
            <S.RecommendItem>
              <S.PlaceImg src="asdf.png" />
              <S.RecommendItemDesc>
                <Typography.Label size="md" color="inherit">
                  열라짬뽕 부산점
                </Typography.Label>
                <Typography.Label size="sm" color="inherit">
                  부산
                </Typography.Label>
              </S.RecommendItemDesc>
              <RightChevronIcon />
            </S.RecommendItem>
          </S.RecommendList>
        </S.SliderItem>
        <S.SliderItem />
        <S.SliderItem />
      </S.Slider>
    </S.Container>
  );
}

export default PlaceRecommendation;
