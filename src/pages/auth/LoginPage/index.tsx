import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../../main";

import AuthCheck from "../../../components/common/AuthCheck";
import PageTemplate from "../../../components/common/PageTemplate";

import LogoIcon from "../../../assets/icons/logo.svg?react";
import LogoText from "../../../assets/icons/logo_text.svg?react";
import ThunderMoveIcon from "../../../assets/icons/thuder_move.svg?react";
import KakaoIcon from "../../../assets/icons/kakao.svg?react";
import GoogleIcon from "../../../assets/icons/google.svg?react";
import NaverIcon from "../../../assets/icons/naver.svg?react";
import AppleIcon from "../../../assets/icons/apple.svg?react";

import * as S from "./style";

async function login() {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}user/app/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid: 1,
        provider: "google",
        email: "test@naver.com",
        nickname: "test1",
        profile_pic: "",
      }),
    }
  );

  return await response.json();
}

async function refresh() {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}user/jwt-token-auth/refresh`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refresh: queryClient.getQueryData(["refresh_token"]),
      }),
    }
  );

  return await response.json();
}

function LoginPage() {
  const {
    data: userData,
    mutate: loginMutate,
    isSuccess: isLoginSuccess,
  } = useMutation({
    mutationFn: () => login(),
  });

  const {
    data: refreshData,
    mutate: refreshMutate,
    isSuccess: isRefreshSuccess,
  } = useMutation({
    mutationFn: () => refresh(),
  });

  function tokenRefresh() {
    refreshMutate();
    setTimeout(() => {
      if (isRefreshSuccess) {
        localStorage.setItem("access_token", refreshData.access);
        tokenRefresh();
      }
    }, 1000 * 60 * 60 * 23);
  }

  function developLogin() {
    loginMutate();
    if (isLoginSuccess) {
      localStorage.setItem("access_token", userData.access);
      localStorage.setItem("refresh_token", userData.refresh);
      tokenRefresh();
    }
  }

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
            <S.OAuthSquareButton onClick={developLogin}>
              <KakaoIcon />
              <span>카카오톡으로 시작하기</span>
            </S.OAuthSquareButton>
          </S.MessageContainer>
          <S.SeperateTextLine>또는</S.SeperateTextLine>
          <S.OAuthButtons>
            <S.OAuthCircleButton color="#00BF18" onClick={developLogin}>
              <NaverIcon width={14} height={14} />
            </S.OAuthCircleButton>
            <S.OAuthCircleButton color="#FFFFFF" onClick={developLogin}>
              <GoogleIcon width={20} height={20} />
            </S.OAuthCircleButton>
            <S.OAuthCircleButton color="#000000" onClick={developLogin}>
              <AppleIcon width={40} height={40} />
            </S.OAuthCircleButton>
          </S.OAuthButtons>
        </S.Container>
      </PageTemplate>
    </AuthCheck>
  );
}

export default LoginPage;
