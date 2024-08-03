import * as S from './style';

import LogoIcon from '@_icons/logo_text.svg?react';
import BellIcon from '@_icons/bell_pin_fill.svg?react';
import LogoForeIcon from '@_icons/logo_fore.svg?react';
import InstagramIcon from '@_icons/instagram.svg?react';

import PageTemplate from '../../components/common/PageTemplate';
import Recommendation from '../../components/home/Recommendation';
import Typography from '@_common/Typography';
import { isAndroid, isIOS } from 'react-device-detect';

function HomePage() {
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
      <Recommendation />
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
