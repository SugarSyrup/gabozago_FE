import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PageTemplate from "../../../components/common/PageTemplate";
import InputContainer from "../../../components/common/InputContainer";

import CheckBoxs from "../../../components/signUp/CheckBoxs";
import PageHeader from "../../../components/common/PageHeader";
import RecommendNickname from "../../../components/signUp/RecommendNickname";
import Nickname from "../../../components/signUp/Nickname";

import KakaoIcon from "../../../assets/icons/kakao.svg?react";
import NaverIcon from "../../../assets/icons/naver.svg?react";
import GoogleIcon from "../../../assets/icons/google.svg?react";
import AppleIcon from "../../../assets/icons/apple.svg?react";

import * as S from "./style";
import { Post } from "../../../utils/api";

type loginResponse = {
  status: "ACTIVE" | "INACTIVE";
  access: string;
  refresh: string;
  access_expires_at: string;
  refresh_expires_at: string;
  user_data?: {
    email: string;
    nickname: string;
  }
}

function SignUpPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const type = searchParams.get("type");
  const email = searchParams.get("email");
  const [isNicknameOk, setIsNicknameOk] = useState<boolean>(false);
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  useEffect(() => {
    if(isNicknameOk && checkboxActive) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [isNicknameOk, checkboxActive])

  return (
    <PageTemplate
      nav={false}
      header={
        <PageHeader>
          <S.HeaderText>회원 가입</S.HeaderText>
        </PageHeader>
      }
    >
      <S.FormContainer  action="post" onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const {email, nickname, recommendName} = Object.fromEntries(formData);
        let body = {}
        
        if(type === "naver") {
          body = {
            email: email,
            nickname: nickname,
          }
        } else {
          body = {
            nickname: nickname
          }
        }

        Post<loginResponse>(`${import.meta.env.VITE_BASE_URL}user/sign-in`, body)
          .then((response) => {
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.access);
            navigate("/");
          });
      }}>
        <InputContainer
          inputType="email"
          name="email"
          label="연결된 계정"
          disabled={type === "naver" ? false : true}
          required={true}
          value={email ? email : ""}
          explain={
            <>
              {
                (() => {
                  switch(type) {
                    case "kakao":
                      return <>
                          <S.BrandIcon type={type}>
                            <KakaoIcon />
                          </S.BrandIcon>
                          카카오로 가입한 계정이에요
                        </>
                    case "google":
                      return <>
                        <S.BrandIcon type={type}>
                          <GoogleIcon />
                        </S.BrandIcon>
                        구글로 가입한 계정이에요
                      </>
                    case "naver":
                      return <>
                        <S.BrandIcon type={type}>
                          <NaverIcon />
                        </S.BrandIcon>
                        네이버로 가입한 계정이에요
                      </>
                    case "apple":
                      return <>
                        <S.BrandIcon type={type}>
                          <AppleIcon />
                        </S.BrandIcon>
                        애플로 가입한 계정이에요
                      </>
                  }
                })()
              }
            </>
          }
        />
        <Nickname setIsNicknameOk={setIsNicknameOk}/>
        <CheckBoxs setCheckboxActive={setCheckboxActive} />

        <RecommendNickname />
        <S.ButtonWrapper formAction="" type="submit" disabled={!isButtonActive}>
            회원가입 완료
        </S.ButtonWrapper>
      </S.FormContainer>
    </PageTemplate>
  );
}

export default SignUpPage;
