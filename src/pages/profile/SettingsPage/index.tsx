import { useLoaderData, useNavigate } from 'react-router-dom'

import ChevronRightIcon from '../../../assets/icons/chevron_right.svg?react'
import UserIcon from '../../../assets/icons/user.svg?react'
import { TUserProfile } from '../../../assets/types/TUserProfile'

import PageTemplate from '../../../components/common/PageTemplate'
import PageHeader from '../../../components/common/PageHeader'
import Typography from '../../../components/common/Typography'

import * as S from './style'

function SettingsPage() {
  const {
    id,
    nickname,
    description,
    avatarURL,
    clapCount,
    scrapCount,
    myTravelCount,
    myTravelDay,
  } = useLoaderData() as TUserProfile
  const navigate = useNavigate()
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
  ]

  return (
    <PageTemplate
      header={
        <PageHeader>
          <Typography.Title size="lg">설정</Typography.Title>
        </PageHeader>
      }
    >
      <S.ContentsWrapper>
        <S.UserSettingButton onClick={() => navigate('/profile/edit')}>
          <S.UserSettingLeftItems>
            {avatarURL ? (
              <img src={avatarURL} alt="user avatar" />
            ) : (
              <UserIcon />
            )}
            <div>
              <Typography.Title size="lg">{nickname}</Typography.Title>
              <Typography.Label size="lg">프로필 및 계정 설정</Typography.Label>
            </div>
          </S.UserSettingLeftItems>
          <ChevronRightIcon />
        </S.UserSettingButton>
        <S.SettingsContainer>
          {settings.map(group => (
            <div>
              <S.SettingTitleParagraph>
                <Typography.Title size="lg">{group.title}</Typography.Title>
              </S.SettingTitleParagraph>
              <ol>
                {group.items.map(item => (
                  <S.SettingItem
                    onClick={() => {
                      navigate(item.path)
                    }}
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
            navigate('/leave')
          }}
        >
          <Typography.Body size="lg" color="inherit">
            탈퇴하기
          </Typography.Body>
        </S.LeaveButton>
      </S.ContentsWrapper>
    </PageTemplate>
  )
}

export default SettingsPage
