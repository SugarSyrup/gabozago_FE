import { atom, selector } from "recoil";

type Range = [number, number] | [null, null];
export interface TFilter {
  sort: "latest";
  location: string[];
  headCount: Range;
  duration: Range;
  season: ("봄" | "여름" | "가을" | "겨울")[];
  theme: string[];
  budget: Range;
}

export const journalFilterState = atom<TFilter>({
  key: "journalFilterState",
  default: {
    sort: "latest",
    location: [],
    headCount: [null, null],
    duration: [null, null],
    season: [],
    theme: [],
    budget: [null, null],
  },
});

export const activeJournalFilterListState = selector({
  key: "activeJournalFilterListState",
  get: ({ get }) => {
    const filter = get(journalFilterState);
    const activeFilterValues: { type: keyof TFilter; value: string }[] = [];

    // 정렬
    if (filter.sort !== "latest") {
      activeFilterValues.push({ type: "sort", value: filter.sort });
    }

    // 인원
    if (filter.headCount[0] !== null && filter.headCount[1] !== null) {
      let valueString = "";

      if (filter.headCount[0] === filter.headCount[1]) {
        valueString = `${filter.headCount[0]}명`;
      } else {
        valueString = `${filter.headCount[0]}명 ~ ${filter.headCount[1]}명`;
      }

      activeFilterValues.push({ type: "headCount", value: valueString });
    }

    // 일정
    if (filter.duration[0] !== null && filter.duration[1] !== null) {
      let valueString = "";

      if (filter.duration[0] === filter.duration[1]) {
        valueString = `${filter.duration[0]}일`;
      } else {
        valueString = `${filter.duration[0]}일 ~ ${filter.duration[1]}일`;
      }

      activeFilterValues.push({ type: "duration", value: valueString });
    }

    // 경비
    if (filter.budget[0] !== null && filter.budget[1] !== null) {
      activeFilterValues.push({
        type: "budget",
        value: `${filter.budget[0] / 10000}만원 ~ ${
          filter.budget[1] / 10000
        }만원`,
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
