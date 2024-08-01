import { atom } from 'recoil';
import { ItemInterface } from 'react-sortablejs';
import { TripData } from '../pages/Mytrip/DetailPage';
import { DayPlan } from '../components/tripDetail/TripPlanList';
import { PlaceData } from '../components/tripDetail/TripPlanPlaceItem';

export const tripState = atom<TripData>({
  key: 'tripState',
  default: {
    id: -1,
    title: '',
    departure_date: '0000-00-00',
    arrival_date: '0000-00-00',
    days: -1,
    location: [],
    plan: [],
  },
});

export const selectedPlacesState = atom<{ day: number; placeIndex: number }[]>({
  key: 'selectedPlacesState',
  default: [],
});

export type SortableRoute = ItemInterface & PlaceData;
export interface SortableDayPlan extends DayPlan {
  route: SortableRoute[];
}

export const editingTripPlanState = atom<SortableDayPlan[]>({
  key: 'editingTripPlanState',
  default: [],
});
