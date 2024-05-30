import React, { useEffect, useState } from "react";
import ShortFormList, { ShortForm } from "../shortform/ShortFormList";
import * as S from "./style";
import FilterList, { TFilterName } from "../../../common/FilterList";
import { useRecoilState } from "recoil";
import {
  journalFilterState,
  themeCodeMap,
} from "../../../../recoil/journals/journalState";
import { get } from "../../../../utils/api";

function Journals() {
  const [shortForms, setShortForms] = useState<ShortForm[]>([]);
  const [filter, setFilter] = useRecoilState(journalFilterState);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [next, setNext] = useState<string>("");
  const infiniteRef = React.useRef<HTMLDivElement>(null);
  const categories: {
    text: string;
    filters: TFilterName[];
    contents: JSX.Element;
  }[] = [
    {
      text: "숏폼",
      filters: ["sort", "location", "theme"],
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
        ordering: filter.sort,
        location: filter.location.join(","),
        theme: filter.theme.map((item) => `${themeCodeMap.get(item)}`),
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
        rootMargin: '0px',
        threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
    }, options)

    if(infiniteRef.current) {
        observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  })

  return (
    <S.Container>
      <S.FixedControlBox>
        <FilterList
          filters={categories[activeCategoryIndex].filters}
          filterState={filter}
          filterSetState={setFilter}
        />
      </S.FixedControlBox>
      <S.ContentBox>
        {categories[activeCategoryIndex].contents}
        <div ref={infiniteRef} style={{height: "50px"}}/>
      </S.ContentBox>
    </S.Container>
  );
}

export default Journals;
