import { ChangeEventHandler, MouseEventHandler } from 'react';
import * as S from './style';

interface Props {
  checked?: boolean;
  name?: string;
  inputId?: string;
  required?: boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
}

function CheckBoxItem({
  checked,
  onChange,
  name,
  inputId,
  required,
  className,
  children,
  onClick,
}: Props) {
  return (
    <label>
      <S.CheckBoxInputContainer>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          name={name}
          id={inputId}
          required={required}
          className={className}
          onClick={onClick}
        />
        {children}
      </S.CheckBoxInputContainer>
    </label>
  );
}

export default CheckBoxItem;
