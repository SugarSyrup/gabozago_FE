import { useCallback, useEffect, useRef, useState } from 'react'
import LeftChevronIcon from '../../../assets/icons/chevron_left.svg?react'
import RightChevronIcon from '../../../assets/icons/chevron_right.svg?react'

import LocationIcon from '../../../assets/icons/location.svg?react'
import PhoneIcon from '../../../assets/icons/phone.svg?react'
import ClockIcon from '../../../assets/icons/clock.svg?react'
import WebIcon from '../../../assets/icons/web.svg?react'

import * as S from './style'

interface Props {
  data: {
    name: string
    date: number
    placeIndex: number
    address: string
    phone: string
    storeHours: {
      openingTime: string
      closeTime: string
      day: string
    }[]
    url: string
  }
}

function usePlaceSlider() {
  const [index, setIndex] = useState(0)
  const SliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    SliderRef.current?.scrollTo({
      left: SliderRef.current.offsetWidth * index,
      behavior: 'smooth',
    })
    console.log(index)
  }, [index])

  function getCurrentIndex() {
    return index
  }

  function movePrev() {
    console.log(index)
    setIndex(prev => (prev - 1 >= 0 ? prev - 1 : prev))
    // index 상태값이 왜 0으로 고정이지?
    if (index > 0) {
      setIndex(prev => prev - 1)
    }
  }

  function moveNext() {
    setIndex(prev => prev + 1)
  }

  function moveIndex(idx: number) {
    setIndex(idx)
  }

  const PlaceSlider = useCallback(
    () => (
      <S.SliderWrapper ref={SliderRef}>
        <S.SliderItem>
          <S.Header>
            <LeftChevronIcon
              onClick={() => {
                movePrev()
              }}
            />
            <span>부산역</span>
            <RightChevronIcon
              onClick={() => {
                moveNext()
              }}
            />
          </S.Header>
          <S.Photo />
          <S.PlaceState>
            <span>DAY 1</span>
            <span>첫번째 장소</span>
          </S.PlaceState>
          <S.SeperateLine />
          <S.PlaceInfomationContainer>
            <S.PlaceInfomation>
              <LocationIcon />
              <span>부산광역시 남구 용호동</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <PhoneIcon />
              <span>1544-7788</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <ClockIcon />
              <span>24시간 영업</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <WebIcon />
              <span>홈페이지</span>
            </S.PlaceInfomation>
          </S.PlaceInfomationContainer>
          <S.SeperateLine />
        </S.SliderItem>
        <S.SliderItem>
          <S.Header>
            <LeftChevronIcon
              onClick={() => {
                movePrev()
              }}
            />
            <span>부산역</span>
            <RightChevronIcon
              onClick={() => {
                moveNext()
              }}
            />
          </S.Header>
          <S.Photo />
          <S.PlaceState>
            <span>DAY 2</span>
            <span>첫번째 장소</span>
          </S.PlaceState>
          <S.SeperateLine />
          <S.PlaceInfomationContainer>
            <S.PlaceInfomation>
              <LocationIcon />
              <span>부산광역시 남구 용호동</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <PhoneIcon />
              <span>1544-7788</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <ClockIcon />
              <span>24시간 영업</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <WebIcon />
              <span>홈페이지</span>
            </S.PlaceInfomation>
          </S.PlaceInfomationContainer>
          <S.SeperateLine />
        </S.SliderItem>
        <S.SliderItem>
          <S.Header>
            <LeftChevronIcon
              onClick={() => {
                movePrev()
              }}
            />
            <span>부산역</span>
            <RightChevronIcon
              onClick={() => {
                moveNext()
              }}
            />
          </S.Header>
          <S.Photo />
          <S.PlaceState>
            <span>DAY 3</span>
            <span>첫번째 장소</span>
          </S.PlaceState>
          <S.SeperateLine />
          <S.PlaceInfomationContainer>
            <S.PlaceInfomation>
              <LocationIcon />
              <span>부산광역시 남구 용호동</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <PhoneIcon />
              <span>1544-7788</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <ClockIcon />
              <span>24시간 영업</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <WebIcon />
              <span>홈페이지</span>
            </S.PlaceInfomation>
          </S.PlaceInfomationContainer>
          <S.SeperateLine />
        </S.SliderItem>
        <S.SliderItem>
          <S.Header>
            <LeftChevronIcon
              onClick={() => {
                movePrev()
              }}
            />
            <span>부산역</span>
            <RightChevronIcon
              onClick={() => {
                moveNext()
              }}
            />
          </S.Header>
          <S.Photo />
          <S.PlaceState>
            <span>DAY 4</span>
            <span>첫번째 장소</span>
          </S.PlaceState>
          <S.SeperateLine />
          <S.PlaceInfomationContainer>
            <S.PlaceInfomation>
              <LocationIcon />
              <span>부산광역시 남구 용호동</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <PhoneIcon />
              <span>1544-7788</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <ClockIcon />
              <span>24시간 영업</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <WebIcon />
              <span>홈페이지</span>
            </S.PlaceInfomation>
          </S.PlaceInfomationContainer>
          <S.SeperateLine />
        </S.SliderItem>
        <S.SliderItem>
          <S.Header>
            <LeftChevronIcon
              onClick={() => {
                movePrev()
              }}
            />
            <span>부산역</span>
            <RightChevronIcon
              onClick={() => {
                moveNext()
              }}
            />
          </S.Header>
          <S.Photo />
          <S.PlaceState>
            <span>DAY 5</span>
            <span>첫번째 장소</span>
          </S.PlaceState>
          <S.SeperateLine />
          <S.PlaceInfomationContainer>
            <S.PlaceInfomation>
              <LocationIcon />
              <span>부산광역시 남구 용호동</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <PhoneIcon />
              <span>1544-7788</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <ClockIcon />
              <span>24시간 영업</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <WebIcon />
              <span>홈페이지</span>
            </S.PlaceInfomation>
          </S.PlaceInfomationContainer>
          <S.SeperateLine />
        </S.SliderItem>
        <S.SliderItem>
          <S.Header>
            <LeftChevronIcon
              onClick={() => {
                movePrev()
              }}
            />
            <span>부산역</span>
            <RightChevronIcon
              onClick={() => {
                moveNext()
              }}
            />
          </S.Header>
          <S.Photo />
          <S.PlaceState>
            <span>DAY 6</span>
            <span>첫번째 장소</span>
          </S.PlaceState>
          <S.SeperateLine />
          <S.PlaceInfomationContainer>
            <S.PlaceInfomation>
              <LocationIcon />
              <span>부산광역시 남구 용호동</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <PhoneIcon />
              <span>1544-7788</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <ClockIcon />
              <span>24시간 영업</span>
            </S.PlaceInfomation>
            <S.PlaceInfomation>
              <WebIcon />
              <span>홈페이지</span>
            </S.PlaceInfomation>
          </S.PlaceInfomationContainer>
          <S.SeperateLine />
        </S.SliderItem>
      </S.SliderWrapper>
    ),
    []
  )

  return {
    PlaceSlider,
    moveIndex,
    movePrev,
    moveNext,
    getCurrentIndex,
  }
}

export default usePlaceSlider
