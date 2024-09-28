import { useEffect, useState } from 'react';
import TripItem from '../TripItem';

import * as S from './style';
import { get } from '@_utils/api';

interface TravelType {
  upcoming: {
    id: number;
    title: string;
    departureDate: string;
    arrivalDate: string;
    location: string[];
    thumbnailURL: string;
  }[];
  past: {
    id: number;
    title: string;
    departureDate: string;
    arrivalDate: string;
    location: string[];
    thumbnailURL: string;
  }[];
}

function TripList() {
  const [data, setData] = useState<TravelType>();
  useEffect(() => {
    get<TravelType>('/user/profile/my-travel').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <S.List>
      {data?.upcoming.map((trip, index) => <TripItem {...trip} key={`${trip.id} ${index}`} />)}
      {data?.past.map((trip, index) => <TripItem {...trip} key={`${trip.id} ${index}`} />)}
    </S.List>
  );
}

export default TripList;
