import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import PageTemplate from "../../../components/common/PageTemplate";

import CheckBoxs from "../../../components/signUp/CheckBoxs";
import PageHeader from "../../../components/common/PageHeader";
import RecommendNickname from "../../../components/signUp/RecommendNickname";


import * as S from "./style";
import Nickname from "../../../components/signUp/Nickname";

function SignUpPage() {
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
      <S.FormContainer>
        <Nickname setIsNicknameOk={setIsNicknameOk}/>
        <CheckBoxs setCheckboxActive={setCheckboxActive} />

        <RecommendNickname />
        <S.ButtonWrapper disabled={isButtonActive}>
            회원가입 완료
        </S.ButtonWrapper>
      </S.FormContainer>
    </PageTemplate>
  );
}

export default SignUpPage;
