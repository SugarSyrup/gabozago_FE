import { useState } from 'react';

import useModal from '../../../hooks/useModal';
import CalendarAddFullIcon from '../../../assets/icons/calendar_add.svg?react';
import CalendarAddIcon from '../../../assets/icons/calendar_add_border.svg?react';
import LocationIcon from '../../../assets/icons/location.svg?react';

import * as S from './style';

type data = {
  courseName: string;
  day: number;
  mytrips: {
    id: number;
    name: string;
    location: string;
  }[];
};

interface Props {
  id: number;
}

function useCourseModal({ id }: Props) {
  const [data, setCourseModalData] = useState<data>();
  const { Modal, modalOpen, modalClose } = useModal({
    title: '',
    handle: true,
    borderRadius: '30px',
  });

  function CourseModal() {
    return (
      <S.ModalWrapper>
        <Modal>
          <S.CourseModalContainer>
            <S.CourseModalHeader>
              <S.TravelThumbnailWrapper />
              <S.ModalInfoText>
                “{data?.courseName}" 일정에 Day
                {data?.day}을 추가했어요!
              </S.ModalInfoText>
            </S.CourseModalHeader>
            <S.TravelList>
              <S.TravelListHeader>
                <S.TravelListTitle>내 여행목록</S.TravelListTitle>
                <S.TravelCreate>새 여행 생성</S.TravelCreate>
              </S.TravelListHeader>
              {data?.mytrips.map((mytrip) => (
                <S.TravelItem>
                  <S.TravelInfoContainer>
                    <S.TravelThumbnailWrapper />
                    <S.TravelInfoTextContainer>
                      <S.TravelName>{mytrip.name}</S.TravelName>
                      <S.TravelLocation>
                        <LocationIcon />
                        {mytrip.location}
                      </S.TravelLocation>
                    </S.TravelInfoTextContainer>
                  </S.TravelInfoContainer>
                  <S.TravelAddBtn isClicked>
                    <CalendarAddFullIcon />
                    <span>일정에 추가됨</span>
                  </S.TravelAddBtn>
                </S.TravelItem>
              ))}
            </S.TravelList>
          </S.CourseModalContainer>
        </Modal>
      </S.ModalWrapper>
    );
  }

  return {
    CourseModal,
    courseModalOpen: modalOpen,
    courseModalClose: modalClose,
    setCourseModalData,
  };
}

export default useCourseModal;
