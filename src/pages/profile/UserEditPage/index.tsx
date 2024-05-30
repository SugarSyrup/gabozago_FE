import * as S from "./style";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import PageTemplate from "../../../components/common/PageTemplate";
import Heading from "../../../components/common/Heading";

import { TUserProfile } from "../../../assets/types/TUserProfile";
import XIcon from "../../../assets/icons/x.svg?react";
import UserIcon from "../../../assets/icons/user.svg?react";
import CameraCircleIcon from "../../../assets/icons/camera_circle.svg?react";
import KakaoIcon from "../../../assets/icons/kakao.svg?react";
import InputContainer from "../../../components/common/InputContainer";
import ExtraButton from "../../../components/common/ExtraButton";
import usePopup from "../../../hooks/usePopup";
import { BrandIcon } from "../../auth/SignUpPage/style";
import Typography from "../../../components/common/Typography";
import { patch } from "../../../utils/api";
import Nickname from "../../../components/signUp/Nickname";

function UserEditPage() {
  const { id, nickname, description, avatarURL, clapCount, scrapCount, myTravelCount, myTravelDay } = useLoaderData() as TUserProfile;
  const { Popup, popupOpen, popupClose } = usePopup();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [nameValue, setNameValue] = useState(nickname);
  const [descValue, setDescValue] = useState(description);
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);
  const [isNicknameOk, setIsNicknameOk] = useState(false);
  const navigate = useNavigate();

  const [userAvatarURL, setUserAvatarURL] = useState(avatarURL);

  return (
    <PageTemplate nav={null}>
      <Popup>
        <S.PopupContainer>
          <Typography.Title size="lg">정말 로그아웃 하시겠습니까?</Typography.Title>
          <div>
            <S.PopupConfirmButton
              type={"secondary"}
              onClick={() => {
                popupClose();
              }}
            >
              <Typography.Label size="lg" color="inherit">취소</Typography.Label>
            </S.PopupConfirmButton>
            <S.PopupConfirmButton
              type={"primary"}
              onClick={() => {
                popupClose();
                localStorage.removeItem("access_token");
                localStorage.removeItem("refresh_token");
                navigate("/");
              }}
            >
              <Typography.Label size="lg" color="inherit">확인</Typography.Label>
            </S.PopupConfirmButton>
          </div>
        </S.PopupContainer>
      </Popup>
      <S.Form 
          onSubmit={(e) => {
            e.preventDefault();
            const formdata = new FormData(e.currentTarget);
            if (isNicknameOk || descValue !== description || isAvatarChanged) {
              patch('/user/profile', formdata)
                .then(() => {
                  navigate(-1);
                });
            }
          }}
        >
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
            type="submit"
            isActive={nameValue !== nickname || descValue !== description || isAvatarChanged}
          >
            완료
          </S.SubmitBtn>
        </S.Header>
        <S.AvatarWrapper>
          {
            userAvatarURL === "" ?
            <UserIcon width={90} height={90} />
            :
            <img src={userAvatarURL} style={{
              width:"90px",
              height:"90px",
              borderRadius:"100%",
            }}/>
          }
          <S.CameraIconWrapper htmlFor="avatar">
            <CameraCircleIcon width={24} height={24} />
          </S.CameraIconWrapper>
          <input type="file" name="avatar" id="avatar" accept="image/*" onInput={(e) => {
            if(e.currentTarget.files){
              const file = e.currentTarget.files[0];
              const reader = new FileReader();

              reader.readAsDataURL(file);
              reader.onloadend = () => {
                setUserAvatarURL(reader.result as string);
                setAvatarFile(file);
                setIsAvatarChanged(true);
              }
            }
          }}/>
        </S.AvatarWrapper>
       <Nickname setIsNicknameOk={setIsNicknameOk} defaultValue={nickname}/>
        <S.InputContainer>
          <label htmlFor="desc">소개</label>
          <textarea
            defaultValue={description}
            onInput={(e) => {
              setDescValue(e.currentTarget.value);
            }}
            placeholder="나를 한 줄로 소개해보세요! (선택)"
            id="desc"
            name="desc"
            maxLength={60}
          ></textarea>
          <InputContainer
            inputType="email"
            name="account"
            label="연결된 계정"
            disabled={true}
            required={true}
            explain={
              <>
                <BrandIcon type="kakao">
                  <KakaoIcon />
                </BrandIcon>
                카카오로 가입한 계정이에요
              </>
            }
          />
        </S.InputContainer>
      </S.Form>
      <ExtraButton
        label="로그아웃"
        onClick={() => {
          popupOpen();
        }}
      />
    </PageTemplate>
  );
}

export default UserEditPage;
