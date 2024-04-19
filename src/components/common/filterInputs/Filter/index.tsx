import * as S from "./style";
import Select from "../Select";
import Button from "../../Button";
import { SetterOrUpdater } from "recoil";
import { useState } from "react";
import { TFilter } from "../../../../recoil/journals/journalState";
import Buttons from "../Buttons";
import Range from "../Range";
import HeadCountEC from "../extraControllers/HeadCountEC";
import DurationEC from "../extraControllers/DurationEC";
import BudgetEC from "../extraControllers/BudgetEC";

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

function Filter({
  type,
  filterState: filter,
  filterSetState: setFilter,
  setModal,
}: Props) {
  const [tempFilter, setTempFilter] = useState(filter[type]);

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
      type: "multi-select",
      options: [
        "서울",
        "부산",
        "대구",
        "인천",
        "광주",
        "대전",
        "울산",
        "세종",
        "경기",
        "강원",
        "충북",
      ],
    },
    // range
    headCount: {
      title: "인원",
      type: "range",
      min: 1,
      max: 30,
      step: 1,
      unit: "인",
      extraControler: (
        <HeadCountEC filter={tempFilter} setFilter={setTempFilter} max={30} />
      ),
    },
    duration: {
      title: "일정",
      type: "range",
      min: 1,
      max: 100,
      step: 1,
      unit: "일",
      extraControler: (
        <DurationEC filter={tempFilter} setFilter={setTempFilter} />
      ),
    },
    budget: {
      title: "경비",
      type: "range",
      min: 1,
      max: 1000,
      step: 1,
      unit: "만원",
      extraControler: (
        <BudgetEC filter={tempFilter} setFilter={setTempFilter} step={10000} />
      ),
    },
    // buttons
    season: {
      title: "계절",
      type: "buttons",
      options: ["사계절", "봄", "여름", "가을", "겨울"],
    },
  };
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
        return (
          <Range
            filter={tempFilter}
            setFilter={setTempFilter}
            name={filterMap[type].title}
            unit={filterMap[type].unit}
            min={filterMap[type].min}
            max={filterMap[type].max}
            step={filterMap[type].step}
            extraControlerComponent={filterMap[type].extraControler}
          />
        );
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
