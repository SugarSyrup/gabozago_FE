import { Link, useLocation } from "react-router-dom";
import HomeIcon from "../../../assets/icons/home.svg?react";
import MyIcon from "../../../assets/icons/my.svg?react";
import ScrapIcon from "../../../assets/icons/scrap.svg?react";
import TripIcon from "../../../assets/icons/trip.svg?react";
import * as S from "./style";

interface Props {
  style?: "white" | "black";
}
function BottomNavBar({ style = "white" }: Props) {
  const { pathname } = useLocation();
  const navItems = [
    { title: "홈", icon: <HomeIcon />, path: "/" },
    { title: "내 여행", icon: <TripIcon />, path: "/mytrip" },
    { title: "스크랩", icon: <ScrapIcon />, path: "/scrapbook" },
    { title: "MY", icon: <MyIcon />, path: "/profile" },
  ];
  const isMatches = (path: string) => {
    if (path === "/") {
      return pathname === "/" || pathname.startsWith("/journal") ? true : false;
    }

    return pathname.startsWith(path) ? true : false;
  };

  return (
    <S.Nav backgroundColor={style}>
      <S.NavList>
        {navItems.map((item) => (
          <S.ListItem
            active={isMatches(item.path)}
            activeColor={style === "black" ? "white" : "main"}
          >
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
