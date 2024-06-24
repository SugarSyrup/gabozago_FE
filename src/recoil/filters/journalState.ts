import { atom, selector } from 'recoil';
import { TFilter } from '../../assets/types/FilterTypes';
import { orderingOptionMap, orderingOptions } from './codeMap';

// 숏폼 필터
// [필터 종류]: 정렬, 지역, 테마

export const journalOrderingOptions = orderingOptions.filter(({ label }) =>
  ['최신순', '조회순', '인기순', '최근 인기순'].includes(label),
);

export const defaultFilter: TFilter = {
  sort: '최신순',
  location: [],
  theme: [],
  // headCount: [1, 30],
  // duration: [1, 100],
  // season: [],
  // budget: [1, 1000],
};

export const journalFilterState = atom<TFilter>({
  key: 'journalFilterState',
  default: defaultFilter,
});

export const activeJournalFilterListState = selector({
  key: 'activeJournalFilterListState',
  get: ({ get }) => {
    const filter = get(journalFilterState);
    const activeFilterValues: { type: keyof TFilter; value: string }[] = [];

    // 정렬
    if (filter.sort !== defaultFilter.sort) {
      console.dir(filter.sort);
      console.dir(orderingOptionMap.get(filter.sort));
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

// export const activeJournalFilterListState = selector({
//   key: "activeJournalFilterListState",
//   get: ({ get }) => {
//     const filter = get(journalFilterState);
//     const activeFilterValues: { type: keyof TFilter; value: string }[] = [];

//     // 정렬
//     if (filter.sort !== defaultFilter.sort) {
//       activeFilterValues.push({ type: "sort", value: filter.sort });
//     }

//     // 인원
//     if (
//       filter.headCount[0] !== defaultFilter.headCount[0] ||
//       filter.headCount[1] !== defaultFilter.headCount[1]
//     ) {
//       if (filter.headCount[0] === filter.headCount[1]) {
//         activeFilterValues.push({
//           type: "headCount",
//           value: `${filter.headCount[0]}인`,
//         });
//       } else {
//         activeFilterValues.push({
//           type: "headCount",
//           value: `${filter.headCount[0]}인 ~ ${filter.headCount[1]}인`,
//         });
//       }
//     }

//     // 일정
//     if (
//       filter.duration[0] !== defaultFilter.duration[0] ||
//       filter.duration[1] !== defaultFilter.duration[1]
//     ) {
//       if (filter.duration[0] === filter.duration[1]) {
//         activeFilterValues.push({
//           type: "duration",
//           value: `${filter.duration[0]}일`,
//         });
//       } else {
//         activeFilterValues.push({
//           type: "duration",
//           value: `${filter.duration[0]}일 ~ ${filter.duration[1]}일`,
//         });
//       }
//     }

//     // 경비
//     if (
//       filter.budget[0] !== defaultFilter.budget[0] ||
//       filter.budget[1] !== defaultFilter.budget[1]
//     ) {
//       activeFilterValues.push({
//         type: "budget",
//         value: `${filter.budget[0]}만원 ~ ${filter.budget[1]}만원`,
//       });
//     }

//     // 지역
//     filter.location.map((item) =>
//       activeFilterValues.push({ type: "location", value: item })
//     );

//     // 계절
//     filter.season.map((item) =>
//       activeFilterValues.push({ type: "season", value: item })
//     );

//     // 테마
//     filter.theme.map((item) =>
//       activeFilterValues.push({ type: "theme", value: item })
//     );

//     return activeFilterValues;
//   },
// });
