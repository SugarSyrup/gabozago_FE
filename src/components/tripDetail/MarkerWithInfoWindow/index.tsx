import { AdvancedMarker, useAdvancedMarkerRef, InfoWindow } from '@vis.gl/react-google-maps';
import { useCallback, useState } from 'react';
import * as S from './style';
import MarkerIcon from '../../../assets/icons/marker.svg?react';
import Typography from '../../common/Typography';

interface Props {
  color: string;
  index: number;
  position: { lat: number; lng: number };
  placeId: number;
  address?: string;
  placeName: string;
  placeTheme?: string;
}

function MarkerWithInfoWindow({
  color,
  index,
  position,
  placeId,
  address,
  placeName,
  placeTheme,
}: Props) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = useCallback(() => setInfoWindowShown((isShown) => !isShown), []);
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker ref={markerRef} position={position} onClick={handleMarkerClick}>
        <S.PinContainer color={color}>
          <MarkerIcon />
          <span>{index}</span>
        </S.PinContainer>
      </AdvancedMarker>
      {infoWindowShown && (
        <InfoWindow maxWidth={250} anchor={marker} onClose={handleClose} shouldFocus headerDisabled>
          <S.InfoTopContainer>
            <p>
              <Typography.Title size="md" noOfLine={2}>
                {placeName}
              </Typography.Title>
              {placeTheme && <Typography.Label size="md">{placeTheme}</Typography.Label>}
            </p>
            {address && (
              <p>
                <Typography.Label size="md" color="#a6a6a6" noOfLine={5}>
                  {address}
                </Typography.Label>
              </p>
            )}
          </S.InfoTopContainer>
        </InfoWindow>
      )}
    </>
  );
}

export default MarkerWithInfoWindow;
