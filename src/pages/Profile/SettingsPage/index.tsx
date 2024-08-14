import { useLoaderData, useNavigate } from 'react-router-dom';

import ChevronRightIcon from '../../../assets/icons/chevron_right.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import { TUserProfile } from '../../../assets/types/TUserProfile';

import PageTemplate from '../../../components/common/PageTemplate';
import Typography from '../../../components/common/Typography';

import * as S from './style';
import { HeaderWithBack } from '../../../components/common/Header';

function SettingsPage() {
  const { nickname, avatarURL } = useLoaderData() as TUserProfile;
  const navigate = useNavigate();
  const settings = [
    {
      title: '고객 지원',
      items: [
        {
          text: '공지사항',
          path: '/cscenter/announce',
        },
        {
          text: '고객센터 • 도움말',
          path: '/cscenter',
        },
        {
          text: '의견보내기',
          path: '/cscenter/feedback',
        },
      ],
    },
    {
      title: '서비스 정보',
      items: [
        {
          text: '서비스 이용 약관',
          path: '/terms/01',
        },
        {
          text: '개인정보 수집 및 이용동의',
          path: '/terms/02',
        },
        {
          text: '오픈소스 라이센스',
          path: '/terms/04',
        },
      ],
    },
  ];

  return (
    <PageTemplate header={<HeaderWithBack>설정</HeaderWithBack>}>
      <S.ContentsWrapper>
        {/* User Account Info & Setting Section */}
        <S.UserSettingButton>
          <S.UserSettingLeftItems>
            {avatarURL ? <img src={avatarURL} alt="user avatar" /> : <UserIcon />}
            <div>
              <Typography.Title size="lg">{nickname}</Typography.Title>
              <Typography.Label size="lg" color="#424242">
                프로필 및 계정 설정
              </Typography.Label>
            </div>
          </S.UserSettingLeftItems>
          <ChevronRightIcon onClick={() => navigate('/profile/edit')} />
        </S.UserSettingButton>

        {/* Settings Section */}
        <S.SettingsContainer>
          {settings.map((group, index) => (
            <div key={`${group.title} ${index}`}>
              <S.SettingTitleParagraph>
                <Typography.Title size="lg" color="inherit">
                  {group.title}
                </Typography.Title>
              </S.SettingTitleParagraph>
              <ol>
                {group.items.map((item) => (
                  <S.SettingItem
                    onClick={() => {
                      navigate(item.path);
                    }}
                    key={`${item.text} ${index}`}
                  >
                    <Typography.Body size="md" color="inherit">
                      {item.text}
                    </Typography.Body>
                    <ChevronRightIcon />
                  </S.SettingItem>
                ))}
              </ol>
            </div>
          ))}
        </S.SettingsContainer>
        <S.LeaveButton
          onClick={() => {
            navigate('/leave');
          }}
        >
          <Typography.Body size="lg" color="inherit">
            탈퇴하기
          </Typography.Body>
        </S.LeaveButton>
      </S.ContentsWrapper>
    </PageTemplate>
  );
}

export default SettingsPage;
