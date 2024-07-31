import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import MarketIcon from '../../../assets/icons/market.svg?react';
import CalendarAddIcon from '../../../assets/icons/calendar_add_border.svg?react';
import BookMarkIcon from '../../../assets/icons/bookmark.svg?react';
import RightChevron from '../../../assets/icons/chevron_right.svg?react';

import * as S from './style';
import { get, post } from '../../../utils/api';
import useAlert from '../../../hooks/useAlert';
import Typography from '../../common/Typography';

interface Props {
  placeId: number;
  imageURL: string;
}

interface TPlace {
  region: string;
  name: string;
  theme: string;
  address: string;
  number: string;
  opening_hours: string;
  website: string;
  image: string[];
}

function PlaceInfo({ placeId, imageURL }: Props) {
  const navigate = useNavigate();
  const [data, setData] = useState<TPlace>();
  const [alertMessage, setAlertMessage] = useState<string>('');
  const { Alert, alertOpen } = useAlert({
    Content: (
      <Typography.Body size="lg" color="white">
        {alertMessage}
      </Typography.Body>
    ),
  });

  useEffect(() => {
    get<TPlace>(`/place/${placeId}`).then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <S.Container>
      <Alert />
      {data && (
        <>
          <img src={imageURL} alt={data.name} />
          <S.Infomation>
            <S.TextContainer>
              <S.Name
                onClick={() => {
                  navigate(`/place/${placeId}`);
                }}
              >
                <MarketIcon />
                <Typography.Title size="md" noOfLine={1}>
                  {data.name}
                </Typography.Title>
                <RightChevron />
              </S.Name>
              <S.Address>{data.address}</S.Address>
            </S.TextContainer>
            <S.Buttons>
              <S.Icon
                onClick={() => {
                  navigate(`/mytrip/place/${placeId}`);
                }}
              >
                <CalendarAddIcon />
                <span>일정에 추가</span>
              </S.Icon>
              <S.Icon
                onClick={() => {
                  post<{ message: string }>('/folder/scrap/place', {
                    placeId,
                  }).then((response) => {
                    if (response.data.message === 'Create Success') {
                      setAlertMessage(`${data.name}가 스크랩 되었습니다.`);
                    } else {
                      setAlertMessage(`${data.name}를 스크랩에서 삭제했습니다.`);
                    }

                    alertOpen();
                  });
                }}
              >
                <BookMarkIcon />
                <span>장소 스크랩</span>
              </S.Icon>
            </S.Buttons>
          </S.Infomation>
        </>
      )}
    </S.Container>
  );
}
export default PlaceInfo;
