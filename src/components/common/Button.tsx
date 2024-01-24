import React, { ReactNode } from "react";
import * as S from "../../styles/common/Button.style";

interface Props {
    disabled?: boolean;
    type: "normal" | "text";
    size: "lg" | "md" | "sm" | "xs";
    children?: ReactNode;
    active?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({ disabled, children, type, size, active, onClick }: Props) {
    return (
        <S.Button
            disabled={disabled}
            type={type}
            size={size}
            active={active}
            onClick={onClick}
        >
            {children}
        </S.Button>
    );
}

export default Button;
