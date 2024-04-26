import DoubleCircleIcon from "../../../assets/icons/double_circle.svg?react";

import * as S from "./style";

interface Props {
    index: number,
    name: string,
}

function ContentStation({index, name} : Props){
    return(
        <S.Container>
            <S.Index>
                <DoubleCircleIcon />
                <span>Station {index}</span>
            </S.Index>
            <S.Title>{name}</S.Title>
        </S.Container>
    )
}
export default ContentStation;