import DoubleCircleIcon from "../../../assets/icons/double_circle.svg?react";
import BookIcon from "../../../assets/icons/book.svg?react";

import * as S from "./style";
import useModal from "../../../hooks/useModal";

interface Props {
    data: string[],
    refs: React.MutableRefObject<null[] | HTMLDivElement[]>,
}

function StationContainer({data, refs}: Props) {
    const {Modal, modalOpen, modalClose, isOpend} = useModal({});

    return(
        <>
            <S.ModalWrapper isOpen={isOpend}>
                <Modal>
                    <S.ModalTitle>Station 보기</S.ModalTitle>
                    <S.StationList isBackground={false}>
                        {
                            data.map((station, index) => 
                                <S.StationItem>
                                    <S.Linker isFirst={index === 0} isLast={index+1===data.length}>
                                        <DoubleCircleIcon />
                                    </S.Linker>
                                    <S.TextContainer isLast={index+1===data.length} onClick={() => {
                                        refs.current[index]?.scrollIntoView({
                                            behavior: "smooth",
                                        });
                                        modalClose()
                                    }}>
                                        <S.StationNumber>Station {index}</S.StationNumber>
                                        <S.StationName>{station}</S.StationName>
                                    </S.TextContainer>
                                </S.StationItem>
                            )
                        }
                    </S.StationList>
                </Modal>
            </S.ModalWrapper>
            <S.StationList isBackground={true}>
                {
                    data.map((station, index) => 
                        <S.StationItem>
                            <S.Linker isFirst={index === 0} isLast={index+1===data.length}>
                                <DoubleCircleIcon />
                            </S.Linker>
                            <S.TextContainer isLast={index+1===data.length}  onClick={() => {
                                    refs.current[index]?.scrollIntoView({
                                      behavior: "smooth",
                                    });
                                    modalClose();
                                }}>
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