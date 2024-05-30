import { atom, selector } from "recoil";
import { TFilter } from "../../assets/types/FilterTypes";
import { orderingOptionMap, themeCodeMap } from "./codeMap";

// 스크랩-숏폼 필터
// [필터 종류]: 정렬, 지역, 테마

export const defaultFilter: TFilter = {
  sort: "scraped",
  location: [],
  theme: [],
};

export const scrapShortFormFilterState = atom<TFilter>({
  key: "scrapShortFormFilterState",
  default: defaultFilter,
});

export const activeScrapShortFormFilterListState = selector({
  key: "activeScrapShortFormFilterListState",
  get: ({ get }) => {
    const filter = get(scrapShortFormFilterState);
    const activeFilterValues: { type: keyof TFilter; value: string }[] = [];

    // 정렬
    if (filter.sort !== defaultFilter.sort) {
      activeFilterValues.push({
        type: "sort",
        value: orderingOptionMap.get(filter.sort) as string,
      });
    }

    // 지역
    if (filter.location) {
      filter.location.map((item) =>
        activeFilterValues.push({ type: "location", value: item })
      );
    }

    // 테마
    if (filter.theme) {
      filter.theme.map((item) =>
        activeFilterValues.push({
          type: "theme",
          value: themeCodeMap.get(item) as string,
        })
      );
    }

    return activeFilterValues;
  },
});
