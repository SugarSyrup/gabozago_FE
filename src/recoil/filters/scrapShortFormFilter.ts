import { atom, selector } from 'recoil';
import { TFilter } from '../../assets/types/FilterTypes';
import { orderingOptions } from './codeMap';

// 스크랩-숏폼 필터
// [필터 종류]: 정렬, 지역, 테마

export const shortFormOrderingOptions = orderingOptions.filter(({ label }) =>
  ['담은순', '최신순', '조회순', '인기순', '최근 인기순'].includes(label),
);

export const defaultFilter: TFilter = {
  sort: '담은순',
  location: [],
  theme: [],
};

export const scrapShortFormFilterState = atom<TFilter>({
  key: 'scrapShortFormFilterState',
  default: defaultFilter,
});

export const activeScrapShortFormFilterListState = selector({
  key: 'activeScrapShortFormFilterListState',
  get: ({ get }) => {
    const filter = get(scrapShortFormFilterState);
    const activeFilterValues: { type: keyof TFilter; value: string }[] = [];

    // 정렬
    if (filter.sort !== defaultFilter.sort) {
      activeFilterValues.push({
        type: 'sort',
        value: filter.sort,
      });
    }

    // 지역
    if (filter.location) {
      filter.location.map((item) => activeFilterValues.push({ type: 'location', value: item }));
    }

    // 테마
    if (filter.theme) {
      filter.theme.map((item) =>
        activeFilterValues.push({
          type: 'theme',
          value: item,
        }),
      );
    }

    return activeFilterValues;
  },
});
