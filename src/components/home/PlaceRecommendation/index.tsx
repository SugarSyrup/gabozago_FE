import Typography from '@_common/Typography';
import BGIMG from '../../../assets/imgs/PlaceRecommendBG.png';
import RightChevronIcon from '@_icons/chevron_right.svg?react';

import * as S from './style';
import { useEffect, useRef, useState } from 'react';
import { get } from '@_utils/api';
import LocationPlaceholderIcon from '../../mytrip/LocationPlaceholderIcon';
import { useNavigate } from 'react-router-dom';

interface TRecommendationPlace {
  id: number;
  name: string;
  location: string;
  thumbnailURL: string;
}

function PlaceRecommendation() {
  const navigate = useNavigate();
  const [nationWideRanking, setNationWideRanking] = useState<TRecommendationPlace[]>([]);
  const [howNowRanking, setHowNowRanking] = useState<TRecommendationPlace[]>([]);
  const [weekendHereRanking, setWeekendHereRanking] = useState<TRecommendationPlace[]>([]);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    get('/place/home/ranking').then((response) => {
      setNationWideRanking(response.data[0].nationWide);
      setHowNowRanking(response.data[1].hotNow);
      setWeekendHereRanking(response.data[2].weekendHere);
    });
  }, []);

  return (
    <S.Container>
      <img src={BGIMG} alt="PlaceRecommendationBGImg" />
      <S.Slider>
        <S.SliderItem>
          <Typography.Title size="lg" color="inherit" noOfLine={2}>
            전국 랭킹
            <br />
            TOP 5 🔥
          </Typography.Title>
          <S.RecommendList>
            {nationWideRanking.map((place) => (
              <S.RecommendItem key={place.id} ref={itemRef}>
                {place.thumbnailURL ? (
                  <S.PlaceImg src={place.thumbnailURL} />
                ) : (
                  <LocationPlaceholderIcon type={((place.id % 5) + 1) as 1 | 2 | 3 | 4 | 5} />
                )}

                <S.RecommendItemDesc>
                  <Typography.Label
                    size="md"
                    color="inherit"
                    maxWidth={(itemRef.current?.offsetWidth as number) - 90}
                  >
                    {place.name}
                  </Typography.Label>
                  <Typography.Label size="sm" color="inherit">
                    {place.location}
                  </Typography.Label>
                </S.RecommendItemDesc>
                <S.RecommendIconWrapper
                  onClick={() => {
                    navigate(`/place/${place.id}`);
                  }}
                >
                  <RightChevronIcon />
                </S.RecommendIconWrapper>
              </S.RecommendItem>
            ))}
          </S.RecommendList>
        </S.SliderItem>
        <S.SliderItem>
          <Typography.Title size="lg" color="inherit" noOfLine={2}>
            지금 많이 담고 있어요!
            <br />
            오늘 TOP 5
          </Typography.Title>
          <S.RecommendList>
            {howNowRanking.map((place) => (
              <S.RecommendItem key={place.id}>
                {place.thumbnailURL ? (
                  <S.PlaceImg src={place.thumbnailURL} />
                ) : (
                  <LocationPlaceholderIcon type={((place.id % 5) + 1) as 1 | 2 | 3 | 4 | 5} />
                )}

                <S.RecommendItemDesc>
                  <Typography.Label size="md" color="inherit">
                    {place.name}
                  </Typography.Label>
                  <Typography.Label size="sm" color="inherit">
                    {place.location}
                  </Typography.Label>
                </S.RecommendItemDesc>
                <S.RecommendIconWrapper
                  onClick={() => {
                    navigate(`/place/${place.id}`);
                  }}
                >
                  <RightChevronIcon />
                </S.RecommendIconWrapper>
              </S.RecommendItem>
            ))}
          </S.RecommendList>
        </S.SliderItem>

        <S.SliderItem>
          <Typography.Title size="lg" color="inherit" noOfLine={2}>
            이번 주말엔 여기?
            <br />
            맛집 TOP 5
          </Typography.Title>
          <S.RecommendList>
            {weekendHereRanking.map((place) => (
              <S.RecommendItem key={place.id}>
                {place.thumbnailURL ? (
                  <S.PlaceImg src={place.thumbnailURL} />
                ) : (
                  <LocationPlaceholderIcon type={((place.id % 5) + 1) as 1 | 2 | 3 | 4 | 5} />
                )}

                <S.RecommendItemDesc>
                  <Typography.Label size="md" color="inherit">
                    {place.name}
                  </Typography.Label>
                  <Typography.Label size="sm" color="inherit">
                    {place.location}
                  </Typography.Label>
                </S.RecommendItemDesc>
                <S.RecommendIconWrapper
                  onClick={() => {
                    navigate(`/place/${place.id}`);
                  }}
                >
                  <RightChevronIcon />
                </S.RecommendIconWrapper>
              </S.RecommendItem>
            ))}
          </S.RecommendList>
        </S.SliderItem>
      </S.Slider>
    </S.Container>
  );
}

export default PlaceRecommendation;
