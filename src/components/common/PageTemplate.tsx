import { ReactNode } from "react";
import BottomNavBar from "./BottomNavBar";
// import Header from "../components/common/Header";
import * as S from "../../styles/common/PageTemplate.style";

interface Props {
  children: ReactNode;
  header?: boolean;
  nav?: boolean;
}

function PageTemplate({ children, header = true, nav = true }: Props) {
  return (
    <S.Container>
      {/* {header && <Header />} */}
      <S.Content>{children}</S.Content>
      {nav && <BottomNavBar location="내 여행" />}
    </S.Container>
  );
}

export default PageTemplate;
