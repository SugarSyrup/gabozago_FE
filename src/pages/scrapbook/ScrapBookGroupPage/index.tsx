import * as S from "./style";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../../utils/api";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import TabBar from "../../../components/common/TabBar";
import ScrapedArticle from "../../../components/scrapBook/ScrapedArticle";
import FilterList from "../../../components/common/FilterList";
import ShortFormList, {
  ShortForm,
} from "../../../components/home/journals/shortform/ShortFormList";
import {
  ButtonsOptions,
  SelectOptions,
  TFilter,
  TFilterAndOptions,
} from "../../../assets/types/FilterTypes";
import {
  orderingOptionMap,
  themeCodeMap,
  themeOptions,
} from "../../../recoil/filters/codeMap";
import {
  activeScrapArticleFilterListState,
  articleOrderingOptions,
  scrapArticleFilterState,
} from "../../../recoil/filters/scrapArticleFilter";
import {
  activeScrapShortFormFilterListState,
  scrapShortFormFilterState,
  shortFormOrderingOptions,
} from "../../../recoil/filters/scrapShortFormFilter";

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

  /* 아티클 */
  const [articleFilter, setArticleFilter] = useRecoilState<TFilter>(
    scrapArticleFilterState
  );
  const activeArticleFilter = useRecoilValue(activeScrapArticleFilterListState);
  const resetArticleFilter = useResetRecoilState(scrapArticleFilterState);

  /* 숏폼 */
  const [shortFormFilter, setShortFormFilter] = useRecoilState<TFilter>(
    scrapShortFormFilterState
  );
  const activeShortFormFilter = useRecoilValue(
    activeScrapShortFormFilterListState
  );
  const resetShortFormFilter = useResetRecoilState(scrapShortFormFilterState);

  const tabs: { id: string; name: string; filters: TFilterAndOptions[] }[] = [
    {
      id: "아티클",
      name: "아티클",
      filters: [
        {
          name: "sort",
          options: {
            options: articleOrderingOptions,
          } as SelectOptions,
        },
      ],
    },
    {
      id: "숏폼",
      name: "숏폼",
      filters: [
        {
          name: "sort",
          options: {
            options: shortFormOrderingOptions,
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
    },
  ];

  // 아티클 불러오기
  const getArticles = async () => {
    if (localStorage.getItem("access_token") === null) return;
    const params = {
      ordering: orderingOptionMap.get(articleFilter.sort),
      folder: id === "all" ? null : id,
      cursor: "",
    };
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
    const params = {
      ordering: orderingOptionMap.get(shortFormFilter.sort),
      location: shortFormFilter?.location.join(","),
      theme: shortFormFilter?.theme
        .map((item) => themeCodeMap.get(item))
        .join(","),
      folder: id === "all" ? null : id,
      cursor: "",
    };
    const { data } = await get<{
      next: string | null;
      previous: string | null;
      results: ShortForm[];
    }>(`folder/scrap/community/short-form`, { params: params });
    setShortForms(data.results);

    return;
  };

  useEffect(() => {
    getArticles();
  }, [articleFilter]);
  useEffect(() => {
    getShortForms();
  }, [shortFormFilter]);
  useEffect(() => {
    resetArticleFilter();
    resetShortFormFilter();
  }, []);

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
              filterType={
                tabs[focusedTabIndex].name === "아티클"
                  ? "scrapArticle"
                  : "scrapShortForm"
              }
              filterState={
                tabs[focusedTabIndex].name === "아티클"
                  ? articleFilter
                  : shortFormFilter
              }
              setFilterState={
                tabs[focusedTabIndex].name === "아티클"
                  ? setArticleFilter
                  : setShortFormFilter
              }
              activeFilterState={
                tabs[focusedTabIndex].name === "아티클"
                  ? activeArticleFilter
                  : activeShortFormFilter
              }
            />
          </S.FilterContainer>
        </div>
      }
    >
      <div style={{marginTop: "-60px"}}>
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
      </div>
    </PageTemplate>
  );
}

export default ScrapBookGroupPage;
