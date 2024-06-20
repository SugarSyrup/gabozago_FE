import { atom, selector } from 'recoil';

export const planViewModeState = atom<'NOPLAN' | 'PLAN' | 'EDIT'>({
  key: 'editModeState',
  default: 'NOPLAN',
});

type InfoViewSize = 'default' | 'sm' | 'xs';
export const tripInfoSizeState = selector<InfoViewSize>({
  key: 'tripInfoSizeState',
  get: ({ get }) => {
    const planViewMode = get(planViewModeState);
    if (planViewMode === 'PLAN') {
      return 'sm';
    }
    if (planViewMode === 'EDIT') {
      return 'xs';
    }
    return 'default';
  },
});
