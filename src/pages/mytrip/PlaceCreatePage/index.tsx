import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';

import InfomationIcon from '../../../assets/icons/exclamation_circle.svg?react';
import LeftChevronIcon from '../../../assets/icons/chevron_left.svg?react';
import LocationIcon from '../../../assets/icons/location.svg?react';
import InputContainer from '../../../components/common/InputContainer';
import PageTemplate from '../../../components/common/PageTemplate';
import Typography from '../../../components/common/Typography';
import Heading from '../../../components/common/Heading';

import { get, post } from '@_utils/api';
import usePopup from '../../../hooks/usePopup';
import { selectedPlacesState } from '../../../recoil/mytrip/selectedPlacesState';
import * as S from './style';
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';
import { popupValue } from '@_recoil/common/PopupValue';

function MyTripPlaceCreatePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const open = useDaumPostcodePopup(postcodeScriptUrl);
  const [isNameEnter, setIsNameEnter] = useState<boolean>(false);
  const [isAddrEnter, setIsAddrEnter] = useState<boolean>(false);
  const [addrInfo, setAddrInfo] = useState<string>();
  const setSelectedPlaces = useSetRecoilState(selectedPlacesState);
  const NameRef = useRef<HTMLInputElement>(null);
  const { popupOpen, popupClose } = usePopup();
  const [newLocation, setNewLocation] = useState<string>('');
  const [newLocationName, setNewLocationName] = useState<string>('');
  const [locations, setLocations] = useState<string[]>();
  const setPopupValue = useSetRecoilState(popupValue);

  const handleComplete = (data: any) => {
    const { roadAddress } = data;
    setAddrInfo(roadAddress);
    setIsAddrEnter(true);
  };

  return (
    <PageTemplate
      nav={false}
      header={
        <S.Header>
          <LeftChevronIcon onClick={() => navigate(-1)} />
          <Heading size="sm">새로운 장소 추가하기</Heading>
        </S.Header>
      }
    >
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);

          post<{
            id: number;
            location: string;
          }>('/place/manual', {
            name: formData.get('name'),
            address: addrInfo,
            additionalInformation: formData.get('additionalInformation'),
          }).then((response) => {
            const { id: newLocationId, location: newLocation } = response.data;
            setNewLocation(newLocation);
            setSelectedPlaces((prev) => [
              ...prev,
              {
                id: newLocationId,
                name: formData.get('name') as string,
                location: newLocation,
              },
            ]);

            setNewLocationName(formData.get('name') as string);

            get<{
              location: string[];
            }>(`/my-travel/${id}`).then((response) => {
              setLocations(response.data.location);
              if (!response.data.location.includes(newLocation)) {
                setPopupValue({
                  Icon: <InfomationIcon />,
                  Header: '지역을 추가하시겠어요?',
                  Description: `선택하신 여행 장소는 ${response.data.location.toLocaleString()}을 벗어나요.\n
      ${newLocation}도 여행 계획에 추가하시겠어요?`,
                  Warning: '*지역을 추가하지 않으면, 해당 장소도 추가되지 않아요.',
                  CloseButton: {
                    text: '아니요',
                    onClick: () => {
                      setSelectedPlaces((prev) =>
                        prev.filter((selectedPlace) => selectedPlace.name !== newLocationName),
                      );
                      popupClose();
                    },
                  },
                  ConfirmButton: {
                    text: '네, 추가할게요',
                    onClick: () => {
                      post<{ message: string }>('/my-travel/location', {
                        myTravelId: id,
                        location: newLocation,
                      }).then(() => {
                        navigate(-1);
                      });
                      popupClose();
                    },
                  },
                });
                popupOpen();
              } else {
                toast.custom(() => (
                  <Toast>
                    <Typography.Body size="lg" color="white">
                      장소가 추가되었습니다.
                    </Typography.Body>
                    <S.LinkTypo
                      onClick={() => {
                        navigate(-1);
                      }}
                    >
                      장소 검색 돌아가기
                    </S.LinkTypo>
                  </Toast>
                ));
              }
            });
          });
        }}
      >
        <S.InputList>
          <InputContainer
            inputType="text"
            name="name"
            label="장소명"
            required
            placeholder="장소명을 입력해주세요."
            maxLength={30}
            disabled={false}
            onInput={(e) => {
              if (e.currentTarget.value === '') {
                setIsNameEnter(false);
              } else {
                setIsNameEnter(true);
              }
            }}
            ref={NameRef}
          />
          <div
            onClick={() => {
              open({ onComplete: handleComplete });
            }}
          >
            <InputContainer
              inputType="text"
              name="address"
              label="주소"
              required
              placeholder="주소를 입력해주세요."
              disabled={!!addrInfo}
              buttonLabel="검색"
              onInput={(e) => {
                if (e.currentTarget.value === '') {
                  setIsAddrEnter(false);
                } else {
                  setIsAddrEnter(true);
                }
              }}
              value={addrInfo}
              onButtonClick={
                addrInfo
                  ? () => {
                      open({ onComplete: handleComplete });
                    }
                  : undefined
              }
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
                ? '새로운 장소로 등록할게요!'
                : '장소 정보를 입력해주세요.'}
            </Typography.Title>
          </S.Button>
        </S.ButtonWrapper>
      </S.Form>
    </PageTemplate>
  );
}

export default MyTripPlaceCreatePage;
