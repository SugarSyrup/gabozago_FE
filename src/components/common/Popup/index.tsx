import * as S from './style';
import { useRecoilValue } from 'recoil';

import { popupValue, popupIsOpen } from '@_recoil/common/PopupValue';
import Typography from '@_common/Typography';
import PopupButton from '@_common/Button/PopupButton';

function Popup() {
  const PopupValue = useRecoilValue(popupValue);
  const isOpen = useRecoilValue(popupIsOpen);

  return (
    <S.PopupWrapper isOpend={isOpen}>
      <S.Popup>
        {PopupValue.Icon && <S.IconWrapper>{PopupValue.Icon}</S.IconWrapper>}
        <S.TextContainer>
          {PopupValue.Header && (
            <Typography.Title size="sm" color="#121212" noOfLine={2}>
              {PopupValue.Header}
            </Typography.Title>
          )}
          {PopupValue.Description && (
            <Typography.Body size="lg" color="#727272" noOfLine={3}>
              {PopupValue.Description}
            </Typography.Body>
          )}
          {PopupValue.Warning && (
            <Typography.Body size="md" color="#FA5252" noOfLine={3}>
              {PopupValue.Warning}
            </Typography.Body>
          )}
        </S.TextContainer>
        {PopupValue.CloseButton && PopupValue.ActiveButton && (
          <S.ButtonContainer>
            {PopupValue.CloseButton && (
              <PopupButton bgColor="gray" rounded onClick={PopupValue.CloseButton.onClick}>
                {PopupValue.CloseButton.text}
              </PopupButton>
            )}
            {PopupValue.CloseButton && (
              <PopupButton bgColor="blue" rounded onClick={PopupValue.ActiveButton.onClick}>
                {PopupValue.ActiveButton.text}
              </PopupButton>
            )}
          </S.ButtonContainer>
        )}
      </S.Popup>
    </S.PopupWrapper>
  );
}

export default Popup;
