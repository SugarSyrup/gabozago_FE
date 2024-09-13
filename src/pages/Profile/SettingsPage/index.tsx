import { useLoaderData, useNavigate } from 'react-router-dom';

import ChevronRightIcon from '../../../assets/icons/chevron_right.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import { TUserProfile } from '../../../assets/types/TUserProfile';

import PageTemplate from '../../../components/common/PageTemplate';
import Typography from '../../../components/common/Typography';

import * as S from './style';
import { HeaderWithBack } from '../../../components/common/Header';
import { useEffect, useState } from 'react';
import { get, post } from '@_utils/api';

function SettingsPage() {
  const { nickname, avatarURL } = useLoaderData() as TUserProfile;
  const [isActive, setIsActive] = useState(false);
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
          // path: '/cscenter',
          path: 'http://pf.kakao.com/_xgxfxoxcG/chat',
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
          // path: '/terms/04',
          path: 'http://teamfore.notion.site/15c4abba6dbc4c788511d7466ca2a801?pvs=25',
        },
        {
          text: '개인정보 수집 및 이용동의',
          // path: '/terms/05',
          path: 'https://teamfore.notion.site/61f78ba3a6924fe384b1ecb87bdab271?pvs=25',
        },
        {
          text: '위치정보 이용약관',
          path: '/terms/01',
          // path: 'http://teamfore.notion.site/f5afac74fa1f4abb8a4ca09c5e8d47bf?pvs=25',
        },
        {
          text: '데이터 제공 정책',
          // path: '/terms/06',
          path: 'http://teamfore.notion.site/dbc5a006bf2a4a4d838ed9447d6731a0?pvs=25',
        },
        {
          text: '오픈소스 라이센스',
          // path: '/terms/07',
          path: 'https://teamfore.notion.site/815a648d0b5c40f3b2b262e146bfd0fc?pvs=25',
        },
      ],
    },
  ];

  useEffect(() => {
    get<{
      TERMS02: boolean;
    }>('/settings/terms?q=TERMS02').then((res) => {
      setIsActive(res.data.TERMS02);
    });
  }, []);

  return (
    <PageTemplate header={<HeaderWithBack>설정</HeaderWithBack>}>
      <S.ContentsWrapper>
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
        <S.SeperateLine />

        {/* Settings Section */}
        <S.SettingsContainer>
          <S.SettingListContainer>
            <S.SettingTitleParagraph>
              <Typography.Title size="lg" color="inherit">
                {settings[0].title}
              </Typography.Title>
            </S.SettingTitleParagraph>
            <ol>
              {settings[0].items.map((item, index) => (
                <S.SettingItem
                  onClick={() => {
                    if (item.path.includes('http')) {
                      window.location.href = item.path;
                    } else {
                      navigate(item.path);
                    }
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
          </S.SettingListContainer>

          <S.SeperateLine />

          <S.LocationAccessContainer>
            <Typography.Title size="lg" color="inherit">
              알림 설정
            </Typography.Title>
            <S.LocationAccessToggleWrapper>
              <Typography.Body size="md" color="inherit">
                앱 이용 정보 푸시 알림
              </Typography.Body>
              <S.ToggleSwitch
                isActive={isActive}
                onClick={() => {
                  setIsActive((prev) => !prev);
                  post('/settings/terms', {
                    term: 'TERMS02',
                  });
                }}
              >
                <div />
              </S.ToggleSwitch>
            </S.LocationAccessToggleWrapper>
            <Typography.Body size="md" color="inherit" noOfLine={2}>
              알림이 오지 않을 경우, 기기 설정 &gt; 가보자고 앱의 <br />
              알림 허용 여부를 확인해 주세요!
            </Typography.Body>
          </S.LocationAccessContainer>

          <S.SeperateLine />

          <S.SettingListContainer>
            <S.SettingTitleParagraph>
              <Typography.Title size="lg" color="inherit">
                {settings[1].title}
              </Typography.Title>
            </S.SettingTitleParagraph>
            <ol>
              {settings[1].items.map((item, index) => (
                <S.SettingItem
                  onClick={() => {
                    if (item.path.includes('http')) {
                      window.location.href = item.path;
                    } else {
                      navigate(item.path);
                    }
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
          </S.SettingListContainer>
        </S.SettingsContainer>
        <S.LeaveButton
          onClick={() => {
            navigate('/leave');
          }}
          style={{
            textDecoration: 'underline',
            cursor: 'pointer',
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
