import { MouseEventHandler } from "react";
import * as S from "./style";

interface Props {
    checked?: boolean,
    name?:string,
    inputId?:string,
    required?:boolean,
    className?:string,
    onClick?: MouseEventHandler<HTMLInputElement>,
    children?: React.ReactNode
}

function CheckBoxItem({checked, onClick, name, inputId, required, className, children}: Props) {
    return(
            <S.CheckBoxInputContainer>
                <input type="checkbox" checked={checked} onClick={onClick} name={name} id={inputId} required={required} className={className}/>
                {children}
            </S.CheckBoxInputContainer>
    )
}

export default CheckBoxItem;