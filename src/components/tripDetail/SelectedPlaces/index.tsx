import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate, useParams } from 'react-router-dom';

import MapIcon from '../../../assets/icons/map.svg?react';
import { selectedPlacesState } from '../../../recoil/mytrip/selectedPlacesState';
import { post } from '@_utils/api';

import SelectedPlaceItem from '../SelectedPlaceItem';
import Typography from '../../common/Typography';

import * as S from './style';

function SelectedPlaces() {
  const { id, day } = useParams();
  const navigate = useNavigate();
  const [selectedPlaces, setSelectedPlaces] = useRecoilState(selectedPlacesState);
  const [hasSelectedPlaces, setHasSelectedPlaces] = useState<boolean>(false);

  function onDelete(id: number) {
    setSelectedPlaces((prev) => prev.filter((SelectedPlace) => SelectedPlace.id !== id));
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
          post<{
            id: number;
            name: number;
          }>('/my-travel/detail-route/place', {
            placeId: selectedPlaces.map((selectedPlace) => selectedPlace.id),
            myTravelId: id,
            day,
          }).then((response) => {
            if (response.status === 201) {
              setSelectedPlaces([]);
              navigate(-1);
            }
          });
        }}
      >
        <MapIcon />
        <Typography.Title size="lg" color="white">
          {hasSelectedPlaces ? '장소 선택 완료' : '장소를 선택해주세요'}
        </Typography.Title>
      </S.Button>
    </S.Container>
  );
}

export default SelectedPlaces;
