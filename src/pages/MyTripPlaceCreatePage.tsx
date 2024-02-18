import { useNavigate, useParams } from "react-router-dom";
import PageTemplate from "../components/common/PageTemplate";

import * as S from "../styles/pages/MyTripPlaceCreatePage.style";
import LeftChevronIcon from "../assets/icons/leftChevron.svg?react";
import Button from "../components/common/Button";
import Heading from "../components/common/Heading";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { selectedPlacesState } from "../recoil/mytrip/selectedPlacesState";

function MyTripPlaceCreatePage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isNameEnter, setIsNameEnter] = useState<boolean>(false);
    const [isAddrEnter, setIsAddrEnter] = useState<boolean>(false);
    const setSelectedPlaces = useSetRecoilState(selectedPlacesState);
    const NameRef = useRef<HTMLInputElement>(null);

    return(
        <PageTemplate header={false} nav={false}>
            <S.Header >
                <LeftChevronIcon onClick={() => navigate(-1)} />
                <Heading size="sm">새로운 장소 추가하기</Heading>
            </S.Header>
            <S.Form onSubmit={(e) => {
                e.preventDefault();
                if(NameRef.current){
                    navigate(`/mytrip/${id}/search/${NameRef.current.value}`);
                    setSelectedPlaces(prev => [...prev, {
                        id:"123",
                        name:NameRef.current.value
                    }])
                }
            }}>
                <S.InputList>
                    <S.Input placeholder="장소를 입력하세요." required ref={NameRef} type="text" onInput={(e) => {
                        if(e.currentTarget.value === "") {
                            setIsNameEnter(false);
                        } else {
                            setIsNameEnter(true);
                        }
                    }
                    }/>
                    <S.Input placeholder="주소를 입력하세요." required type="text" onInput={(e) => {
                        if(e.currentTarget.value === "") {
                            setIsAddrEnter(false);
                        } else {
                            setIsAddrEnter(true);
                        }
                    }
                    }/>
                    <S.Input placeholder="추가 정보를 알려주세요. (선택)" type="text"/>
                </S.InputList>
                <S.ButtonWrapper>
                    <Button size="lg" type="normal" active={isNameEnter && isAddrEnter}>
                        {isNameEnter && isAddrEnter ?
                            "새로운 장소로 등록할게요!"
                            :
                            "정보를 입력해주세요."
                        }
                    </Button>
                </S.ButtonWrapper>
            </S.Form>
        </PageTemplate>
    )
}  

export default MyTripPlaceCreatePage;