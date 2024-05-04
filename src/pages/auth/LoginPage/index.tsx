import { useNavigate } from "react-router-dom";
import { Post } from "../../../utils/api";

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

type loginResponse = {
  status: "ACTIVE" | "INACTIVE";
  access: string;
  refresh: string;
  access_expires_at: string;
  refresh_expires_at: string;
}

async function login() {
  const response = await Post<loginResponse>(`${import.meta.env.VITE_BASE_URL}user/app/login`,
    {
      uid: 1,
      provider: "google",
      email: "test@naver.com",
      nickname: "test1",
      profile_pic: "",
    },
    {
      headers: {'Content-Type': 'application/json'}
    }
  );

  return response;
}

function LoginPage() {
  const navigate = useNavigate();

  async function developLogin() {
    const response = await login();
    console.log(response);
    if(response.data.status === "ACTIVE") {
      localStorage.setItem("access_token", response.data.access);
      localStorage.setItem("refresh_token", response.data.access);
      navigate("/");
    } else {
      navigate("/signup");
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
