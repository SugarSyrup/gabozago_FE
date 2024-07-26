export type TravelResponseType = {
  next: null | '';
  previous: null | '';
  results: {
    id: number;
    title: string;
    departure_date: string;
    arrival_date: string;
    regions: string[];
    thumbnailURL: string;
  }[];
};
