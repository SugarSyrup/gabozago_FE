import React, { ReactNode } from 'react';
import * as S from './style';

interface Props {
  disabled?: boolean;
  type: 'normal' | 'text';
  size: 'lg' | 'md' | 'sm' | 'xs';
  children?: ReactNode;
  active?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
}

function Button({ disabled, children, type, size, active, width, onClick }: Props) {
  return (
    <S.Button
      disabled={disabled}
      type={type}
      size={size}
      active={active}
      onClick={onClick}
      width={width}
    >
      {children}
    </S.Button>
  );
}

export default Button;
