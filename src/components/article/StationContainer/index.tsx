import DoubleCircleIcon from "../../../assets/icons/double_circle.svg?react";

import * as S from "./style";

interface Props {
    data: string[]
}

function StationContainer({data}: Props) {
    return(
            <S.StationList>
                {
                    data.map((station, index) => 
                        <S.StationItem>
                            <S.Linker isFirst={index === 0} isLast={index+1===data.length}>
                                <DoubleCircleIcon />
                            </S.Linker>
                            <S.TextContainer isLast={index+1===data.length}>
                                <S.StationNumber>Station {index}</S.StationNumber>
                                <S.StationName>{station}</S.StationName>
                            </S.TextContainer>
                        </S.StationItem>
                    )
                }
            </S.StationList>
    )
}

export default StationContainer