import { useRouteError, UNSAFE_ErrorResponseImpl, useNavigate } from 'react-router-dom';

import Error500Icon from '@_icons/500MessageBox.svg?react';

import FilledButton from '@_common/Button/FilledButton';
import PageTemplate from '@_common/PageTemplate';

import * as S from './style';

function Error500Page() {
  const navigate = useNavigate();
  const error = useRouteError() as UNSAFE_ErrorResponseImpl;

  return (
    <PageTemplate
      nav={
        <S.Footer>
          <FilledButton
            rounded
            bgColor="blue"
            onClick={() => {
              navigate('/');
            }}
          >
            메인으로 돌아가기
          </FilledButton>
        </S.Footer>
      }
    >
      <S.Container>
        <S.BackgroundImg>
          {error?.status >= 500 && (
            <S.MessageBox>
              <Error500Icon />
            </S.MessageBox>
          )}
        </S.BackgroundImg>
        <S.Heading>
          죄송합니다.
          <br />
          페이지에 접근할 수 없습니다.
        </S.Heading>
        <S.Description>
          요청하신 페이지에 오류가 발생하였습니다.
          <br />
          문제가 계속되면 관리자에게 문의해주세요.
        </S.Description>
      </S.Container>
    </PageTemplate>
  );
}

export default Error500Page;
