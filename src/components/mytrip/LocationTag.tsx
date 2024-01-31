import XIcon from "../../assets/icons/x.svg?react";

import * as S from "../../styles/mytrip/LocationTag.style";

interface Props {
    name: string;
}

function LocationTag({ name }: Props) {
    return (
        <S.Container>
            {name}
            <XIcon />
        </S.Container>
    );
}

export default LocationTag;
