import { useState } from 'react'

import useModal from '../../../hooks/useModal'
import CalendarIcon from '../../../assets/icons/calendar.svg?react'
import LocationIcon from '../../../assets/icons/location.svg?react'

import * as S from './style'

interface data {
  courseName: string
  day: number
  mytrips: {
    id: number
    name: string
    location: string
  }[]
}

function usePlaceModal() {
  const [data, setPlaceModalData] = useState<data>()
  const { Modal, modalOpen, modalClose } = useModal({
    title: '',
    handle: true,
    borderRadius: '30px',
  })

  function PlaceModal() {
    return (
      <S.ModalWrapper>
        <Modal>
          <S.PlaceModalContainer>
            <S.PlaceModalTitle>내 일정에 추가</S.PlaceModalTitle>
            <S.DayList>
              <S.PlaceModalSelectBox>
                <option>부산여행</option>
              </S.PlaceModalSelectBox>
              <S.DayItem>
                <S.DayThumbnail />
                <S.DayTextContainer>
                  <S.DayTitle>Day 1</S.DayTitle>
                  <S.DayDesc>
                    <LocationIcon />
                    <span>부산</span>
                  </S.DayDesc>
                  <S.DayDesc>
                    <CalendarIcon />
                    <span>2024.1.5</span>
                  </S.DayDesc>
                </S.DayTextContainer>
              </S.DayItem>
              <S.DayItem>
                <S.DayThumbnail />
                <S.DayTextContainer>
                  <S.DayTitle>Day 1</S.DayTitle>
                  <S.DayDesc>
                    <LocationIcon />
                    <span>부산</span>
                  </S.DayDesc>
                  <S.DayDesc>
                    <CalendarIcon />
                    <span>2024.1.5</span>
                  </S.DayDesc>
                </S.DayTextContainer>
              </S.DayItem>
            </S.DayList>
            <S.SaveButton onClick={modalClose}>저장하기</S.SaveButton>
          </S.PlaceModalContainer>
        </Modal>
      </S.ModalWrapper>
    )
  }

  return {
    PlaceModal,
    placeModalOpen: modalOpen,
    placeModalClose: modalClose,
    setPlaceModalData,
  }
}

export default usePlaceModal
