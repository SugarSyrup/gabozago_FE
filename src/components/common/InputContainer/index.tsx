import { useEffect } from 'react';
import * as S from './style';

interface Props {
  inputType: string;
  name: string;
  label: JSX.Element | string;
  disabled: boolean;
  required: boolean;
  explain?: JSX.Element;
  alert?: JSX.Element;
  value?: string;
  placeholder?: string;
  onInput?: React.FormEventHandler<HTMLInputElement>;
  onButtonClick?: () => void;
  buttonLabel?: string;
  maxLength?: number;
  ref?: React.RefObject<HTMLInputElement>;
  readonly?: boolean;
}

function InputContainer({
  inputType,
  name,
  label,
  disabled,
  required,
  explain,
  alert,
  value,
  placeholder,
  onButtonClick,
  onInput,
  maxLength,
  ref,
  buttonLabel,
  readonly,
  minLength,
  pattern,
}: Props & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <S.InputContainer>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        type={inputType}
        name={name}
        id={name}
        disabled={disabled}
        required={required}
        defaultValue={value}
        placeholder={placeholder}
        onInput={onInput}
        maxLength={maxLength}
        ref={ref}
        readOnly={readonly}
        minLength={minLength}
        pattern={pattern}
      />
      {explain && <S.InputExplain>{explain}</S.InputExplain>}
      {alert && <S.InputAlert hasExplain={explain !== undefined}>{alert}</S.InputAlert>}
      {onButtonClick && (
        <S.ConfirmButton
          onClick={() => {
            onButtonClick();
          }}
        >
          {buttonLabel || '확인'}
        </S.ConfirmButton>
      )}
    </S.InputContainer>
  );
}

export default InputContainer;
