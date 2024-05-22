import { useNavigate, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";

import LeftChevronIcon from "../../../assets/icons/chevron_left.svg?react";
import LocationIcon from "../../../assets/icons/location.svg?react";
import InputContainer from "../../../components/common/InputContainer";
import PageTemplate from "../../../components/common/PageTemplate";
import Typography from "../../../components/common/Typography";
import Heading from "../../../components/common/Heading";

import { selectedPlacesState } from "../../../recoil/mytrip/selectedPlacesState";
import * as S from "./style";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";
import { post } from "../../../utils/api";

function MyTripPlaceCreatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const open = useDaumPostcodePopup(postcodeScriptUrl);
  const [isNameEnter, setIsNameEnter] = useState<boolean>(false);
  const [isAddrEnter, setIsAddrEnter] = useState<boolean>(false);
  const [ addrInfo, setAddrInfo] = useState<string>();
  const setSelectedPlaces = useSetRecoilState(selectedPlacesState);
  const NameRef = useRef<HTMLInputElement>(null);

  const handleComplete = (data:any) => {
    let {roadAddress} = data;
    setAddrInfo(
      roadAddress,
    );
    setIsAddrEnter(true);
  }

  return (
    <PageTemplate nav={false}>
      <S.Header>
        <LeftChevronIcon onClick={() => navigate(-1)} />
        <Heading size="sm">새로운 장소 추가하기</Heading>
      </S.Header>
      <S.Form
        onSubmit={(e) => {
          //[SugarSyrup] @TODO : 백엔드 미 베포 기능 -> 테스트 못해봄
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
            navigate(-1);
            setSelectedPlaces((prev) => [
              ...prev,
              {
                id: response.data.id,
                name: formData.get("name") as string,
                location: response.data.location,
              },
            ]);
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
