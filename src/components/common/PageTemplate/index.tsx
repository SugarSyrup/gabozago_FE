import * as S from "./style";
import { ReactNode } from "react";
import BottomNavBar from "../BottomNavBar";

interface Props {
  children: ReactNode;
  nav?: ReactNode | "default" | boolean;
}

function PageTemplate({ children, nav = "default" }: Props) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
      {nav === "default" ? <BottomNavBar /> : nav}
    </S.Container>
  );
}

export default PageTemplate;
