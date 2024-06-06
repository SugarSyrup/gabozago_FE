import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

import InfomationIcon from "../../../assets/icons/exclamation_circle.svg?react";
import LeftChevronIcon from "../../../assets/icons/chevron_left.svg?react";
import LocationIcon from "../../../assets/icons/location.svg?react";
import InputContainer from "../../../components/common/InputContainer";
import PageTemplate from "../../../components/common/PageTemplate";
import Typography from "../../../components/common/Typography";
import Heading from "../../../components/common/Heading";

import { get, post } from "../../../utils/api";
import usePopup from "../../../hooks/usePopup";
import { selectedPlacesState } from "../../../recoil/mytrip/selectedPlacesState";
import * as S from "./style";

function MyTripPlaceCreatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const open = useDaumPostcodePopup(postcodeScriptUrl);
  const [isNameEnter, setIsNameEnter] = useState<boolean>(false);
  const [isAddrEnter, setIsAddrEnter] = useState<boolean>(false);
  const [ addrInfo, setAddrInfo] = useState<string>();
  const setSelectedPlaces = useSetRecoilState(selectedPlacesState);
  const NameRef = useRef<HTMLInputElement>(null);
  const {Popup, popupOpen, popupClose, isOpend} = usePopup();
  const [newLocation, setNewLocation] = useState<string>("");
  const [newLocationName, setNewLocationName] = useState<string>("");
  const [locations, setLocations] = useState<string[]>();

  const handleComplete = (data:any) => {
    let {roadAddress} = data;
    setAddrInfo(
      roadAddress,
    );
    setIsAddrEnter(true);
  }

  return (
    <PageTemplate nav={false} header={<S.Header>
      <LeftChevronIcon onClick={() => navigate(-1)} />
      <Heading size="sm">새로운 장소 추가하기</Heading>
    </S.Header>}>
      <S.PopupWrapper isOpen={isOpend}>
        <Popup>
            <S.PopupContentsContainer>
                <InfomationIcon />
                <S.PopupTextContainer>
                    <Typography.Headline size="sm">지역을 추가하시겠어요?</Typography.Headline>
                    <Typography.Body size="lg" color="inherit" noOfLine={3}>선택하신 여행 장소는 {locations?.toLocaleString()}을 벗어나요.</Typography.Body>
                    <Typography.Body size="lg" color="inherit">{newLocation}도 여행 계획에 추가하시겠어요?</Typography.Body>
                    <Typography.Body size="md" color="#FA5252">*지역을 추가하지 않으면, 해당 장소도 추가되지 않아요.</Typography.Body>
                </S.PopupTextContainer>
                <S.PopupButtons>
                    <S.PopupButton isMain={false} onClick={() => {
                        setSelectedPlaces((prev) => prev.filter((selectedPlace) => selectedPlace.name !== newLocationName));
                        popupClose();
                    }}>
                        <Typography.Body size="lg" color="inherit">아니요</Typography.Body>
                    </S.PopupButton>
                    <S.PopupButton isMain={true} onClick={() => {
                        post<{message: string}>('/my-travel/location', {
                            myTravelId: id,
                            location: newLocation,
                        }).then((response) => {
                            navigate(-1);
                        })
                        popupClose();
                    }}>
                        <Typography.Body size="lg" color="inherit">네, 추가할게요</Typography.Body>
                    </S.PopupButton>
                </S.PopupButtons>
            </S.PopupContentsContainer>
        </Popup>
      </S.PopupWrapper>
      
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          post<{
            id: number,
            location: string,
          }>(`/place/manual`, {
            name: formData.get("name"),
            address: addrInfo,
            additionalInformation: formData.get("additionalInformation"),
          }).then((response) => {
            const { id:newLocationId, location: newLocation } = response.data;
            setNewLocation(newLocation);
            setSelectedPlaces((prev) => [
              ...prev,
              {
                id: newLocationId,
                name: formData.get("name") as string,
                location: newLocation,
              },
            ]);

            setNewLocationName(formData.get("name") as string);

            get<{
              location: string[];
            }>(`/my-travel/${id}`)
              .then((response) => {
                setLocations(response.data.location);
                if(!response.data.location.includes(newLocation)){
                  popupOpen();
                } else {
                  navigate(-1);
                }
              })
          })
        }}
      >
        <S.InputList>
          <InputContainer
            inputType="text"
            name="name"
            label="장소명"
            required={true}
            placeholder="장소명을 입력해주세요."
            maxLength={30}
            disabled={false}
            onInput={(e) => {
              if (e.currentTarget.value === "") {
                setIsNameEnter(false);
              } else {
                setIsNameEnter(true);
              }
            }}
            ref={NameRef}
          />
          <div onClick={() => {
            open({onComplete: handleComplete});
          }}>
            <InputContainer
              inputType="text"
              name="address"
              label="주소"
              required={true}
              placeholder="주소를 입력해주세요."
              disabled={addrInfo ? true : false}
              buttonLabel="검색"
              onInput={(e) => {
                if (e.currentTarget.value === "") {
                  setIsAddrEnter(false);
                } else {
                  setIsAddrEnter(true);
                }
              }}
              value={addrInfo}
              onButtonClick={addrInfo ? () => {open({onComplete: handleComplete})} : undefined}
            />
          </div>
          <InputContainer
            inputType="text"
            name="additionalInformation"
            label="추가 정보"
            required={false}
            placeholder="추가 정보를 알려주세요. (선택)"
            disabled={false}
            maxLength={30}
          />
        </S.InputList>
        <S.ButtonWrapper>
          <S.Button isActive={isNameEnter && isAddrEnter}>
            <LocationIcon />
            <Typography.Title size="lg" color="inherit">
              {isNameEnter && isAddrEnter
                ? "새로운 장소로 등록할게요!"
                : "장소 정보를 입력해주세요."}
            </Typography.Title>
          </S.Button>
        </S.ButtonWrapper>
      </S.Form>
    </PageTemplate>
  );
}

export default MyTripPlaceCreatePage;
