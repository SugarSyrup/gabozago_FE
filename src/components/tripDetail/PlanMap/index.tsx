import { useEffect, useRef, useState } from 'react';
import { Map, useMap } from '@vis.gl/react-google-maps';
import * as S from './style';
import ChevronBottomIcon from '../../../assets/icons/chevron_bottom.svg?react';
import ChevronTopIcon from '../../../assets/icons/chevron_top.svg?react';
import { DayPlan } from '../TripPlanList';
import { markerColors } from '../../../pages/Mytrip/DetailPage';
import MarkerWithInfoWindow from '../MarkerWithInfoWindow';
import Polyline from '../Polyline';

interface Props {
  isEditMode: boolean;
  data: DayPlan[];
  dayFilter: number;
}

function PlanMap({ isEditMode, data = [], dayFilter }: Props) {
  const [mapOpened, setMapOpend] = useState<boolean>(true);
  const [mapFocused, setMapFocused] = useState<boolean>(false);
  const [coords, setCoords] = useState<google.maps.LatLngLiteral[]>([]);
  const map = useMap('plan-map');
  const mapRef = useRef<HTMLDivElement>(null);

  const setBounds = (coords: google.maps.LatLngLiteral[]) => {
    const bounds = new google.maps.LatLngBounds();

    coords.forEach((coord) => {
      bounds.extend(coord);
    });
    map?.fitBounds(bounds);
  };

  const setMarkerCoords = (data: DayPlan[]) => {
    const placePositions: google.maps.LatLngLiteral[] = [];

    data.forEach((day) => {
      day.route.forEach((place) => {
        placePositions.push({ lat: place.latitude, lng: place.longitude });
      });
    });

    setCoords(placePositions);
  };

  useEffect(() => {
    if (isEditMode) {
      setMapOpend(false);
    } else {
      setMapOpend(true);
    }
    setBounds(coords);
  }, [isEditMode]);

  useEffect(() => {
    setMarkerCoords(data);
  }, [data]);

  useEffect(() => {
    if (!map) return;
    setBounds(coords);
  }, [coords, map, mapFocused]);

  useEffect(() => {
    if (!map) return;
    setTimeout(() => {
      setBounds(coords);
    }, 400);
  }, [mapOpened]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (mapRef.current && !mapRef.current.contains(event.target as Node)) {
        setMapFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [mapRef]);

  const getlineSymbol = (color: string) => ({
    path: 'M 0,-1 0,1',
    strokeOpacity: 1,
    scale: 4,
    strokeColor: color,
  });

  return (
    <S.Container ref={mapRef}>
      <Map
        id="plan-map"
        style={{
          width: '100%',
          height: !mapOpened ? '0px' : mapFocused ? '380px' : '275px',
          transition: 'all 0.3s ease-in-out',
        }}
        defaultCenter={{ lat: 35.1855, lng: 129.0741 }}
        defaultZoom={12}
        gestureHandling="greedy"
        disableDefaultUI
        mapId={import.meta.env.VITE_GOOGLEMAP_MAP_ID}
        onClick={() => {
          setMapFocused(true);
        }}
      >
        {data.map(
          (day, dayIndex) =>
            (dayFilter === 0 || day.day === dayFilter) && (
              <>
                <Polyline
                  key={`polyline-${day}`}
                  path={day.route.map(({ latitude, longitude }) => ({
                    lat: latitude,
                    lng: longitude,
                  }))}
                  strokeColor="transpert"
                  strokeOpacity={0}
                  icons={[
                    {
                      icon: getlineSymbol(markerColors[dayIndex % markerColors.length]),
                      offset: '0',
                      repeat: '20px',
                    },
                  ]}
                />
                {day.route.map((place, placeIndex) => (
                  <MarkerWithInfoWindow
                    key={`marker-${dayIndex}-${placeIndex}`}
                    position={{ lat: place.latitude, lng: place.longitude }}
                    color={markerColors[dayIndex % markerColors.length]}
                    index={placeIndex + 1}
                    address={place.address}
                    placeId={place.placeId}
                    placeName={place.placeName}
                    placeTheme={place.placeTheme}
                  />
                ))}
              </>
            ),
        )}
      </Map>
      <S.MapOpenButton
        onClick={() => {
          setMapOpend((prev) => !prev);
        }}
      >
        {mapOpened ? <ChevronTopIcon /> : <ChevronBottomIcon />}
      </S.MapOpenButton>
    </S.Container>
  );
}

export default PlanMap;
