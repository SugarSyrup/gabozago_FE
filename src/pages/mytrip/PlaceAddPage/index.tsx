import { useNavigate, useParams } from "react-router-dom";

import XIcon from "../../../assets/icons/x.svg?react";
import PageHeader from "../../../components/common/PageHeader";
import PageTemplate from "../../../components/common/PageTemplate";
import Typography from "../../../components/common/Typography";

import * as S from "./style";
import { useEffect, useState } from "react";
import LocationAddItem from "../../../components/mytrip/LocationAddItem";
import { get } from "../../../utils/api";

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
    const [currentSelectedItem, setCurrentSelectedItem] = useState<{id: number, day?: number}>({id: -1});

    useEffect(() => {
        get<TMyTravelItem[]>(`/my-travel/community/place/${id}`)
            .then((response) => {
                setData(response.data);
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
                        
                    }}
                >
                    <Typography.Title size="lg" color="inherit" >이 일정에 장소를 추가할게요!</Typography.Title>
                </S.Button>
            </S.Footer>
        }>
            <S.Header>
                <Typography.Headline size="md">장소를 추가할</Typography.Headline>
                <Typography.Headline size="md">여행 일정을 선택해주세요.</Typography.Headline>
            </S.Header>
            <S.MyTravelHeader>
                <Typography.Title size="lg">{data.length !== 0 && "나의 다가오는 여행"}</Typography.Title>
                <S.CreateNewTravelButton onClick={() => {navigate('/mytrip/create')}}>
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