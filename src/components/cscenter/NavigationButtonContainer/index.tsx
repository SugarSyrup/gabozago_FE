import { MouseEventHandler } from 'react';
import FilledButton from '../../common/Button/FilledButton';

import * as S from './style';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  bgColor: 'blue' | 'gray';
  children: React.ReactNode | string;
}

function NavigationButtonContainer({ onClick, bgColor, children }: Props) {
  return (
    <S.NavContainer>
      <FilledButton onClick={onClick} bgColor={bgColor} rounded>
        {children}
      </FilledButton>
    </S.NavContainer>
  );
}

export default NavigationButtonContainer;
