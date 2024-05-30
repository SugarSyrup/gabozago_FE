import { atom, selector } from "recoil";
import { TFilter } from "../../assets/types/FilterTypes";
import { orderingOptionMap } from "./codeMap";

// 스크랩-아티클 필터
// [필터 종류]: 정렬

export const defaultFilter: TFilter = {
  sort: "scraped",
};

export const scrapArticleFilterState = atom<TFilter>({
  key: "scrapArticleFilterState",
  default: defaultFilter,
});

export const activeScrapArticleFilterListState = selector({
  key: "activeScrapArticleFilterListState",
  get: ({ get }) => {
    const filter = get(scrapArticleFilterState);
    const activeFilterValues: { type: keyof TFilter; value: string }[] = [];

    // 정렬
    if (filter.sort !== defaultFilter.sort) {
      activeFilterValues.push({
        type: "sort",
        value: orderingOptionMap.get(filter.sort) as string,
      });
    }

    return activeFilterValues;
  },
});
