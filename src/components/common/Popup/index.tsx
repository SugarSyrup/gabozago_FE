import * as S from './style';
import { useRecoilState, useRecoilValue } from 'recoil';

import { popupValue, popupIsOpen } from '@_recoil/common/PopupValue';
import Typography from '@_common/Typography';
import PopupButton from '@_common/Button/PopupButton';

function Popup() {
  const PopupValue = useRecoilValue(popupValue);
  const [isOpen, setIsOpen] = useRecoilState(popupIsOpen);

  return (
    <>
      <S.PopupWrapper isOpend={isOpen}>
        <S.PopupBG
          onClick={() => {
            setIsOpen(false);
          }}
        />
        {PopupValue.NoTemplateCustom ? (
          <S.PopupNoPadding>{PopupValue.NoTemplateCustom}</S.PopupNoPadding>
        ) : (
          <S.Popup>
            {PopupValue.Icon && <S.IconWrapper>{PopupValue.Icon}</S.IconWrapper>}
            {(PopupValue.Header || PopupValue.Description || PopupValue.Warning) && (
              <S.TextContainer>
                {PopupValue.Header && (
                  <Typography.Headline size="sm" color="#121212" noOfLine={2}>
                    {PopupValue.Header}
                  </Typography.Headline>
                )}
                {PopupValue.Description && (
                  <Typography.Body size="lg" color="#727272" noOfLine={3}>
                    <span style={{ textAlign: 'center', display: 'inline-block' }}>
                      {PopupValue.Description.split('\n').map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </span>
                  </Typography.Body>
                )}
                {PopupValue.Warning && (
                  <Typography.Body size="md" color="#FA5252" noOfLine={3}>
                    {PopupValue.Warning}
                  </Typography.Body>
                )}
              </S.TextContainer>
            )}
            {(PopupValue.CloseButton || PopupValue.ConfirmButton) && (
              <S.ButtonContainer>
                {PopupValue.CloseButton && (
                  <PopupButton bgColor="gray" rounded onClick={PopupValue.CloseButton.onClick}>
                    <span>{PopupValue.CloseButton.text}</span>
                  </PopupButton>
                )}
                {PopupValue.ConfirmButton && (
                  <PopupButton bgColor="blue" rounded onClick={PopupValue.ConfirmButton.onClick}>
                    <span>{PopupValue.ConfirmButton.text}</span>
                  </PopupButton>
                )}
              </S.ButtonContainer>
            )}
            {PopupValue.Custom && PopupValue.Custom}
          </S.Popup>
        )}
      </S.PopupWrapper>
    </>
  );
}

export default Popup;
