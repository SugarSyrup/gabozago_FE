import * as S from "./style";
import { ReactNode, useEffect } from "react";
import BottomNavBar from "../BottomNavBar";
import { useRecoilValue } from "recoil";
import { modalState } from "../../../recoil/modalState";
import useModal from "../../../hooks/useModal";

interface Props {
  children: ReactNode;
  nav?: ReactNode | "default" | boolean;
  header?: ReactNode;
}

function PageTemplate({ children, nav = "default", header }: Props) {
  const modal = useRecoilValue(modalState);
  const { Modal, modalOpen, modalClose } = useModal({
    title: modal.title,
  });

  useEffect(() => {
    if (modal.isOpend) {
      modalOpen();
    } else {
      modalClose();
    }
  }, [modal]);

  return (
    <S.Container header={header ? true : false}>
      <Modal>{modal.contents}</Modal>
      {header && header}
      <S.Content header={header ? true : false}>{children}</S.Content>
      {nav === "default" ? <BottomNavBar /> : nav}
    </S.Container>
  );
}

export default PageTemplate;
