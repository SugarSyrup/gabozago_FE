import * as S from "./style";
import { useCallback, useEffect, useState } from "react";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom.svg?react";
import ChevronTopIcon from "../../../assets/icons/chevron_top.svg?react";
import { DayPlan } from "../TripPlanList";
import { markerColors } from "../../../pages/mytrip/DetailPage";
import MarkerWithInfoWindow from "../MarkerWithInfoWindow";
import { Map, useMap, useMapsLibrary } from "@vis.gl/react-google-maps";

interface Props {
  isEditMode: boolean;
  data: DayPlan[];
}

function PlanMap({ isEditMode, data = [] }: Props) {
  const [mapOpened, setMapOpend] = useState<boolean>(true);
  const map = useMap();
  const maps = useMapsLibrary("maps");

  const renderPolyLine = useCallback(() => {
    // marker들 간에 라인 그리기
    const placePositions: { lat: number; lng: number }[] = [];

    data.map((day) => {
      day.route.map((place) => {
        placePositions.push({ lat: place.latitude, lng: place.longitude });
      });
    });

    console.log(placePositions);

    const placePath = new maps.Polyline({
      path: placePositions,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    placePath.setMap(map);
  }, []);

  useEffect(() => {
    if (isEditMode) {
      setMapOpend(false);
    } else {
      setMapOpend(true);
    }
  }, [isEditMode]);

  useEffect(() => {
    renderPolyLine();
  }, [data]);

  return (
    <S.Container>
      <Map
        style={{ width: "100%", height: mapOpened ? "275px" : "0px" }}
        defaultCenter={{ lat: 35.1855, lng: 129.0741 }}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={import.meta.env.VITE_GOOGLEMAP_MAP_ID}
      >
        {data.map((day, dayIndex) => (
          <>
            {day.route.map((place, placeIndex) => (
              <MarkerWithInfoWindow
                key={`marker-${dayIndex}-${placeIndex}`}
                position={{ lat: place.latitude, lng: place.longitude }}
                color={markerColors[dayIndex % markerColors.length]}
                index={placeIndex + 1}
                placeId={place.placeId}
                placeName={place.placeName}
                placeTheme={place.placeTheme}
              />
            ))}
          </>
        ))}
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
