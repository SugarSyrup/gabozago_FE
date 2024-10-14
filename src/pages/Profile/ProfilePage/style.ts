import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FixedContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;

  background-color: white;
`;

// Header Section
export const RightIconContainer = styled.div`
  grid-area: right;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 28px;
`;

export const BellWrapper = styled.div<{ isAlert: boolean }>`
  flex-shrink: 0;
  svg {
    width: 24px;
    height: 24px;

    circle {
      fill: ${({ theme, isAlert }) =>
        isAlert ? theme.colors.red.primary : theme.colors.white.primary};
    }
  }
`;

export const SettingWrapper = styled.div`
  flex-shrink: 0;
  svg {
    width: 24px;
    height: 24px;

    path {
      fill: #33363f;
    }
  }
`;

// User Information Section

export const UserInfomation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 64px;
    height: 64px;
    path {
      fill: ${({ theme }) => theme.main};
    }
  }

  img {
    width: 64px;
    height: 64px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

export const ProfileEditBtn = styled(Link)`
  cursor: pointer;
`;

export const UserIntroduce = styled.div`
  width: 100%;
  padding: 14px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.blue05};

  margin-top: 10px;
`;

// User Statics Section
export const Statics = styled.ol`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 6px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));

  @media screen and (max-width: 470px) {
    grid-template-columns: repeat(2, minmax(0px, 2fr));
    grid-template-rows: repeat(2, minmax(0px, 2fr));
  }

  @media screen and (max-width: 220px) {
    grid-template-columns: repeat(1, minmax(0px, 1fr));
    grid-template-rows: repeat(4, minmax(0px, 1fr));
  }
  gap: 10px;
`;

export const StaticItem = styled.li<{ isHover?: boolean }>`
  width: 100%;
  min-width: 90px;
  padding: 6px 17px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.gray06};

  &:hover {
    background-color: ${({ isHover, theme }) => isHover && theme.blue04};
    cursor: pointer;
  }
`;

export const StaticItemName = styled.h4`
  color: #a6a6a6;
`;

export const StaticItemStat = styled.span`
  color: ${({ theme }) => theme.gray};
`;

// Tap Navigation Section
export const TapNavigationBar = styled.nav<{ currentTap: string }>`
  width: 100%;
  overflow-x: auto;
  margin-top: 15px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  &::before {
    content: '';
    width: 84px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue.primary};

    position: absolute;
    left: ${({ currentTap }) => (currentTap === 'trip' ? '20px' : '104px')};
    bottom: -2px;
    z-index: 10;

    transition: left 0.3s;
  }
`;

export const TapNavigation = styled.span<{ isHighlight?: boolean }>`
  padding: 14px 16px;
  box-sizing: content-box;

  white-space: nowrap;
  color: ${({ theme, isHighlight }) => (isHighlight ? theme.main : theme.gray01)};
`;

export const SeperateLine = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  left: 0px;
  background-color: ${({ theme }) => theme.gray05};
`;

export const MyPageSwiper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  gap: 40px;

  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-type: x mandatory;
`;

export const SwiperItem = styled.div`
  scroll-snap-align: start;
  width: 100%;

  background-color: white;
  flex-shrink: 0;
`;
