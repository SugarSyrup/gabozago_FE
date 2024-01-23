import * as S from "../../styles/common/BottomNavBar.style";

type NavItemType = "홈" | "내 여행" | "스크랩" | "MY";

interface Props {
  location: NavItemType;
}

function BottomNavBar({ location = "홈" }: Props) {
  const navItems: NavItemType[] = ["홈", "내 여행", "스크랩", "MY"];
  return (
    <S.Nav>
      <S.NavList>
        {navItems.map((item: string) => (
          <S.ListItem className={`${location === item && "active"}`}>
            <a>
              (아이콘)
              <span>{item}</span>
            </a>
          </S.ListItem>
        ))}
      </S.NavList>
    </S.Nav>
  );
}

export default BottomNavBar;
