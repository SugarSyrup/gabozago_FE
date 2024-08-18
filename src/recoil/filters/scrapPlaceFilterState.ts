import { atom, selector } from 'recoil';
import { TFilter } from '../../assets/types/FilterTypes';

// 스크랩-장소 필터
// [필터 종류]: 지역

export const defaultFilter: TFilter = {
  location: [],
  theme: [],
  sort: '담은순',
};

export const scrapPlaceFilterState = atom<TFilter>({
  key: 'scrapPlaceFilterState',
  default: defaultFilter,
});

export const activeScrapPlaceFilterListState = selector({
  key: 'activeScrapPlaceFilterListState',
  get: ({ get }) => {
    const filter = get(scrapPlaceFilterState);
    const activeFilterValues: { type: keyof TFilter; value: string }[] = [];

    // 지역
    // if (filter.location) {
    filter.location.map((item) => activeFilterValues.push({ type: 'location', value: item }));
    // } else if (filter.sort) {
    activeFilterValues.push({ type: 'sort', value: filter.sort });
    // } else if (filter.theme) {
    filter.theme.map((item) => activeFilterValues.push({ type: 'theme', value: item }));
    // }

    return activeFilterValues;
  },
});
