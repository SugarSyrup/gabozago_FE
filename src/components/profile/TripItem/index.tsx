import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import LocationIcon from "../../../assets/icons/location.svg?react";
import CalendarIcon from "../../../assets/icons/calendar.svg?react";
import SmallLogoIcon from "../../../assets/icons/logo_small.svg?react";
import InfomationIcon from "../../../assets/icons/exclamation_circle.svg?react";

import * as S from "./style";
import Typography from "../../common/Typography";
import useModal from "../../../hooks/useModal";
import usePopup from "../../../hooks/usePopup";
import { useState } from "react";

interface Props {
    id: string;
    name:string;
    location:string;
    startDate: string;
    endDate: string;
}

function TripItem({id, name, location, startDate, endDate}: Props) {
    const { Modal, modalOpen, modalClose, isOpend } = useModal({});
    const { Popup, popupOpen, popupClose, isOpend: isPopupOpend } = usePopup();
    const [ popupType, setPopupType] = useState<"CHANGE" | "DELETE">("CHANGE");

    return(
        <>
            <S.ModalWrapper isOpen={isOpend || isPopupOpend}>
                <Modal>
                    <S.TravelSettings>
                        <div onClick={() => {
                            modalClose();
                            setPopupType("DELETE");
                            popupOpen();
                        }}>
                            <Typography.Title size="lg">여행 기록 삭제</Typography.Title>
                        </div>
                        <div onClick={() => {
                            modalClose();
                            setPopupType("CHANGE");
                            popupOpen();
                        }}>
                            <Typography.Title size="lg" >여행 기록 변경</Typography.Title>
                        </div>
                        <Typography.Title size="lg">여행 날짜 변경</Typography.Title>
                    </S.TravelSettings>
                </Modal>
                <Popup>
                    {popupType === "DELETE" ?
                        <S.PopupContainer>
                            <InfomationIcon />
                            <S.PopupText>
                                <Typography.Headline size="sm">"{name}"을 삭제하시겠어요?</Typography.Headline>
                                <Typography.Body size="lg">삭제한 여행 일정은 되돌릴 수 없습니다.</Typography.Body>
                            </S.PopupText>
                            <S.PopupButtons>
                                <S.PopupButton onClick={() => {popupClose()}}>
                                    <Typography.Label size="lg">아니요</Typography.Label>
                                </S.PopupButton>
                                <S.PopupButton onClick={() => {
                                    // @TODO: 삭제 엑션
                                }}>
                                    <Typography.Label size="lg" color="#5276FA">네, 삭제할래요</Typography.Label>
                                </S.PopupButton>
                            </S.PopupButtons>
                        </S.PopupContainer>
                        :
                        <S.ChangePopupContainer>
                            <S.ChangePopupHeader>
                                <Typography.Title size="sm">일정 제목 변경</Typography.Title>
                                <Typography.Title size="sm" color="#5276FA">저장</Typography.Title>
                            </S.ChangePopupHeader>
                            <S.ChangePopupInput defaultValue={name}/>
                        </S.ChangePopupContainer>
                    }
                </Popup>
            </S.ModalWrapper>
            <S.Container>
                <S.ThumbnailWrapper>
                    <SmallLogoIcon />
                </S.ThumbnailWrapper>
                <S.Info>
                    <S.Name><Typography.Title size="md">{name}</Typography.Title></S.Name>
                    <S.Desc><CalendarIcon /> <Typography.Label size="md" color="#424242">{startDate} ~ {endDate}</Typography.Label></S.Desc>
                    <S.Desc><LocationIcon /> <Typography.Label size="md" color="#424242">{location}</Typography.Label></S.Desc>
                </S.Info>
                <S.OptionWrapper onClick={() => {
                        modalOpen();
                    }}>
                    <KebabMenuIcon />
                </S.OptionWrapper>
            </S.Container>
        </>
    )
}

export default TripItem;