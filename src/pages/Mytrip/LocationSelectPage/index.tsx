import { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useLoaderData, useNavigate } from 'react-router-dom';

import { datesState, selectedLocationsState } from '../../../recoil/mytrip/createData';

import LogoTextIcon from '../../../assets/icons/logo_small_blue04_text.svg?react';
import Typography from '../../../components/common/Typography';
import PageTemplate from '../../../components/common/PageTemplate';
import BackButton from '../../../components/common/BackButton';

import LocationIcon from '../../../assets/icons/location.svg?react';
import LocationTag from '../../../components/mytrip/LocationTag';
import SearchedLocations from '../../../components/mytrip/SearchedLocations';

import useSearchInput from '../../../hooks/useSearchInput';
import { post } from '@_utils/api';

import * as S from './style';

export interface LocationResponseType {
  id: number;
  name: string;
  category: string;
  image: string | null;
}

const defaultLocations = [
  '서울',
  '부산',
  '인천',
  '양평/가평',
  '양양/강릉/속초',
  '여수/순천',
  '경주',
  '포항',
  '통영/거제',
  '제주',
];
function MyTripLocationSelectPage() {
  const locations = useLoaderData() as LocationResponseType[];
  const navigate = useNavigate();
  const [selectedLocations, setSelectedLocations] = useRecoilState(selectedLocationsState);
  const [searchedLocations, setSearchedLocations] = useState<LocationResponseType[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const dates = useRecoilValue(datesState);

  const [inputRef, SearchInput] = useSearchInput({
    placeholder: '어디로 떠나시나요?',
    onChange,
    backgroundColor: 'white',
    borderColor: '#ADADAD',
    onSubmit: (e) => {
      e.preventDefault();
    },
  });

  function selectLocation(location: string) {
    setSelectedLocations((prev) => {
      const addLocations = [...prev, location];
      return addLocations.filter(
        (findLocation, index) => addLocations.indexOf(findLocation) === index,
      );
    });
  }

  function deleteLocation(location: string) {
    setSelectedLocations((prev) => prev.filter((item) => location !== item));
  }

  function searchResult(keyword: string) {
    return locations.filter((location) => location.name.includes(keyword));
  }

  function onChange() {
    if (inputRef.current) {
      if (inputRef.current?.value === '') {
        setIsSearching(false);
      } else {
        setIsSearching(true);
        setSearchedLocations(searchResult(inputRef.current?.value));
      }
    }
  }

  return (
    <PageTemplate nav={false}>
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
            {defaultLocations.map((defaultLocation) => {
              const rednerLocation = locations.find(
                (location) => location.name === defaultLocation,
              );
              const isActive = selectedLocations.includes(defaultLocation);

              if (rednerLocation) {
                return (
                  <S.LocationItem key={rednerLocation.name}>
                    <S.LocationInfomation>
                      <S.LocationImgWrapper>
                        {rednerLocation.image ? (
                          <img src={rednerLocation.image} alt={`${rednerLocation.name}`} />
                        ) : (
                          <LogoTextIcon />
                        )}
                      </S.LocationImgWrapper>
                      <Typography.Title size="lg">{rednerLocation.name}</Typography.Title>
                    </S.LocationInfomation>
                    <S.LocationSelectButton
                      isActive={isActive}
                      onClick={() => {
                        if (isActive) {
                          deleteLocation(rednerLocation.name);
                        } else {
                          selectLocation(rednerLocation.name);
                        }
                      }}
                    >
                      <Typography.Label size="lg" color="inherit">
                        선택
                      </Typography.Label>
                    </S.LocationSelectButton>
                  </S.LocationItem>
                );
              }
            })}
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
            post<{ id: number }>('/my-travel', {
              title: `${selectedLocations[0]} 여행`,
              departure_date: `${dates.startDate.slice(0, 4)}-${dates.startDate.slice(4, 6)}-${dates.startDate.slice(6, 8)}`,
              arrival_date: `${dates.endDate.slice(0, 4)}-${dates.endDate.slice(4, 6)}-${dates.endDate.slice(6, 8)}`,
              regions: selectedLocations.toString(),
            }).then((response) => {
              setSelectedLocations([]);
              navigate(`/mytrip/${response.data.id}`, { replace: true });
            });
          }}
        >
          <LocationIcon />
          <Typography.Title size="lg" color="white">
            {selectedLocations.length > 0 ? '지역 선택 완료' : '지역을 선택해 주세요.'}
          </Typography.Title>
        </S.Button>
      </S.Footer>
    </PageTemplate>
  );
}

export default MyTripLocationSelectPage;
