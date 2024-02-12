import { ReactNode } from "react";
import BottomNavBar from "./BottomNavBar";
// import Header from "../components/common/Header";
import * as S from "../../styles/common/PageTemplate.style";
import { useRecoilValue } from "recoil";
import { planViewModeState } from "../../recoil/planViewModeState";
import EditModeBottomControlBox from "../tripDetail/EditModeBottomControlBox";

interface Props {
  children: ReactNode;
  nav?: boolean;
}

function PageTemplate({ children, nav = true }: Props) {
  const viewMode = useRecoilValue(planViewModeState);

  return (
    <S.Container>
      <S.Content>{children}</S.Content>
      {nav && viewMode !== "EDIT" && <BottomNavBar location="내 여행" />}
      {viewMode === "EDIT" && <EditModeBottomControlBox />}
    </S.Container>
  );
}

export default PageTemplate;
