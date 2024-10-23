import { useEffect } from 'react';

let mapInstance: naver.maps.Map | null = null;

interface Props {
  coordinate: [number, number];
}

function NaverMap({ coordinate }: Props) {
  useEffect(() => {
    mapInstance = new naver.maps.Map('map', {
      zoom: 16,
    });
    if (coordinate) {
      mapInstance = new window.naver.maps.Map('map', {
        center: new naver.maps.LatLng(coordinate[0], coordinate[1]),
        zoom: 16,
      });

      const marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(coordinate[0], coordinate[1]),
        map: mapInstance,
      });
    } else {
      mapInstance = new naver.maps.Map('map', {
        zoom: 16,
      });
    }
  }, [coordinate]);

  return (
    <div>
      <div id="map" style={{ width: '100%', height: '200px' }} />
    </div>
  );
}

export default NaverMap;
