import { MouseEventHandler } from 'react';
import FilledButton from '../Button/FilledButton';

import * as S from './style';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  bgColor: 'blue' | 'gray';
  children: React.ReactNode | string;
  rounded?: boolean;
}

function BottomButtonContainer({ onClick, bgColor, children, rounded = true }: Props) {
  return (
    <S.Container>
      <FilledButton onClick={onClick} bgColor={bgColor} rounded={rounded}>
        {children}
      </FilledButton>
    </S.Container>
  );
}

export default BottomButtonContainer;
