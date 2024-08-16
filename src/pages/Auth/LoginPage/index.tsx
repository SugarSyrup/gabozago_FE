import { useNavigate } from 'react-router-dom';

import AuthCheck from '@_common/AuthCheck';
import PageTemplate from '@_common/PageTemplate';

import LogoIcon from '@_icons/logo.svg?react';
import LogoText from '@_icons/logo_text.svg?react';
import ThunderMoveIcon from '@_icons/thuder_move.svg?react';
import KakaoIcon from '@_icons/kakao.svg?react';
import GoogleIcon from '@_icons/google.svg?react';
import NaverIcon from '@_icons/naver.svg?react';
import AppleIcon from '@_icons/apple.svg?react';

import { get } from '@_utils/api';
import { LoginResponse } from '@_types/LoginResponse.type';

import * as S from './style';

interface ClientConfig {
  clientId: string;
  redirectURI: string;
  scope?: string;
  state?: string;
  nonce?: string;
  responseType?: string;
  usePopup?: boolean;
}

interface Authorization {
  code: string;
  id_token: string;
  state?: string;
}

interface User {
  email: string;
  name: string;
}

interface SigninResponse {
  authorization: Authorization;
  user?: User;
}

declare global {
  interface Window {
    AppleID: {
      auth: {
        init: (config: ClientConfig) => void;
        signIn: (config?: ClientConfig) => Promise<SigninResponse>;
      };
    };
  }
}

function LoginPage() {
  const navigate = useNavigate();

  return (
    <AuthCheck>
      <PageTemplate nav={false}>
        <S.Container>
          <LogoIcon />
          <LogoText />
          <S.BrandCopy>
            <span>타인의 여행후기를</span>
            <span>나만의 여행으로 만드는 새로운 방법</span>
          </S.BrandCopy>
          <S.MessageContainer>
            <S.FloatingMessage>
              <ThunderMoveIcon />
              <span>3초만에 빠른 시작하기</span>
            </S.FloatingMessage>
            <S.OAuthSquareButton
              onClick={() => {
                window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
              }}
            >
              <KakaoIcon />
              <span>카카오톡으로 시작하기</span>
            </S.OAuthSquareButton>
          </S.MessageContainer>
          <S.SeperateTextLine>또는</S.SeperateTextLine>
          <S.OAuthButtons>
            <S.OAuthCircleButton
              color="#00BF18"
              onClick={() => {
                window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&state=${import.meta.env.VITE_NAVER_STATE}&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URI}`;
              }}
            >
              <NaverIcon width={14} height={14} />
            </S.OAuthCircleButton>
            <S.OAuthCircleButton
              color="#FFFFFF"
              onClick={() => {
                window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URI}&response_type=code&scope=email+profile`;
              }}
            >
              <GoogleIcon width={20} height={20} />
            </S.OAuthCircleButton>
            <S.OAuthCircleButton
              color="#000000"
              onClick={async () => {
                window.AppleID.auth.init({
                  clientId: `${import.meta.env.VITE_APPLE_CLIENT_ID}`,
                  scope: 'name email',
                  redirectURI: `${import.meta.env.VITE_APPLE_REDIRECT_URI}`,
                  responseType: `code`,
                  usePopup: true,
                });

                const res = await window.AppleID.auth.signIn();
                get<LoginResponse>(`/user/apple/callback/?code=${res.authorization.code}`).then(
                  (response) => {
                    localStorage.setItem('access_token', response.data.access);
                    if (response.data.status === 'ACTIVE') {
                      navigate('/');
                    } else {
                      navigate(
                        `/signup?type=apple&email=${response.data.user_data?.email}&nickname=${response.data.user_data?.nickname}`,
                      );
                    }
                  },
                );
              }}
            >
              <AppleIcon width={40} height={40} />
            </S.OAuthCircleButton>
            {/* )} */}
            {/* /> */}
          </S.OAuthButtons>
        </S.Container>
      </PageTemplate>
    </AuthCheck>
  );
}

export default LoginPage;
