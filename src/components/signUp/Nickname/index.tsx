import { useEffect, useState } from "react";
import InputContainer from "../../common/InputContainer";
import { Get } from "../../../utils/api";
import * as S from "./style";
import { useSearchParams } from "react-router-dom";
import KakaoIcon from "../../../assets/icons/kakao.svg?react";
import NaverIcon from "../../../assets/icons/naver.svg?react";
import GoogleIcon from "../../../assets/icons/google.svg?react";
import AppleIcon from "../../../assets/icons/apple.svg?react";

interface Props {
  setIsNicknameOk: React.Dispatch<React.SetStateAction<boolean>>
}

function Nickname({setIsNicknameOk}: Props) {
    const [searchParams, setSearchParams] = useSearchParams();

    const type = searchParams.get("type");
    const email = searchParams.get("email");

    const [nickname, setNicknameState] = useState(searchParams.get("nickname"));
    const [nicknameAlert, setNicknameAlert] = useState("");

    useEffect(() => {
      Get<{message: "POSSIBLE" | "IMPOSSIBLE"}>(`${import.meta.env.VITE_BASE_URL}user/nickname/${nickname}`)
        .then((res) => {
          if(res.data.message === "POSSIBLE") {
            setNicknameAlert(`사용 가능한 닉네임이에요!`);
            setIsNicknameOk(true);
          } else {
            setNicknameAlert(`사용 불가능한 닉네임이에요!`);
            setIsNicknameOk(false);
          }
        });
    }, [])

    return(
      <>
        <InputContainer
          inputType="email"
          name="account"
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
        <InputContainer
          inputType="text"
          name="account"
          label="닉네임"
          disabled={false}
          required={true}
          value={nickname ? nickname : ""}
          placeholder="닉네임을 입력하세요. (중복 불가)"
          alert={
            <S.AlertMessage color={nicknameAlert.length > 14 ? "red" : "blue"}>
              {nicknameAlert}
            </S.AlertMessage>
          }
          onInput={(e) => {
            setNicknameState(e.currentTarget.value);
            setNicknameAlert("");
            setIsNicknameOk(false);
          }}
          onButtonClick={() => {
            Get<{message: "POSSIBLE" | "IMPOSSIBLE"}>(`${import.meta.env.VITE_BASE_URL}user/nickname/${nickname}`)
              .then((res) => {
                if(res.data.message === "POSSIBLE") {
                  setNicknameAlert(`사용 가능한 닉네임이에요!`)
                  setIsNicknameOk(true);
                } else {
                  setNicknameAlert(`사용 불가능한 닉네임이에요!`)
                  setIsNicknameOk(false);
                }
              });
          }}
        />
      </>
    )
}

export default Nickname;