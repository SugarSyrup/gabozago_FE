import { atom } from 'recoil';

interface Location {
  thumbnail?: string | null;
  id: number;
  name: string;
  location: string;
}

export const selectedPlacesState = atom<Location[]>({
  key: 'selectedLocations',
  default: [],
});
