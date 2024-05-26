import * as S from "./style";
import { useEffect, useState } from "react";
import { Marker, MarkerProps, Polyline } from "@react-google-maps/api";

import GoogleMap from "../../common/GoogleMap";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom.svg?react";
import ChevronTopIcon from "../../../assets/icons/chevron_top.svg?react";
import { DayPlan } from "../TripPlanList";
import { markerColors } from "../../../pages/mytrip/DetailPage";

interface Props {
  isEditMode: boolean;
  data: DayPlan[];
}

interface TMarker extends MarkerProps {
  day: number;
}

function PlanMap({ isEditMode, data = [] }: Props) {
  const [markers, setMarkers] = useState<TMarker[]>([]);
  const [mapOpened, setMapOpend] = useState<boolean>(true);

  useEffect(() => {
    data.map(({ day, route }) => {
      console.dir(route);
      const markers = route.map(({ placeName, latitude, longitude }) => ({
        day: day,
        position: { lat: latitude, lng: longitude },
        label: { text: placeName, className: "marker-label" },
      }));
      setMarkers(markers);
    });
  }, [data]);

  useEffect(() => {
    if (isEditMode) {
      setMapOpend(false);
    } else {
      setMapOpend(true);
    }
  }, [isEditMode]);

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  return (
    <S.Container>
      <GoogleMap
        height={mapOpened ? "275px" : "0px"}
        center={{ lat: 35.1855, lng: 129.0741 }}
        markers={markers}
      >
        {data.map((day, dayIndex) => (
          <>
            {day.route.map((place, placeIndex) => (
              <Marker
                key={`marker-${dayIndex}-${placeIndex}`}
                position={{ lat: place.latitude, lng: place.longitude }}
                // icon={{
                //   url: ``
                // }}
              />
            ))}
            <Polyline
              key={`line-${dayIndex}`}
              path={day.route.map((place) => ({
                lat: place.latitude,
                lng: place.longitude,
              }))}
              options={{
                strokeColor: markerColors[(dayIndex + 1) % markerColors.length],
                strokeOpacity: 0.8,
                strokeWeight: 2,
              }}
            />
          </>
        ))}
      </GoogleMap>
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
