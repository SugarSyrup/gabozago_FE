import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';

import InfomationIcon from '../../../assets/icons/exclamation_circle.svg?react';
import LeftChevronIcon from '../../../assets/icons/chevron_left.svg?react';
// import { journalFilterState } from '../../../recoil/filters/journalState';

import PageTemplate from '../../../components/common/PageTemplate';
import Typography from '../../../components/common/Typography';
import useSearchInput from '../../../hooks/useSearchInput';

import SelectedLocations from '../../../components/tripDetail/SelectedPlaces';
import SearchPlaces from '../../../components/tripDetail/SearchPlaces';
import LocationHotPlaces from '../../../components/tripDetail/LocationHotPlaces';
import LocationRecommendContents from '../../../components/tripDetail/LocationRecommendContents';
import ScrapedPlace from '../../../components/tripDetail/ScrapedPlace';
import { get, post } from '../../../utils/api';

import * as S from './style';
import usePopup from '../../../hooks/usePopup';
import { selectedPlacesState } from '../../../recoil/mytrip/selectedPlacesState';
import { scrapPlaceFilterState } from '../../../recoil/filters/scrapPlaceFilterState';

function MyTripLocationSearchPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tabNavIdx, setTabNavIdx] = useState<number>(1);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [locations, setLocations] = useState<string[]>();
  const [keyword, setKeyword] = useState<string>('');
  const [newLocation, setNewLocation] = useState<string>('');
  const [newRegion, setNewRegion] = useState<string>('');
  const setActiveFilters = useSetRecoilState(scrapPlaceFilterState);
  const [inputRef, SearchInput] = useSearchInput({
    placeholder: '장소명을 입력하세요',
    onChange,
    backgroundColor: 'white',
    borderColor: '#ADADAD',
    onSubmit: (e) => {
      e.preventDefault();
    },
  });
  const { Popup, popupOpen, popupClose, isOpend } = usePopup();
  const [, setSelectedPlaces] = useRecoilState(selectedPlacesState);

  function onChange() {
    if (inputRef.current) {
      if (inputRef.current.value === '') {
        setIsSearching(false);
      } else {
        setIsSearching(true);
        setKeyword(inputRef.current.value);
      }
    }
  }

  useEffect(() => {
    get<{
      location: string[];
    }>(`/my-travel/${id}`).then((response) => {
      setLocations(response.data.location);
      // console.log(response.data.location);
      setActiveFilters((prev) => ({
        ...prev,
        location: response.data.location,
      }));
    });
  }, []);

  return (
    <PageTemplate
      nav={false}
      header={
        <S.Header>
          <S.SearchBar>
            <LeftChevronIcon
              onClick={() => {
                if (isSearching && inputRef.current) {
                  inputRef.current.value = '';
                  setIsSearching(false);
                } else {
                  navigate(-1);
                }
              }}
            />
            <SearchInput />
          </S.SearchBar>
          {!isSearching && (
            <S.TabNavigation>
              <S.NavigationItem
                isHighlight={tabNavIdx === 1}
                onClick={() => {
                  setTabNavIdx(1);
                }}
              >
                <Typography.Title size="md" color="inherit">
                  장소 선택
                </Typography.Title>
              </S.NavigationItem>
              <>
                <S.NavigationItem
                  isHighlight={tabNavIdx === 2}
                  onClick={() => {
                    setTabNavIdx(2);
                  }}
                >
                  <Typography.Title size="md" color="inherit">
                    저장한 장소
                  </Typography.Title>
                </S.NavigationItem>
                <S.HighlightLine isHighlight={tabNavIdx === 1} />
              </>
            </S.TabNavigation>
          )}
        </S.Header>
      }
    >
      <S.PopupWrapper isOpen={isOpend}>
        <Popup>
          <S.PopupContentsContainer>
            <InfomationIcon />
            <S.PopupTextContainer>
              <Typography.Headline size="sm">지역을 추가하시겠어요?</Typography.Headline>
              <Typography.Body size="lg" color="inherit" noOfLine={3}>
                선택하신 여행 장소는 {locations?.toLocaleString()}을 벗어나요.
              </Typography.Body>
              <Typography.Body size="lg" color="inherit">
                {newLocation}도 여행 계획에 추가하시겠어요?
              </Typography.Body>
              <Typography.Body size="md" color="#FA5252">
                *지역을 추가하지 않으면, 해당 장소도 추가되지 않아요.
              </Typography.Body>
            </S.PopupTextContainer>
            <S.PopupButtons>
              <S.PopupButton
                isMain={false}
                onClick={() => {
                  setSelectedPlaces((prev) =>
                    prev.filter((selectedPlace) => selectedPlace.name !== newRegion),
                  );
                  popupClose();
                }}
              >
                <Typography.Body size="lg" color="inherit">
                  아니요
                </Typography.Body>
              </S.PopupButton>
              <S.PopupButton
                isMain
                onClick={() => {
                  post<{ message: string }>('/my-travel/location', {
                    myTravelId: id,
                    location: newLocation,
                  }).then((response) => {
                    console.log(response.data);
                  });
                  popupClose();
                }}
              >
                <Typography.Body size="lg" color="inherit">
                  네, 추가할게요
                </Typography.Body>
              </S.PopupButton>
            </S.PopupButtons>
          </S.PopupContentsContainer>
        </Popup>
      </S.PopupWrapper>

      {isSearching && (
        <SearchPlaces
          tripId={Number(id)}
          location={locations === undefined ? [] : locations}
          keyword={keyword}
          popupOpen={popupOpen}
          setNewLocation={setNewLocation}
        />
      )}
      <S.Contents>
        {!isSearching && tabNavIdx === 1 && (
          <>
            {locations && (
              <>
                <LocationHotPlaces
                  locations={locations}
                  popupOpen={popupOpen}
                  setNewLocation={setNewLocation}
                />
                <LocationRecommendContents locations={locations} />
              </>
            )}
          </>
        )}
        {!isSearching && tabNavIdx === 2 && (
          <ScrapedPlace
            popupOpen={popupOpen}
            setNewRegion={setNewRegion}
            setNewLocation={setNewLocation}
            locations={locations}
          />
        )}
      </S.Contents>
      <S.Footer>
        <SelectedLocations />
      </S.Footer>
    </PageTemplate>
  );
}

export default MyTripLocationSearchPage;
