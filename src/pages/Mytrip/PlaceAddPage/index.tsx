import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import toast from 'react-hot-toast';

import { TMyTravelItem } from '@_types/MyTravelItem';
import { addLocationState, createTravelState } from '@_recoil/mytrip/createTravelState';
import { datesState } from '@_recoil/mytrip/createData';
import { popupValue } from '@_recoil/common/PopupValue';

import InfomationIcon from '@_icons/exclamation_circle.svg?react';
import XIcon from '@_icons/x.svg?react';

import PageHeader from '@_common/PageHeader';
import PageTemplate from '@_common/PageTemplate';
import Typography from '@_common/Typography';
import BottomButtonContainer from '@_common/BottomButtonContainer';
import { Toast } from '@_common/Toast';

import LocationAddItem from '../../../components/mytrip/LocationAddItem';
import usePopup from '../../../hooks/usePopup';
import { get, post } from '@_utils/api';

import * as S from './style';

function PlaceAddPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<TMyTravelItem[]>([]);
  const setDates = useSetRecoilState(datesState);
  const [placeData, setPlaceData] = useState<{
    location: string;
    name: string;
  }>();
  const [currentSelectedItem, setCurrentSelectedItem] = useState<{
    id: number;
    day?: number;
  }>({ id: -1 });
  const setCreateTravelState = useSetRecoilState(createTravelState);
  const setAddLocationState = useSetRecoilState(addLocationState);

  const { popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);

  useEffect(() => {
    get<TMyTravelItem[]>(`/my-travel/community/place/${id}`).then((response) => {
      setData(response.data);
    });

    get<{
      location: string;
      name: string;
    }>(`/community/article/place/${id}`).then((response) => {
      setPlaceData(response.data);
    });
  }, []);

  return (
    <PageTemplate
      header={
        <PageHeader
          LeftItem={
            <S.DeleteIcon
              onClick={() => {
                navigate(-1);
              }}
            >
              <XIcon />
            </S.DeleteIcon>
          }
        />
      }
      nav={
        <BottomButtonContainer
          bgColor={typeof currentSelectedItem.day === 'number' ? 'blue' : 'gray'}
          onClick={() => {
            if (currentSelectedItem.id === -1) return;
            if (currentSelectedItem.day === undefined) return;

            post<{
              id: number;
              name: number;
            }>('/my-travel/community/place', {
              placeId: id,
              myTravelId: currentSelectedItem.id,
              day: currentSelectedItem.day,
            })
              .then(() => {
                toast.custom(() => (
                  <Toast>
                    <Typography.Body size="lg" color="white">
                      장소가 추가되었습니다.
                    </Typography.Body>
                  </Toast>
                ));
              })
              .catch((err) => {
                if (err.response.status === 400) {
                  setPopupUI({
                    Icon: <InfomationIcon />,
                    Header: '지역을 추가하시겠어요?',
                    Description: `선택하신 여행 장소는${
                      currentSelectedItem.id !== -1 &&
                      data
                        .filter((item) => item.id === currentSelectedItem.id)[0]
                        .location.toLocaleString()
                    } 을 벗어나요.\n ${placeData?.location}도 여행 계획에 추가하시겠어요?`,
                    Warning: '*지역을 추가하지 않으면, 해당 장소도 추가되지 않아요.',
                    ConfirmButton: {
                      text: '네, 추가할게요',
                      onClick: () => {
                        post<{ message: string }>('/my-travel/location', {
                          myTravelId: currentSelectedItem.id,
                          location: placeData?.location,
                        }).then((response) => {
                          if (response.status === 201) {
                            post<{
                              id: number;
                              name: number;
                            }>('/my-travel/community/place', {
                              placeId: id,
                              myTravelId: currentSelectedItem.id,
                              day: currentSelectedItem.day,
                            }).then((placeResponse) => {
                              if (placeResponse.status === 400) {
                                setPopupUI({
                                  Icon: <InfomationIcon />,
                                  Header: '지역을 추가하시겠어요?',
                                  Description: `선택하신 여행 장소는
                                  ${
                                    currentSelectedItem.id !== -1 &&
                                    data
                                      .filter((item) => item.id === currentSelectedItem.id)[0]
                                      .location.toLocaleString()
                                  }
                                  을 벗어나요.\n ${placeData?.location}도 여행 계획에 추가하시겠어요?`,
                                  Warning: '*지역을 추가하지 않으면, 해당 장소도 추가되지 않아요.',
                                  ConfirmButton: {
                                    text: '네, 추가할게요',
                                    onClick: () => {
                                      post<{ message: string }>('/my-travel/location', {
                                        myTravelId: currentSelectedItem.id,
                                        location: placeData?.location,
                                      }).then((locationResponse) => {
                                        if (locationResponse.status === 201) {
                                          post<{
                                            id: number;
                                            name: number;
                                          }>('/my-travel/community/place', {
                                            placeId: id,
                                            myTravelId: currentSelectedItem.id,
                                            day: currentSelectedItem.day,
                                          }).then((placeAddResponse) => {
                                            if (placeAddResponse.status === 400) {
                                              popupOpen();
                                            } else {
                                              popupClose();

                                              toast.custom(() => (
                                                <Toast>
                                                  <Typography.Body size="lg" color="white">
                                                    장소가 추가되었습니다.
                                                  </Typography.Body>
                                                </Toast>
                                              ));
                                            }
                                          });
                                        } else {
                                          toast.custom(() => (
                                            <Toast>
                                              <Typography.Body size="lg" color="white">
                                                이미 내 여행 지역에 추가되어 있습니다.
                                              </Typography.Body>
                                            </Toast>
                                          ));
                                        }
                                      });
                                      popupClose();
                                    },
                                  },
                                  CloseButton: {
                                    text: '아니요',
                                    onClick: () => {
                                      popupClose();
                                    },
                                  },
                                });
                                popupOpen();
                              } else {
                                popupClose();
                                toast.custom(() => (
                                  <Toast>
                                    <Typography.Body size="lg" color="white">
                                      장소가 추가되었습니다.
                                    </Typography.Body>
                                  </Toast>
                                ));
                              }
                            });
                          } else {
                            toast.custom(() => (
                              <Toast>
                                <Typography.Body size="lg" color="white">
                                  이미 내 여행 지역에 추가되어 있습니다.
                                </Typography.Body>
                              </Toast>
                            ));
                          }
                        });
                        popupClose();
                        navigate(-1);
                        toast.custom(() => (
                          <Toast>
                            <S.TaostContainer>
                              <Typography.Body size="lg" color="white">
                                일정에 장소가 추가되었습니다
                              </Typography.Body>
                              <S.TaostLink
                                onClick={() => {
                                  navigate(`/mytrip/${currentSelectedItem.id}`);
                                }}
                              >
                                일정 보러가기
                              </S.TaostLink>
                            </S.TaostContainer>
                          </Toast>
                        ));
                      },
                    },
                    CloseButton: {
                      text: '아니요',
                      onClick: () => {
                        popupClose();
                      },
                    },
                  });
                  popupOpen();
                }
              });
          }}
        >
          이 일정에 장소를 추가할게요!
        </BottomButtonContainer>
      }
    >
      <S.Header>
        <Typography.Headline size="md">장소를 추가할</Typography.Headline>
        <Typography.Headline size="md">
          {data.length !== 0 ? '여행 일정을 선택해주세요.' : '여행 일정이 없어요.'}
        </Typography.Headline>
      </S.Header>
      <S.MyTravelHeader>
        <Typography.Title size="lg">{data.length !== 0 && '나의 다가오는 여행'}</Typography.Title>
        <S.CreateNewTravelButton
          onClick={() => {
            if (placeData === undefined) return;
            setDates({
              startDate: '',
              endDate: '',
            });
            setCreateTravelState('add');
            setAddLocationState(placeData.location);
            navigate(`/place/mytrip/create?placeId=${id}&location=${placeData.location}`);
          }}
        >
          <Typography.Label size="lg" color="inherit">
            새로운 여행 일정 만들기
          </Typography.Label>
        </S.CreateNewTravelButton>
      </S.MyTravelHeader>
      <S.MyTravelList>
        {data.map((item) => (
          <LocationAddItem
            key={item.id}
            currentSelectedItemId={currentSelectedItem.id}
            setCurrentSelectedItem={setCurrentSelectedItem}
            {...item}
          />
        ))}
      </S.MyTravelList>
    </PageTemplate>
  );
}

export default PlaceAddPage;
