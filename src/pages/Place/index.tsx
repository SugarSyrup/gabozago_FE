import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import LocationIcon from '@_icons/location.svg?react';
import PhoneIcon from '@_icons/phone.svg?react';
import TimeIcon from '@_icons/clock.svg?react';
import LinkIcon from '@_icons/web.svg?react';
import CalendarAddIcon from '@_icons/calendar_add_border.svg?react';
import ScrapIcon from '@_icons/bookmark.svg?react';
import PlusIcon from '@_icons/plus_circle_blue.svg?react';

import BackButton from '../../components/common/BackButton';
import PageHeader from '../../components/common/PageHeader';
import PageTemplate from '../../components/common/PageTemplate';
import Typography from '../../components/common/Typography';
import PlaceOperateTime from '../../components/journal/PlaceOperateTime';
import PlaceGoogleMap from '../../components/journal/GoogleMap';
import { get, post } from '@_utils/api';

import * as S from './style';

type TData = {
  region: string;
  name: string;
  theme: string;
  address: string;
  number: string;
  opening_hours: string;
  website: string;
  image: string[];
  latitude: string;
  longitude: string;
};

function PlacePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<TData>();
  const [imageURL, setImageURL] = useState<string>('');

  useEffect(() => {
    get<TData>(`/place/${id}`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <PageTemplate
      header={
        <PageHeader LeftItem={<BackButton />}>
          <S.TopBarText>{data && data.name}</S.TopBarText>
        </PageHeader>
      }
      nav={false}
    >
      {data !== undefined && (
        <S.ContentContainer>
          {data.image.length === 0 && imageURL === '' ? (
            <S.ImgRegistContainer>
              <label htmlFor="placeImgRegist">
                <PlusIcon />
              </label>
              <input
                id="placeImgRegist"
                type="file"
                accept="image/*"
                onInput={(e) => {
                  if (e.currentTarget.files) {
                    const file = e.currentTarget.files[0];
                    const reader = new FileReader();

                    reader.readAsDataURL(file);
                    reader.onloadend = () => {
                      setImageURL(reader.result as string);
                    };

                    const reqData = new FormData();
                    reqData.append('placeId', id as string);
                    reqData.append('image', file);

                    post('/place/image', reqData, {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                    });
                  }
                }}
              />
              <Typography.Title size="md" color="inherit">
                이 장소의 첫 번째 사진을 등록해주세요!
              </Typography.Title>
            </S.ImgRegistContainer>
          ) : (
            <S.ImgSlider>
              {data.image.map((img, index) => (
                <img src={img} key={img} alt={`${index} IMG`} />
              ))}
            </S.ImgSlider>
          )}
          {imageURL && <S.TmpImg src={imageURL} />}
          <S.ContentList>
            <S.InfomationList>
              <S.InfomationItem>
                <LocationIcon />
                <S.InfomationText>{data.address}</S.InfomationText>
              </S.InfomationItem>
              <S.InfomationItem>
                <PhoneIcon />
                <S.InfomationText>{data.number}</S.InfomationText>
              </S.InfomationItem>
              {data.opening_hours && (
                <S.InfomationItem>
                  <TimeIcon />
                  <PlaceOperateTime opening_hours={data.opening_hours} />
                </S.InfomationItem>
              )}
              <S.InfomationItem>
                <LinkIcon />
                <S.InfomationLink to={data.website}>인스타그램</S.InfomationLink>
              </S.InfomationItem>
            </S.InfomationList>
            <PlaceGoogleMap
              height="270px"
              center={{
                lat: Number(data.latitude),
                lng: Number(data.longitude),
              }}
              markers={[
                {
                  lat: Number(data.latitude),
                  lng: Number(data.longitude),
                },
              ]}
            />
            <S.Buttons>
              <S.Button
                onClick={() => {
                  navigate(`/mytrip/place/${id}`);
                }}
              >
                <CalendarAddIcon />
                <Typography.Label size="lg">내 일정에 추가하기</Typography.Label>
              </S.Button>
              <S.Button
                onClick={() => {
                  post<{ message: string }>('/folder/scrap/place', {
                    placeId: id,
                  }).then((response) => {
                    if (response.data.message === 'Create Success') {
                      // @TODO: 스크랩 성공 엑션
                    } else {
                      // @TODO: 스크랩 실패 엑션
                    }
                  });
                }}
              >
                <ScrapIcon />
                <Typography.Label size="lg">장소 스크랩에 저장</Typography.Label>
              </S.Button>
            </S.Buttons>
          </S.ContentList>
        </S.ContentContainer>
      )}
    </PageTemplate>
  );
}

export default PlacePage;
