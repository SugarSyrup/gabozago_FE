import DoubleCircleIcon from "../../../assets/icons/double_circle.svg?react";
import BookIcon from "../../../assets/icons/book.svg?react";

import * as S from "./style";
import useModal from "../../../hooks/useModal";

interface Props {
    data: string[]
}

function StationContainer({data}: Props) {
    const {Modal, modalOpen, modalClose} = useModal({});

    return(
        <>
            <Modal>
                <S.ModalTitle>Station 보기</S.ModalTitle>
                <S.StationList isBackground={false}>
                    {
                        data.map((station, index) => 
                            <S.StationItem>
                                <S.Linker isFirst={index === 0} isLast={index+1===data.length}>
                                    <DoubleCircleIcon />
                                </S.Linker>
                                <S.TextContainer isLast={index+1===data.length} href={`#article_${index}`}>
                                    <S.StationNumber>Station {index}</S.StationNumber>
                                    <S.StationName>{station}</S.StationName>
                                </S.TextContainer>
                            </S.StationItem>
                        )
                    }
                </S.StationList>
            </Modal>
            <S.StationList isBackground={true}>
                {
                    data.map((station, index) => 
                        <S.StationItem>
                            <S.Linker isFirst={index === 0} isLast={index+1===data.length}>
                                <DoubleCircleIcon />
                            </S.Linker>
                            <S.TextContainer isLast={index+1===data.length} href={`#article_${index}`}>
                                <S.StationNumber>Station {index}</S.StationNumber>
                                <S.StationName>{station}</S.StationName>
                            </S.TextContainer>
                        </S.StationItem>
                    )
                }
            </S.StationList>
            <S.StationIcon onClick={() => {modalOpen()}}>
                <BookIcon />
            </S.StationIcon>
        </>
    )
}

export default StationContainer