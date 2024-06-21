import * as S from "./style";
import { MouseEvent, ReactNode, useState } from "react";
import useBodyScrollLock from "../useBodyScrollLock";

function usePopup() {
  const [isOpend, setIsOpend] = useState(false);
  const { lockScroll, unlockScroll } = useBodyScrollLock();

  const popupOpen = () => {
    setIsOpend(true);
    lockScroll();
  };
  const popupClose = () => {
    setIsOpend(false);
    unlockScroll();
  };

  interface Props {
    children: ReactNode;
    padding?: string;
  }
  const Popup = ({ children, padding }: Props) => (
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
  return { popupClose, popupOpen, Popup, isOpend };
}

export default usePopup;
