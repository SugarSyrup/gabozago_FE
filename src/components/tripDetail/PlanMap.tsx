import GoogleMap from "../common/GoogleMap";
import { Marker as MarkerBox } from "@react-google-maps/api";
import { DayPlan } from "../../assets/data/tripPlanData";

interface Props {
  plan: DayPlan[];
}
/**
 * @todo 마커에 넘버링
 * @todo 클릭하면 효과가 생기면서 라벨이 보이게
 */
function PlanMap({ plan }: Props) {
  const findMidLatLng = () => {
    const temp = plan.filter(({ route }) => route?.length !== 0);
    console.log(temp);

    const lats = temp
      .map(({ route }) => route?.map(({ position }) => position.lat))
      .flat();
    const lngs = temp
      .map(({ route }) => route?.map(({ position }) => position.lng))
      .flat();

    lats.sort();
    lngs.sort();

    const result = {
      lat: 0,
      lng: 0,
    };

    if (lats.length === 1) {
      result.lat = lats[0];
    } else {
      result.lat = (lats[0] + lats[lats.length - 1]) / 2;
    }

    if (lngs.length === 1) {
      result.lng = lngs[0];
    } else {
      result.lng = (lngs[0] + lngs[lngs.length - 1]) / 2;
    }

    return result;
  };

  return (
    <GoogleMap height="220px" center={findMidLatLng()}>
      {plan &&
        plan.map(({ day, route }) => {
          return route?.map(({ placeName, position }) => (
            <MarkerBox label={placeName} position={position}>
              {day}
            </MarkerBox>
          ));
        })}
    </GoogleMap>
  );
}

export default PlanMap;
