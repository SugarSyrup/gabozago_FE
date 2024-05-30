export type Range = [number, number] | [null, null];

export type ThemeOptions =
  | "체류"
  | "미식"
  | "쇼핑"
  | "도보"
  | "자연"
  | "체험"
  | "전시·행사"
  | "반려동물"
  | "연인"
  | "가족";

export type OrderingOptions =
  | "scraped"
  | "latest"
  | "most-viewed"
  | "weekly_popular"
  | "alltime_popular";

export interface TFilter {
  sort: OrderingOptions;
  location?: string[];
  headCount?: Range;
  duration?: Range;
  season?: ("봄" | "여름" | "가을" | "겨울")[];
  theme?: string[];
  budget?: Range;
}

export type TFilterName = keyof TFilter | "all";

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
