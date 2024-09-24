import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import Typography from '@_common/Typography';
import TripGIF from '../../../assets/imgs/banner_trip.gif';
import BucketIMG from '../../../assets/imgs/bucketIMG.png';

import * as S from './style';

function Banner() {
  const navigate = useNavigate();
  const [bannerCount, setBannerCount] = useState<number>(1);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInterval(() => {
      setBannerCount((prev) => {
        bannerRef.current?.scrollTo({
          left: prev === 1 ? 5000 : 0,
          behavior: 'smooth',
        });
        return prev === 2 ? 1 : prev + 1;
      });
    }, 5000);
  }, []);

  return (
    <>
      <S.Banner
        ref={bannerRef}
        onScroll={(e) => {
          if (e.currentTarget.scrollLeft >= e.currentTarget.offsetWidth - 52) {
            setBannerCount(2);
          } else {
            setBannerCount(1);
          }
        }}
      >
        <S.TripBanner
          onClick={() => {
            navigate('/mytrip');
          }}
        >
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
        <S.BucketBanner
          onClick={() => {
            navigate('/onboarding/tripbucket');
          }}
        >
          <Typography.Title
            size="lg"
            color="inherit"
            noOfLine={2}
            maxWidth={(bannerRef.current?.offsetWidth - 198) as number}
          >
            흩어져 있던 맛집, 카페, 관광지 모두 모아봐요!
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
    </>
  );
}

export default Banner;
