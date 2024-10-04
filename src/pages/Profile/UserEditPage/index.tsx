import loadImage from 'blueimp-load-image';
import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import * as S from './style';

import PageTemplate from '../../../components/common/PageTemplate';
import Heading from '../../../components/common/Heading';

import { TUserProfile } from '../../../assets/types/TUserProfile';
import XIcon from '../../../assets/icons/x.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import CameraCircleIcon from '../../../assets/icons/camera_circle.svg?react';
import KakaoIcon from '../../../assets/icons/kakao.svg?react';
import InputContainer from '../../../components/common/InputContainer';
import ExtraButton from '../../../components/common/ExtraButton';
import usePopup from '../../../hooks/usePopup';
import { BrandIcon } from '../../Auth/SignUpPage/style';
import Typography from '../../../components/common/Typography';
import { patch } from '@_utils/api';
import Nickname from '../../../components/signUp/Nickname';
import { useSetRecoilState } from 'recoil';
import { popupValue } from '@_recoil/common/PopupValue';

function UserEditPage() {
  const { nickname, description, avatarURL, email } = useLoaderData() as TUserProfile;
  const { popupOpen, popupClose } = usePopup();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [nameValue, setNameValue] = useState(nickname);
  const [descValue, setDescValue] = useState(description);
  const [isAvatarChanged, setIsAvatarChanged] = useState(false);
  const [isNicknameOk, setIsNicknameOk] = useState(false);
  const navigate = useNavigate();
  const setPopupValue = useSetRecoilState(popupValue);

  const [userAvatarURL, setUserAvatarURL] = useState(avatarURL);

  useEffect(() => {
    setPopupValue({
      Header: '정말 로그아웃 하시겠습니까?',
      CloseButton: {
        text: '취소',
        onClick: () => {
          popupClose();
        },
      },
      ConfirmButton: {
        text: '확인',
        onClick: () => {
          localStorage.removeItem('access_token');

          try {
            if (window.GabozagoDev) {
              window.GabozagoDev.logout();
            }
            if (window.webkit.messageHandlers.gabozagoDev) {
              window.webkit.messageHandlers.gabozagoDev.postMessage({
                action: 'logout',
                code: 'logout',
              });
            }
          } catch (e) {
            console.log(e);
          }

          popupClose();
          navigate('/');
        },
      },
    });
  });

  return (
    <PageTemplate nav={null}>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          const formdata = new FormData(e.currentTarget);

          patch('/user/profile', formdata).then(() => {
            navigate(-1);
          });

          // if (isNicknameOk || descValue !== description || isAvatarChanged) {
          //   loadImage(
          //     formdata.get('avatar') as File,
          //     (img, data) => {
          //       console.log(data);
          //       if (data === undefined) {
          //         console.log('a');
          //         patch('/user/profile', formdata).then(() => {
          //           navigate(-1);
          //         });
          //       } else if (data.imageHead && data.exif) {
          //         console.log('c');
          //         loadImage.writeExifData(data.imageHead, data, 'Orientation', 1);
          //         img.toBlob((blob) => {
          //           loadImage.replaceHead(blob, data.imageHead, async (newBlob) => {
          //             console.log(newBlob);
          //             formdata.set('avatar', newBlob);

          //             patch('/user/profile', {
          //               avatar: newBlob,
          //               nickname: formdata.get('nickname'),
          //               desc: formdata.get('desc'),
          //             }).then(() => {
          //               navigate(-1);
          //             });
          //           });
          //         }, 'image/jpeg, image/png');
          //       } else {
          //         console.log('d');
          //         patch('/user/profile', formdata).then(() => {
          //           navigate(-1);
          //         });
          //       }
          //     },
          //     { meta: true, orientation: true, canvas: true },
          //   );
          // }
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
            isActive={isNicknameOk || descValue !== description || isAvatarChanged}
          >
            완료
          </S.SubmitBtn>
        </S.Header>
        <S.AvatarWrapper>
          {userAvatarURL === '' ? (
            <UserIcon width={90} height={90} />
          ) : (
            <img
              src={userAvatarURL}
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '100%',
                objectFit: 'cover',
              }}
              alt={`${{ nickname }}님의 프로필 사진`}
            />
          )}
          <S.CameraIconWrapper htmlFor="avatar">
            <CameraCircleIcon width={24} height={24} />
          </S.CameraIconWrapper>
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            onInput={(e) => {
              if (e.currentTarget.files) {
                const file = e.currentTarget.files[0];
                const reader = new FileReader();

                reader.readAsDataURL(file);
                reader.onloadend = () => {
                  setUserAvatarURL(reader.result as string);
                  setAvatarFile(file);
                  setIsAvatarChanged(true);
                };
              }
            }}
          />
        </S.AvatarWrapper>
        <Nickname setIsNicknameOk={setIsNicknameOk} defaultValue={nickname} />
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
          />
          <InputContainer
            inputType="email"
            name="account"
            label="연결된 계정"
            value={email}
            disabled
            required
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
