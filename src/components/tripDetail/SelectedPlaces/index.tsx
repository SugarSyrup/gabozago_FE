import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useNavigate, useParams } from "react-router-dom";

import InfomationIcon from "../../../assets/icons/exclamation_circle.svg?react";
import MapIcon from "../../../assets/icons/map.svg?react";
import { selectedPlacesState } from "../../../recoil/mytrip/selectedPlacesState";
import { post } from "../../../utils/api";

import SelectedPlaceItem from "../SelectedPlaceItem";
import Typography from "../../common/Typography";
import usePopup from "../../../hooks/usePopup";

import * as S from "./style";

interface Props {
  locations: string[];
}

function SelectedPlaces({locations}: Props) {
  const { id, day } = useParams();
  const navigate = useNavigate();
  const [selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);
  const [hasSelectedPlaces, setHasSelectedPlaces] = useState<boolean>(false);
  const {Popup, popupOpen, popupClose, isOpend} = usePopup();
  const [ newLocations, setNewLocations ] = useState<string[]>([]);

  function onDelete(id: number) {
    setSelectedPlaces((prev) =>
      prev.filter((SelectedPlace) => SelectedPlace.id !== id)
    );
  }

  useEffect(() => {
    if (selectedPlaces.length === 0) {
      setHasSelectedPlaces(false);
    } else {
      setHasSelectedPlaces(true);
    }
  }, [selectedPlaces]);

  return (
    <S.Container>
      <S.PopupWrapper isOpen={isOpend}>
        <Popup>
            <S.PopupContentsContainer>
                <InfomationIcon />
                <S.PopupTextContainer>
                    <Typography.Headline size="sm">지역윽 추가하시겠어요?</Typography.Headline>
                    <Typography.Body size="lg" color="inherit">선택하신 여행 장소는 {locations}을 벗어나요.</Typography.Body>
                    <Typography.Body size="lg" color="inherit">{newLocations}도 여행 계획에 추가하시겠어요?</Typography.Body>
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
                            myTravelId: id,
                            location: newLocations.toLocaleString(),
                        }).then((response) => {
                            if(response.status === 201) {
                                post<{
                                    id: number,
                                    name: number,
                                }>(`/my-travel/detail-route/place`, {
                                    placeId: selectedPlaces.map((selectedPlace) => selectedPlace.id),
                                    myTravelId: id,
                                    day: day
                                }).then((response) => {
                                    if(response.status === 201) {
                                        popupClose();
                                        navigate(`/mytrip/${id}`);
                                    }
                                })
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
      <S.SelectedPlaceList>
        {selectedPlaces.map((selectedPlace) => (
          <SelectedPlaceItem
            name={selectedPlace.name}
            key={selectedPlace.id}
            id={selectedPlace.id}
            onDelete={onDelete}
          />
        ))}
      </S.SelectedPlaceList>
      <S.Button 
        disabled={!hasSelectedPlaces}
        isActive={hasSelectedPlaces}
        onClick={() => {
          let newLocations: string[] = [];
          selectedPlaces.forEach((selectedPlace) => {
            selectedPlace.location.forEach((location) => {
              locations.find((travelLocation) => travelLocation !== location) && newLocations.push(location);
            })
          });
          if(newLocations.length === 0) {
            post<{message: string}>('/my-travel/location', {
                myTravelId: id,
                location: newLocations.toLocaleString(),
            }).then((response) => {
                if(response.status === 201) {
                    post<{
                        id: number,
                        name: number,
                    }>(`/my-travel/detail-route/place`, {
                        placeId: selectedPlaces.map((selectedPlace) => selectedPlace.id),
                        myTravelId: id,
                        day: day
                    }).then((response) => {
                        if(response.status === 201) {
                            popupClose();
                            navigate(`/mytrip/${id}`);
                        }
                    })
                }
            })
          }else {
            setNewLocations(newLocations);
            popupOpen();
          }
        }}
      >
        <MapIcon />
        <Typography.Title size="lg" color="white">{hasSelectedPlaces ? "장소 선택 완료" : "장소를 선택해주세요"}</Typography.Title>
      </S.Button>
    </S.Container>
  );
}

export default SelectedPlaces;
