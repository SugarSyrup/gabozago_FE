import { ComponentPropsWithRef, ElementType, forwardRef } from 'react';
import Typography from '../Typography';
import * as S from './OutlineButton.style';
import Props from '@_types/Button.type';

function OutlineButton(
  { children, ...props }: Props,
  ref: ComponentPropsWithRef<ElementType>['ref'],
) {
  return (
    <S.Button bgColor={props.bgColor} {...props} ref={ref}>
      {typeof children === 'string' && (
        <Typography.Title size="sm" color="inherit">
          {children}
        </Typography.Title>
      )}
      {typeof children !== 'string' && children}
    </S.Button>
  );
}

export default forwardRef(OutlineButton);
OutlineButton.displayName = 'PopupButton';
