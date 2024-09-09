import { atom } from 'recoil';

export const placeKeyword = atom<string>({
  key: 'placeKeyword',
  default: '',
});
