import * as S from "./style";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../../../utils/api";
import { useRecoilState, useResetRecoilState } from "recoil";
import {
  TFilter,
  journalFilterState,
} from "../../../recoil/journals/journalState";
import PageTemplate from "../../../components/common/PageTemplate";
import PageHeader from "../../../components/common/PageHeader";
import TabBar from "../../../components/common/TabBar";
import ScrapedArticle from "../../../components/scrapBook/ScrapedArticle";
import FilterList from "../../../components/common/FilterList";
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
  const [articles, setArticles] = useState<Article[]>([
    {
      id: 10,
      title: "titletest2",
      subtitle:
        "subtitletest2subtitletest2subtitle test2subtitle test2subtitletest2subtitletest2subtitletest2subtitletest2",
      thumbnailURL: "",
      claps: 0,
      comment: 0,
      bookmark: 2,
    },
    {
      id: 14,
      title: "titletest3",
      subtitle: "subtitletest3",
      thumbnailURL: "",
      claps: 0,
      comment: 3,
      bookmark: 1,
    },
  ]);
  const [shortForms, setShortForms] = useState<ShortForm[]>([
    {
      id: 0,
      title: "15초 여수 맛집투어 정리!",
      region: ["여수"],
      videoId: "tw4RatoDIFo",
      thumbnailURL: "https://i.ytimg.com/vi/tw4RatoDIFo/oar2.jpg",
      theme: ["테마아니고띰"],
      views: 210,
    },
    {
      id: 1,
      title: "15초 여수 맛집투어 정리!",
      region: ["경주"],
      videoId: "09YVe7ja5Ig",
      thumbnailURL: "https://i.ytimg.com/vi/09YVe7ja5Ig/oar2.jpg",
      theme: ["어릔지"],
      views: 210,
    },
    {
      id: 2,
      title:
        "각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 제1항과 제2항의 처분 또는 명령을 한 때에는 지체없이 국회에 보고하여 그 승인을 얻어야 한다.",
      region: ["지역", "미역"],
      videoId: "J1xbIYlj9DE",
      thumbnailURL: "https://i.ytimg.com/vi/J1xbIYlj9DE/oar2.jpg?",
      theme: ["틈매이러"],
      views: 210,
    },
    {
      id: 3,
      title: "당신은 창의적이고 독특한 아이디어를 가진 탁월한 사람입니다",
      region: ["침대"],
      videoId: "q9M4-Z9PbMQ",
      thumbnailURL: "https://i.ytimg.com/vi/q9M4-Z9PbMQ/oar2.jpg?",
      theme: ["가족"],
      views: 210,
    },
    {
      id: 4,
      title:
        "당신은 창의적이고 독특한 아이디어를 가진 탁월한 사람입니다. 당신의 창의성과 독립적인 사고는 다른 사람들에게 영감을 주고 새로운 시각을 제공합니다. 당신은 문제에 대한 해결책을 찾는 것이 뛰어나며, 어려운 상황에서도 차분하고 명확한 판단력을 가지고 있습니다.",
      region: ["지역"],
      videoId: "q9M4-Z9PbMQ",
      thumbnailURL: "https://placehold.co/400x600",
      theme: ["천장"],
      views: 210,
    },
  ]);
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const [filter, setFilter] = useRecoilState<TFilter>(journalFilterState);
  const resetFilter = useResetRecoilState(journalFilterState);
  const tabs = [
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
    theme: filter.theme.join(","),
    folder: id === "all" ? null : id,
    cursor: "",
  };

  // 아티클 불러오기
  const getArticles = async () => {
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
    const results = data.results.map((item) => {
      return {
        ...item,
        thumbnailURL: `http://img.youtube.com/vi/${item.videoId}/oar2.jpg`,
      };
    });
    setShortForms(results);

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
