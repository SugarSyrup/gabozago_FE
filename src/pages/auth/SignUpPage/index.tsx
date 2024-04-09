import BackButton from "../../../components/common/BackButton";
import PageTemplate from "../../../components/common/PageTemplate";
import KakaoIcon from "../../../assets/imgs/kakaotalk.png";

import * as S from "./style";
import Button from "../../../components/common/Button";
import InputContainer from "../../../components/auth/InputContainer";
import CheckBoxs from "../../../components/auth/CheckBoxs";

function SignUpPage() {
    return(
        <PageTemplate nav={false} header={
            <S.Header>
                <BackButton />
                <span>회원가입</span>
                <span></span>
            </S.Header>
        }>
            <S.FormContainer>
                <InputContainer 
                    inputType="email" 
                    name="account" 
                    label="연결된 계정" 
                    disabled={true} 
                    required={true}
                    explain={
                        <>
                            <img src={KakaoIcon} />
                            카카오로 가입한 계정이에요
                        </>
                    }
                />
                <InputContainer 
                    inputType="text" 
                    name="account" 
                    label="닉네임" 
                    disabled={false} 
                    required={true}
                    alert={
                        <S.AlertMessage color="blue">
                            사용가능한 닉네임입니다:)
                        </S.AlertMessage>
                    }
                    onButtonClick={() => {}}
                />
                <CheckBoxs />

                <InputContainer 
                    inputType="text" 
                    name="reccomendName" 
                    label={<>추천받고 오셨다면 알려주세요!<S.InputExplain>(선택)</S.InputExplain></>} 
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
                    <Button type="normal" size="lg" width="100%">회원가입 완료</Button>
                </S.ButtonWrapper>
            </S.FormContainer>
        </PageTemplate>
    )
}

export default SignUpPage;