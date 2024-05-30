import * as S from "./style";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../../utils/api";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  TFilter,
  journalFilterState,
  themeCodeMap,
} from "../../../recoil/journals/journalState";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import TabBar from "../../../components/common/TabBar";
import ScrapedArticle from "../../../components/scrapBook/ScrapedArticle";
import FilterList, { TFilterName } from "../../../components/common/FilterList";
import ShortFormList, {
  ShortForm,
} from "../../../components/home/journals/shortform/ShortFormList";

export interface Article {
  id: number;
  title: string;
  subtitle: string;
  thumbnailURL: string;
  claps: number;
  comment: number;
  bookmark: number;
}

function ScrapBookGroupPage() {
  const { id } = useParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [shortForms, setShortForms] = useState<ShortForm[]>([]);
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const [filter, setFilter] = useRecoilState<TFilter>(journalFilterState);
  const resetFilter = useResetRecoilState(journalFilterState);
  const tabs: { id: string; name: string; filters: TFilterName[] }[] = [
    { id: "아티클", name: "아티클", filters: ["sort"] },
    { id: "숏폼", name: "숏폼", filters: ["sort", "location", "theme"] },
  ];
  const orderingMap = {
    담은순: "scraped",
    최신순: "latest",
    조회순: "most_viewed",
    "최근 인기순": "weekly_popular",
    인기순: "alltime_popular",
  };
  const params = {
    ordering: orderingMap[filter.sort],
    location: filter.location.join(","),
    theme: filter.theme.map((item) => `${themeCodeMap.get(item)}`),
    folder: id === "all" ? null : id,
    cursor: "",
  };

  // 아티클 불러오기
  const getArticles = async () => {
    if(localStorage.getItem("access_token") === null) return;
    const { data } = await get<{
      next: string | null;
      previous: string | null;
      results: Article[];
    }>(`folder/scrap/community/article`, {
      params: params,
    });
    setArticles(data.results);

    return;
  };
  // 숏폼 불러오기
  const getShortForms = async () => {
    const { data } = await get<{
      next: string | null;
      previous: string | null;
      results: ShortForm[];
    }>(`folder/scrap/community/short-form`, { params: params });
    setShortForms(data.results);

    return;
  };
  const getData = () => {
    if (tabs[focusedTabIndex].name === "아티클") {
      getArticles();
    }
    if (tabs[focusedTabIndex].name === "숏폼") {
      getShortForms();
    }
  };

  useEffect(() => {
    resetFilter();
    getData();
  }, [focusedTabIndex]);

  useEffect(() => {
    getData();
  }, [filter]);

  return (
    <PageTemplate
      header={
        <div>
          <PageHeader>스크랩</PageHeader>
          <S.TabBarContainer>
            <TabBar
              tabs={tabs}
              focusedTabIndex={focusedTabIndex}
              setFocusedTabIndex={setFocusedTabIndex}
              widthStyle="fit-content"
              fontSize="16px"
              color="#A6A6A6"
            />
          </S.TabBarContainer>
          <S.FilterContainer>
            <FilterList
              filters={tabs[focusedTabIndex].filters}
              filterState={filter}
              filterSetState={setFilter}
            />
          </S.FilterContainer>
        </div>
      }
    >
      {tabs[focusedTabIndex].name === "아티클" ? (
        articles.map((item) => (
          <S.ContentsList>
            <li>
              <ScrapedArticle {...item} />
            </li>
          </S.ContentsList>
        ))
      ) : (
        <ShortFormList data={shortForms} />
      )}
    </PageTemplate>
  );
}

export default ScrapBookGroupPage;
