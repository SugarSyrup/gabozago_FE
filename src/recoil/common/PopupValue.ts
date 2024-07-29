import { TPopupValue } from '@_types/Popup.type';
import { atom, selector } from 'recoil';

export const popupIsOpen = atom<boolean>({
  key: 'popupIsOpen',
  default: false,
});

export const popupValue = atom<TPopupValue>({
  key: 'popupValue',
  default: {},
});

export const popupIconSelector = selector({
  key: 'popupIconSelector',
  get: ({ get }) => get(popupValue).Icon,
  set: ({ set }, newValue) => {
    set(popupValue, { Icon: newValue as React.ReactNode, ...popupValue });
  },
});

export const popupHeaderSelector = selector({
  key: 'popupHeaderSelector',
  get: ({ get }) => get(popupValue).Header,
  set: ({ set }, newValue) => {
    set(popupValue, { Header: newValue as string, ...popupValue });
  },
});

export const popupDescriptionSelector = selector({
  key: 'popupDescriptionSelector',
  get: ({ get }) => get(popupValue).Description,
  set: ({ set }, newValue) => {
    set(popupValue, { Description: newValue as string, ...popupValue });
  },
});

export const popupWarningSelector = selector({
  key: 'popupWarningSelector',
  get: ({ get }) => get(popupValue).Warning,
  set: ({ set }, newValue) => {
    set(popupValue, { Warning: newValue as string, ...popupValue });
  },
});

export const popupConfirmButtonSelector = selector({
  key: 'popupConfirmButtonSelector',
  get: ({ get }) => get(popupValue).ConfirmButton,
  set: ({ set }, newValue) => {
    set(popupValue, { ConfirmButton: newValue as TPopupValue['ConfirmButton'], ...popupValue });
  },
});

export const popupCloseButtonSelector = selector({
  key: 'popupCloseButtonSelector',
  get: ({ get }) => get(popupValue).CloseButton,
  set: ({ set }, newValue) => {
    set(popupValue, { CloseButton: newValue as TPopupValue['CloseButton'], ...popupValue });
  },
});
