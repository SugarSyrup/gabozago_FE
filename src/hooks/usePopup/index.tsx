import { MouseEvent, ReactNode, useState } from 'react';
import * as S from './style';
// import useBodyScrollLock from '../useBodyScrollLock';s
import { useRecoilState } from 'recoil';
import { popupIsOpen } from '@_recoil/common/PopupValue';

function usePopup() {
  const [isOpend, setIsOpend] = useState(false);
  const [, setOpenState] = useRecoilState(popupIsOpen);
  // const { lockScroll, unlockScroll } = useBodyScrollLock();

  const popupOpen = () => {
    // setIsOpend(true);
    // lockScroll();
    setOpenState(true);
  };
  const popupClose = () => {
    // setIsOpend(false);
    // unlockScroll();
    setOpenState(false);
  };

  interface Props {
    children: ReactNode;
    padding?: string;
  }
  function Popup({ children, padding }: Props) {
    return (
      <S.PopupWrapper isOpened={isOpend}>
        {isOpend && (
          <S.PopupContainer onClick={popupClose}>
            <S.Popup
              padding={padding}
              onClick={(e: MouseEvent) => {
                e.stopPropagation();
              }}
            >
              {children}
            </S.Popup>
          </S.PopupContainer>
        )}
      </S.PopupWrapper>
    );
  }
  return {
    popupClose,
    popupOpen,
    Popup,
    isOpend,
  };
}

export default usePopup;
