import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Map, Marker, useMap } from '@vis.gl/react-google-maps';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { HeaderWithBack } from '@_common/Header';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';

import { TPlace } from '@_types/Place.type';
import { TFilter } from '@_types/FilterTypes';

import MenuIcon from '@_icons/menu.svg?react';
import CooordsIcon from '@_icons/coords.svg?react';
import NoThumbnailImg from '@_imgs/NoThumbnail.png';
import { get, post } from '@_utils/api';

import { scrapPlaceFilterState } from '@_recoil/filters/scrapPlaceFilterState';

import useModal from '../../../hooks/useModal';

import * as S from './style';
import MapMarker from '../../../components/scrapBook/MapMarker';
import usePopup from '../../../hooks/usePopup';
import { popupValue } from '@_recoil/common/PopupValue';
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';

function ScrapBookPlaceMapPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState<TPlace[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [currentCorrds, setCurrentCoords] = useState<google.maps.LatLngLiteral>({
    lat: -1,
    lng: -1,
  });
  const [selectedPlace, setSelectedPlace] = useState<TPlace>();

  const map = useMap('scraped-map');
  const navigate = useNavigate();
  const { Modal, modalClose, modalOpen } = useModal({});
  const { popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);
  const filter = useRecoilValue<TFilter>(scrapPlaceFilterState);

  useEffect(() => {
    const placeCounts = searchParams.get('count');
    get<{
      next: string | null;
      previous: string | null;
      results: TPlace[];
    }>(`scrap/place?count=${placeCounts}`).then(({ data: responseData }) => {
      setData(responseData.results);
    });

    get<{ TERMS01: boolean }>('/settings/terms?q=TERMS01').then((res) => {
      setIsActive(res.data.TERMS01);
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

              if (isActive) {
                console.log('isActive');
                navigator.geolocation.getCurrentPosition((position) => {
                  console.log(position);
                  if (position.coords) {
                    map?.setCenter({
                      lat: position.coords.latitude,
                      lng: position.coords.longitude,
                    });
                    map?.setZoom(17);

                    navigator.geolocation.watchPosition((position) => {
                      setCurrentCoords({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                      });
                    });
                  } else {
                    setPopupUI({
                      Header: `위치 정보 접근을
                      허용해주세요!`,
                      Description: `위치 서비스를 켜면,
내 주변 여행지 정보를 받아볼 수 있어요.`,
                      Warning: `기기의 "설정 > 가보자고 > 위치"에서 
위치 접근을 허용해 주세요.`,
                      ConfirmButton: {
                        text: '확인',
                        onClick: () => {
                          popupClose();
                        },
                      },
                      CloseButton: {
                        text: '나중에 할게요',
                        onClick: () => {
                          popupClose();
                        },
                      },
                    });
                    popupOpen();
                  }
                });
              } else {
                console.log('isNotActive');
                setPopupUI({
                  Custom: (
                    <S.PopupContainer>
                      <Typography.Headline size="sm" color="black" noOfLine={3}>
                        <p style={{ textAlign: 'center' }}>
                          위치 정보 이용 약관에 <br />
                          동의해 주세요!
                        </p>
                      </Typography.Headline>
                      <Typography.Body size="lg" color="#727272" noOfLine={4}>
                        <p style={{ textAlign: 'center' }}>
                          위치 기반 서비스를 이용하시려면,
                          <br />
                          먼저 약관 동의가 필요해요
                        </p>
                      </Typography.Body>
                      <S.CheckBoxContainer>
                        <input
                          type="checkbox"
                          onClick={() => {
                            setIsActive(!isActive);
                            post('/settings/terms', {
                              term: 'TERMS01',
                            })
                              .then(() => {
                                toast.custom(() => (
                                  <Toast>
                                    <Typography.Body size="lg" color="white">
                                      위치정보 이용약관에 동의하셨습니다. (24.{' '}
                                      {new Date().getMonth()}. {new Date().getDate()})
                                    </Typography.Body>
                                  </Toast>
                                ));
                              })
                              .catch(() => {
                                toast.custom(() => (
                                  <Toast>
                                    <Typography.Body size="lg" color="white">
                                      위치정보 이용약관에 거부하였습니다. (24.{' '}
                                      {new Date().getMonth()}. {new Date().getDate()})
                                    </Typography.Body>
                                  </Toast>
                                ));
                              });
                          }}
                        />
                        <label>
                          <Typography.Body size="md" color="#424242">
                            약관에 확인하였으며, 동의합니다
                          </Typography.Body>
                        </label>
                        <div
                          style={{
                            position: 'absolute',
                            right: '0px',
                          }}
                          onClick={() => {
                            window.location.href =
                              'http://teamfore.notion.site/f5afac74fa1f4abb8a4ca09c5e8d47bf?pvs=25';
                          }}
                        >
                          <Typography.Body size="md" color="#5276FA">
                            <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                              약관 보기
                            </span>
                          </Typography.Body>
                        </div>
                      </S.CheckBoxContainer>
                      <S.ButtonContainer>
                        <div
                          onClick={() => {
                            popupClose();
                          }}
                        >
                          <span style={{ color: '#A6A6A6' }}>나중에 할게요</span>
                        </div>
                        <div
                          onClick={() => {
                            popupClose();
                          }}
                        >
                          <span style={{ color: '#5276FA' }}>확인</span>
                        </div>
                      </S.ButtonContainer>
                    </S.PopupContainer>
                  ),
                });
                popupOpen();
              }
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

          <S.PlaceList>
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
          </S.PlaceList>
        </S.ModalList>
      </Modal>
      {selectedPlace ? (
        <S.SelectedPlaceWrapper
          onClick={() => {
            navigate(`/place/${selectedPlace.placeId}`);
          }}
        >
          {selectedPlace.thumbnailURL ? (
            <img src={selectedPlace.thumbnailURL} alt={selectedPlace.name} />
          ) : (
            <img src={NoThumbnailImg} alt="No Thumbnail" />
          )}

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
