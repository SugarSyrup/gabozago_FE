import { useEffect, useRef, useState } from 'react';

import { TravelResponseType } from '@_types/TravelRespones.type';

import { get } from '@_utils/api';

import MyScheduleCard from '../MyScheduleCard';
import * as S from './style';

interface Props {
  tripUpComing: {
    id: number;
    title: string;
    departure_date: string;
    arrival_date: string;
    regions: string[];
    thumbnailURL: string;
  }[];
  next: string | null;
}

function TripCarousel({ tripUpComing, next }: Props) {
  const infiniteObserverRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const [carouselIndex, setCarouselIndex] = useState(0);
  const [nextURL, setNextURL] = useState<string | null>(next);
  const [data, setData] = useState(tripUpComing);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && nextURL) {
        get<TravelResponseType>(nextURL).then((response) => {
          setNextURL(response.data.next);
          setData([...data, ...response.data.results]);
        });
      }
    });

    if (infiniteObserverRef.current) {
      observer.observe(infiniteObserverRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (carouselRef.current === null) return;

    carouselRef.current.scrollTo({
      left: carouselIndex * (carouselRef.current.offsetWidth + 15),
      behavior: 'smooth',
    });
  }, [carouselIndex]);

  useEffect(() => {
    if (carouselRef.current === null) return;

    carouselRef.current.addEventListener('scrollend', (e) => {
      if (carouselRef.current === null) return;

      const target = e.currentTarget as HTMLDivElement;
      setCarouselIndex(target.scrollLeft / (carouselRef.current.offsetWidth - 45));
    });
  });

  return (
    <S.ScheduleCardContainer ref={carouselRef}>
      {tripUpComing.map((tripData, idx) => (
        <MyScheduleCard
          {...tripData}
          key={tripData.id}
          itemIndex={idx}
          carouselIndex={carouselIndex}
          setCarouselIndex={setCarouselIndex}
        />
      ))}
      <div ref={infiniteObserverRef} />
    </S.ScheduleCardContainer>
  );
}

export default TripCarousel;
