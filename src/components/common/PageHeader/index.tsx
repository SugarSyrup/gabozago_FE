import BackButton from "../BackButton";

import * as S from "./style";

interface Props {
    LeftItem?: React.ReactNode,
    children?: React.ReactNode,
    RightItem?: React.ReactNode,
}

function PageHeader({LeftItem = <BackButton />, children, RightItem = <></>}: Props) {
    return(
        <S.Header>
            <S.LeftItemWrapper>
                {LeftItem}
            </S.LeftItemWrapper>
            {children}
            <S.RightItemWrapper>
                {RightItem}
            </S.RightItemWrapper>
        </S.Header>
    )
}

export default PageHeader