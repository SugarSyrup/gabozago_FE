import * as S from "./style";
import { SetterOrUpdater } from "recoil";
import { useState } from "react";
import { TFilter } from "../../../../recoil/journals/journalState";
import Select, { Props as SelectProps } from "../Select";
import Buttons, { Props as ButtonsProps } from "../Buttons";
import Location, { Props as LocationsProps } from "../Locations";
import Range, { Props as RangeProps } from "../Range";
import HeadCountEC from "../extraControllers/HeadCountEC";
import DurationEC from "../extraControllers/DurationEC";
import BudgetEC from "../extraControllers/BudgetEC";
import Button from "../../Button";

interface Props {
  type: keyof TFilter;
  filterState: TFilter;
  filterSetState: SetterOrUpdater<TFilter>;
  setModal: SetterOrUpdater<{
    isOpend: boolean;
    title: string;
    contents: string | JSX.Element;
  }>;
}

interface FilterMap {
  [key: string]: {
    title: string;
    component: React.FC<any>;
    props: SelectProps | ButtonsProps | LocationsProps | RangeProps;
  };
}

function Filter({
  type,
  filterState: filter,
  filterSetState: setFilter,
  setModal,
}: Props) {
  const [tempFilter, setTempFilter] = useState(filter[type]);
  const filterMap: FilterMap = {
    // select
    sort: {
      title: "정렬",
      component: Select,
      props: {
        filter: tempFilter,
        setFilter: setTempFilter,
        multiple: false,
        options: ["담은순", "최신순", "최근 인기순"],
      } as SelectProps,
    },
    // location
    location: {
      title: "지역",
      component: Location,
      props: {
        filter: tempFilter,
        setFilter: setTempFilter,
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
      } as LocationsProps,
    },
    // range
    headCount: {
      title: "인원",
      component: Range,
      props: {
        filter: tempFilter,
        setFilter: setTempFilter,
        min: 1,
        max: 30,
        step: 1,
        unit: "인",
        extraControler: (
          <HeadCountEC filter={tempFilter} setFilter={setTempFilter} max={30} />
        ),
      } as RangeProps,
    },
    duration: {
      title: "일정",
      component: Range,
      props: {
        filter: tempFilter,
        setFilter: setTempFilter,
        min: 1,
        max: 100,
        step: 1,
        unit: "일",
        extraControler: (
          <DurationEC filter={tempFilter} setFilter={setTempFilter} />
        ),
      } as RangeProps,
    },
    budget: {
      title: "경비",
      component: Range,
      props: {
        filter: tempFilter,
        setFilter: setTempFilter,
        type: "range",
        min: 1,
        max: 1000,
        step: 1,
        unit: "만원",
        extraControler: (
          <BudgetEC
            filter={tempFilter}
            setFilter={setTempFilter}
            step={10000}
          />
        ),
      } as RangeProps,
    },
    // buttons
    season: {
      title: "계절",
      component: Buttons,
      props: {
        filter: tempFilter,
        setFilter: setTempFilter,
        options: ["봄", "여름", "가을", "겨울"],
      } as ButtonsProps,
    },
    theme: {
      title: "콘텐츠 테마",
      component: Buttons,
      props: {
        filter: tempFilter,
        setFilter: setTempFilter,
        options: [
          "체류",
          "미식",
          "쇼핑",
          "도보",
          "자연",
          "체험",
          "전시∙행사",
          "반려동물",
          "연인",
          "가족",
        ],
      } as ButtonsProps,
    },
  };
  const renderComponent = () => {
    const Component = filterMap[type].component;
    const props = filterMap[type].props;

    return <Component {...props} />;
  };

  return (
    <S.Form>
      {renderComponent()}
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
