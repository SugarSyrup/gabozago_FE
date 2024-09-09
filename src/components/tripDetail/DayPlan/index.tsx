import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import * as S from './style';
import { DateObject, parseDateString } from '@_utils/calendar';
import TripPlanPlaceItem, { PlaceData } from '../TripPlanPlaceItem';
import AddPlaceButton from '../AddPlaceButton';
import { selectedPlacesState } from '../../../recoil/mytrip/selectedPlacesState';
import { Position } from '../../common/GoogleMap';
import { placeKeyword } from '@_recoil/mytrip/placeKeyword';

interface Props {
  data: PlaceData[];
  day: number;
  date: string;
  setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}
function DayPlan({ data, day, date: dateString, setIsEditMode }: Props) {
  const navigate = useNavigate();
  const setSelectedPlaces = useSetRecoilState(selectedPlacesState);
  const setPlaceKeyword = useSetRecoilState(placeKeyword);
  const date = parseDateString(dateString);
  const markerColors = [
    '#5276FA',
    '#FFAF37',
    '#BA75FF',
    '#FA5252',
    '#30A9DE',
    '#F29661',
    '#78CBA2',
  ];

  const clickAddPlaceButtonHandler = () => {
    setSelectedPlaces([]);
    setPlaceKeyword('');
    navigate(`./${day}/search`);
  };

  const getDistanceString = (pos1: Position, pos2: Position) => {
    const R = 6378.137; // Earth radius in km (WGS84)
    const rad = (x: number) => (x * Math.PI) / 180;

    const dLat = rad(pos2.lat - pos1.lat);
    const dLong = rad(pos2.lng - pos1.lng);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rad(pos1.lat)) * Math.cos(rad(pos2.lat)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    if (d < 1) {
      return `${Math.ceil(d * 1000)}m`;
    }
    return `${d.toFixed(1)}km`;
  };

  return (
    <S.Container>
      <S.DayInfo>
        <div>
          Day {day}
          <span>{`${date?.month}. ${date?.day}(${date?.dayOfWeek})`}</span>
        </div>
        <S.EditButton
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          편집
        </S.EditButton>
      </S.DayInfo>
      <S.PlaceList>
        {data.length === 0 ? (
          <AddPlaceButton onClick={clickAddPlaceButtonHandler} />
        ) : (
          <>
            {data.map((place, index) => (
              <S.PlaceItem key={`placeItem-${day}-${index}`}>
                <S.MarkerBox
                  color={markerColors[(day - 1) % 7]}
                  hasLine={data.length !== index + 1}
                >
                  <S.NumberSpan>{index + 1}</S.NumberSpan>
                  {data.length !== index + 1 && (
                    <S.DistanceSpan
                      onClick={() => {
                        window.open(
                          `https://www.google.co.kr/maps/dir/${
                            data[index].latitude
                          },${data[index].longitude}/${
                            data[index + 1].latitude
                          },${data[index + 1].longitude}`,
                          '_blank',
                        );
                      }}
                    >
                      {getDistanceString(
                        {
                          lat: data[index].latitude,
                          lng: data[index].longitude,
                        },
                        {
                          lat: data[index + 1].latitude,
                          lng: data[index + 1].longitude,
                        },
                      )}
                    </S.DistanceSpan>
                  )}
                </S.MarkerBox>
                <TripPlanPlaceItem
                  {...place}
                  day={day}
                  date={date as DateObject}
                  index={index}
                  setIsEditMode={setIsEditMode}
                />
              </S.PlaceItem>
            ))}
            <S.PlaceItem>
              <div />
              <AddPlaceButton size="small" onClick={clickAddPlaceButtonHandler} />
            </S.PlaceItem>
          </>
        )}
      </S.PlaceList>
    </S.Container>
  );
}

export default DayPlan;
