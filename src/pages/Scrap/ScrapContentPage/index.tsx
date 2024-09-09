import { useSetRecoilState } from 'recoil';

import PageHeader from '@_common/PageHeader';
import Typography from '@_common/Typography';
import BackButton from '@_common/BackButton';
import PageTemplate from '@_common/PageTemplate';
import useModal from '../../../hooks/useModal';
import usePopup from '../../../hooks/usePopup';

import BottomChevronIcon from '@_icons/chevron_bottom.svg?react';
import MeatBallIcon from '@_icons/meatballsMenu.svg?react';
import BookmarkIcon from '@_icons/bookmark_filled.svg?react';
import ExclamationCircleIcon from '@_icons/exclamation_circle.svg?react';
import ChevronRightIcon from '@_icons/chevron_right.svg?react';

import InstagramImg from '@_imgs/instagram_icon.png';
import { popupValue } from '@_recoil/common/PopupValue';

import * as S from './style';
import { deletes, get, patch } from '@_utils/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface TData {
  url: string;
  title: string;
  content: string;
  memo: string;
  thumbnailURL: string;
  source: string;
  place: {
    count: number;
    place_list: {
      placeId?: number;
      name: string;
      isScraped?: boolean;
    }[];
  };
}

function ScrapContentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<TData>();
  const { Modal, modalOpen } = useModal({});
  const { popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);

  useEffect(() => {
    get<TData>(`/scrap/content/${id}`).then((res) => {
      setData(res.data);
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
                        defaultValue="@TODO: Set Title Default Value"
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
              스크랩 제목 수정
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
              스크랩 삭제
            </span>
          </Typography.Title>
        </S.ModalContainer>
      </Modal>
      <S.Container>
        <S.Header>
          <img src="https://via.placeholder.com/64" alt="profile" />
          <S.HeaderText>
            <Typography.Title size="md" color="inherit">
              {data?.title}
            </Typography.Title>
            <Typography.Label size="lg" color="inherit">
              인스타그램 바로가기
            </Typography.Label>
          </S.HeaderText>
          <S.HeaderIconWrapper>
            <img src={InstagramImg} alt="icon" />
          </S.HeaderIconWrapper>
        </S.Header>
        <S.SeperateLine />
        <Typography.Headline size="sm">본문</Typography.Headline>
        <S.InstagramText isOpen={false}>
          {data?.content
            .split('\n')
            .map((line, index) => <p key={`${line} ${index}`}>{line === ' ' ? <br /> : line}</p>)}
        </S.InstagramText>
        <S.TextButton>
          펼치기 <BottomChevronIcon />
        </S.TextButton>
        <S.HeadlineContainer>
          <Typography.Headline size="sm">메모</Typography.Headline>
          <S.MemoEdit
            onClick={() => {
              navigate(`/scrap/content/${id}/edit`);
            }}
          >
            <Typography.Title size="sm" color="inherit">
              수정
            </Typography.Title>
            <ChevronRightIcon />
          </S.MemoEdit>
        </S.HeadlineContainer>
        <S.MemoContainer>
          <S.MemoText isOpen={false}>
            {data?.memo
              .split('\n')
              .map((line, index) => <p key={`${line} ${index}`}>{line === ' ' ? <br /> : line}</p>)}
          </S.MemoText>
          <S.TextButton>
            펼치기 <BottomChevronIcon />
          </S.TextButton>
        </S.MemoContainer>
        <S.PlaceHeadlineWrapper>
          <Typography.Headline size="sm">콘텐츠 속 장소 {data?.place.count}</Typography.Headline>
        </S.PlaceHeadlineWrapper>
        <S.PlaceList>
          <S.PlaceItem>
            <img src="https://via.placeholder.com/64" alt="place" />
            <Typography.Title size="lg" color="inherit">
              움싸우스 코리아
            </Typography.Title>
            <S.PlaceIconWrapper>
              <BookmarkIcon />
            </S.PlaceIconWrapper>
          </S.PlaceItem>
          <S.PlaceItem>
            <img src="https://via.placeholder.com/64" alt="place" />
            <Typography.Title size="lg" color="inherit">
              움싸우스 코리아
            </Typography.Title>
            <S.PlaceIconWrapper>
              <BookmarkIcon />
            </S.PlaceIconWrapper>
          </S.PlaceItem>
          <S.PlaceItem>
            <img src="https://via.placeholder.com/64" alt="place" />
            <Typography.Title size="lg" color="inherit">
              움싸우스 코리아
            </Typography.Title>
            <S.PlaceIconWrapper>
              <BookmarkIcon />
            </S.PlaceIconWrapper>
          </S.PlaceItem>
          <S.PlaceItem>
            <img src="https://via.placeholder.com/64" alt="place" />
            <Typography.Title size="lg" color="inherit">
              움싸우스 코리아
            </Typography.Title>
            <S.PlaceIconWrapper>
              <BookmarkIcon />
            </S.PlaceIconWrapper>
          </S.PlaceItem>
        </S.PlaceList>
      </S.Container>
    </PageTemplate>
  );
}

export default ScrapContentPage;
