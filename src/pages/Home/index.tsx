import { useNavigate } from 'react-router-dom';
import { isAndroid, isIOS } from 'react-device-detect';

import LogoIcon from '@_icons/logo_text.svg?react';
import BellIcon from '@_icons/bell_pin_fill.svg?react';
import LogoForeIcon from '@_icons/logo_fore.svg?react';
import InstagramIcon from '@_icons/instagram.svg?react';
import ChevronRightIcon from '@_icons/chevron_right.svg?react';

import Typography from '@_common/Typography';
import OutlineButton from '@_common/Button/OutlineButton';

import PageTemplate from '../../components/common/PageTemplate';
import PopularArticles from '../../components/home/PopularArticles';
import HotArticles from '../../components/home/HotArticles';

import * as S from './style';

function HomePage() {
  const navigate = useNavigate();
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
      {/* Place Recommend */}

      {/* Articles */}
      <S.ArticleContainer>
        <S.ArticleIntroduceTitle>
          <Typography.Headline size="sm" color="inherit" noOfLine={2}>
            오직 가보자고에서만!
            <br />
            놓칠 수 없는 <S.FontHighlight>여행 정보 아티클</S.FontHighlight>
          </Typography.Headline>
        </S.ArticleIntroduceTitle>

        <S.ArticleIntroduceTitle>
          <Typography.Headline size="sm" color="inherit" noOfLine={-1}>
            금주 인기 아티클 Top 5
          </Typography.Headline>
        </S.ArticleIntroduceTitle>

        <PopularArticles />

        <S.ArticleIntroduceTitle>
          <Typography.Headline size="sm" color="inherit" noOfLine={-1}>
            인기 급상승 아티클 🔥
          </Typography.Headline>
        </S.ArticleIntroduceTitle>

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
