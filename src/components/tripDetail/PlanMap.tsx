import * as S from "../../styles/mytrip/PlanMap.style.ts";
import GoogleMap from "../common/GoogleMap";
import { MarkerProps } from "@react-google-maps/api";
import { planViewModeState } from "../../recoil/planViewModeState";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { tripPlanState } from "../../recoil/tripState";
import ChevronBottomIcon from "../../assets/icons/chevron_bottom.svg?react";
import ChevronTopIcon from "../../assets/icons/chevron_top.svg?react";

function PlanMap() {
  const [markers, setMarkers] = useState<MarkerProps[]>([]);
  const [mapOpened, setMapOpend] = useState<boolean>(true);
  const viewMode = useRecoilValue(planViewModeState);
  const plan = useRecoilValue(tripPlanState);
  const findMidLatLng = () => {
    const result = {
      lat: 0,
      lng: 0,
    };
    const temp = plan.filter(({ route }) => route?.length !== 0);

    const lats = temp
      .map(({ route }) => route?.map(({ position }) => position.lat))
      .flat();
    const lngs = temp
      .map(({ route }) => route?.map(({ position }) => position.lng))
      .flat();

    if (lats.length === 0 && lngs.length === 0) {
      return result;
    }

    lats.sort();
    lngs.sort();

    result.lat =
      lats.length === 1 ? lats[0] : (lats[0] + lats[lats.length - 1]) / 2;
    result.lng =
      lngs.length === 1 ? lngs[0] : (lngs[0] + lngs[lngs.length - 1]) / 2;

    return result;
  };

  useEffect(() => {
    if (viewMode === "EDIT") {
      setMapOpend(false);
    } else {
      setMapOpend(true);
    }
  }, [viewMode]);

  useEffect(() => {
    plan?.map(({ route }) => {
      route?.map(({ placeName, position }) => {
        setMarkers((prev) => [
          ...prev,
          {
            position: position,
            label: { text: placeName, className: "marker-label" },
          },
        ]);
      });
    });
  }, []);

  return (
    <S.Container>
      <GoogleMap
        height={mapOpened ? "220px" : "0px"}
        center={findMidLatLng()}
        markers={markers}
      />
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
