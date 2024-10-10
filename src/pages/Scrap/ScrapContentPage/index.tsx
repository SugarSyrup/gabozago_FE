import { useSetRecoilState } from 'recoil';

import PageHeader from '@_common/PageHeader';
import Typography from '@_common/Typography';
import BackButton from '@_common/BackButton';
import PageTemplate from '@_common/PageTemplate';
import useModal from '../../../hooks/useModal';
import usePopup from '../../../hooks/usePopup';

import BottomChevronIcon from '@_icons/chevron_bottom.svg?react';
import TopChevronIcon from '@_icons/chevron_top.svg?react';
import MeatBallIcon from '@_icons/meatballsMenu.svg?react';
import BookmarkFilledIcon from '@_icons/bookmark_filled.svg?react';
import BookmarkIcon from '@_icons/bookmark.svg?react';
import ExclamationCircleIcon from '@_icons/exclamation_circle.svg?react';
import ChevronRightIcon from '@_icons/chevron_right.svg?react';
import SearchIcon from '@_icons/search.svg?react';
import LogoSmallIcon from '@_icons/logo_small.svg?react';

import InstagramImg from '@_imgs/instagram_icon.png';
import { popupValue } from '@_recoil/common/PopupValue';

import * as S from './style';
import { deletes, get, patch, post } from '@_utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LocationPlaceholderIcon from '../../../components/mytrip/LocationPlaceholderIcon';
import toast from 'react-hot-toast';
import { Toast } from '@_common/Toast';

interface TData {
  // url: string;
  title: string;
  content: string;
  memo: string;
  // thumbnailURL: string;
  // source: string;
  link: {
    url: string;
    title: string;
    thumbnailURL: string;
    source: string;
  };
  place: [
    { count: number },
    {
      places_list: {
        placeId?: number;
        name: string;
        isScraped?: boolean;
        thumbnailURL?: string | null;
      }[];
    },
  ];
}

function ScrapContentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<TData>();
  const { Modal, modalOpen } = useModal({});
  const { popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);

  const [isContentOpen, setIsContentOpen] = useState(false);
  const [isMemoOpen, setIsMemoOpen] = useState(false);

  useEffect(() => {
    get<TData>(`/scrap/content/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        if (e.response.status === 404) {
          toast.custom(() => (
            <Toast>
              <span style={{ color: 'white' }}>해당 콘텐츠가 삭제되었습니다.</span>
            </Toast>
          ));
          navigate(-1);
        }
      });
  }, []);

  return (
    <PageTemplate
      header={
        <PageHeader
          LeftItem={
            <S.IconWrapper>
              <BackButton />
            </S.IconWrapper>
          }
          RightItem={
            <S.IconWrapper>
              <MeatBallIcon
                onClick={() => {
                  modalOpen();
                }}
              />
            </S.IconWrapper>
          }
        />
      }
      nav={null}
    >
      {/* MoDal */}
      <Modal>
        <S.ModalContainer>
          <Typography.Title size="lg" color="inherit">
            <span
              onClick={() => {
                setPopupUI({
                  Custom: (
                    <S.ChangePopupContainer
                      onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        patch(`/scrap/content/${id}`, {
                          title: formData.get('title'),
                        }).then(() => {
                          popupClose();
                          navigate(0);
                        });
                      }}
                    >
                      <S.ChangePopupHeader>
                        <Typography.Title size="sm">콘텐츠 제목</Typography.Title>
                        <S.FormButton>
                          <Typography.Title size="sm" color="#5276FA">
                            저장
                          </Typography.Title>
                        </S.FormButton>
                      </S.ChangePopupHeader>
                      <S.ChangePopupInput
                        defaultValue={data?.title}
                        name="title"
                        type="text"
                        maxLength={38}
                      />
                    </S.ChangePopupContainer>
                  ),
                });
                popupOpen();
              }}
            >
              콘텐츠 제목 수정
            </span>
          </Typography.Title>
          <Typography.Title size="lg" color="inherit">
            <span
              onClick={() => {
                setPopupUI({
                  Icon: <ExclamationCircleIcon />,
                  Header: '콘텐츠를 삭제하시겠어요?',
                  Warning: ' 삭제하면 다시 복구할 수 없어요.',
                  CloseButton: {
                    text: '취소',
                    onClick: () => {
                      popupClose();
                    },
                  },
                  ConfirmButton: {
                    text: '확인',
                    onClick: () => {
                      deletes(`/scrap/content?id=${id}`);
                      navigate(-1);
                    },
                  },
                });
                popupOpen();
              }}
            >
              콘텐츠 삭제
            </span>
          </Typography.Title>
        </S.ModalContainer>
      </Modal>

      {/* Header */}
      <S.Container>
        <S.Header>
          {data?.link.thumbnailURL ? (
            <img src={data?.link.thumbnailURL} alt="profile" />
          ) : (
            <S.NoThumbnail>
              <LogoSmallIcon />
            </S.NoThumbnail>
          )}

          <S.HeaderText>
            <Typography.Title size="md" color="inherit">
              {data?.title}
            </Typography.Title>
            <Typography.Label size="lg" color="inherit">
              <span
                onClick={() => {
                  window.location.href = data?.link.url as string;
                }}
              >
                인스타그램 바로가기
              </span>
            </Typography.Label>
          </S.HeaderText>
          <S.HeaderIconWrapper>
            <img src={InstagramImg} alt="icon" />
          </S.HeaderIconWrapper>
        </S.Header>
        <S.SeperateLine />

        {/* Contents */}
        <Typography.Headline size="sm">본문</Typography.Headline>
        <div style={{ width: '100%' }}>
          <S.InstagramText isOpen={isContentOpen}>
            {data?.content
              .split('\n')
              .map((line, index) => <p key={`${line} ${index}`}>{line === ' ' ? <br /> : line}</p>)}
          </S.InstagramText>
          <S.TextButton
            onClick={() => {
              setIsContentOpen((prev) => !prev);
            }}
          >
            {isContentOpen ? (
              <>
                접기 <TopChevronIcon />
              </>
            ) : (
              <>
                펼치기 <BottomChevronIcon />
              </>
            )}
          </S.TextButton>
        </div>

        {/* Memo */}
        <>
          <S.HeadlineContainer>
            <Typography.Headline size="sm">메모</Typography.Headline>
            <S.MemoEdit
              onClick={() => {
                navigate(`/scrap/content/${id}/edit?memo=${data?.memo}`);
              }}
            >
              <Typography.Title size="sm" color="inherit">
                수정
              </Typography.Title>
              <ChevronRightIcon />
            </S.MemoEdit>
          </S.HeadlineContainer>
          <S.MemoContainer>
            <S.MemoText isOpen={isMemoOpen}>
              {data?.memo ? (
                data?.memo
                  .split('\n')
                  .map((line, index) => (
                    <p key={`${line} ${index}`}>{line === ' ' ? <br /> : line}</p>
                  ))
              ) : (
                <Typography.Body size="lg" color="#A6A6A6">
                  작성한 메모가 없어요.
                </Typography.Body>
              )}
            </S.MemoText>
            <S.TextButton
              onClick={() => {
                setIsMemoOpen((prev) => !prev);
              }}
            >
              {isMemoOpen ? (
                <>
                  접기 <TopChevronIcon />
                </>
              ) : (
                <>
                  펼치기 <BottomChevronIcon />
                </>
              )}
            </S.TextButton>
          </S.MemoContainer>
        </>

        {/* Places */}
        {data?.place[0].count > 0 && (
          <>
            <S.PlaceHeadlineWrapper>
              <Typography.Headline size="sm">
                콘텐츠 속 장소 <S.FontHighlight>{data?.place[0].count}</S.FontHighlight>
              </Typography.Headline>
            </S.PlaceHeadlineWrapper>

            <S.PlaceList>
              {data?.place[1].places_list &&
                data?.place[1].places_list.map((place, index) =>
                  place.placeId ? (
                    <S.PlaceItem key={index}>
                      {place.thumbnailURL ? (
                        <img
                          src={place.thumbnailURL}
                          alt="place"
                          onClick={() => {
                            navigate(`/place/${place.placeId}`);
                          }}
                        />
                      ) : (
                        <LocationPlaceholderIcon
                          type={1}
                          onClick={() => {
                            navigate(`/place/${place.placeId}`);
                          }}
                        />
                      )}

                      <Typography.Title size="lg" color="inherit">
                        <span
                          onClick={() => {
                            navigate(`/place/${place.placeId}`);
                          }}
                        >
                          {place.name}
                        </span>
                      </Typography.Title>

                      <S.PlaceIconWrapper isScraped={place.isScraped}>
                        {place.isScraped === true && (
                          <BookmarkFilledIcon
                            onClick={() => {
                              deletes(`/scrap/place?id=${place.placeId}`).then(() => {
                                setData({
                                  ...data,
                                  place: [
                                    { count: data.place[0].count },
                                    {
                                      places_list: data.place[1].places_list.map((item) =>
                                        item.placeId === place.placeId
                                          ? { ...item, isScraped: false }
                                          : item,
                                      ),
                                    },
                                  ],
                                });
                              });
                            }}
                          />
                        )}
                        {place.isScraped === false && (
                          <BookmarkIcon
                            onClick={() => {
                              post(`/scrap/place`, {
                                placeId: place.placeId,
                                isTripBucket: true,
                                memo: data.memo,
                              }).then(() => {
                                setData({
                                  ...data,
                                  place: [
                                    { count: data.place[0].count },
                                    {
                                      places_list: data.place[1].places_list.map((item) =>
                                        item.placeId === place.placeId
                                          ? { ...item, isScraped: true }
                                          : item,
                                      ),
                                    },
                                  ],
                                });
                              });
                            }}
                          />
                        )}
                      </S.PlaceIconWrapper>
                    </S.PlaceItem>
                  ) : (
                    <S.PlaceItem key={index}>
                      <LocationPlaceholderIcon type={1} />
                      <Typography.Title size="lg" color="inherit">
                        {place.name}
                      </Typography.Title>
                      <S.PlaceIconWrapper isScraped={false}>
                        <SearchIcon
                          onClick={() => {
                            navigate(`/scrapbook/content/${id}/search?name=${place.name}`);
                          }}
                        />
                      </S.PlaceIconWrapper>
                    </S.PlaceItem>
                  ),
                )}
            </S.PlaceList>
          </>
        )}
      </S.Container>
    </PageTemplate>
  );
}

export default ScrapContentPage;
