import { ReactNode } from "react";
import BottomNavBar from "./BottomNavBar";
import * as S from "../../styles/common/PageTemplate.style";
interface Props {
  children: ReactNode;
  nav?: ReactNode;
}

function PageTemplate({ children, nav = <BottomNavBar /> }: Props) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
      {nav}
    </S.Container>
  );
}

export default PageTemplate;
