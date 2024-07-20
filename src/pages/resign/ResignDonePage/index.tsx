import { useNavigate } from 'react-router-dom';

import HandImage from '../../../assets/imgs/illustration-01.svg?react';

import PageTemplate from '../../../components/common/PageTemplate';
import PageHeader from '../../../components/common/PageHeader';
import Button from '../../../components/common/Button';

import * as S from './style';
import { LongButton } from '../../../components/common/Button/button.style';
import Typography from '../../../components/common/Typography';

function ResignDonePage() {
  const navigate = useNavigate();

  return (
    <PageTemplate
      nav={
        <S.NavContainer>
          <LongButton
            onClick={() => {
              navigate('/');
            }}
            bgColor="blue"
          >
            <Typography.Title size="lg" color="inherit">
              홈으로 돌아가기
            </Typography.Title>
          </LongButton>
        </S.NavContainer>
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
