import { ReactNode, useState } from "react";
import * as S from "../styles/common/Modal.style";

interface Options {
  title?: string;
}

function useModal({ title }: Options) {
  const [isOpend, setIsOpend] = useState(false);

  const modalOpen = () => {
    setIsOpend(true);
  };
  const modalClose = () => {
    setIsOpend(false);
  };

  const Modal = ({ children }: { children?: ReactNode }) => (
    <>
      {isOpend && (
        <S.ModalContainer onClick={modalClose}>
          <S.Modal
            onClick={(e) => {
              e.stopPropagation();
              //   alert("click");
            }}
          >
            <S.CloseHandle onClick={modalClose} />
            <S.Contents>
              {title && <S.Title>{title}</S.Title>}
              {children}
            </S.Contents>
          </S.Modal>
        </S.ModalContainer>
      )}
    </>
  );

  return { isOpend, modalOpen, modalClose, Modal };
}

export default useModal;
