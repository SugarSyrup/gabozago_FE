import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PageTemplate from '../../../components/common/PageTemplate';
import InputContainer from '../../../components/common/InputContainer';

import CheckBoxs from '../../../components/signUp/CheckBoxs';
import RecommendNickname from '../../../components/signUp/RecommendNickname';
import Nickname from '../../../components/signUp/Nickname';

import KakaoIcon from '../../../assets/icons/kakao.svg?react';
import NaverIcon from '../../../assets/icons/naver.svg?react';
import GoogleIcon from '../../../assets/icons/google.svg?react';
import AppleIcon from '../../../assets/icons/apple.svg?react';

import * as S from './style';
import { post } from '@_utils/api';
import { LoginResponse } from '@_types/LoginResponse.type';
import { HeaderWithBack } from '@_common/Header';

function SignUpPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const type = searchParams.get('type');
  const emailParmas = searchParams.get('email');
  const codeParams = searchParams.get('code');

  const [isNicknameOk, setIsNicknameOk] = useState<boolean>(false);
  const [checkboxActive, setCheckboxActive] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isRecommenderOk, setIsRecommendarOk] = useState(-1);

  useEffect(() => {
    if (isNicknameOk && checkboxActive) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  }, [isNicknameOk, checkboxActive]);

  return (
    <PageTemplate nav={false} header={<HeaderWithBack>회원 가입</HeaderWithBack>}>
      <S.FormContainer
        action="post"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          const { nickname } = Object.fromEntries(formData);
          let body = {};

          if (type === 'naver') {
            body = {
              emailParmas,
              nickname,
            };
          } else {
            body = {
              nickname,
            };
          }

          const optionalTerms = [];

          if (formData.get('TERMS01')) {
            optionalTerms.push('TERMS01');
          }

          if (formData.get('TERMS02')) {
            optionalTerms.push('TERMS02');
          }

          body = {
            ...body,
            optionalTerms,
          };

          if (isRecommenderOk !== -1) {
            body = {
              ...body,
              recommender: isRecommenderOk,
            };
          }
          localStorage.setItem('access_token', codeParams as string);
          post<LoginResponse>('/user/sign-in', body).then((response) => {
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
          });
        }}
      >
        <InputContainer
          inputType="email"
          name="email"
          label="연결된 계정"
          disabled={false}
          readonly
          required
          value={emailParmas || ''}
          explain={
            <>
              {(() => {
                switch (type) {
                  case 'kakao':
                    return (
                      <>
                        <S.BrandIcon type={type}>
                          <KakaoIcon />
                        </S.BrandIcon>
                        카카오로 가입한 계정이에요
                      </>
                    );
                  case 'google':
                    return (
                      <>
                        <S.BrandIcon type={type}>
                          <GoogleIcon />
                        </S.BrandIcon>
                        구글로 가입한 계정이에요
                      </>
                    );
                  case 'naver':
                    return (
                      <>
                        <S.BrandIcon type={type}>
                          <NaverIcon />
                        </S.BrandIcon>
                        네이버로 가입한 계정이에요
                      </>
                    );
                  case 'apple':
                    return (
                      <>
                        <S.BrandIcon type={type}>
                          <AppleIcon />
                        </S.BrandIcon>
                        애플로 가입한 계정이에요
                      </>
                    );
                }
              })()}
            </>
          }
        />
        <Nickname setIsNicknameOk={setIsNicknameOk} />
        <CheckBoxs setCheckboxActive={setCheckboxActive} />

        <RecommendNickname setIsRecommendarOk={setIsRecommendarOk} />

        <S.ButtonWrapper>
          <S.Button formAction="" type="submit" disabled={!isButtonActive}>
            회원가입 완료
          </S.Button>
        </S.ButtonWrapper>
      </S.FormContainer>
    </PageTemplate>
  );
}

export default SignUpPage;
