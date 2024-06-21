import { atom, selector } from "recoil";
import { TFilter } from "../../assets/types/FilterTypes";

// 스크랩-장소 필터
// [필터 종류]: 지역

export const defaultFilter: TFilter = {
  location: [],
};

export const scrapPlaceFilterState = atom<TFilter>({
  key: "scrapPlaceFilterState",
  default: defaultFilter,
});

export const activeScrapPlaceFilterListState = selector({
  key: "activeScrapPlaceFilterListState",
  get: ({ get }) => {
    const filter = get(scrapPlaceFilterState);
    const activeFilterValues: { type: keyof TFilter; value: string }[] = [];

    // 지역
    if (filter.location) {
      filter.location.map((item) =>
        activeFilterValues.push({ type: "location", value: item })
      );
    }

    return activeFilterValues;
  },
});
