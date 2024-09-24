import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
import DotIcon from '@_icons/dot.svg?react';

import BannerFirstIMG from '@_imgs/BucketOnBoarding/504.png';
import BannerSecondIMG from '@_imgs/BucketOnBoarding/505.png';
import BannerThirdIMG from '@_imgs/BucketOnBoarding/506.png';
import BannerFourthIMG from '@_imgs/BucketOnBoarding/507.png';
import BannerFifthIMG from '@_imgs/BucketOnBoarding/508.png';

import * as S from './style';

function TripBucketPage() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { innerWidth } = window;
    if (innerWidth > 500) {
      containerRef.current?.scrollTo({
        left: index * 500,
        behavior: 'smooth',
      });
    } else {
      containerRef.current?.scrollTo({
        left: index * window.innerWidth,
        behavior: 'smooth',
      });
    }
  }, [index]);

  useEffect(() => {
    // containerRef.current?.addEventListener('scrollend', () => {
    //   const { innerWidth } = window;
    //   if (innerWidth > 500) {
    //     setIndex(Math.floor(containerRef.current.scrollLeft / 500));
    //   } else {
    //     setIndex(Math.floor(containerRef.current.scrollLeft / innerWidth));
    //   }
    // });
    // containerRef.current?.addEventListener('scroll', (e) => {
    //   const { innerWidth } = window;
    //   const indexFlag = innerWidth > 500 ? 500 : innerWidth;
    //   if (Math.floor(containerRef.current.scrollLeft / indexFlag) !== index) {
    //     setIndex(Math.floor(containerRef.current.scrollLeft / indexFlag));
    //   }
    // });
  }, []);

  return (
    <PageTemplate nav={null}>
      <S.Container ref={containerRef}>
        <img src={BannerFirstIMG} alt="" />
        <img src={BannerSecondIMG} alt="" />
        <img
          src={BannerThirdIMG}
          alt=""
          style={{
            alignSelf: 'flex-end',
          }}
        />
        <img
          src={BannerFourthIMG}
          alt=""
          style={{
            alignSelf: 'flex-end',
          }}
        />
        <img
          src={BannerFifthIMG}
          alt=""
          style={{
            alignSelf: 'flex-end',
          }}
        />
      </S.Container>
      <S.IndexDots>
        {[0, 1, 2, 3, 4].map((i) => {
          if (i === index) {
            return (
              <S.HightlightDot
                key={i}
                onClick={() => {
                  setIndex(i);
                }}
              >
                <DotIcon />
              </S.HightlightDot>
            );
          }
          return (
            <DotIcon
              key={i}
              onClick={() => {
                setIndex(i);
              }}
            />
          );
        })}
      </S.IndexDots>
      <S.NavContainer>
        {index !== 4 ? (
          <>
            <S.NavButton
              onClick={() => {
                navigate(-1);
              }}
            >
              <Typography.Title size="lg" color="white">
                건너뛰기
              </Typography.Title>
            </S.NavButton>
            <S.NavButton
              onClick={() => {
                setIndex((prev) => prev + 1);
              }}
            >
              <Typography.Title size="lg" color="white">
                다음으로
              </Typography.Title>
            </S.NavButton>
          </>
        ) : (
          <S.NavButton
            onClick={() => {
              navigate('/');
            }}
          >
            <Typography.Title size="lg" color="white">
              시작하기
            </Typography.Title>
          </S.NavButton>
        )}
      </S.NavContainer>
    </PageTemplate>
  );
}

export default TripBucketPage;
