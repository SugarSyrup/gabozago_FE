import * as S from "./style";
import { useEffect, useState } from "react";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom.svg?react";
import ChevronTopIcon from "../../../assets/icons/chevron_top.svg?react";
import { DayPlan } from "../TripPlanList";
import { markerColors } from "../../../pages/mytrip/DetailPage";
import MarkerWithInfoWindow from "../MarkerWithInfoWindow";
import { Map, useMapsLibrary } from "@vis.gl/react-google-maps";
import Polyline from "../Polyline";

interface Props {
  isEditMode: boolean;
  data: DayPlan[];
}

function PlanMap({ isEditMode, data = [] }: Props) {
  const [mapOpened, setMapOpend] = useState<boolean>(true);
  const [placePath, setPlacePath] = useState<{ lat: number; lng: number }[]>(
    []
  );
  const maps = useMapsLibrary("maps");

  const getPolyLinePath = () => {
    const placePositions: { lat: number; lng: number }[] = [];

    data.map((day) => {
      day.route.map((place) => {
        placePositions.push({ lat: place.latitude, lng: place.longitude });
      });
    });

    setPlacePath(placePositions);
  };

  useEffect(() => {
    if (isEditMode) {
      setMapOpend(false);
    } else {
      setMapOpend(true);
    }
  }, [isEditMode]);

  useEffect(() => {
    getPolyLinePath();
  }, [data]);

  const lineSymbol = {
    path: "M 0,-1 0,1",
    strokeOpacity: 1,
    scale: 4,
    strokeColor: "#424242",
  };

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
        <Polyline
          path={placePath}
          strokeColor={"transpert"}
          strokeOpacity={0}
          icons={[{ icon: lineSymbol, offset: "0", repeat: "20px" }]}
        />
        {data.map((day, dayIndex) =>
          day.route.map((place, placeIndex) => (
            <MarkerWithInfoWindow
              key={`marker-${dayIndex}-${placeIndex}`}
              position={{ lat: place.latitude, lng: place.longitude }}
              color={markerColors[dayIndex % markerColors.length]}
              index={placeIndex + 1}
              placeId={place.placeId}
              placeName={place.placeName}
              placeTheme={place.placeTheme}
            />
          ))
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
