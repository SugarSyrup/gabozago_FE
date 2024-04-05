import PageTemplate from "../../../components/common/PageTemplate";

import LogoIcon from "../../../assets/icons/logo.svg?react";
import LogoText from "../../../assets/icons/logo_text.svg?react";
import KakaoTalkImg from "../../../assets/imgs/kakaotalk.png";
import AppleImg from "../../../assets/imgs/apple.png";
import NaverImg from "../../../assets/imgs/naver.png";
import GoogleImg from "../../../assets/imgs/google.png";

import * as S from "./style";

function LoginPage() {
    return(
        <PageTemplate nav={false}>
            <S.Container>
                <LogoIcon />
                <LogoText />
                <S.BrandCopy>
                    <span>타인의 여행후기를</span>
                    <span>나만의 여행으로 만드는 새로운 방법</span>
                </S.BrandCopy>
                <S.OAuthSquareButton>
                    <img src={KakaoTalkImg} />
                    <span>카카오톡으로 시작하기</span>
                </S.OAuthSquareButton>
                <S.SeperateTextLine>
                    또는
                </S.SeperateTextLine>
                <S.OAuthButtons>
                    <S.OAuthCircleButton color="#00BF18">
                        <img src={NaverImg} />
                    </S.OAuthCircleButton>
                    <S.OAuthCircleButton color="#FFFFFF">
                        <img src={GoogleImg} />
                    </S.OAuthCircleButton>
                    <S.OAuthCircleButton color="#000000">
                        <img src={AppleImg} />
                    </S.OAuthCircleButton>
                </S.OAuthButtons>
                <S.HelpText to="/help">
                    도움이 필요하신가요?
                </S.HelpText>
            </S.Container>
        </PageTemplate>
    )
}

export default LoginPage;