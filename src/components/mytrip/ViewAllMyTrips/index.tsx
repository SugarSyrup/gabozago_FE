import { useEffect, useRef, useState } from 'react';
import MyLastScheduleCard from '../MyLastScheduleCard';
import { get } from '../../../utils/api';

import * as S from './style';

interface travelResponseType {
  next: string | null;
  previous: string | null;
  results: {
    id: number;
    title: string;
    departure_date: string;
    arrival_date: string;
    regions: string[];
    thumbnailURL: string;
  }[];
}

function ViewAllMyTrips() {
  const [tripData, setTripData] = useState<travelResponseType['results']>([]);
  const [next, setNext] = useState<string | null>(null);
  const infiniteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    get<travelResponseType>('/my-travel/all').then((response) => {
      setTripData(response.data.results);
      setNext(response.data.next);
    });
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && next) {
        get<{
          next: string;
          previous: string;
          results: travelResponseType['results'];
        }>(next).then((response) => {
          setTripData([...tripData, ...response.data.results]);
          setNext(response.data.next);
        });
      }
    }, options);

    if (infiniteRef.current) {
      observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <S.CardList>
      {
        tripData.map((trip) => (
          <MyLastScheduleCard {...trip} key={trip.id} />
        ))
        // tripData.map((trip) => <span>{trip.title}</span>)
      }
      <div ref={infiniteRef} style={{ height: '30px' }} />
    </S.CardList>
  );
}

export default ViewAllMyTrips;
