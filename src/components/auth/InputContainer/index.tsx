import * as S from "./style";

interface Props {
    inputType: string,
    name: string,
    label: JSX.Element | string,
    disabled: boolean,
    required: boolean,
    explain?: JSX.Element,
    alert?: JSX.Element,
}

function InputContainer({inputType, name, label, disabled,  required, explain, alert}: Props) {
    return(
        <S.InputContainer>
            <S.Label htmlFor={name}>{label}</S.Label>
            <S.Input type={inputType} name={name} id={name} disabled={disabled} required={required} />
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
        </S.InputContainer>
    )
}

export default InputContainer;