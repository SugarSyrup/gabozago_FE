import * as S from "./style";
import { ReactNode } from "react";
import BottomNavBar from "../BottomNavBar";

interface Props {
  children: ReactNode;
  nav?: ReactNode | "default" | boolean;
  header?: ReactNode;
}

function PageTemplate({ children, nav = "default", header }: Props) {
  return (
    <S.Container header={header ? true : false}>
      {header && header}
      <S.Content header={header ? true : false}>{children}</S.Content>
      {nav === "default" ? <BottomNavBar /> : nav}
    </S.Container>
  );
}

export default PageTemplate;
