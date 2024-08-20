import { memo, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import * as S from './style';
import BookMarkIcon from '../../../assets/icons/bookmark_filled.svg?react';
import { get, post } from '@_utils/api';
import RightChevronIcon from '../../../assets/icons/chevron_right.svg?react';
import Typography from '../../common/Typography';
import { scrapPlaceFilterState } from '../../../recoil/filters/scrapPlaceFilterState';
import { TFilter } from '../../../assets/types/FilterTypes';
import NoThumbnailImg from '@_imgs/NoThumbnail.png';

interface Place {
  thumbnailURL: string;
  id: number;
  name: string;
  theme: string[];
  address: string;
  memo?: string;
}

function ScrapedTripPlace() {
  const navigate = useNavigate();
  const filter = useRecoilValue<TFilter>(scrapPlaceFilterState);
  const resetFilter = useResetRecoilState(scrapPlaceFilterState);
  const [places, setPlaces] = useState<Place[]>([]);
  const [next, setNext] = useState<string | null>(null);
  const infiniteRef = useRef<HTMLDivElement>(null);

  const getPlaces = async () => {
    const token = localStorage.getItem('access_token');
    if (token) {
      const { data } = await get<{
        next: string | null;
        previous: string | null;
        results: Place[];
      }>('folder/scrap/place', {
        params: {
          sort: filter.sort,
          location: filter.location?.join(','),
          theme: filter.theme?.join(','),
        },
      });
      setPlaces(data.results);
      setNext(data.next);
    }
  };

  useEffect(() => {
    getPlaces();
  }, [filter]);

  useEffect(() => {
    resetFilter();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && next) {
          get<{
            next: string | null;
            previous: string | null;
            results: Place[];
          }>(next).then((res) => {
            setPlaces([...places, ...res.data.results]);
            setNext(res.data.next);
          });
        }
      });
    }, options);

    if (infiniteRef.current) {
      observer.observe(infiniteRef.current);
    }

    return () => observer.disconnect();
  });

  return (
    <>
      <S.ContentsHeader>
        <Typography.Title size="md" color="inherit">
          {/* TODO: data.length */}
          전체 <S.FontHighlight>123</S.FontHighlight>
        </Typography.Title>
        {/* @TODO: 편집 모드 UI 및 버튼 기능 구성 */}
        <Typography.Title size="sm" color="#A6A6A6">
          {places.length === 0 ? '편집하기' : <S.FontHighlight>편집하기</S.FontHighlight>}
        </Typography.Title>
      </S.ContentsHeader>
      {places.length !== 0 ? (
        <>
          <S.PlaceList>
            {places.map((item) => (
              <S.PlaceItem key={item.id}>
                {item.thumbnailURL ? (
                  <S.ThumbnailWrapper src={item.thumbnailURL} alt={item.name} />
                ) : (
                  <S.NoThumbnailWrapper>
                    <img src={NoThumbnailImg} alt="No Thumbnail" />
                  </S.NoThumbnailWrapper>
                )}
                <S.PlaceInfomation>
                  <Typography.Title size="md" color="inherit">
                    {item.name}
                  </Typography.Title>
                  <S.PlaceThemeNAddress>
                    <Typography.Label size="lg" color="#424242">
                      {item.theme}
                    </Typography.Label>
                    <S.InfoSeperateLine />
                    <Typography.Label size="lg" color="#424242">
                      {item.address}
                    </Typography.Label>
                  </S.PlaceThemeNAddress>
                  {item.memo && (
                    <Typography.Label size="lg" color="#A6A6A6">
                      {item.memo}
                    </Typography.Label>
                  )}
                </S.PlaceInfomation>
              </S.PlaceItem>
            ))}
            <div ref={infiniteRef} />
          </S.PlaceList>
        </>
      ) : (
        <S.NoScrapedPlace>
          <Typography.Headline size="sm" color="inherit">
            스크랩한 장소가 없어요
          </Typography.Headline>
          <Typography.Title size="md" color="inherit" noOfLine={2}>
            트립 버킷으로 흩어진 여행지를
            <br />
            저장해보세요.
          </Typography.Title>

          {/* @TODO: 버킷 안내 페이지 이동 */}
          <S.TripBucketButton>
            <Typography.Label size="lg" color="inherit">
              트립 버킷 사용해보기
            </Typography.Label>
          </S.TripBucketButton>
        </S.NoScrapedPlace>
      )}
    </>
  );
}

export default ScrapedTripPlace;
