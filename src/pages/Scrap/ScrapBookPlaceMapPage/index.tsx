import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, Marker, useMap } from '@vis.gl/react-google-maps';
import { useRecoilValue } from 'recoil';

import { HeaderWithBack } from '@_common/Header';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';

import { TPlace } from '@_types/Place.type';
import { TFilter } from '@_types/FilterTypes';

import MenuIcon from '@_icons/menu.svg?react';
import CooordsIcon from '@_icons/coords.svg?react';
import NoThumbnailImg from '@_imgs/NoThumbnail.png';
import { get } from '@_utils/api';

import { scrapPlaceFilterState } from '@_recoil/filters/scrapPlaceFilterState';

import useModal from '../../../hooks/useModal';

import * as S from './style';
import MapMarker from '../../../components/scrapBook/MapMarker';

function ScrapBookPlaceMapPage() {
  const [data, setData] = useState<TPlace[]>([]);
  const [currentCorrds, setCurrentCoords] = useState<google.maps.LatLngLiteral>({
    lat: -1,
    lng: -1,
  });
  const [selectedPlace, setSelectedPlace] = useState<TPlace>();

  const map = useMap('scraped-map');
  const navigate = useNavigate();
  const { Modal, modalClose, modalOpen } = useModal({});
  const filter = useRecoilValue<TFilter>(scrapPlaceFilterState);

  useEffect(() => {
    get<{
      next: string | null;
      previous: string | null;
      results: TPlace[];
    }>('scrap/place').then(({ data: responseData }) => {
      setData(responseData.results);
      let flag = true;

      while (flag) {
        if (responseData.next) {
          get<{
            next: string | null;
            previous: string | null;
            results: TPlace[];
          }>('scrap/place').then(({ data: responseNextData }) => {
            setData((prev) => [...prev, ...responseNextData.results]);
          });
        } else {
          flag = false;
        }
      }
    });
  }, []);

  useEffect(() => {
    if (!window.google) return;
    const bounds = new window.google.maps.LatLngBounds();

    data.forEach((place) => {
      bounds.extend({ lat: place.latitude, lng: place.longitude });
    });

    map?.fitBounds(bounds);
  }, [data]);

  useEffect(() => {
    if (!selectedPlace) return;
    map?.setCenter({ lat: selectedPlace.latitude, lng: selectedPlace.longitude });
    map?.setZoom(17);
  }, [selectedPlace]);

  return (
    <PageTemplate
      header={<HeaderWithBack> </HeaderWithBack>}
      nav={
        <Map
          style={{
            width: '100%',
            height: '100dvh',
          }}
          id="scraped-map"
          defaultCenter={{ lat: 35.1855, lng: 129.0741 }}
          defaultZoom={17}
          gestureHandling="greedy"
          disableDefaultUI
          mapId={import.meta.env.VITE_GOOGLEMAP_MAP_ID}
          onClick={() => {
            setSelectedPlace(undefined);
          }}
        >
          {data.map((place, index) => (
            <MapMarker
              place={place}
              lat={place.latitude}
              lng={place.longitude}
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
              key={index}
            />
          ))}
          {currentCorrds.lat !== -1 && (
            <Marker position={{ lat: currentCorrds.lat, lng: currentCorrds.lng }} />
          )}
          <S.CurrentPositionWrapper
            onClick={() => {
              try {
                if (window.GabozagoDev) {
                  window.GabozagoDev.locationAccess();
                }
                if (window.webkit.messageHandlers.gabozagoDev) {
                  window.webkit.messageHandlers.gabozagoDev.postMessage({
                    action: 'locationAccess',
                    code: 'locationAccess',
                  });
                }
              } catch (e) {
                console.log(e);
              }

              navigator.geolocation.getCurrentPosition((position) => {
                map?.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
                map?.setZoom(17);
              });
              navigator.geolocation.watchPosition((position) => {
                setCurrentCoords({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              });
            }}
          >
            <CooordsIcon />
          </S.CurrentPositionWrapper>
        </Map>
      }
    >
      <Modal>
        <S.ModalList>
          <S.FilterList>
            <div>
              <Typography.Label size="lg" color="inherit">
                {filter.sort}
              </Typography.Label>
            </div>
            {filter.location?.length !== 0 && (
              <div>
                <Typography.Label size="lg" color="inherit">
                  {filter.location?.join(',')}
                </Typography.Label>
              </div>
            )}
            {filter.theme?.length !== 0 && (
              <div>
                <Typography.Label size="lg" color="inherit">
                  {filter.theme?.join(',')}
                </Typography.Label>
              </div>
            )}
          </S.FilterList>

          {data.map((place) => (
            <S.PlaceItem
              key={place.placeId}
              onClick={() => {
                setSelectedPlace(place);
                map?.setCenter({ lat: place.latitude, lng: place.longitude });
                map?.setZoom(17);
                modalClose();
              }}
            >
              {place.thumbnailURL ? (
                <S.ThumbnailWrapper src={place.thumbnailURL} alt={place.name} />
              ) : (
                <S.NoThumbnailWrapper>
                  <img src={NoThumbnailImg} alt="No Thumbnail" />
                </S.NoThumbnailWrapper>
              )}
              <S.PlaceInfomation>
                <Typography.Title size="md" color="inherit">
                  {place.name}
                </Typography.Title>
                <S.PlaceThemeNAddress>
                  <Typography.Label size="lg" color="#424242">
                    {place.category}
                  </Typography.Label>
                  <S.InfoSeperateLine />
                  <Typography.Label size="lg" color="#424242">
                    {place.addressShort}
                  </Typography.Label>
                </S.PlaceThemeNAddress>
                {place.memo && (
                  <Typography.Label size="lg" color="#A6A6A6">
                    {place.memo}
                  </Typography.Label>
                )}
              </S.PlaceInfomation>
            </S.PlaceItem>
          ))}
        </S.ModalList>
      </Modal>
      {selectedPlace ? (
        <S.SelectedPlaceWrapper
          onClick={() => {
            navigate(`/place/${selectedPlace.placeId}`);
          }}
        >
          <img src={selectedPlace.thumbnailURL} alt={selectedPlace.name} />
          <div>
            <Typography.Title size="md" color="inherit">
              {selectedPlace.name}
            </Typography.Title>
            <S.PlaceThemeNAddress>
              <Typography.Label size="lg" color="#424242">
                {selectedPlace.category}
              </Typography.Label>
              <S.InfoSeperateLine />
              <Typography.Label size="lg" color="#424242">
                {selectedPlace.addressShort}
              </Typography.Label>
            </S.PlaceThemeNAddress>
          </div>
        </S.SelectedPlaceWrapper>
      ) : (
        <S.ModalOpenButton
          onClick={() => {
            modalOpen();
          }}
        >
          <MenuIcon />
          <Typography.Title size="lg" color="inherit">
            목록 보기
          </Typography.Title>
        </S.ModalOpenButton>
      )}
    </PageTemplate>
  );
}

export default ScrapBookPlaceMapPage;
