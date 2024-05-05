import { useEffect } from "react";
import * as S from "./style";

interface Props {
    inputType: string,
    name: string,
    label: JSX.Element | string,
    disabled: boolean,
    required: boolean,
    explain?: JSX.Element,
    alert?: JSX.Element,
    value?: string,
    placeholder?: string,
    onInput?: React.FormEventHandler<HTMLInputElement>
    onButtonClick?: () => void,
}

function InputContainer({inputType, name, label, disabled,  required, explain, alert, value, placeholder, onButtonClick, onInput}: Props) {
    return(
        <S.InputContainer>
            <S.Label htmlFor={name}>{label}</S.Label>
            <S.Input type={inputType} name={name} id={name} disabled={disabled} required={required} defaultValue={value} placeholder={placeholder} onInput={onInput}/>
            {
                explain &&
                <S.InputExplain>
                    {explain}
                </S.InputExplain>
            }
            {
                alert && 
                <S.InputAlert hasExplain={explain !== undefined}>
                    {alert}
                </S.InputAlert>
            }
            {
                onButtonClick && 
                <S.ConfirmButton onClick={() => {

                    onButtonClick();
                }}>
                    확인
                </S.ConfirmButton>
            }
        </S.InputContainer>
    )
}

export default InputContainer;