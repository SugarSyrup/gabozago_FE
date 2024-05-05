import { useEffect, useRef, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

import { userDataType } from "../../../assets/data/userData";
import SettingIcon from "../../../assets/icons/setting.svg?react";
import UserIcon from "../../../assets/icons/user.svg?react";

import PageTemplate from "../../../components/common/PageTemplate";
import UserTrip from "../../../components/profile/UserTrip";
import UserActivity from "../../../components/profile/UserActivity";

import * as S from "./style";
import Typography from "../../../components/common/Typography";

function ProfilePage() {
  const [isMyProfile, setIsMyProfile] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>(200);
  const [currentTap, setCurrentTap] = useState<"trip" | "activity">(
    "trip"
  );
  const { name, follower, following, reviews, hearts, views, desc } =
    useLoaderData() as userDataType;
  const FixedHeaderRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    //TODO : [백엔드/로그인] 로그인 정보 비교해서 내 프로필인지 남의 프로필인지 설정
  }, []);

  useEffect(() => {
    if (FixedHeaderRef.current) {
      setHeaderHeight(FixedHeaderRef.current.offsetHeight);
    }
  }, [FixedHeaderRef.current]);

  return (
    <PageTemplate>
      <S.SettingIconWrapper onClick={() => {navigate('/profile/settings')}}>
        <SettingIcon />
      </S.SettingIconWrapper>
      <S.FixedContainer ref={FixedHeaderRef}>
        <S.Header>
          <S.UserProfile>
            <UserIcon />
            <Typography.Title size="lg">{name}</Typography.Title>
          </S.UserProfile>
            <S.ProfileEditBtn
              onClick={() => {
                navigate(`edit`);
              }}
            >
              <Typography.Title size="md" color="inherit">프로필 수정</Typography.Title>
            </S.ProfileEditBtn>
        </S.Header>

        <S.UserIntroduce>
          <Typography.Body size="md" noOfLine={5}>{desc}</Typography.Body>
        </S.UserIntroduce>

        <S.Statics>
          <S.StaticItem>
            <S.StaticItemName>
              <Typography.Title size="md" color="inherit">공감 수</Typography.Title>
            </S.StaticItemName>
            <S.StaticItemStat>
              <Typography.Title size="md" color="inherit">{views}</Typography.Title>  
            </S.StaticItemStat>
          </S.StaticItem>
          <S.StaticItem>
            <S.StaticItemName>
              <Typography.Title size="md" color="inherit">스그랩 수</Typography.Title>
            </S.StaticItemName>
            <S.StaticItemStat>
              <Typography.Title size="md" color="inherit">{views}</Typography.Title>  
            </S.StaticItemStat>
          </S.StaticItem>
          <S.StaticItem>
            <S.StaticItemName>
              <Typography.Title size="md" color="inherit">여행 일</Typography.Title>
            </S.StaticItemName>
            <S.StaticItemStat>
              <Typography.Title size="md" color="inherit">{views}</Typography.Title>  
            </S.StaticItemStat>
          </S.StaticItem>
          <S.StaticItem>
            <S.StaticItemName>
              <Typography.Title size="md" color="inherit">여행 수</Typography.Title>
            </S.StaticItemName>
            <S.StaticItemStat>
              <Typography.Title size="md" color="inherit">{views}</Typography.Title>  
            </S.StaticItemStat>
          </S.StaticItem>
        </S.Statics>

        <S.TapNavigationBar>
          <S.TapNavigation
            onClick={() => {
              setCurrentTap("trip");
            }}
            isHighlight={currentTap === "trip"}
          >
            <Typography.Title size="md">나의 여행</Typography.Title>
          </S.TapNavigation>
          <S.TapNavigation
            onClick={() => {
              setCurrentTap("activity");
            }}
            isHighlight={currentTap === "activity"}
          >
            <Typography.Title size="md">나의 활동</Typography.Title>
          </S.TapNavigation>
        </S.TapNavigationBar>
        <S.SeperateLine>
          <S.HighLightLine position={currentTap} />
        </S.SeperateLine>
      </S.FixedContainer>
      
      <S.Content FixedContainerHeight={headerHeight}>
        {(() => {
          switch (currentTap) {
            case "trip":
              return <UserTrip username={isMyProfile ? "나" : "USER"} />;
            case "activity":
              return <UserActivity />;
            default:
              return null;
          }
        })()}
      </S.Content>
    </PageTemplate>
  );
}

export default ProfilePage;
