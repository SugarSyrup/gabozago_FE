import * as S from "./style";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import { useNavigate } from "react-router-dom";
import ChevronRightIcon from "../../../assets/icons/chevron_right.svg?react";
import { useState } from "react";
import NotificationToggleButton from "../../../components/profile/settings/NotificationToggleButton";

function SettingsPage() {
  const navigate = useNavigate();
  const [isActivityNotiAllowed, setIsActivityNotiAllowed] =
    useState<boolean>(false);
  const username = "최민석";
  const settings = [
    {
      title: "고객 지원",
      items: [
        {
          text: "공지사항",
          path: "/cscenter/announce",
        },
        {
          text: "고객센터 • 도움말",
          path: "/cscenter/help",
        },
        {
          text: "의견보내기",
          path: "/cscenter/feedback",
        },
      ],
    },
    {
      title: "서비스 정보",
      items: [
        {
          text: "서비스 이용 약관",
          path: "/terms/01",
        },
        {
          text: "개인정보 수집 및 이용동의",
          path: "/terms/02",
        },
        {
          text: "위치 서비스 이용 동의",
          path: "/terms/03",
        },
        {
          text: "오픈소스 라이센스",
          path: "/terms/04",
        },
      ],
    },
  ];

  return (
    <PageTemplate header={<PageHeader>설정</PageHeader>}>
      <S.ContentsWrapper>
        <S.UserSettingButton onClick={() => navigate(`/profile/edit`)}>
          <div>
            <p>{username}</p>
            <p>프로필 및 계정 설정</p>
          </div>
          <ChevronRightIcon />
        </S.UserSettingButton>
        <S.SettingsContainer>
          <div>
            <S.SettingTitleParagraph>알림 설정</S.SettingTitleParagraph>
            <NotificationToggleButton
              name="활동 알림"
              desc="좋아요, 댓글, 팔로우 등 내 활동에 대한 알림이에요."
              active={isActivityNotiAllowed}
              onClick={() => {
                setIsActivityNotiAllowed((prev) => !prev);
              }}
            />
          </div>
          {settings.map((group) => (
            <div>
              <S.SettingTitleParagraph>{group.title}</S.SettingTitleParagraph>
              <ol>
                {group.items.map((item) => (
                  <S.SettingItem
                    onClick={() => {
                      navigate(item.path);
                    }}
                  >
                    {item.text}
                    <ChevronRightIcon />
                  </S.SettingItem>
                ))}
              </ol>
            </div>
          ))}
          <S.LogOutButton>로그아웃</S.LogOutButton>
        </S.SettingsContainer>
      </S.ContentsWrapper>
    </PageTemplate>
  );
}

export default SettingsPage;
