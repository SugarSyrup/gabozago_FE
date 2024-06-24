import { useJsApiLoader, GoogleMap, Marker } from '@react-google-maps/api';
import { useCallback, useState } from 'react';

interface Props {
  width?: string;
  height?: string;
  markers?: {
    lat: number;
    lng: number;
  }[];
  center: {
    lat: number;
    lng: number;
  };
}

function PlaceGoogleMap({ width, height, markers, center }: Props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAP_KEY,
  });

  const [map, setMap] = useState(null);
  const onLoad = useCallback((map: any) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);
  const onUnmount = useCallback((map: any) => {
    setMap(null);
  }, []);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={{
            width: `${width || '100%'}`,
            height: `${height || '100px'}`,
            borderRadius: '6px',
          }}
          center={center}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={{
            fullscreenControl: false,
            keyboardShortcuts: false,
            mapTypeControl: false,
            zoomControl: false,
            streetViewControl: false,
          }}
        >
          {markers?.map((marker) => <Marker position={marker} />)}
        </GoogleMap>
      )}
    </>
  );
}

export default PlaceGoogleMap;
