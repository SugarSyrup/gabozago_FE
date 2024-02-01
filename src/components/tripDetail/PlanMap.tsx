import GoogleMap from "../common/GoogleMap";
import { MarkerProps } from "@react-google-maps/api";
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
    const result = {
      lat: 0,
      lng: 0,
    };
    const temp = plan.filter(({ route }) => route?.length !== 0);
    console.log(temp);

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
  const markers: MarkerProps[] = [];

  plan.map(({ day, route }) => {
    route?.map(({ placeName, position }) => {
      markers.push({
        position: position,
        label: { text: placeName, className: "marker-label" },
      });
    });
  });

  return (
    <GoogleMap height="220px" center={findMidLatLng()} markers={markers} />
  );
}

export default PlanMap;
