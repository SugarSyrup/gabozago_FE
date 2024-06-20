import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { get, post } from '../../../../../utils/api';
import Typography from '../../../../common/Typography';
import LocationPlaceholderIcon from '../../../../mytrip/LocationPlaceholderIcon';
import MapPinIcon from '../../../../../assets/icons/location.svg?react';
import AddPlaceIcon from '../../../../../assets/icons/calendar_add_border.svg?react';
import BookMarkIcon from '../../../../../assets/icons/bookmark.svg?react';
import FilledBookMarkIcon from '../../../../../assets/icons/bookmark_filled.svg?react';

interface Place {
  id: number;
  name: string;
  location: string;
  isMyTravelAdded: boolean;
  isBookmarked: boolean;
}

interface Props {
  id: number;
}

function PlacesModalContents({ id }: Props) {
  const navigate = useNavigate();
  const [places, setPlaces] = useState<Place[]>([]);

  const getPlaces = async () => {
    const { data } = await get<Place[]>(`/community/short-form/${id}/place`);
    console.dir(data);
    setPlaces(data);
  };

  const toggleBookmark = async (placeId: number) => {
    const { data } = await post<{
      message: 'Create Success' | 'Delete Success';
    }>('/folder/scrap/place', {
      placeId,
    });
    if (data.message) {
      getPlaces();
    }
  };

  useEffect(() => {
    getPlaces();
  }, []);
  useEffect(() => {
    console.dir(places);
  }, [places]);

  return (
    <S.Container>
      <S.PlaceList>
        {places.map(({ id: placeId, name, location, isMyTravelAdded, isBookmarked }, index) => (
          <S.PlaceItem key={`shotform-place-${id}-${placeId}`}>
            <S.LeftBox
              onClick={() => {
                navigate(`/place/${placeId}`);
              }}
            >
              <LocationPlaceholderIcon type={((index % 5) + 1) as 1 | 2 | 3 | 4 | 5} />
              <S.TextInfoBox>
                <Typography.Body size="md">{name}</Typography.Body>
                <p>
                  <MapPinIcon />
                  <Typography.Body size="sm" color="#a6a6a6">
                    {location}
                  </Typography.Body>
                </p>
              </S.TextInfoBox>
            </S.LeftBox>
            <S.ButtonBox>
              <S.IconButton
                type="addToPlan"
                isActive={isMyTravelAdded}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/mytrip/place/${placeId}`);
                }}
              >
                <AddPlaceIcon />
              </S.IconButton>
              <S.IconButton
                type="bookmark"
                isActive={isBookmarked}
                onClick={(e) => {
                  e.preventDefault();
                  toggleBookmark(placeId);
                }}
              >
                {isBookmarked ? <FilledBookMarkIcon /> : <BookMarkIcon />}
              </S.IconButton>
            </S.ButtonBox>
          </S.PlaceItem>
        ))}
      </S.PlaceList>
    </S.Container>
  );
}

export default PlacesModalContents;
