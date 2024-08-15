export type Range = [number, number] | [null, null];

export type ThemeOptions =
  // | '체류'
  // | '미식'
  // | '쇼핑'
  // | '도보'
  // | '자연'
  // | '체험'
  // | '전시·행사'
  // | '반려동물'
  // | '연인'
  // | '가족';
  | '음식점'
  | '카페'
  | '관광명소'
  | '레포츠'
  | '쇼핑'
  | '문화시설'
  | '여가시설'
  | '편의시설'
  | '숙박시설'
  | '주차장';

export type OrderingOptions = '담은순' | '최신순' | '조회순' | '인기순' | '최근 인기순' | '거리순';

export interface TFilter {
  sort?: OrderingOptions;
  location?: string[];
  headCount?: Range;
  duration?: Range;
  season?: ('봄' | '여름' | '가을' | '겨울')[];
  theme?: string[];
  budget?: Range;
}

export type TFilterName = keyof TFilter | 'all';

export interface TFilterAndOptions {
  name: TFilterName;
  options: SelectOptions | ButtonsOptions | RangeOptions | null;
}

export interface SelectOptions {
  options: { label: string; value: OrderingOptions }[];
  defaultSelected?: string[];
  multiple?: boolean;
}

export interface ButtonsOptions {
  options: { label: string; value: ThemeOptions }[];
}

export interface RangeOptions {
  name?: string;
  unit: string;
  min: number;
  max: number;
  step: number;
  extraControlerComponent?: JSX.Element | null;
}

export interface TFilterInfo {
  title: string;
  component: React.FC;
}
