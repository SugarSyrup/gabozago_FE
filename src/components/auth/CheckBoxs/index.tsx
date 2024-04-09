import { useState } from "react";

import * as S from "./style";

function CheckBoxs() {
    const [allChecks, setAllChecks] = useState(false);
    return(
        <S.CheckBoxsContainer>
            <S.CheckBoxContainer>
                <S.CheckBoxInputContainer>
                    <input type="checkbox" checked={allChecks} onClick={(e) => {
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
                    }}/>
                    <S.CheckBoxLabelHighlight>약관 전체 동의합니다.</S.CheckBoxLabelHighlight>
                    <S.CheckBoxNotRequired>선택항목 포함</S.CheckBoxNotRequired>
                </S.CheckBoxInputContainer>
            </S.CheckBoxContainer>
            <S.CheckBoxContainer>
                <S.CheckBoxInputContainer>
                    <input type="checkbox" name="ageCheck" className="checkbox" required onClick={(e) => {
                        if(!e.currentTarget.checked) {
                            setAllChecks(false);
                        }
                    }}/>
                    <S.CheckBoxLabel>만 14세 이상입니다.</S.CheckBoxLabel>
                    <S.CheckBoxRequired>(필수)</S.CheckBoxRequired>
                </S.CheckBoxInputContainer>
                <S.CheckBoxInputContainer>
                    <input type="checkbox" name="serviceCheck" className="checkbox" required onClick={(e) => {
                        if(!e.currentTarget.checked) {
                            setAllChecks(false);
                        }
                    }}/>
                    <S.CheckBoxLabelLink to="/">서비스 이용약관 동의</S.CheckBoxLabelLink>
                    <S.CheckBoxRequired>(필수)</S.CheckBoxRequired>
                </S.CheckBoxInputContainer>
                <S.CheckBoxInputContainer>
                    <input type="checkbox" name="personalCheck" className="checkbox" required onClick={(e) => {
                        if(!e.currentTarget.checked) {
                            setAllChecks(false);
                        }
                    }}/>
                    <S.CheckBoxLabelLink to="/">개인정보 수집 및 이용 동의</S.CheckBoxLabelLink>
                    <S.CheckBoxRequired>(필수)</S.CheckBoxRequired>
                </S.CheckBoxInputContainer>
                <S.CheckBoxInputContainer>
                    <input type="checkbox" name="eventCheck" className="checkbox" onClick={(e) => {
                        if(!e.currentTarget.checked) {
                            setAllChecks(false);
                        }
                    }}/>
                    <S.CheckBoxLabel>이벤트 및 할인 혜택 안내 동의</S.CheckBoxLabel>
                    <S.CheckBoxNotRequired>(선택)</S.CheckBoxNotRequired>
                </S.CheckBoxInputContainer>
            </S.CheckBoxContainer>

        </S.CheckBoxsContainer>
    )
}

export default CheckBoxs;