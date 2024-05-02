import * as S from "./style";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import PageTemplate from "../../../components/common/PageTemplate";
import Heading from "../../../components/common/Heading";

import { userDataType } from "../../../assets/data/userData";
import XIcon from "../../../assets/icons/x.svg?react";
import UserIcon from "../../../assets/icons/user.svg?react";
import CameraCircleIcon from "../../../assets/icons/camera_circle.svg?react";
import RightChevronIcon from "../../../assets/icons/chevron_right.svg?react";
import KakaoIcon from "../../../assets/icons/kakao.svg?react";
import InputContainer from "../../../components/common/InputContainer";

function UserEditPage() {
  const { name, desc } = useLoaderData() as userDataType;
  const [nameValue, setNameValue] = useState(name);
  const [descValue, setDescValue] = useState(desc);
  const navigate = useNavigate();

  return (
    <PageTemplate nav={null}>
      <S.Header>
        <S.CloseIconWrapper>
          <XIcon
            onClick={() => {
              navigate(-1);
            }}
          />
        </S.CloseIconWrapper>
        <Heading size="sm">프로필 수정</Heading>
        <S.SubmitBtn
          isActive={nameValue !== name || descValue !== desc}
          onClick={() => {
            if (nameValue !== name || descValue !== desc) {
              // TODO : [백엔드] 조건 달성 시, POST
            }
          }}
        >
          완료
        </S.SubmitBtn>
      </S.Header>
      <S.Form>
        <S.AvatarWrapper>
          <UserIcon width={90} height={90} />
          <S.CameraIconWrapper htmlFor="avatarURL">
            <CameraCircleIcon width={24} height={24} />
          </S.CameraIconWrapper>
          <input type="file" name="avatarURL" id="avatarURL" />
        </S.AvatarWrapper>
        <S.InputContainer>
          <label htmlFor="username">이름</label>
          <input
            defaultValue={name}
            onChange={(e) => {
              setNameValue(e.currentTarget.value);
            }}
            name="username"
            id="username"
          ></input>
        </S.InputContainer>
        <S.InputContainer>
          <label htmlFor="desc">한 줄 소개</label>
          <input
            defaultValue={desc}
            onInput={(e) => {
              setDescValue(e.currentTarget.value);
            }}
            placeholder="나를 한 줄로 소개해보세요!(선택)"
            id="desc"
            name="desc"
          ></input>
          <InputContainer
            inputType="email"
            name="account"
            label="연결된 계정"
            disabled={true}
            required={true}
            explain={
              <>
                <KakaoIcon />
                카카오로 가입한 계정이에요
              </>
            }
          />
        </S.InputContainer>
      </S.Form>
      <S.ExitButton
        onClick={() => {
          navigate("/leave");
        }}
      >
        탈퇴하기 <RightChevronIcon />
      </S.ExitButton>
    </PageTemplate>
  );
}

export default UserEditPage;
