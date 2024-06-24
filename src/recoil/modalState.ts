import { atom } from 'recoil';

export const modalState = atom<{
  isOpend: boolean;
  title: string;
  contents: string | JSX.Element;
}>({
  key: 'modalState',
  default: {
    isOpend: false,
    title: '',
    contents: '',
  },
});
