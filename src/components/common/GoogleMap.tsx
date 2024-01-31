import React, { useCallback } from "react";
import {
  GoogleMap as GoogleMapBox,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

interface Props {
  width?: string;
  height?: string;
  center: { lat: number; lng: number };
}
function GoogleMap({ width = "100%", height = "100%", center }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAP_API_KEY,
  });

  /** Google Map에 마커를 추가하거나, 지도의 특정 영역을 확대/축소하는 등의 작업을 할 수 있음. */
  const [map, setMap] = React.useState(null);

  const onLoad = useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
    // 아래 주석을 해제하여 콘솔에서 map의 프로퍼티나 메소드를 확인할 수 있습니다.
    // console.dir(map);
  }, []);
  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  const mapOptions = {
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    minZoom: 4,
    maxZoom: 18,
  };

  return isLoaded ? (
    <GoogleMapBox
      mapContainerStyle={{ width, height }}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={mapOptions}
    >
      <Marker position={center}></Marker>
    </GoogleMapBox>
  ) : (
    <></>
  );
}

export default React.memo(GoogleMap);
