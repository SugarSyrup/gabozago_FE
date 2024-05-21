import { useNavigate } from "react-router-dom";
import { post } from "../../../utils/api";

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

interface  loginResponse {
  status: "ACTIVE" | "INACTIVE";
  access: string;
  refresh: string;
  access_expires_at: string;
  refresh_expires_at: string;
  user_data?: {
    email: string;
    nickname: string;
  };
};

async function login() {
  const response = await post<loginResponse>(
    `/user/app/login`,
    {
      uid: 1234321,
      provider: "google",
      email: "gbzg_test@gmail.com",
      nickname: "tiredDeveloper",
    }
  );

  return response;
}

function LoginPage() {
  const navigate = useNavigate();

  async function developLogin(type: string) {
    const response = await login();

    if (response.data.status === "ACTIVE") {
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.refresh);
      navigate("/");
    } else {
      if (response.data.user_data) {
        const { email, nickname } = response.data.user_data;
        navigate(`/signup?type=${type}&email=${email}&nickname=${nickname}`);
      }
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
            <S.OAuthSquareButton
              onClick={() => {
                developLogin("kakao");
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
                developLogin("naver");
              }}
            >
              <NaverIcon width={14} height={14} />
            </S.OAuthCircleButton>
            <S.OAuthCircleButton
              color="#FFFFFF"
              onClick={() => {
                developLogin("google");
              }}
            >
              <GoogleIcon width={20} height={20} />
            </S.OAuthCircleButton>
            <S.OAuthCircleButton
              color="#000000"
              onClick={() => {
                developLogin("apple");
              }}
            >
              <AppleIcon width={40} height={40} />
            </S.OAuthCircleButton>
          </S.OAuthButtons>
        </S.Container>
      </PageTemplate>
    </AuthCheck>
  );
}

export default LoginPage;
