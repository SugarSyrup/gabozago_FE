import { useEffect, useState } from 'react';

import { get } from '@_utils/api';

import Typography from '../../common/Typography';
import RecommendationReviewItem from '../RecommendationReviewItem';

import * as S from './style';

interface Props {
  locations: string[];
}

interface TRecommendData {
  id: number;
  title: string;
  location: string[];
  thumbnailURL: string;
  claps: number;
  comment: number;
  bookmark: number;
}

function LocationRecommendContents({ locations }: Props) {
  const [data, setData] = useState<TRecommendData[]>([]);

  useEffect(() => {
    get<TRecommendData[]>(`my-travel/location/content?name=${locations.toLocaleString()}`).then(
      (response) => {
        setData(response.data);
      },
    );
  }, [locations]);

  return (
    <>
      {data && (
        <div style={{ width: '100%' }}>
          <Typography.Title size="lg">추가한 여행지를 포함한 콘텐츠</Typography.Title>
          <S.RecommendatoinReviewList>
            {data.map((item) => (
              <RecommendationReviewItem
                key={item.id}
                type="article"
                id={item.id}
                name={item.title}
                location={item.location}
                thumbnailURL={item.thumbnailURL}
                hearts={item.claps}
                comments={item.comment}
                scraps={item.bookmark}
              />
            ))}
          </S.RecommendatoinReviewList>
        </div>
      )}
      {/* {data && data[1].short_form && (
          <RecommendationReviewItem
            type="short-form"
            id={data[1].short_form[0].id}
            videoId={data[1].short_form[0].videoId}
            name={data[1].short_form[0].title}
            location={data[1].short_form[0].location}
            hearts={data[1].short_form[0].claps}
            comments={data[1].short_form[0].comment}
            scraps={data[1].short_form[0].bookmark}
          />
        )} */}
    </>
  );
}

export default LocationRecommendContents;
