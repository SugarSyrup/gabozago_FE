import { LegacyRef, useEffect } from "react";
import DoubleCircleIcon from "../../../assets/icons/double_circle.svg?react";

import * as S from "./style";

interface Props {
    index: number,
    name: string,
    refs: React.MutableRefObject<null[] | HTMLDivElement[]>,
}

function ContentStation({index, name, refs} : Props){
    return(
        <S.Container id={`article_${index}`} ref={ele => refs.current[index] = ele}>
            <S.Index>
                <DoubleCircleIcon />
                <span>Station {index}</span>
            </S.Index>
            <S.Title>{name}</S.Title>
        </S.Container>
    )
}
export default ContentStation;