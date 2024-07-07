import { useState } from 'react';
import * as S from './style';

interface Props {
  LeftContent?: React.ReactNode;
  Content: React.ReactNode;
  RightContent?: React.ReactNode;
}

function useAlert({ LeftContent, Content, RightContent }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function alertClose() {
    setIsOpen(false);
  }

  function alertOpen() {
    setIsOpen(true);
    setTimeout(() => {
      alertClose();
    }, 5000);
  }

  function Alert() {
    return (
      <S.AlertWrapper>
        <S.Alert isOpen={isOpen}>
          {LeftContent || <div />}
          {Content}
          {RightContent || <div />}
        </S.Alert>
      </S.AlertWrapper>
    );
  }

  return { Alert, alertOpen, alertClose };
}

export default useAlert;
