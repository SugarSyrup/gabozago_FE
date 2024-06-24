import React from 'react';
import { TFilterName } from '../../assets/types/FilterTypes';
import Select from '../../components/common/filterInputs/Select';
import Location from '../../components/common/filterInputs/Locations';
import Buttons from '../../components/common/filterInputs/Buttons';

export const themeCodeMap = new Map([
  ['체류', 'THM01'],
  ['미식', 'THM02'],
  ['쇼핑', 'THM03'],
  ['도보', 'THM04'],
  ['자연', 'THM05'],
  ['체험', 'THM06'],
  ['전시·행사', 'THM07'],
  ['반려동물', 'THM08'],
  ['연인', 'THM09'],
  ['가족', 'THM10'],
]);

export const themeOptions = [
  {
    label: '체류',
    value: '체류',
  },
  {
    label: '미식',
    value: '미식',
  },
  {
    label: '쇼핑',
    value: '쇼핑',
  },
  {
    label: '도보',
    value: '도보',
  },
  {
    label: '자연',
    value: '자연',
  },
  {
    label: '체험',
    value: '체험',
  },
  {
    label: '전시·행사',
    value: '전시·행사',
  },
  {
    label: '반려동물',
    value: '반려동물',
  },
  {
    label: '연인',
    value: '연인',
  },
  {
    label: '가족',
    value: '가족',
  },
];

export const orderingOptionMap = new Map([
  ['담은순', 'scraped'],
  ['최신순', 'latest'],
  ['조회순', 'most_viewed'],
  ['인기순', 'alltime_popular'],
  ['최근 인기순', 'weekly_popular'],
]);

export const orderingOptions = [
  { label: '담은순', value: '담은순' },
  { label: '최신순', value: '최신순' },
  { label: '조회순', value: '조회순' },
  { label: '인기순', value: '인기순' },
  {
    label: '최근 인기순',
    value: '최근 인기순',
  },
];

export const filterNameMap = new Map<TFilterName, string>([
  ['all', '필터'],
  ['sort', '정렬'],
  ['location', '지역'],
  ['headCount', '인원'],
  ['duration', '일정'],
  ['season', '계절'],
  ['theme', '테마'],
  ['budget', '경비'],
]);

export const filterMap = new Map<TFilterName, { title: string; component: React.FC }>([
  [
    // select
    'sort',
    {
      title: '정렬',
      component: Select as React.FC,
    },
  ],
  [
    // location
    'location',
    {
      title: '지역',
      component: Location as React.FC,
    },
  ],
  [
    'theme',
    {
      title: '콘텐츠 테마',
      component: Buttons as React.FC,
    },
  ],
]);
