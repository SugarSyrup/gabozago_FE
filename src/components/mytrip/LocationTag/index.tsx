import XIcon from "../../../assets/icons/x.svg?react";

import * as S from "./style";

interface Props {
    name: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function LocationTag({ name, onClick }: Props) {
    return (
        <S.Container onClick={onClick}>
            {name}
            <XIcon />
        </S.Container>
    );
}

export default LocationTag;
