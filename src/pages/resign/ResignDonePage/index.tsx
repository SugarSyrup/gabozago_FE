import { useNavigate } from 'react-router-dom';
import * as S from './style';
import PageTemplate from '../../../components/common/PageTemplate';
import PageHeader from '../../../components/common/PageHeader';
import HandImage from '../../../assets/imgs/illustration-01.svg?react';
import Button from '../../../components/common/Button';

function ResignDonePage() {
  const navigate = useNavigate();

  return (
    <PageTemplate
      nav={
        <S.NavContainer>
          <Button
            width="100%"
            type="normal"
            active
            size="lg"
            onClick={() => {
              navigate('/');
            }}
          >
            홈으로 돌아가기
          </Button>
        </S.NavContainer>
      }
      header={<PageHeader>회원 탈퇴</PageHeader>}
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
