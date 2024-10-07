import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

import { get } from '@_utils/api';
import { LoginResponse } from '@_types/LoginResponse.type';
import { Toast } from '@_common/Toast';
import Typography from '@_common/Typography';
import PageTemplate from '@_common/PageTemplate';
import readingIMG from '@_imgs/readingIMG.png';

import * as S from './style';

function RedirectPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get('code');

    get<LoginResponse>(`/user/${type}/callback/?code=${code}`)
      .then((response) => {
        if (response.data.status === 'ACTIVE') {
          localStorage.setItem('access_token', response.data.access);

          try {
            if (window.GabozagoDev) {
              window.GabozagoDev.postUUID(response.data.user_data.uuid);
            }
            if (window.webkit.messageHandlers.gabozagoDev) {
              window.webkit.messageHandlers.gabozagoDev.postMessage({
                action: 'postUUID',
                code: response.data.user_data.uuid,
              });
            }
          } catch (e) {}

          navigate('/');
        } else {
          navigate(
            `/signup?type=${type}&email=${response.data.user_data?.email}&nickname=${response.data.user_data?.nickname}&code=${response.data.access}`,
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          toast.custom(
            () => (
              <Toast>
                <Typography.Title size="md" color="white">
                  다른 소셜 이메일로 가입되어 있습니다. {error.response.data.error}로 로그인
                  해주세요
                </Typography.Title>
              </Toast>
            ),
            {
              duration: 1000,
            },
          );
        } else {
          toast.custom(
            () => (
              <Toast>
                <Typography.Title size="md" color="white">
                  로그인 실패했습니다. 다시 로그인 시도해 주세요
                </Typography.Title>
              </Toast>
            ),
            {
              duration: 1000,
            },
          );
        }
        navigate('/login');
      });
  }, []);

  return (
    <PageTemplate nav={null}>
      <S.Container>
        <img src={readingIMG} alt="loading" />
        <S.Text>
          로그인 중 •••
          <br />
          잠시만 기다려주세요
        </S.Text>
        <S.TextLink to="/">해당 페이지에서 벗어나실 수 없으신가요?</S.TextLink>
      </S.Container>
    </PageTemplate>
  );
}

export default RedirectPage;
