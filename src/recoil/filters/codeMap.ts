import React from "react";
import { TFilterName } from "../../assets/types/FilterTypes";
import Select from "../../components/common/filterInputs/Select";
import Location from "../../components/common/filterInputs/Locations";
import Buttons from "../../components/common/filterInputs/Buttons";

export const themeCodeMap = new Map([
  ["01", "체류"],
  ["02", "미식"],
  ["03", "쇼핑"],
  ["04", "도보"],
  ["05", "자연"],
  ["06", "체험"],
  ["07", "전시·행사"],
  ["08", "반려동물"],
  ["09", "연인"],
  ["10", "가족"],
]);

export const orderingOptionMap = new Map([
  ["scraped", "담은순"],
  ["latest", "최신순"],
  ["most_viewed", "조회순"],
  ["weekly_popular", "최근 인기순"],
  ["alltime_popular", "인기순"],
]);

export const filterNameMap = new Map<TFilterName, string>([
  ["all", "필터"],
  ["sort", "정렬"],
  ["location", "지역"],
  ["headCount", "인원"],
  ["duration", "일정"],
  ["season", "계절"],
  ["theme", "테마"],
  ["budget", "경비"],
]);

export const filterMap = new Map<
  TFilterName,
  { title: string; component: React.FC }
>([
  [
    // select
    "sort",
    {
      title: "정렬",
      component: Select as React.FC,
    },
  ],
  [
    // location
    "location",
    {
      title: "지역",
      component: Location as React.FC,
    },
  ],
  [
    "theme",
    {
      title: "콘텐츠 테마",
      component: Buttons as React.FC,
    },
  ],
]);
