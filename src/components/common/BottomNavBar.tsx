import { Link } from "react-router-dom";
import HomeIcon from "../../assets/icons/home.svg?react";
import MyIcon from "../../assets/icons/my.svg?react";
import ScrapIcon from "../../assets/icons/scrap.svg?react";
import TripIcon from "../../assets/icons/trip.svg?react";
import * as S from "../../styles/common/BottomNavBar.style";

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
          <S.ListItem $active={location === item.title ? true : false}>
            <Link to={item.path}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </S.ListItem>
        ))}
      </S.NavList>
    </S.Nav>
  );
}

export default BottomNavBar;
