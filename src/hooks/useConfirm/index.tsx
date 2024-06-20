import * as S from './style';
import ExclamationIcon from '../../assets/icons/exclamation_circle.svg?react';
import Typography from '../../components/common/Typography';
import usePopup from '../usePopup';

function useConfirm(
  heading: string,
  desc: string | null = null,
  warningMessage: string | null = null,
  textCancle: string = '취소',
  textConfirm: string = '확인',
) {
  const { Popup, popupOpen, popupClose, isOpend } = usePopup();

  function ConfirmPopup({ onConfirm }: { onConfirm: () => void }) {
    return (
      <S.PopupWrapper isOpened={isOpend}>
        <Popup>
          <S.PopupContentsContainer>
            <ExclamationIcon />
            <S.PopupTextContainer>
              <Typography.Headline size="sm">{heading}</Typography.Headline>
              {desc && (
                <Typography.Body size="lg" color="inherit" noOfLine={3}>
                  {desc}
                </Typography.Body>
              )}
              {warningMessage && (
                <Typography.Body size="md" color="#FA5252">
                  {warningMessage}
                </Typography.Body>
              )}
            </S.PopupTextContainer>
            <S.PopupButtons>
              <S.PopupButton
                isMain={false}
                onClick={() => {
                  popupClose();
                }}
              >
                <Typography.Body size="lg" color="inherit">
                  {textCancle}
                </Typography.Body>
              </S.PopupButton>
              <S.PopupButton
                isMain
                onClick={() => {
                  onConfirm();
                  popupClose();
                }}
              >
                <Typography.Body size="lg" color="inherit">
                  {textConfirm}
                </Typography.Body>
              </S.PopupButton>
            </S.PopupButtons>
          </S.PopupContentsContainer>
        </Popup>
      </S.PopupWrapper>
    );
  }
  return {
    ConfirmPopup,
    confirmPopupOpen: popupOpen,
    confirmPopupClose: popupClose,
  };
}

export default useConfirm;
