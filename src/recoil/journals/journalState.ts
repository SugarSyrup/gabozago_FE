import { atom, selector } from "recoil";

type Range = [number, number] | [null, null];

export interface TFilter {
  sort: "담은순" | "최신순" | "조회순" | "최근 인기순" | "인기순";
  location: string[];
  headCount: Range;
  duration: Range;
  season: ("봄" | "여름" | "가을" | "겨울")[];
  theme: string[];
  budget: Range;
}

export const defaultFilter: TFilter = {
  sort: "담은순",
  location: [],
  headCount: [1, 30],
  duration: [1, 100],
  season: [],
  theme: [],
  budget: [1, 1000],
};

export const journalFilterState = atom<TFilter>({
  key: "journalFilterState",
  default: defaultFilter,
});

export const activeJournalFilterListState = selector({
  key: "activeJournalFilterListState",
  get: ({ get }) => {
    const filter = get(journalFilterState);
    const activeFilterValues: { type: keyof TFilter; value: string }[] = [];

    // 정렬
    if (filter.sort !== defaultFilter.sort) {
      activeFilterValues.push({ type: "sort", value: filter.sort });
    }

    // 인원
    if (
      filter.headCount[0] !== defaultFilter.headCount[0] ||
      filter.headCount[1] !== defaultFilter.headCount[1]
    ) {
      if (filter.headCount[0] === filter.headCount[1]) {
        activeFilterValues.push({
          type: "headCount",
          value: `${filter.headCount[0]}인`,
        });
      } else {
        activeFilterValues.push({
          type: "headCount",
          value: `${filter.headCount[0]}인 ~ ${filter.headCount[1]}인`,
        });
      }
    }

    // 일정
    if (
      filter.duration[0] !== defaultFilter.duration[0] ||
      filter.duration[1] !== defaultFilter.duration[1]
    ) {
      if (filter.duration[0] === filter.duration[1]) {
        activeFilterValues.push({
          type: "duration",
          value: `${filter.duration[0]}일`,
        });
      } else {
        activeFilterValues.push({
          type: "duration",
          value: `${filter.duration[0]}일 ~ ${filter.duration[1]}일`,
        });
      }
    }

    // 경비
    if (
      filter.budget[0] !== defaultFilter.budget[0] ||
      filter.budget[1] !== defaultFilter.budget[1]
    ) {
      activeFilterValues.push({
        type: "budget",
        value: `${filter.budget[0]}만원 ~ ${filter.budget[1]}만원`,
      });
    }

    // 지역
    filter.location.map((item) =>
      activeFilterValues.push({ type: "location", value: item })
    );

    // 계절
    if (
      filter.season.includes("봄") &&
      filter.season.includes("여름") &&
      filter.season.includes("가을") &&
      filter.season.includes("겨울")
    ) {
      activeFilterValues.push({ type: "season", value: "사계절" });
    } else {
      filter.season.map((item) =>
        activeFilterValues.push({ type: "season", value: item })
      );
    }

    // 테마
    filter.theme.map((item) =>
      activeFilterValues.push({ type: "theme", value: item })
    );

    return activeFilterValues;
  },
});
