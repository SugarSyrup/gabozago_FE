import { useNavigate } from 'react-router-dom';
import { isAndroid, isIOS } from 'react-device-detect';

import LogoIcon from '@_icons/logo_text.svg?react';
import BellIcon from '@_icons/bell_pin_fill.svg?react';
import LogoForeIcon from '@_icons/logo_fore.svg?react';
import InstagramIcon from '@_icons/instagram.svg?react';
import ChevronRightIcon from '@_icons/chevron_right.svg?react';
import TripGIF from '../../assets/imgs/banner_trip.gif';
import BucketIMG from '../../assets/imgs/bucketIMG.png';

import Typography from '@_common/Typography';
import OutlineButton from '@_common/Button/OutlineButton';

import PageTemplate from '../../components/common/PageTemplate';
import PopularArticles from '../../components/home/PopularArticles';
import HotArticles from '../../components/home/HotArticles';
import PlaceRecommendation from '../../components/home/PlaceRecommendation';
import TripBucketList from '../../components/home/TripBucketList';

import * as S from './style';
import { useEffect, useRef, useState } from 'react';
import isLogin from '@_utils/isLogin';
import { get } from '@_utils/api';
import { TUserProfile } from '@_types/TUserProfile';

function HomePage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [bannerCount, setBannerCount] = useState<number>(1);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLogin()) {
      get<TUserProfile>('/user/profile').then((response) => {
        setUsername(response.data.nickname);
      });
    }
  }, []);

  useEffect(() => {
    setInterval(() => {
      setBannerCount((prev) => {
        bannerRef.current?.scrollTo({
          left: prev === 1 ? 5000 : 0,
          behavior: 'smooth',
        });
        return prev === 2 ? 1 : prev + 1;
      });
    }, 4000);
  }, []);

  return (
    <PageTemplate>
      {/* Header */}
      <S.Header>
        <LogoIcon />
        <S.BellWrapper isAlert>
          <BellIcon />
        </S.BellWrapper>
      </S.Header>

      {/* Banner */}
      <S.Banner ref={bannerRef}>
        <S.TripBanner>
          <Typography.Title size="lg" color="inherit" noOfLine={2}>
            가보자고와 함께하는
            <br />
            새로운 여행
          </Typography.Title>
          <Typography.Body size="md" color="#5276FA">
            바로 일정 만들러 가기
          </Typography.Body>
          <img src={TripGIF} alt="tripBannerGIF" />
        </S.TripBanner>
        <S.BucketBanner>
          <Typography.Title size="lg" color="inherit" noOfLine={2}>
            흩어져 있던 맛집, 카페, 관광지
            <br />
            모두 모아봐요!
          </Typography.Title>
          <Typography.Body size="md" color="#5276FA">
            트립 버킷 사용해보기
          </Typography.Body>
          <img src={BucketIMG} alt="bucketBannerGIF" />
        </S.BucketBanner>
      </S.Banner>
      <S.BannerCount>
        <Typography.Body size="sm" color="inherit">
          {bannerCount} / 2
        </Typography.Body>
      </S.BannerCount>

      {/* Recently Trip Bucket */}
      <S.TripBucketContainer>
        <S.TripBucketTitle>
          <Typography.Headline size="sm" color="inherit" noOfLine={-1}>
            최근 담은 트립 버킷
          </Typography.Headline>
          <S.TripBucketAll>
            <span>전체 보기</span>
            <ChevronRightIcon />
          </S.TripBucketAll>
        </S.TripBucketTitle>
        <TripBucketList />
      </S.TripBucketContainer>

      {/* Place Recommend */}
      <S.PlaceRecommendContainer>
        <S.ArticleIntroduceTitle>
          <Typography.Headline size="sm" color="inherit" noOfLine={2}>
            <S.FontHighlight>{username} 님</S.FontHighlight>
            <br />
            이런 장소는 어떠세요?
          </Typography.Headline>
        </S.ArticleIntroduceTitle>
        <PlaceRecommendation />
      </S.PlaceRecommendContainer>

      {/* Articles */}
      <S.ArticleContainer>
        <S.ArticleIntroduceTitle>
          <Typography.Headline size="sm" color="inherit" noOfLine={2}>
            오직 가보자고에서만!
            <br />
            놓칠 수 없는 <S.FontHighlight>여행 정보 아티클</S.FontHighlight>
          </Typography.Headline>
        </S.ArticleIntroduceTitle>

        <S.ArticleTitle>
          <Typography.Headline size="sm" color="inherit" noOfLine={-1}>
            금주 인기 아티클 Top 5
          </Typography.Headline>
        </S.ArticleTitle>

        <PopularArticles />

        <S.ArticleTitle>
          <Typography.Headline size="sm" color="inherit" noOfLine={-1}>
            인기 급상승 아티클 🔥
          </Typography.Headline>
        </S.ArticleTitle>

        <HotArticles />

        <OutlineButton
          onClick={() => {
            navigate('/aritcles');
          }}
        >
          <S.ButtonContent>
            <Typography.Title size="sm" color="inherit">
              아티클 더보기
            </Typography.Title>
            <ChevronRightIcon />
          </S.ButtonContent>
        </OutlineButton>
      </S.ArticleContainer>

      {/* Footer */}
      <S.Footer>
        <S.FooterTitle>
          <Typography.Title size="sm" color="inherit">
            포레 (FOR:e) 사업자 정보
          </Typography.Title>
          <LogoForeIcon />
        </S.FooterTitle>
        <S.FooterListItem>
          <Typography.Label size="lg" color="inherit">
            상호명
          </Typography.Label>
          <Typography.Label size="lg" color="inherit">
            포레 (FOR:e)
          </Typography.Label>
        </S.FooterListItem>
        <S.FooterListItem>
          <Typography.Label size="lg" color="inherit">
            대표자명
          </Typography.Label>
          <Typography.Label size="lg" color="inherit">
            최민석
          </Typography.Label>
        </S.FooterListItem>
        <S.FooterListItem>
          <Typography.Label size="lg" color="inherit">
            사업자 등록 번호
          </Typography.Label>
          <Typography.Label size="lg" color="inherit" noOfLine={-1}>
            338-60-00724
          </Typography.Label>
        </S.FooterListItem>
        <S.FooterListItem>
          <Typography.Label size="lg" color="inherit">
            주소
          </Typography.Label>
          <Typography.Label size="lg" color="inherit" noOfLine={-1}>
            부산광역시 영도구 대교동1가 59 Sea-side Complex Town 202호
          </Typography.Label>
        </S.FooterListItem>
        <S.FooterListItem>
          <Typography.Label size="lg" color="inherit">
            이메일
          </Typography.Label>
          <Typography.Label size="lg" color="inherit" noOfLine={-1}>
            min_stone@naver.com
          </Typography.Label>
        </S.FooterListItem>
        <S.FooterListItem>
          <Typography.Label size="lg" color="inherit">
            SNS
          </Typography.Label>
        </S.FooterListItem>
        <S.FooterListItem>
          <InstagramIcon
            onClick={() => {
              if (isIOS) {
                window.location.replace('https://www.instagram.com/gbzg_official');
              } else if (isAndroid) {
                window.location.replace(
                  'intent://instagram.com/gbzg_official/#Intent;scheme=https;package=com.instagram.android;end',
                );
              } else {
                window.location.replace('https://www.instagram.com/gbzg_official');
              }
            }}
          />
        </S.FooterListItem>
      </S.Footer>
    </PageTemplate>
  );
}

export default HomePage;
