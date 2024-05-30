import { ReactNode, useState } from "react";
import * as S from "./style";

interface Options {
  title?: string;
  handle?: boolean;
  borderRadius?: string;
  height?: string;
}

function useModal({
  title = "",
  handle = true,
  borderRadius = "30px",
}: Options) {
  const [isOpend, setIsOpend] = useState(false);

  const modalOpen = () => {
    setIsOpend(true);
  };
  const modalClose = () => {
    setIsOpend(false);
  };

  const Modal = ({ children }: { children?: ReactNode }) => (
    <S.ModalWrapper isOpened={isOpend}>
      {isOpend && (
        <S.ModalContainer onClick={modalClose}>
          <S.Modal
            onClick={(e) => {
              e.stopPropagation();
            }}
            borderRadius={borderRadius}
          >
            {handle && <S.CloseHandle onClick={modalClose} />}
            <S.Contents>
              {title && <S.Title>{title}</S.Title>}
              {children}
            </S.Contents>
          </S.Modal>
        </S.ModalContainer>
      )}
    </S.ModalWrapper>
  );

  return { isOpend, modalOpen, modalClose, Modal };
}

export default useModal;
