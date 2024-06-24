import { atom } from 'recoil';

export const selectedLocationsState = atom<string[]>({
  key: 'selectedLocationList',
  default: [],
});

export interface Dates {
  startDate: string;
  endDate: string;
}

export const datesState = atom<Dates>({
  key: 'selectedDates',
  default: {
    startDate: '',
    endDate: '',
  },
});
