import { MouseEventHandler } from 'react';
import { LongButton } from '../../common/Button/button.style';
import Typography from '../../common/Typography';

import * as S from './style';

interface Props {
  onClick: MouseEventHandler<HTMLButtonElement>;
  bgColor: 'blue' | 'gray';
  children: React.ReactNode | string;
}

function NavigationButtonContainer({ onClick, bgColor, children }: Props) {
  return (
    <S.NavContainer>
      <LongButton onClick={onClick} bgColor={bgColor}>
        {typeof children === 'string' && (
          <Typography.Title size="lg" color="inherit">
            {children}
          </Typography.Title>
        )}
        {typeof children !== 'string' && children}
      </LongButton>
    </S.NavContainer>
  );
}

export default NavigationButtonContainer;
