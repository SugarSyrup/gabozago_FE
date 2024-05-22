import { FormEventHandler, useRef } from "react";
import * as S from "./style";
import usePopup from "../usePopup";

function useTextInputPopup(
  title: string,
  maxLength: number,
  defaultValue: string = ""
) {
  const {
    Popup,
    popupOpen: textInputPopupOpen,
    popupClose: textInputPopupClose,
    isOpend: isOpend,
  } = usePopup();
  const inputRef = useRef<HTMLInputElement>(null);

  function TextInputPopup({ onSubmit }: { onSubmit: FormEventHandler }) {
    return (
      <Popup>
        <form onSubmit={onSubmit}>
          <S.Header>
            <S.Title>{title}</S.Title>
            <S.SaveButton type="submit" onSubmit={onSubmit}>
              저장
            </S.SaveButton>
          </S.Header>
          <S.Input
            ref={inputRef}
            type="text"
            name={title}
            maxLength={maxLength}
            defaultValue={defaultValue}
          />
        </form>
      </Popup>
    );
  }

  return {
    TextInputPopup,
    inputRef,
    textInputPopupOpen,
    textInputPopupClose,
    isOpend,
  };
}

export default useTextInputPopup;
