import { useSearchParams } from "react-router-dom";

import PageTemplate from "../../../components/common/PageTemplate";
import KakaoIcon from "../../../assets/icons/kakao.svg?react";
import NaverIcon from "../../../assets/icons/naver.svg?react";
import GoogleIcon from "../../../assets/icons/google.svg?react";
import AppleIcon from "../../../assets/icons/apple.svg?react";

import Button from "../../../components/common/Button";
import InputContainer from "../../../components/common/InputContainer";
import CheckBoxs from "../../../components/signUp/CheckBoxs";
import PageHeader from "../../../components/common/PageHeader";

import * as S from "./style";
import { useEffect, useState } from "react";
import { Get } from "../../../utils/api";

function SignUpPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [nickname, setNicknameState] = useState(searchParams.get("nickname"));
  const [nicknameAlert, setNicknameAlert] = useState("");
  const [recommendAlery, setRecommendAlert] = useState("");

  const type = searchParams.get("type");
  const email = searchParams.get("email");

  useEffect(() => {
    Get<{message: "POSSIBLE" | "IMPOSSIBLE"}>(`${import.meta.env.VITE_BASE_URL}user/nickname/${nickname}`)
      .then((res) => {
        if(res.data.message === "POSSIBLE") {
          setNicknameAlert(`사용 가능한 닉네임이에요!`)
        } else {
          setNicknameAlert(`사용 불가능한 닉네임이에요!`)
        }
      });
  }, [])

  return (
    <PageTemplate
      nav={false}
      header={
        <PageHeader>
          <S.HeaderText>회원 가입</S.HeaderText>
        </PageHeader>
      }
    >
      <S.FormContainer>
        <InputContainer
          inputType="email"
          name="account"
          label="연결된 계정"
          disabled={true}
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
        <InputContainer
          inputType="text"
          name="account"
          label="닉네임"
          disabled={false}
          required={true}
          value={nickname ? nickname : ""}
          alert={
            <S.AlertMessage color={nicknameAlert.length > 14 ? "red" : "blue"}>
              {nicknameAlert}
            </S.AlertMessage>
          }
          onInput={(e) => {
            setNicknameState(e.currentTarget.value);
          }}
          onButtonClick={() => {
            Get<{message: "POSSIBLE" | "IMPOSSIBLE"}>(`${import.meta.env.VITE_BASE_URL}user/nickname/${nickname}`)
              .then((res) => {
                if(res.data.message === "POSSIBLE") {
                  setNicknameAlert(`사용 가능한 닉네임이에요!`)
                } else {
                  setNicknameAlert(`사용 불가능한 닉네임이에요!`)
                }
              });
          }}
        />
        <CheckBoxs />

        <InputContainer
          inputType="text"
          name="reccomendName"
          label={
            <>
              추천받고 오셨다면 알려주세요!
              <S.InputExplain>(선택)</S.InputExplain>
            </>
          }
          disabled={false}
          required={true}
          alert={
            <S.AlertMessage color="red">
              유효하지 않은 유저입니다.
            </S.AlertMessage>
          }
          onButtonClick={() => {}}
        />
        <S.ButtonWrapper>
          <Button type="normal" size="lg" width="100%">
            회원가입 완료
          </Button>
        </S.ButtonWrapper>
      </S.FormContainer>
    </PageTemplate>
  );
}

export default SignUpPage;
