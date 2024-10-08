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
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';
import Typography from '@_common/Typography';

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

function checkMobile() {
  const varUA = navigator.userAgent.toLowerCase();

  if (varUA.indexOf('android') > -1) {
    return 'android';
  }
  if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
    return 'ios';
  }

  return 'other';
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
            <span>여행지를 담는 가장 간단한 방법</span>
          </S.BrandCopy>
          <S.MessageContainer>
            <S.FloatingMessage>
              <ThunderMoveIcon />
              <span>3초만에 빠른 시작하기</span>
            </S.FloatingMessage>
            {checkMobile() === 'ios' ? (
              <S.OAuthSquareButton
                bgColor="black"
                color="white"
                onClick={async () => {
                  window.AppleID.auth.init({
                    clientId: `${import.meta.env.VITE_APPLE_CLIENT_ID}`,
                    scope: 'name email',
                    redirectURI: `${import.meta.env.VITE_APPLE_REDIRECT_URI}`,
                    responseType: `code`,
                    usePopup: true,
                  });

                  const res = await window.AppleID.auth.signIn();
                  get<LoginResponse>(`/user/apple/callback/?code=${res.authorization.code}`)
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
                        } catch (e) {
                          console.log(e);
                        }

                        navigate('/');
                      } else {
                        navigate(
                          `/signup?type=apple&email=${response.data.user_data?.email}&nickname=${response.data.user_data?.nickname}&code=${response.data.access}`,
                        );
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      if (error.response.status === 400) {
                        toast.custom(
                          () => (
                            <Toast>
                              <Typography.Title size="md" color="white">
                                다른 소셜 이메일로 가입되어 있습니다. {error.response.data.error}로
                                로그인 해주세요
                              </Typography.Title>
                            </Toast>
                          ),
                          {
                            duration: 3000,
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
                            duration: 3000,
                          },
                        );
                      }
                    });
                }}
              >
                <AppleIcon />
                <span>Apple로 시작하기</span>
              </S.OAuthSquareButton>
            ) : (
              <S.OAuthSquareButton
                bgColor="#ffe812"
                color="black"
                onClick={() => {
                  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
                }}
              >
                <KakaoIcon />
                <span>카카오톡으로 시작하기</span>
              </S.OAuthSquareButton>
            )}
          </S.MessageContainer>
          <S.SeperateTextLine>또는</S.SeperateTextLine>
          <S.OAuthButtons>
            {checkMobile() === 'ios' && (
              <S.OAuthCircleButton
                color="#FFCD00"
                onClick={() => {
                  window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${import.meta.env.VITE_KAKAO_API_KEY}&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;
                }}
              >
                <KakaoIcon />
              </S.OAuthCircleButton>
            )}

            <S.OAuthCircleButton
              color="#00BF18"
              onClick={() => {
                window.location.href = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${import.meta.env.VITE_NAVER_CLIENT_ID}&state=${import.meta.env.VITE_NAVER_STATE}&redirect_uri=${import.meta.env.VITE_NAVER_REDIRECT_URI}`;
              }}
            >
              <NaverIcon width={14} height={14} />
            </S.OAuthCircleButton>
            {checkMobile() !== 'ios' && (
              <S.OAuthCircleButton
                color="#FFFFFF"
                onClick={() => {
                  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_GOOGLE_REDIRECT_URI}&response_type=code&scope=email+profile`;
                }}
              >
                <GoogleIcon width={20} height={20} />
              </S.OAuthCircleButton>
            )}

            {checkMobile() !== 'ios' && (
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
                  get<LoginResponse>(`/user/apple/callback/?code=${res.authorization.code}`)
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
                        } catch (e) {
                          console.log(e);
                        }

                        navigate('/');
                      } else {
                        navigate(
                          `/signup?type=apple&email=${response.data.user_data?.email}&nickname=${response.data.user_data?.nickname}&code=${response.data.access}`,
                        );
                      }
                    })
                    .catch((error) => {
                      console.log(error);
                      if (error.response.status === 400) {
                        toast.custom(
                          () => (
                            <Toast>
                              <Typography.Title size="md" color="white">
                                다른 소셜 이메일로 가입되어 있습니다. {error.response.data.error}로
                                로그인 해주세요
                              </Typography.Title>
                            </Toast>
                          ),
                          {
                            duration: 3000,
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
                            duration: 3000,
                          },
                        );
                      }
                    });
                }}
              >
                <AppleIcon width={40} height={40} />
              </S.OAuthCircleButton>
            )}
          </S.OAuthButtons>
        </S.Container>
      </PageTemplate>
    </AuthCheck>
  );
}

export default LoginPage;
