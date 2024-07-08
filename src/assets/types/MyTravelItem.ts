export interface TMyTravelItem {
  id: number;
  name: string;
  departureDate: string;
  arrivalDate: string;
  location: string[];
  days: {
    day: number;
    date: string;
    dayOfWeek: string;
  }[];
  thumbnailURL: string;
}
