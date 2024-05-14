import { useState } from "react";

import useModal from "../../../hooks/useModal";
import ScrapIcon from "../../../assets/icons/bookmark_filled.svg?react";
import ScrapBorderIcon from "../../../assets/icons/bookmark.svg?react";

import * as S from "./style";

type data = {
    courseName : string;
    day: number;
    mytrips: {
        id:number;
        name: string;
        location: string;
    }[]
}

interface Props {
    id: number
}


// [SugarSyrup] @TODO: PM에서 대규모 수정 중
function useScrapModal({id}: Props) {
    const [data, setScrapModalData] = useState<data>();
    const [isScrapCreate, setIsScrapCreate] = useState<boolean>(false);
    const {Modal, modalOpen, modalClose} = useModal({
        title: "",
        handle: true,
        borderRadius: "30px",
      });

    function ScrapModal() {
        return(
            <S.ModalWrapper>
                <Modal>
                    <S.CourseModalContainer>
                        <S.ScrapModalHeader>
                            <S.HeaderLeftItems>
                                <S.TravelThumbnailWrapper />
                                <S.ModalInfoText>“부산 여행" 일정에 Day 1을 추가했어요!</S.ModalInfoText>
                            </S.HeaderLeftItems>
                            <ScrapIcon />
                        </S.ScrapModalHeader>
                        <S.TravelList>
                            <S.TravelListHeader>
                                <S.TravelListTitle>내 폴더</S.TravelListTitle>
                                <S.TravelCreate onClick={() => {
                                    modalClose();
                                    setIsScrapCreate(true);
                                }}>새 폴더 생성</S.TravelCreate>
                            </S.TravelListHeader>
                            <S.TravelItem>
                                <S.TravelInfoContainer>
                                    <S.TravelThumbnailWrapper />
                                    <S.TravelInfoTextContainer>
                                        <S.TravelName>부산여행</S.TravelName>
                                    </S.TravelInfoTextContainer>
                                </S.TravelInfoContainer>
                                <S.TravelAddBtn isClicked={false}>
                                    <ScrapBorderIcon />
                                </S.TravelAddBtn>
                            </S.TravelItem>
                            <S.TravelItem>
                                <S.TravelInfoContainer>
                                    <S.TravelThumbnailWrapper />
                                    <S.TravelInfoTextContainer>
                                        <S.TravelName>부산여행</S.TravelName>
                                    </S.TravelInfoTextContainer>
                                </S.TravelInfoContainer>
                                <S.TravelAddBtn isClicked={false}>
                                    <ScrapBorderIcon />
                                </S.TravelAddBtn>
                            </S.TravelItem>
                            <S.TravelItem>
                                <S.TravelInfoContainer>
                                    <S.TravelThumbnailWrapper />
                                    <S.TravelInfoTextContainer>
                                        <S.TravelName>부산여행</S.TravelName>
                                    </S.TravelInfoTextContainer>
                                </S.TravelInfoContainer>
                                <S.TravelAddBtn isClicked={false}>
                                    <ScrapBorderIcon />
                                </S.TravelAddBtn>
                            </S.TravelItem>
                        </S.TravelList>
                    </S.CourseModalContainer>
                </Modal>

                <S.CreateScrapFolder isOpen={isScrapCreate}>
                    <S.CreateScrapFolderContainer>
                        <S.CreateScrapHeader>
                            <span>새 폴더 이름</span>
                            <S.SaveText onClick={() => {setIsScrapCreate(false)}}>저장</S.SaveText>
                        </S.CreateScrapHeader>
                        <input type="text" />
                    </S.CreateScrapFolderContainer>
                </S.CreateScrapFolder>
            </S.ModalWrapper>
        )
    }

    return {ScrapModal, scrapModalOpen : modalOpen, scrapModalClose : modalClose, setScrapModalData};
}

export default useScrapModal;