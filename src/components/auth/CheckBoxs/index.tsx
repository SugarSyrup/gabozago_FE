import { useState } from "react";

import * as S from "./style";
import CheckBoxItem from "../../common/CheckBoxItem";

function CheckBoxs() {
    const [allChecks, setAllChecks] = useState(false);
    return(
        <S.CheckBoxsContainer>
            <S.CheckBoxContainer>
                <CheckBoxItem checked={allChecks} inputId="allCheck" onClick={(e) => {
                    const checkboxs = document.getElementsByClassName("checkbox");
                    for(let i = 0; i<checkboxs.length; i++) {
                        if(e.currentTarget.checked){
                            checkboxs[i].checked = true;
                            setAllChecks(true);
                        } else {
                            checkboxs[i].checked = false;
                            setAllChecks(false);
                        }
                    }
                }}>
                    <S.CheckBoxLabelHighlight htmlFor="allCheck" >약관 전체 동의합니다.</S.CheckBoxLabelHighlight>
                    <S.CheckBoxNotRequired>선택항목 포함</S.CheckBoxNotRequired>
                </CheckBoxItem>
            </S.CheckBoxContainer>
            <S.CheckBoxContainer>
                <CheckBoxItem name="ageCheck" className="checkbox" inputId="ageCheck" required={true} onClick={(e) => {
                    if(!e.currentTarget.checked) {
                        setAllChecks(false);
                    }
                }}>
                    <S.CheckBoxLabel htmlFor="ageCheck">만 14세 이상입니다.</S.CheckBoxLabel>
                    <S.CheckBoxRequired>(필수)</S.CheckBoxRequired>
                </CheckBoxItem>
                
                <CheckBoxItem name="serviceCheck" className="checkbox" inputId="serviceCheck" required={true} onClick={(e) => {
                    if(!e.currentTarget.checked) {
                        setAllChecks(false);
                    }
                }}>
                    <S.CheckBoxLabelLink to="/">서비스 이용약관 동의</S.CheckBoxLabelLink>
                    <S.CheckBoxRequired>(필수)</S.CheckBoxRequired>
                </CheckBoxItem>
                <CheckBoxItem name="personalCheck"  className="checkbox" required={true} onClick={(e) => {
                    if(!e.currentTarget.checked) {
                        setAllChecks(false);
                    }
                }}>
                    <S.CheckBoxLabelLink to="/">개인정보 수집 및 이용 동의</S.CheckBoxLabelLink>
                    <S.CheckBoxRequired>(필수)</S.CheckBoxRequired>
                </CheckBoxItem>
                <CheckBoxItem name="eventCheck"  className="checkbox" onClick={(e) => {
                    if(!e.currentTarget.checked) {
                        setAllChecks(false);
                    }
                }}>
                    <S.CheckBoxLabel>이벤트 및 할인 혜택 안내 동의</S.CheckBoxLabel>
                    <S.CheckBoxNotRequired>(선택)</S.CheckBoxNotRequired>
                </CheckBoxItem>
            </S.CheckBoxContainer>
        </S.CheckBoxsContainer>
    )
}

export default CheckBoxs;