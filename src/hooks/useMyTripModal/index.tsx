import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Typography from "../../components/common/Typography";
import InfomationIcon from "../../assets/icons/exclamation_circle.svg?react";
import { deletes, patch } from "../../utils/api";

import useModal from "../useModal";
import usePopup from "../usePopup";

import * as S from "./style";
import { useSetRecoilState } from "recoil";
import { datesState } from "../../recoil/mytrip/createData";

interface Props {
    id: number,
    title: string,
    departureDate: string,
    arrivalDate: string,
}

function useMyTripModal({id, title, departureDate, arrivalDate}: Props) {
    const navigate = useNavigate();
    const { Modal, modalOpen, modalClose, isOpend: isModalOpend } = useModal({});
    const { Popup, popupOpen, popupClose, isOpend: isPopupOpend } = usePopup();
    const [ popupType, setPopupType] = useState<"CHANGE" | "DELETE">("CHANGE");
    const setDates = useSetRecoilState(datesState);

    function MyTripModal() {
        return (
            <S.ModalWrapper isOpen={isModalOpend || isPopupOpend}>
                <Popup>
                    {popupType === "DELETE" ?
                        <S.PopupContainer>
                            <InfomationIcon />
                            <S.PopupText>
                                <Typography.Headline size="sm" noOfLine={2}>"{title}"을 삭제하시겠어요?</Typography.Headline>
                                <Typography.Body size="lg" color="#727272">삭제한 여행 일정은 되돌릴 수 없습니다.</Typography.Body>
                            </S.PopupText>
                            <S.PopupButtons>
                                <S.PopupButton onClick={() => {popupClose()}}>
                                    <Typography.Body size="lg">아니요</Typography.Body>
                                </S.PopupButton>
                                <S.PopupButton onClick={() => {
                                    deletes<{message: string}>(`/my-travel`, {id: id})
                                        .then((response) => {
                                            if(response.data.message === "DELETE SUCCESS") {
                                                modalClose();
                                                popupClose();
                                                navigate(0);
                                            }
                                        })
                                }}>
                                    <Typography.Body size="lg" color="#5276FA">네, 삭제할래요</Typography.Body>
                                </S.PopupButton>
                            </S.PopupButtons>
                        </S.PopupContainer>
                        :
                        <S.ChangePopupContainer onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.currentTarget);
                            patch('/my-travel', {
                                id: id,
                                title: formData.get('title')
                            }).then(() => {
                                popupClose();
                                navigate(0);
                            })
                        }}>
                            <S.ChangePopupHeader>
                                <Typography.Title size="sm">일정 제목 변경</Typography.Title>
                                <S.FormButton>
                                    <Typography.Title size="sm" color="#5276FA">저장</Typography.Title>
                                </S.FormButton>
                            </S.ChangePopupHeader>
                            <S.ChangePopupInput defaultValue={title} name="title" type="text" maxLength={38}/>
                        </S.ChangePopupContainer>
                    }
                </Popup>
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
                            <Typography.Title size="lg" >여행 제목 변경</Typography.Title>
                        </div>
                        <div onClick={() => {
                            setDates({
                                startDate: departureDate.replace("-", "").replace("-", ""),
                                endDate: arrivalDate.replace("-", "").replace("-", ""),
                            })
                            navigate(`/mytrip/${id}/dateChange`)
                        }}>
                            <Typography.Title size="lg">여행 날짜 변경</Typography.Title>
                        </div>
                    </S.TravelSettings>
                </Modal>
            </S.ModalWrapper>
        );
    }

    return {MyTripModal, modalOpen, modalClose, isModalOpend};
}

export default useMyTripModal;