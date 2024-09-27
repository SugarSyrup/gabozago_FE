import { BrowserView, MobileView } from 'react-device-detect';
import BackButton from '../BackButton';

import * as S from './style';

interface Props {
  LeftItem?: React.ReactNode;
  children?: React.ReactNode;
  RightItem?: React.ReactNode;
}

function PageHeader({ LeftItem = <BackButton />, children, RightItem = <></> }: Props) {
  return (
    <>
      <BrowserView>
        <S.Header isChidren={children !== undefined}>
          <S.LeftItemWrapper>{LeftItem}</S.LeftItemWrapper>
          {children}
          <S.RightItemWrapper>{RightItem}</S.RightItemWrapper>
        </S.Header>
      </BrowserView>
      <MobileView>
        <S.MobileHeader isChidren={children !== undefined}>
          <S.LeftItemWrapper>{LeftItem}</S.LeftItemWrapper>
          {children}
          <S.RightItemWrapper>{RightItem}</S.RightItemWrapper>
        </S.MobileHeader>
      </MobileView>
    </>
  );
}

export default PageHeader;
