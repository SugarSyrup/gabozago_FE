import GoogleMap from "../common/GoogleMap";
import { MarkerProps } from "@react-google-maps/api";
import { DayPlan } from "../../assets/data/tripPlanData";
import { planViewModeState } from "../../recoil/planViewModeState";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface Props {
  plan: DayPlan[];
}
function PlanMap({ plan }: Props) {
  const [viewMode] = useRecoilState(planViewModeState);
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
  const [markers, setMarkers] = useState<MarkerProps[]>([]);

  useEffect(() => {
    plan.map(({ day, route }) => {
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
    <GoogleMap
      height={viewMode === "EDIT" ? "0px" : "220px"}
      center={findMidLatLng()}
      markers={markers}
    />
  );
}

export default PlanMap;
