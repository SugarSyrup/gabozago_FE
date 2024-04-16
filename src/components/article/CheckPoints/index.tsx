import CheckPointIcon from "../../../assets/icons/checkpoint.svg?react";

import * as S from "./style";

interface Props {
    data: {
        name: string,
        desc: string,
    }[]
}

function CheckPoints({data}: Props) {
    return(
        <S.CheckPointList>
            <S.CheckPointTitle>
                CHECK POINT
            </S.CheckPointTitle>
            {
                data.map((checkpoint) => 
                    <S.CheckPointItem>
                        <CheckPointIcon />
                        <S.CheckPointText>
                            <S.CheckPoint>
                                {checkpoint.name}
                            </S.CheckPoint>
                            <S.CheckPointDesc>
                                {checkpoint.desc}
                            </S.CheckPointDesc>
                        </S.CheckPointText>
                    </S.CheckPointItem>
                )
            }
        </S.CheckPointList>
    )
}

export default CheckPoints