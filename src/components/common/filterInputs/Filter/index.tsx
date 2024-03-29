import * as S from "./style";
import Select from "../Select";
import Button from "../../Button";
import { SetterOrUpdater } from "recoil";
import { useState } from "react";
import { TFilter } from "../../../../recoil/journals/journalState";
import Buttons from "../Buttons";

type TFilterType = "multi-select" | "range" | "buttons";

interface TFilterInfo {
  title: string;
  type: TFilterType;
  options?: string[];
  default?: string[];
}

interface Props {
  type: keyof TFilter | "total";
  filterState: TFilter;
  filterSetState: SetterOrUpdater<TFilter>;
  setModal: SetterOrUpdater<{
    isOpend: boolean;
    title: string;
    contents: string | JSX.Element;
  }>;
}

const filterMap = {
  // select
  sort: {
    title: "정렬",
    type: "select",
    options: ["최신순", "추천순", "인기순", "최근 인기순"],
  },
  // multi-select
  theme: {
    title: "테마",
    type: "multi-select",
    options: [
      "미식 • 쇼핑",
      "전시 • 행사",
      "도보여행",
      "자연",
      "아웃도어 • 레저",
      "체류",
      "가족여행",
      "애견동반",
    ],
  },
  // location
  location: {
    title: "지역",
    type: "location",
    options: [],
  },
  // range
  headCount: { title: "인원", type: "range", options: [] },
  duration: { title: "일정", type: "range", options: [] },
  budget: { title: "경비", type: "range", options: [] },
  // buttons
  season: {
    title: "계절",
    type: "buttons",
    options: ["사계절", "봄", "여름", "가을", "겨울"],
  },
};

function Filter({
  type,
  filterState: filter,
  filterSetState: setFilter,
  setModal,
}: Props) {
  const [tempFilter, setTempFilter] = useState(filter[type]);
  const renderFilterContents = () => {
    switch (filterMap[type].type) {
      case "select":
        return (
          <Select
            filter={tempFilter}
            setFilter={setTempFilter}
            options={filterMap[type].options || []}
            multiple={false}
          />
        );
        break;
      case "multi-select":
        return (
          <Select
            filter={tempFilter}
            setFilter={setTempFilter}
            options={filterMap[type].options || []}
            multiple={true}
          />
        );
        break;
      case "range":
        return <></>;
        break;
      case "buttons":
        return (
          <Buttons
            filter={tempFilter}
            setFilter={setTempFilter}
            options={filterMap[type].options || []}
          />
        );
        break;
    }
  };

  return (
    <S.Form>
      {renderFilterContents()}
      <S.SubmitButtonContainer>
        <Button
          type="normal"
          size="lg"
          active={true}
          width="100%"
          onClick={(e) => {
            e.preventDefault();
            setFilter((prev) => ({ ...prev, [type]: tempFilter }));
            setModal((prev) => ({ ...prev, isOpend: false }));
          }}
        >
          적용하기
        </Button>
      </S.SubmitButtonContainer>
    </S.Form>
  );
}

export default Filter;
