import { useEffect, useState } from 'react';

import { get } from '@_utils/api';
import Typography from '../../common/Typography';

import RecommendationListItem from '../RecommendationListItem';
import * as S from './style';

interface Props {
  popupOpen: () => void;
  setNewLocation: React.Dispatch<React.SetStateAction<string>>;
  locations: string[];
}

interface TPlace {
  id: number;
  name: string;
  category: string;
  addressShort: string;
  thumbnailURL: string;
}

function LocationHotPlaces({ locations, setNewLocation, popupOpen }: Props) {
  const [recommendPlaces, setRecommendPlaces] = useState<TPlace[]>([]);

  useEffect(() => {
    get<TPlace[]>(`/my-travel/location/hot?location=${locations.toString()}`).then((response) => {
      setRecommendPlaces(response.data);
    });
  }, [locations]);

  return (
    <div style={{ width: '100%' }}>
      {recommendPlaces.length !== 0 && (
        <Typography.Title size="lg">{locations.toLocaleString()} HOT 여행지</Typography.Title>
      )}
      {recommendPlaces.length !== 0 && (
        <S.RecommendationList>
          {recommendPlaces.map(({ name, category, id, addressShort, thumbnailURL }) => (
            <RecommendationListItem
              key={id}
              name={name}
              theme={category}
              address={addressShort}
              location={locations.toString()}
              id={id}
              popupOpen={popupOpen}
              setNewLocation={setNewLocation}
              locations={locations}
              thumbnail={thumbnailURL}
            />
          ))}
        </S.RecommendationList>
      )}
    </div>
  );
}

export default LocationHotPlaces;
