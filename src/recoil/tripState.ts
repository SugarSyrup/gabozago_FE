import { atom } from "recoil";
import { TripData } from "../pages/mytrip/DetailPage";
import { DayPlan } from "../components/tripDetail/TripPlanList";

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

export const editingTripPlanState = atom<DayPlan[]>({
  key: "editingTripPlanState",
  default: [],
});
