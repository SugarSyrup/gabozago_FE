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

function MyTripPlaceCreatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isNameEnter, setIsNameEnter] = useState<boolean>(false);
  const [isAddrEnter, setIsAddrEnter] = useState<boolean>(false);
  const setSelectedPlaces = useSetRecoilState(selectedPlacesState);
  const NameRef = useRef<HTMLInputElement>(null);

  return (
    <PageTemplate nav={false}>
      <S.Header>
        <LeftChevronIcon onClick={() => navigate(-1)} />
        <Heading size="sm">새로운 장소 추가하기</Heading>
      </S.Header>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          //[SugarSyrup] @TODO: 새로운 장소 추가하기 API 연결 (Backend 미구현)
          if (NameRef.current) {
            navigate(`/mytrip/${id}/search/${NameRef.current.value}`);
            setSelectedPlaces((prev) => [
              ...prev,
              {
                id: "123",
                name: NameRef.current.value,
              },
            ]);
          }
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
          <InputContainer
            inputType="text"
            name="name"
            label="장소명"
            required={true}
            placeholder="주소를 입력해주세요."
            disabled={false}
            onInput={(e) => {
              if (e.currentTarget.value === "") {
                setIsAddrEnter(false);
              } else {
                setIsAddrEnter(true);
              }
            }}
          />
          <InputContainer
            inputType="text"
            name="name"
            label="장소명"
            required={false}
            placeholder="추가 정보를 알려주세요. (선택)"
            disabled={false}
            onInput={(e) => {
              if (e.currentTarget.value === "") {
                setIsAddrEnter(false);
              } else {
                setIsAddrEnter(true);
              }
            }}
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
