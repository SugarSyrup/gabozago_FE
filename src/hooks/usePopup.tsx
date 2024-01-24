import { MouseEvent, ReactNode, useState } from "react";
import * as S from "../styles/common/Popup.style";

function usePopup() {
  const [isOpend, setIsOpend] = useState(false);

  const popupOpen = () => {
    setIsOpend(true);
  };
  const popupClose = () => {
    setIsOpend(false);
  };

  interface PopupProps {
    children: ReactNode;
    hasHeader?: boolean;
    title?: string;
    hasCloseButton?: boolean;
    padding?: string;
  }
  const Popup = ({ children, padding }: PopupProps) => (
    <>
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
    </>
  );
  return { popupClose, popupOpen, Popup };
}

export default usePopup;
