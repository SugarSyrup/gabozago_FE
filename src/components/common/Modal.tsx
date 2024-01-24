import { ReactNode, useState } from "react";
import * as S from "../../styles/common/Modal.style";

interface Props {
  title?: string;
  contents?: ReactNode;
}

function Modal({ title, contents }: Props) {
  const [isOpend, setIsOpend] = useState(false);
  const modalOpen = () => {
    setIsOpend(true);
  };
  const modalClose = () => {
    setIsOpend(false);
  };
  const Modal = (
    <>
      {isOpend && (
        <S.ModalContainer>
          <S.Modal>
            <S.CloseHandle />
            {title && <S.Title>{title}</S.Title>}
            {contents}
          </S.Modal>
        </S.ModalContainer>
      )}
    </>
  );

  return { isOpend, modalOpen, modalClose, Modal };
}

export default Modal;
