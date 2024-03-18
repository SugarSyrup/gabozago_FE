import * as S from "./style";
import { useRecoilValue, useSetRecoilState } from "recoil";

import OptionsIcon from "../../../assets/icons/options.svg?react";
import DeleteIcon from "../../../assets/icons/x.svg?react";
import FilterButton from "../FilterButton";

import {
  TFilter,
  activeJournalFilterListState,
  journalFilterState,
} from "../../../recoil/journals/journalState";

interface Props {
  filters: (
    | "sort"
    | "location"
    | "headCount"
    | "duration"
    | "season"
    | "theme"
    | "budget"
  )[];
}

function FilterList({ filters }: Props) {
  const filterTypeMap = {
    sort: "정렬",
    location: "지역",
    headCount: "인원",
    duration: "일정",
    season: "계절",
    theme: "테마",
    budget: "경비",
  };
  const activeFilters = useRecoilValue(activeJournalFilterListState);
  const setFilter = useSetRecoilState(journalFilterState);

  const deleteFilterChip = (type: keyof TFilter, value: string): void => {
    setFilter((prev) => {
      switch (type) {
        case "sort":
          return { ...prev, sort: "latest" };
          break;

        case "location":
        case "season":
        case "theme":
          return {
            ...prev,
            [type]: prev[type].filter((item) => item !== value),
          };
          break;

        case "headCount":
        case "duration":
        case "budget":
          return { ...prev, [type]: [null, null] };
          break;
      }

      return prev;
    });
  };

  return (
    <div>
      <S.FilterList>
        <S.FilterItem>
          <S.AllFilterButton onClick={() => alert("전체 필터 보기")}>
            <OptionsIcon />
          </S.AllFilterButton>
        </S.FilterItem>
        {filters.map((item) => (
          <S.FilterItem>
            <FilterButton name={filterTypeMap[item]} type={item} />
          </S.FilterItem>
        ))}
      </S.FilterList>
      <S.ActiveFilterList>
        {activeFilters.map(({ type, value }) => (
          <S.ActiveFilterChip
            onClick={() => {
              deleteFilterChip(type, value);
            }}
          >
            {value}
            <DeleteIcon />
          </S.ActiveFilterChip>
        ))}
      </S.ActiveFilterList>
    </div>
  );
}

export default FilterList;
