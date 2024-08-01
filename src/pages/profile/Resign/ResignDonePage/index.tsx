import { useNavigate } from 'react-router-dom';

import HandImage from '../../../../assets/imgs/illustration-01.svg?react';

import PageTemplate from '../../../../components/common/PageTemplate';

import * as S from './style';
import BottomButtonContainer from '../../../../components/common/BottomButtonContainer';

function ResignDonePage() {
  const navigate = useNavigate();

  return (
    <PageTemplate
      nav={
        <BottomButtonContainer
          onClick={() => {
            navigate('/');
          }}
          bgColor="blue"
        >
          로그인 화면으로 돌아가기
        </BottomButtonContainer>
      }
    >
      <S.Container>
        <S.TitleParagraph>탈퇴가 완료되었습니다</S.TitleParagraph>
        <HandImage />
        <S.DescParagraph>
          그동안 이용해주셔서 감사합니다.
          <br />
          회원가입을 통해 언제든지 다시 시작할 수 있어요!
        </S.DescParagraph>
      </S.Container>
    </PageTemplate>
  );
}

export default ResignDonePage;
