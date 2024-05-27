import * as S from "./style";
import {
  AdvancedMarker,
  useAdvancedMarkerRef,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";
import MarkerIcon from "../../../assets/icons/marker.svg?react";
import Typography from "../../common/Typography";

interface Props {
  key: string;
  color: string;
  index: number;
  position: { lat: number; lng: number };
  placeId: number;
  //   address?: string;
  placeName: string;
  placeTheme?: string;
}

function MarkerWithInfoWindow({
  key,
  color,
  index,
  position,
  placeId,
  //   address
  placeName,
  placeTheme,
}: Props) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker
        key={key}
        ref={markerRef}
        position={position}
        onClick={handleMarkerClick}
      >
        <S.PinContainer color={color}>
          <MarkerIcon />
          <span>{index}</span>
        </S.PinContainer>
      </AdvancedMarker>
      {infoWindowShown && (
        <InfoWindow anchor={marker} onClose={handleClose} shouldFocus={true}>
          <S.InfoTopContainer>
            <p>
              <Typography.Title size="md">{placeName}</Typography.Title>
              {placeTheme && (
                <Typography.Label size="md">{placeTheme}</Typography.Label>
              )}
            </p>
            {/* {address && <p>{address}</p>} */}
            <p>
              <Typography.Label size="md" color="#a6a6a6" noOfLine={5}>
                부산광역시 남구 용소로 45
              </Typography.Label>
            </p>
          </S.InfoTopContainer>
        </InfoWindow>
      )}
    </>
  );
}

export default MarkerWithInfoWindow;
