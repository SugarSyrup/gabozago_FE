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
import { patch } from '@_utils/api';
import { useNavigate, useParams } from 'react-router-dom';

// @TODO: GET Content Data
function ScrapContentPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { Modal, modalOpen } = useModal({});
  const { popupOpen, popupClose } = usePopup();
  const setPopupUI = useSetRecoilState(popupValue);

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
                      popupClose();
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
              로커스가 직접 가본 장소들만
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
          {'로커스가 직접 가본 장소들만 적었습니다😁\n카페에서 공부를 하거나 책을 읽고\n노트북으로 작업하는 것을 좋아하는 분들을 위해\n다녀온 카페 리스트를 정리했습니다🙇‍♂️\n \n📍대연역 인근 | [옴싸우스코리아]\n \n- 부산 남구 유엔로120번길 32 1층\n- 매주 토,일,월 13:00-21:00\n- 주차 불가, 콘센트O\n- 독특한 오브제가 많은 감성 카페처럼 보이지만, 편안한 좌석과 콘센트, 분위기가 집중하기 정말 좋은 곳\n자세한 내용은 @locus계정 두 번째 릴스 참고\n두 번이나 추천 할 정도로 애정 하는 장소 입니다!\n \n📍부산대역 인근 | 더하루나\n \n- 부산광역시 금정구 장전로20번길 21\n- 매일 12:00-22:00\n- 좌석수도 많고 의자&책상 높이도 좋아요, 콘센트O\n- 작업 공간은 2층에 있어요\n- 자유롭게 활용할 수 있는 모니터🖥가 있어서 작업할 때 최고..!\n- 디퓨저향이 좋아서 기분이 좋아지는 공간이에요.\n기분 좋게 집중하고 싶다면 이곳을 추천합니다!\n \n📍온천천 인근 | 왓섭커피\n \n- [부산 동래구 충렬대로428번길 62 1층 왓섭커피\n- 월-토 10:00-22:00\n- 매주 요일 정기휴무\n- 우드톤 인테리어, 콘센트O\n- 부산에서 비교적 조용한 카페거리에 위치해서 한적한 편,\n- 테린느가 정말 맛있는 가게\n \n📍흰여울문화마을 | 해빙모먼트\n \n- 부산 영도구 절영로 196\n- 매일 10:00-20:00\n- 2층에 좌석이 넓어 노트북 하시는 분이 많아요, 콘센트O\n- 통창을 통해 탁트인 오션뷰🌊 감상 가능\n- 작업도 좋지만, 풍경이 좋아, 책을 읽기에도 정말 좋은 공간\n \n[그 밖에 다른 카페와 공간 추천!]\n \n📍부산대역 | 힌터그룬트\n \n📍망미역 | 모토커피\n \n📍광안리 | 클러터커피\n \n📍부산대역 | 사적인 도서관 (북카페 입니다!)\n \n📍전포역 | 카페알프\n \n📍망미역 | 포토\n \n📍부전역 | 카페준\n⠀⠀\n✨️리뷰가 없는 신기한 공간이 궁굼하다면? [@locus_zip]\n \n#혼카페 #프리랜서 #카페추천 #부산카페 #작업하기좋은카페 #카공 #로커스부산'
            .split('\n')
            .map((line, index) => (
              <p key={`${line} ${index}`}>{line === ' ' ? <br /> : line}</p>
            ))}
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
            {'계절이 지나가는 하늘에는 가을로 가득 차 있습니다. 나는 아무 걱정도 없이 가을 속의 별들을 다 헬 듯합니다. 가슴 속에 하나 둘 새겨지는 별을 이제 다 못 헤는 것은 쉬이 아침이 오는 까닭이요, 내일 밤이 남은 까닭이요, 아직 나의 청춘이 다하지 않은 까닭입니다. 별 하나에 추억과 별 하나에 사랑과 별 하나에 쓸쓸함과 별 하나에추억과 별 하나에 사ㅇㄴㄹㅁㅇㄹㅇㄹㄴㅇㄹㄴㅇㄹㄴㅇㄹㅁㅇㄹㅁㅇㄹㅁㄹ'
              .split('\n')
              .map((line, index) => (
                <p key={`${line} ${index}`}>{line === ' ' ? <br /> : line}</p>
              ))}
          </S.MemoText>
          <S.TextButton>
            펼치기 <BottomChevronIcon />
          </S.TextButton>
        </S.MemoContainer>
        <S.PlaceHeadlineWrapper>
          <Typography.Headline size="sm">콘텐츠 속 장소 5</Typography.Headline>
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
