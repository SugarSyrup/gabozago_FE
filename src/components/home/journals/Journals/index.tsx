import React, { useEffect, useState } from "react";
import ShortFormList, { ShortForm } from "../shortform/ShortFormList";
import * as S from "./style";
import FilterList from "../../../common/FilterList";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeJournalFilterListState,
  journalFilterState,
  journalOrderingOptions,
} from "../../../../recoil/filters/journalState";
import { get } from "../../../../utils/api";
import {
  orderingOptionMap,
  themeCodeMap,
  themeOptions,
} from "../../../../recoil/filters/codeMap";
import {
  ButtonsOptions,
  SelectOptions,
  TFilterAndOptions,
} from "../../../../assets/types/FilterTypes";

function Journals() {
  const [shortForms, setShortForms] = useState<ShortForm[]>([]);
  const [filter, setFilter] = useRecoilState(journalFilterState);
  const activeFilter = useRecoilValue(activeJournalFilterListState);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [next, setNext] = useState<string>("");
  const infiniteRef = React.useRef<HTMLDivElement>(null);
  const tabs: {
    text: string;
    filters: TFilterAndOptions[];
    contents: JSX.Element;
  }[] = [
    {
      text: "숏폼",
      filters: [
        {
          name: "sort",
          options: {
            options: journalOrderingOptions,
          } as SelectOptions,
        },
        { name: "location", options: null },
        {
          name: "theme",
          options: {
            options: themeOptions,
          } as ButtonsOptions,
        },
      ],
      contents: <ShortFormList data={shortForms} />,
    },
  ];

  const getShortForm = async () => {
    const { data } = await get<{
      next: string;
      previous: string;
      results: ShortForm[];
    }>(`community/short-form`, {
      params: {
        ordering: orderingOptionMap.get(filter.sort),
        location: filter.location.join(","),
        theme: filter.theme.map((item) => themeCodeMap.get(item)).join(","),
      },
    });

    setShortForms(data.results);
    setNext(data.next);
  };

  useEffect(() => {
    getShortForm();
  }, [filter]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {}, options);

    if (infiniteRef.current) {
      observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <S.Container>
      <S.FixedControlBox>
        <FilterList
          filters={tabs[activeCategoryIndex].filters}
          filterState={filter}
          setFilterState={setFilter}
          activeFilterState={activeFilter}
          filterType="Journal"
        />
      </S.FixedControlBox>
      <S.ContentBox>
        {tabs[activeCategoryIndex].contents}
        <div ref={infiniteRef} style={{ height: "50px" }} />
      </S.ContentBox>
    </S.Container>
  );
}

export default Journals;
