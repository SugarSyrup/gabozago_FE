import DoubleCircleIcon from "../../../assets/icons/double_circle.svg?react";

import * as S from "./style";

function StationContainer() {
    return(
            <S.StationList>
                <S.StationItem>
                    <S.Linker isFirst={true}>
                        <DoubleCircleIcon />
                    </S.Linker>
                    <S.TextContainer>
                        <S.StationNumber>Station 0</S.StationNumber>
                        <S.StationName>진짜 로컬의 디저트는 무엇일까?</S.StationName>
                    </S.TextContainer>
                </S.StationItem>
                <S.StationItem>
                    <S.Linker isLast={true}>
                        <DoubleCircleIcon />
                    </S.Linker>
                    <S.TextContainer isLast={true}>
                        <S.StationNumber>Station 1</S.StationNumber>
                        <S.StationName>기본과 함께 성장한 그녀의 브랜드</S.StationName>
                    </S.TextContainer>
                </S.StationItem>
            </S.StationList>
    )
}

export default StationContainer