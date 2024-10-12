import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { isAndroid, isIOS } from 'react-device-detect';

import LogoIcon from '@_icons/logo_text.svg?react';
import BellIcon from '@_icons/bell_pin.svg?react';
import LogoForeIcon from '@_icons/logo_fore.svg?react';
import InstagramIcon from '@_icons/instagram.svg?react';
import ChevronRightIcon from '@_icons/chevron_right.svg?react';
import XIcon from '@_icons/x.svg?react';
import SleepIMG from '@_imgs/sleepIMG.png';

import isLogin from '@_utils/isLogin';
import { get } from '@_utils/api';

import Typography from '@_common/Typography';
import OutlineButton from '@_common/Button/OutlineButton';
import PageTemplate from '@_common/PageTemplate';

import { TUserProfile } from '@_types/TUserProfile';
import { popupValue } from '@_recoil/common/PopupValue';

import PopularArticles from '../../components/home/PopularArticles';
import HotArticles from '../../components/home/HotArticles';
import PlaceRecommendation from '../../components/home/PlaceRecommendation';
import TripBucketList from '../../components/home/TripBucketList';
import Banner from '../../components/home/Banner';
import usePopup from '../../hooks/usePopup';

import * as S from './style';

interface TPlace {
  placeId: number;
  name: string;
  addressShort: string;
  thumbnail: string;
}

function HomePage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [username, setUsername] = useState<string>('');
  const [isTripBucketPlaces, setIsTripBucketPlaces] = useState<boolean>(false);
  const [isNotifications, setIsNotifications] = useState<boolean>(false);
  const setPopupValue = useSetRecoilState(popupValue);
  const { popupOpen, popupClose } = usePopup();

  useEffect(() => {
    if (isLogin()) {
      get<TUserProfile>('/user/profile').then((response) => {
        setUsername(response.data.nickname);
      });
    }
  }, []);

  useEffect(() => {
    get<TPlace[]>('/scrap/place/home').then((response) => {
      setIsTripBucketPlaces(response.data.length > 0);
    });
  }, []);

  useEffect(() => {
    if (searchParams.get('popup') === 'bucket_fail') {
      setPopupValue({
        Custom: (
          <S.PopupContainer>
            <XIcon
              onClick={() => {
                popupClose();
              }}
            />
            <img src={SleepIMG} alt="bucket_fail" />
            <Typography.Headline size="sm" color="inherit">
              콘텐츠를 다시 공유해주세요!
            </Typography.Headline>
            <Typography.Body size="lg" color="inherit" noOfLine={3}>
              요청을 처리하는데 문제가 생겼어요. <br />
              이전 화면으로 돌아가 <br />
              다시 공유하면 정상적으로 처리됩니다.
            </Typography.Body>
            <Typography.Body size="lg" color="inherit" noOfLine={3}>
              서비스 이용에 불편을 드려 죄송합니다.
            </Typography.Body>
          </S.PopupContainer>
        ),
      });
      popupOpen();
      setSearchParams('');
    } else if (searchParams.get('popup') === 'alert_fail') {
      setPopupValue({
        Header: '잠깐! 이대로면 내 여행을 위한 소중한 소식을 받아 볼 수 없어요.',
        Description: `알림을 켜면 공유한 장소의 저장이
완료되었는지 확인할 수 있어요 :)`,
        Warning: '시스템 설정 > 가보자고 > 알림 허용',
        CloseButton: {
          text: '취소',
          onClick: () => {
            popupClose();
          },
        },
        ConfirmButton: {
          text: '확인',
          onClick: () => {
            popupClose();
          },
        },
      });
      popupOpen();
      setSearchParams('');
    }
  }, []);

  useEffect(() => {
    get<{ reminder: boolean }>('/user/web-notification/reminder').then((response) => {
      setIsNotifications(response.data.reminder);
    });
  });

  return (
    <PageTemplate>
      {/* Header */}
      <S.Header>
        <LogoIcon />
        <Link to="/notifications" id="notifications">
          <S.BellWrapper isAlert={isNotifications}>
            <BellIcon />
          </S.BellWrapper>
        </Link>
      </S.Header>

      {/* Banner */}
      <Banner />

      {/* Recently Trip Bucket */}
      {isTripBucketPlaces && (
        <S.TripBucketContainer>
          <S.TripBucketTitle>
            <Typography.Headline size="sm" color="inherit" noOfLine={-1}>
              최근 담은 트립 버킷
            </Typography.Headline>
            <Link to="/scrapbook?tab=1">
              <S.TripBucketAll>
                <span>전체 보기</span>
                <ChevronRightIcon />
              </S.TripBucketAll>
            </Link>
          </S.TripBucketTitle>
          <TripBucketList />
        </S.TripBucketContainer>
      )}

      {/* Place Recommend */}
      <S.PlaceRecommendContainer>
        <S.ArticleIntroduceTitle>
          <Typography.Headline size="sm" color="inherit" noOfLine={2}>
            {username && (
              <>
                <S.FontHighlight>{username} 님</S.FontHighlight>
                <br />
              </>
            )}
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
            navigate('/articles');
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
        <S.FooterTerms>
          <Typography.Label size="lg" color="inherit">
            <span
              onClick={() => {
                window.location.href =
                  'https://teamfore.notion.site/15c4abba6dbc4c788511d7466ca2a801?pvs=25';
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              이용약관
            </span>
          </Typography.Label>
          <Typography.Label size="lg" color="inherit">
            |
          </Typography.Label>
          <Typography.Label size="lg" color="inherit">
            <span
              onClick={() => {
                navigate('/terms/02');
              }}
              style={{
                cursor: 'pointer',
              }}
            >
              개인정보처리방침
            </span>
          </Typography.Label>
        </S.FooterTerms>
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
