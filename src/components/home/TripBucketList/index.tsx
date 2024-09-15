import RightChevronIcon from '@_icons/chevron_right.svg?react';

import * as S from './style';
import { useEffect, useState } from 'react';
import { get } from '@_utils/api';
import LocationPlaceholderIcon from '../../mytrip/LocationPlaceholderIcon';
import { useNavigate } from 'react-router-dom';

interface TPlace {
  placeId: number;
  name: string;
  addressShort: string;
  thumbnail: string;
}

function TripBucketList() {
  const navigate = useNavigate();
  const [data, setData] = useState<TPlace[]>([]);

  useEffect(() => {
    get<TPlace[]>('/scrap/place/home').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <S.Container>
      {data.map((place, index) => (
        <>
          <S.Item
            onClick={() => {
              navigate(`/place/${place.placeId}`);
            }}
          >
            {place.thumbnail ? (
              <S.PlaceImg src={place.thumbnail} />
            ) : (
              <LocationPlaceholderIcon type={((place.placeId % 5) + 1) as 1 | 2 | 3 | 4 | 5} />
            )}

            <S.PlaceDesc>
              <S.Name>{place.name}</S.Name>
              <S.Address>{place.addressShort}</S.Address>
            </S.PlaceDesc>
            <S.IconWrapper>
              <RightChevronIcon />
            </S.IconWrapper>
          </S.Item>
          {index !== data.length - 1 && <S.SeperateLine />}
        </>
      ))}
    </S.Container>
  );
}

export default TripBucketList;
