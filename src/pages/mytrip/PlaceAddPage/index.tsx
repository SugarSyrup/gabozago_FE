import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import InfomationIcon from "../../../assets/icons/exclamation_circle.svg?react";
import XIcon from "../../../assets/icons/x.svg?react";
import PageHeader from "../../../components/common/PageHeader";
import PageTemplate from "../../../components/common/PageTemplate";
import Typography from "../../../components/common/Typography";
import LocationAddItem from "../../../components/mytrip/LocationAddItem";

import { addLocationState, createTravelState } from "../../../recoil/mytrip/createTravelState";
import usePopup from "../../../hooks/usePopup";
import useAlert from "../../../hooks/useAlert";
import { get, post } from "../../../utils/api";

import * as S from "./style";
import { datesState } from "../../../recoil/mytrip/createData";


export interface TMyTravelItem {
    "id": number,
    "name": string,
    "departureDate": string,
    "arrivalDate": string,
    "location": string[],
    "days": {
        "day": number,
        "date": string,
        "dayOfWeek": string,
    }[],
    "thumbnailURL": string,
}

const PlaceAddPage = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState<TMyTravelItem[]>([]);
    const setDates = useSetRecoilState(datesState);
    const [placeData, setPlaceData] = useState<{
        region: string,
        name: string,
    }>();
    const [currentSelectedItem, setCurrentSelectedItem] = useState<{id: number, day?: number}>({id: -1});
    const setCreateTravelState = useSetRecoilState(createTravelState);
    const setAddLocationState = useSetRecoilState(addLocationState);

    const {Popup, popupOpen, popupClose, isOpend} = usePopup();
    const {Alert, alertOpen, alertClose} = useAlert({
        Content: <Typography.Body size="lg" color="white">장소가 추가되었습니다.</Typography.Body>
    });

    useEffect(() => {
        get<TMyTravelItem[]>(`/my-travel/community/place/${id}`)
            .then((response) => {
                setData(response.data);
            })

        get<{
            region: string,
            name: string,
        }>(`/place/${id}`)
            .then((response) => {
                setPlaceData(response.data);
            })
    }, [])

    return (
        <PageTemplate header={<PageHeader 
            LeftItem={
                <S.DeleteIcon onClick={() => {
                    navigate(-1);
                }}>
                    <XIcon />
                </S.DeleteIcon>
            } />
        } nav={
            <S.Footer>
                <S.Button 
                    isActive={typeof currentSelectedItem.day === 'number'} 
                    onClick={() => {
                        if(currentSelectedItem.id === -1) return;
                        if(currentSelectedItem.day === undefined) return;

                        post<{
                            id: number,
                            name: number,
                        }>(`/my-travel/community/place`, {
                            placeId: id,
                            myTravelId: currentSelectedItem.id,
                            day: currentSelectedItem.day
                        }).then((response) => {
                            alertOpen();
                        }).catch((err) => {
                            if(err.response.status === 400) {
                                popupOpen();
                            }
                        })
                    }}
                >
                    <Typography.Title size="lg" color="inherit" >이 일정에 장소를 추가할게요!</Typography.Title>
                </S.Button>
            </S.Footer>
        }>
            <Alert />
            <S.PopupWrapper isOpend={isOpend}>
                <Popup>
                    <S.PopupContentsContainer>
                        <InfomationIcon />
                        <S.PopupTextContainer>
                            <Typography.Headline size="sm">지역윽 추가하시겠어요?</Typography.Headline>
                            <Typography.Body size="lg" color="inherit">선택하신 여행 장소는 {currentSelectedItem.id !== -1 && data.filter((item) => item.id === currentSelectedItem.id)[0].location.toLocaleString()}을 벗어나요.</Typography.Body>
                            <Typography.Body size="lg" color="inherit">{placeData?.region}도 여행 계획에 추가하시겠어요?</Typography.Body>
                            <Typography.Body size="md" color="#FA5252">*지역을 추가하지 않으면, 해당 장소도 추가되지 않아요.</Typography.Body>
                        </S.PopupTextContainer>
                        <S.PopupButtons>
                            <S.PopupButton isMain={false} onClick={() => {
                                popupClose();
                            }}>
                                <Typography.Body size="lg" color="inherit">아니요</Typography.Body>
                            </S.PopupButton>
                            <S.PopupButton isMain={true} onClick={() => {
                                post<{message: string}>('/my-travel/location', {
                                    myTravelId: currentSelectedItem.id,
                                    location: placeData?.region
                                }).then((response) => {
                                    if(response.status === 201) {
                                        post<{
                                            id: number,
                                            name: number,
                                        }>(`/my-travel/community/place`, {
                                            placeId: id,
                                            myTravelId: currentSelectedItem.id,
                                            day: currentSelectedItem.day
                                        }).then((response) => {
                                            if(response.status === 400) {
                                                popupOpen();
                                            } else {
                                                popupClose();
                                                alertOpen();
                                            }
                                        })
                                    } else {    
                                        window.alert("이미 내 여행 지역에 추가되어 있습니다.")
                                    }
                                })
                                popupClose();
                            }}>
                                <Typography.Body size="lg" color="inherit">네, 추가할게요</Typography.Body>
                            </S.PopupButton>
                        </S.PopupButtons>
                    </S.PopupContentsContainer>
                </Popup>
            </S.PopupWrapper>
            <S.Header>
                <Typography.Headline size="md">장소를 추가할</Typography.Headline>
                <Typography.Headline size="md">여행 일정을 선택해주세요.</Typography.Headline>
            </S.Header>
            <S.MyTravelHeader>
                <Typography.Title size="lg">{data.length !== 0 && "나의 다가오는 여행"}</Typography.Title>
                <S.CreateNewTravelButton onClick={() => {
                    if(placeData === undefined) return;
                    setDates({
                        startDate: "",
                        endDate: ""
                    })
                    setCreateTravelState('add');
                    setAddLocationState(placeData.region);
                    navigate('/mytrip/create')
                }}>
                    <Typography.Label size="lg" color="inherit">새로운 여행 일정 만들기</Typography.Label>
                </S.CreateNewTravelButton>
            </S.MyTravelHeader>
            <S.MyTravelList>
                {
                    data.map((item) => 
                        <LocationAddItem {...item} currentSelectedItemId={currentSelectedItem.id} setCurrentSelectedItem={setCurrentSelectedItem}/>
                    )
                }
            </S.MyTravelList>
        </PageTemplate>
    );
};

export default PlaceAddPage;