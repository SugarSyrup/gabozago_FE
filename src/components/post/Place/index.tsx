import ChevronRightIcon from '../../../assets/icons/chevron_right.svg?react'
import CalendarAddIcon from '../../../assets/icons/calendar_add_border.svg?react'
import BookMarkIcon from '../../../assets/icons/bookmark.svg?react'

import * as S from './style'
import PhotoSlider from '../PhotoSlider'

interface Props {
  index: number
  thumbnailURL: string
  name: string
  content: string
  photosURL: string[]
  onCalendarClick: () => void
  onScrapClick: () => void
}

const idxName = [
  '첫',
  '두',
  '세',
  '네',
  '다섯',
  '여섯',
  '일곱',
  '여덟',
  '아홉',
  '열',
  '열한',
  '열두',
  '열셋',
  '열넷',
  '열다섯',
  '열여섯',
  '열일곱',
  '열여덟',
  '열아홉',
  '스무',
]

function Place({
  index,
  thumbnailURL,
  name,
  content,
  photosURL,
  onCalendarClick,
  onScrapClick,
}: Props) {
  return (
    <S.PlaceContainer>
      <S.PlaceIndex>
        <S.IndexCircle>{index}</S.IndexCircle>
        <span>
          {idxName[index - 1]}
          번째 장소
        </span>
      </S.PlaceIndex>

      <S.PlaceHeader>
        <S.PlaceNameContainer>
          <S.PlaceThumbnail src={thumbnailURL} alt={name} />
          <S.PlaceName>{name}</S.PlaceName>
          <ChevronRightIcon />
        </S.PlaceNameContainer>
        <S.PlaceButtons>
          <S.PlaceButtonContainer
            onClick={() => {
              onCalendarClick()
            }}
          >
            {/* TODO: 일정에 추가 버튼 클릭 */}
            <CalendarAddIcon />
            <span>일정에 추가</span>
          </S.PlaceButtonContainer>
          <S.PlaceButtonContainer
            onClick={() => {
              onScrapClick()
            }}
          >
            {/* TODO: 장소 스크랩 버튼 클릭 */}
            <BookMarkIcon />
            <span>장소 스크랩</span>
          </S.PlaceButtonContainer>
        </S.PlaceButtons>
      </S.PlaceHeader>

      <S.PlaceReview>{content}</S.PlaceReview>
      <PhotoSlider photosURL={photosURL} />
    </S.PlaceContainer>
  )
}

export default Place
