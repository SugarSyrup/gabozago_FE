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

  interface Props {
    children: ReactNode;
    padding?: string;
  }
  const Popup = ({ children, padding }: Props) => (
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
  return { popupClose, popupOpen, Popup, isOpend };
}

export default usePopup;
