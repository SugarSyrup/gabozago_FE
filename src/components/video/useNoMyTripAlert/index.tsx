import { useNavigate } from "react-router-dom";

import ExclamationIcon from "../../../assets/icons/exclamation_circle.svg?react";
import usePopup from "../../../hooks/usePopup";

import * as S from "./style";

function useNoMyTripAlert() {
    const {Popup, popupOpen, popupClose} = usePopup();
    const navigate = useNavigate();

    function NoMyTripAlert() {
        return(
            <S.ModalWrapper>
                {/* 여행 일정이 없을때 */}
                <Popup padding={"52px"}>
                    <S.PopupContainer>
                        <ExclamationIcon />
                        <S.PopupTitle>먼저 여행을 생성해주세요!</S.PopupTitle>
                        <span>생성된 내 여행이 없어요. <br/>여행 일정을 만들어 코스를 추가해 보세요:)</span>
                        <S.PopupButtonContainer>
                            <S.PopupButton main={false} onClick={() => {popupClose()}}>나중에 할래요</S.PopupButton>
                            <S.PopupButton main={true} onClick={() => {navigate("/mytrip/create")}}>일정 만들래요!</S.PopupButton>
                        </S.PopupButtonContainer>
                    </S.PopupContainer>
                </Popup>
            </S.ModalWrapper>
        )
    }

    return {NoMyTripAlert, noMyTripAlertOpen: popupOpen, noMyTripAlertClose: popupClose}
}

export default useNoMyTripAlert;