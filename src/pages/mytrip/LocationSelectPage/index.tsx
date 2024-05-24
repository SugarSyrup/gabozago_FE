import { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { datesState, selectedLocationsState } from "../../../recoil/mytrip/createData";

import LogoTextIcon from "../../../assets/icons/logo_small_blue04_text.svg?react";
import Typography from "../../../components/common/Typography";
import PageTemplate from "../../../components/common/PageTemplate";
import BackButton from "../../../components/common/BackButton";

import LocationIcon from "../../../assets/icons/location.svg?react";
import LocationTag from "../../../components/mytrip/LocationTag";
import SearchedLocations from "../../../components/mytrip/SearchedLocations";

import useSearchInput from "../../../hooks/useSearchInput";
import usePopup from "../../../hooks/usePopup";
import { get, post } from "../../../utils/api";

import * as S from "./style";

export interface locationResponseType {
  id: number,
  name: string,
  category:string,
  image: string | null,
}


const defaultLocations = ["서울", "부산", "인천", "양평/가평", "양양/강릉/속초", "여수/순천", "경주", "포항", "통영/거제", "제주"];
function MyTripLocationSelectPage() {
  const navigate = useNavigate();
  const [locations, setLocations] = useState<locationResponseType[]>([]);
  const [selectedLocations, setSelectedLocations] = useRecoilState(selectedLocationsState);
  const [searchedLocations, setSearchedLocations] = useState<locationResponseType[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const dates = useRecoilValue(datesState);

  const {Popup, popupOpen, popupClose} = usePopup();
  const titleRef = useRef<HTMLInputElement>(null);
  

  const [inputRef, SearchInput] = useSearchInput({
    placeholder: "어디로 떠나시나요?",
    onChange: onChange,
    backgroundColor: "white",
    borderColor: "#ADADAD",
  });

  useEffect(() => {
    get<locationResponseType[]>(`/region`)
      .then((response) => {
        setLocations(response.data);
      })
  }, [])

  function selectLocation(location: string) {
    setSelectedLocations((prev) => {
      const addLocations = [...prev, location];
      return addLocations.filter((findLocation, index) => {
        return addLocations.indexOf(findLocation) === index;
      });
    });
  }

  function deleteLocation(location: string) {
    setSelectedLocations((prev) => prev.filter((item) => location !== item));
  }

  function onChange() {
    if (inputRef.current) {
      if (inputRef.current?.value === "") {
        setIsSearching(false);
      } else {
        setIsSearching(true);
        setSearchedLocations(searchResult(inputRef.current?.value));
      }
    }
  }

  function searchResult(keyword: string) {
    return locations.filter((location) => location.name.includes(keyword));
  }

  return (
    <PageTemplate nav={false}>
      <S.PopupWrapper>
        <Popup>
          <S.ChangePopupContainer>
            <S.ChangePopupHeader>
              <Typography.Title size="sm">일정 제목</Typography.Title>
              <span onClick={() => {
                post<{id:number}>(`/my-travel`, {
                  title: titleRef.current?.value,
                  departure_date: `${dates.startDate.slice(0,4)}-${dates.startDate.slice(4,6)}-${dates.startDate.slice(6,8)}`,
                  arrival_date: `${dates.endDate.slice(0,4)}-${dates.endDate.slice(4,6)}-${dates.endDate.slice(6,8)}`,
                  regions: selectedLocations.toString()
                }).then(
                  (response) => {
                    navigate(`/mytrip/${response.data.id}`)
                  }
                )
              }}
                style={{
                  cursor:'pointer'
                }}
              >
                <Typography.Title size="sm" color="#5276FA">저장</Typography.Title>
              </span>
            </S.ChangePopupHeader>
            <S.ChangePopupInput maxLength={38} placeholder="여행 일정 제목을 입력해주세요." ref={titleRef}/>
          </S.ChangePopupContainer>
        </Popup>
      </S.PopupWrapper>
      <S.Header>
        <BackButton />
        <SearchInput />
      </S.Header>
      {isSearching ? (
        <SearchedLocations
          searchedLocations={searchedLocations}
          keyword={inputRef.current?.value}
        />
      ) : (
        <>
          <S.LocationsHeader>
            <Typography.Headline size="sm">지역을 선택해주세요.</Typography.Headline>
          </S.LocationsHeader>
          <S.Locations>
            {
              defaultLocations.map((defaultLocation) => {
                const rednerLocation = locations.find((location) => location.name === defaultLocation);
                const isActive = selectedLocations.includes(defaultLocation);

                if(rednerLocation){
                  return (
                    <S.LocationItem>
                      <S.LocationInfomation>
                        <S.LocationImgWrapper>
                          {rednerLocation.image ?
                            <img src={rednerLocation.image} alt={`${rednerLocation.name} image`} />
                            :
                            <LogoTextIcon />
                          } 
                        </S.LocationImgWrapper>
                        <Typography.Title size="lg">{rednerLocation.name}</Typography.Title>
                      </S.LocationInfomation>
                      <S.LocationSelectButton 
                        isActive={isActive}
                        onClick={() => {
                          isActive ? 
                            deleteLocation(rednerLocation.name)
                            : 
                            selectLocation(rednerLocation.name)
                          }}
                        >
                        <Typography.Label size="lg" color="inherit">선택</Typography.Label>
                      </S.LocationSelectButton>
                    </S.LocationItem>
                  )
                }
              })
            }
          </S.Locations>
        </>
      )}
      <S.Footer>
        <S.LocationTags>
          {selectedLocations.map((selectedLocation) => (
            <LocationTag
              name={selectedLocation}
              key={selectedLocation}
              onClick={() => {
                deleteLocation(selectedLocation);
              }}
            />
          ))}
        </S.LocationTags>
          <S.Button 
              bgColor={selectedLocations.length > 0} 
              onClick={() => { 
                console.log("worked");
                  popupOpen();
              }}
          >
              <LocationIcon />
              <Typography.Title size="lg" color={"white"}>
                {selectedLocations.length > 0 ? "지역 선택 완료" : "지역을 선택해 주세요." }
              </Typography.Title>
          </S.Button>
      </S.Footer>
    </PageTemplate>
  );
}

export default MyTripLocationSelectPage;
