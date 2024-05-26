import { atom, selector } from "recoil";
import { TripData } from "../pages/mytrip/DetailPage";

export const tripState = atom<TripData>({
  key: "tripState",
  default: {
    id: -1,
    title: "",
    departure_date: "0000-00-00",
    arrival_date: "0000-00-00",
    days: -1,
    location: [],
    plan: [],
  },
});
