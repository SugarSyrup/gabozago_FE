import { useEffect, useState } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import MarketIcon from '../../../assets/icons/market.svg?react';
import CalendarAddIcon from '../../../assets/icons/calendar_add_border.svg?react';
import BookMarkIcon from '../../../assets/icons/bookmark.svg?react';
import BookMarkFilledIcon from '@_icons/bookmark_filled.svg?react';
import RightChevron from '../../../assets/icons/chevron_right.svg?react';

import * as S from './style';
import { get, post } from '@_utils/api';
import useAlert from '../../../hooks/useAlert';
import Typography from '../../common/Typography';
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';

interface Props {
  placeId: number;
  imageURL?: string;
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
  scrap: {
    isScraped: boolean;
  };
}

function PlaceInfo({ placeId, imageURL }: Props) {
  const navigate = useNavigate();
  const [data, setData] = useState<TPlace>();
  const [isScraped, setIsScraped] = useState(false);

  useEffect(() => {
    get<TPlace>(`/place/${placeId}`).then((response) => {
      setData(response.data);
      setIsScraped(response.data.scrap.isScraped);
    });
  }, []);

  return (
    <S.Container>
      {data && (
        <>
          {imageURL && <img src={imageURL} alt={data.name} />}
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
                  post<{ message: string }>('/scrap/place', {
                    placeId,
                    isTripBucket: false,
                  }).then((response) => {
                    if (response.data.message === 'Create Success') {
                      toast.custom(
                        () => (
                          <Toast>
                            <Typography.Title size="md" color="white">
                              <S.ToastMessageContainer isScraped>
                                <BookMarkFilledIcon />
                                {data.name}를 스크랩에 추가했습니다.
                              </S.ToastMessageContainer>
                            </Typography.Title>

                            <Link to="/scrapbook?tab=0">
                              <S.ToastMessageLink>스크랩 확인하기</S.ToastMessageLink>
                            </Link>
                          </Toast>
                        ),
                        {
                          duration: 1000,
                        },
                      );
                    } else {
                      toast.custom(() => (
                        <Toast>
                          <Typography.Title size="md" color="white">
                            <S.ToastMessageContainer isScraped={false}>
                              <BookMarkIcon />
                              {data.name}를 스크랩에서 삭제했습니다.
                            </S.ToastMessageContainer>
                          </Typography.Title>

                          <Link to="/scrapbook?tab=0">
                            <S.ToastMessageLink>스크랩 확인하기</S.ToastMessageLink>
                          </Link>
                        </Toast>
                      ));
                    }
                  });
                }}
                isScraped={isScraped}
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
