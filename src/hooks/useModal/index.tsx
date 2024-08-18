import { ReactNode, useState } from 'react';
import * as S from './style';
import useBodyScrollLock from '../useBodyScrollLock';

interface Options {
  title?: string;
  handle?: boolean;
  borderRadius?: string;
  height?: string;
}

function useModal({ title = '', handle = true, borderRadius = '30px' }: Options) {
  const [isOpend, setIsOpend] = useState(false);
  const { lockScroll, unlockScroll } = useBodyScrollLock();

  const modalOpen = () => {
    setIsOpend(true);
    lockScroll();
  };
  const modalClose = () => {
    setIsOpend(false);
    unlockScroll();
  };

  function Modal({ children }: { children?: ReactNode }) {
    return (
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
              {title && <S.Title>{title}</S.Title>}
              {children}
            </S.Modal>
          </S.ModalContainer>
        )}
      </S.ModalWrapper>
    );
  }

  return {
    isOpend,
    modalOpen,
    modalClose,
    Modal,
  };
}

export default useModal;
