export interface TPlace {
  placeId: number;
  name: string;
  category: string;
  thumbnailURL: string;
  addressShort: string; // ex) 부산광역시 사상구. 백엔드에서 가공합니다!
  memo: string; // 100자까지 드리겠습니다!
  latitude: number; // 지도 좌표를 위해...
  longitude: number;
  location: string;
}
