import { useEffect, useRef, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import SettingIcon from '@_icons/setting.svg?react';
import UserIcon from '@_icons/user.svg?react';
import BellIcon from '@_icons/bell_pin.svg?react';
import ChevronRightIcon from '@_icons/chevron_right_expand.svg?react';
import { TUserProfile } from '../../../assets/types/TUserProfile';

import PageTemplate from '../../../components/common/PageTemplate';
import UserTrip from '../../../components/profile/UserTrip';
import UserActivity from '../../../components/profile/UserActivity';
import Typography from '../../../components/common/Typography';

import * as S from './style';
import { get } from '@_utils/api';
import { Header, HeaderText } from '../../../components/common/Header';

const userStatics = [
  {
    name: '공감 수',
    value: 'reactionCount',
  },
  {
    name: '스크랩 수',
    value: 'favoriteCount',
  },
  {
    name: '여행 일',
    value: 'myTravelDay',
  },
  {
    name: '여행 수',
    value: 'myTravelCount',
  },
];

function ProfilePage() {
  const navigate = useNavigate();
  const [myNumbericalInfo, setMyNumbericalInfo] = useState<{
    myTravelDay: number;
    myTravelCount: number;
    reactionCount: number;
    favoriteCount: number;
  }>({
    myTravelDay: 0,
    myTravelCount: 0,
    reactionCount: 0,
    favoriteCount: 0,
  });
  const [currentTap, setCurrentTap] = useState<'trip' | 'activity'>('trip');
  const [isNotifications, setIsNotifications] = useState<boolean>(false);
  const swiperRef = useRef<HTMLDivElement>(null);

  const { nickname, description, avatarURL } = useLoaderData() as TUserProfile;
  useEffect(() => {
    get<{
      myTravelDay: number;
      myTravelCount: number;
    }>('/user/profile/my-travel-count').then((response) => {
      setMyNumbericalInfo((prev) => ({
        ...prev,
        ...response.data,
      }));
    });

    get<{
      reactionCount: number;
      favoriteCount: number;
    }>('/user/profile/clap-scrap-count').then((response) => {
      setMyNumbericalInfo((prev) => ({
        ...prev,
        ...response.data,
      }));
    });
  }, []);

  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.addEventListener('scrollend', (e: Event) => {
      const currentTarget = e.currentTarget as HTMLDivElement;

      if (
        swiperRef.current !== null &&
        currentTarget.scrollLeft < swiperRef.current.offsetWidth / 2
      ) {
        setCurrentTap('trip');
      } else {
        setCurrentTap('activity');
      }
    });
  }, []);

  useEffect(() => {
    if (!swiperRef.current) return;
    if (currentTap === 'trip') {
      swiperRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      swiperRef.current.scrollTo({ left: swiperRef.current?.offsetWidth, behavior: 'smooth' });
    }
  }, [currentTap]);

  useEffect(() => {
    get<{ reminder: boolean }>('/user/web-notification/reminder').then((response) => {
      setIsNotifications(response.data.reminder);
    });
  });

  return (
    <PageTemplate
      header={
        <>
          <Header>
            <HeaderText>
              <Typography.Headline size="sm" color="inherit">
                MY
              </Typography.Headline>
            </HeaderText>
            <S.RightIconContainer>
              <S.BellWrapper
                isAlert={isNotifications}
                onClick={() => {
                  navigate('/notifications');
                }}
              >
                <BellIcon />
              </S.BellWrapper>
              <S.SettingWrapper>
                <SettingIcon
                  onClick={() => {
                    navigate('/profile/settings');
                  }}
                />
              </S.SettingWrapper>
            </S.RightIconContainer>
          </Header>
          <S.FixedContainer>
            <S.UserInfomation>
              <S.UserProfile>
                {avatarURL ? <img src={avatarURL} alt={`${nickname} img`} /> : <UserIcon />}
                <Typography.Title size="lg">{nickname}</Typography.Title>
              </S.UserProfile>
              <S.ProfileEditBtn to="edit">
                <ChevronRightIcon />
              </S.ProfileEditBtn>
            </S.UserInfomation>

            {description && (
              <S.UserIntroduce>
                <Typography.Body size="md" noOfLine={5}>
                  {description}
                </Typography.Body>
              </S.UserIntroduce>
            )}

            <S.Statics>
              {userStatics.map((staticItem, index) => (
                <S.StaticItem key={`${staticItem.name} ${index}`}>
                  <S.StaticItemName>
                    <Typography.Title size="md" color="inherit">
                      {staticItem.name}
                    </Typography.Title>
                  </S.StaticItemName>
                  <S.StaticItemStat>
                    <Typography.Title size="md" color="inherit">
                      {myNumbericalInfo[staticItem.value as keyof typeof myNumbericalInfo]}
                    </Typography.Title>
                  </S.StaticItemStat>
                </S.StaticItem>
              ))}
            </S.Statics>

            <S.TapNavigationBar currentTap={currentTap}>
              <S.TapNavigation
                onClick={() => {
                  setCurrentTap('trip');
                }}
                isHighlight={currentTap === 'trip'}
              >
                <Typography.Title size="md" color="inherit" noOfLine={1}>
                  나의 여행
                </Typography.Title>
              </S.TapNavigation>
              <S.TapNavigation
                onClick={() => {
                  setCurrentTap('activity');
                }}
                isHighlight={currentTap === 'activity'}
              >
                <Typography.Title size="md" color="inherit">
                  나의 활동
                </Typography.Title>
              </S.TapNavigation>
            </S.TapNavigationBar>
            <S.SeperateLine />
          </S.FixedContainer>
        </>
      }
    >
      <S.MyPageSwiper ref={swiperRef}>
        <S.SwiperItem>
          <UserTrip />
        </S.SwiperItem>
        <S.SwiperItem>
          <UserActivity />
        </S.SwiperItem>
      </S.MyPageSwiper>
    </PageTemplate>
  );
}

export default ProfilePage;
