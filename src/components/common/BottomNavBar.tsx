import { ReactNode } from "react";
import HomeIcon from "../../assets/icons/home.svg?react";
import MyIcon from "../../assets/icons/my.svg?react";
import ScrapIcon from "../../assets/icons/scrap.svg?react";
import TripIcon from "../../assets/icons/trip.svg?react";
import * as S from "../../styles/common/BottomNavBar.style";
import { Link } from "react-router-dom";

interface TabProps {
  title: string;
  active?: boolean;
  path?: string;
  icon?: ReactNode;
}
function Tab({ active, title, path = "", icon }: TabProps) {
  return (
    <S.ListItem $active={active}>
      <Link to={path}>
        {icon}
        <span>{title}</span>
      </Link>
    </S.ListItem>
  );
}

function BottomNavBar({ location = "홈" }) {
  /**
   * @todo 라우트 변경 시 path 옵션 수정이 필요합니다.
   */
  const navItems = [
    { title: "홈", icon: <HomeIcon />, path: "" },
    { title: "내 여행", icon: <TripIcon />, path: "" },
    { title: "스크랩", icon: <ScrapIcon />, path: "" },
    { title: "MY", icon: <MyIcon />, path: "" },
  ];

  return (
    <S.Nav>
      <S.NavList>
        {navItems.map((item) => (
          <Tab
            title={item.title}
            active={location === item.title ? true : false}
            icon={item.icon}
            path={item.path}
          />
        ))}
      </S.NavList>
    </S.Nav>
  );
}

export default BottomNavBar;
