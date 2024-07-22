import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import Typography from '../Typography';
import * as S from './FilledButtons.style';
import Props from '@_types/Button.type';

function FilledButton(
  { children, rounded, bgColor, ...props }: Props,
  ref: ComponentPropsWithRef<ElementType>['ref'],
) {
  return (
    <S.Button rounded={rounded} bgColor={bgColor} {...props} ref={ref}>
      {typeof children === 'string' && (
        <Typography.Title size="lg" color="inherit">
          {children}
        </Typography.Title>
      )}
      {typeof children !== 'string' && children}
    </S.Button>
  );
}

export default forwardRef(FilledButton);
FilledButton.displayName = 'FilledButton';
