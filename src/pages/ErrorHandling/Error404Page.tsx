import { useRouteError, UNSAFE_ErrorResponseImpl, useNavigate } from 'react-router-dom';

import Error400Icon from '@_icons/400MessageBox.svg?react';
import Error500Icon from '@_icons/500MessageBox.svg?react';

import FilledButton from '@_common/Button/FilledButton';
import PageTemplate from '@_common/PageTemplate';

import * as S from './style';

function ErrorHandlingPage() {
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
          {error?.status === 400 && (
            <S.MessageBox>
              <Error400Icon />
            </S.MessageBox>
          )}
          {error?.status >= 500 && (
            <S.MessageBox>
              <Error500Icon />
            </S.MessageBox>
          )}
        </S.BackgroundImg>
        {error?.status === 404 && (
          <>
            <S.Heading>
              죄송합니다.
              <br />
              페이지에 접근할 수 없습니다.
            </S.Heading>
            <S.Description>
              존재하지 않는 주소를 입력하셨거나
              <br />
              요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
              <br />
              주소를 다시 확인해주세요.
            </S.Description>
          </>
        )}
        {error?.status === 400 && (
          <>
            <S.Heading>
              죄송합니다.
              <br />
              페이지에 접근할 수 없습니다.
            </S.Heading>
            <S.Description>
              해당 페이지에 접근할 수 있는 권한이 없습니다.
              <br />
              문제가 계속되면 관리자에게 문의해주세요.
            </S.Description>
          </>
        )}
        {error?.status >= 500 && (
          <>
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
          </>
        )}
      </S.Container>
    </PageTemplate>
  );
}

export default ErrorHandlingPage;
