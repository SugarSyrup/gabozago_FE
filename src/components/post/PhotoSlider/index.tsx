import { useRef, useState } from 'react'
import * as S from './style'

interface Props {
  photosURL: string[]
}

function PhotoSlider({ photosURL }: Props) {
  const [isMouseClicked, setIsMouseClicked] = useState<boolean>(false)
  const startX = useRef<number>(0)

  function onClickOver(
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) {
    const itemWidth = e.currentTarget.offsetWidth
    const currentIdx = Math.floor(
      e.currentTarget.scrollLeft / e.currentTarget.offsetWidth
    )

    if (e.currentTarget.scrollLeft % itemWidth < itemWidth / 2) {
      e.currentTarget.scrollTo({
        left: currentIdx * itemWidth,
        behavior: 'smooth',
      })
    } else {
      e.currentTarget.scrollTo({
        left: (currentIdx + 1) * itemWidth,
        behavior: 'smooth',
      })
    }
  }

  return (
    <S.PlacePhotos
      onMouseDown={e => {
        setIsMouseClicked(true)
        startX.current = e.clientX
      }}
      onMouseMove={e => {
        if (isMouseClicked) {
          e.currentTarget.scrollTo({
            left: e.currentTarget.scrollLeft + (startX.current - e.clientX) * 1,
          })
        }
      }}
      onMouseOver={e => {
        setIsMouseClicked(false)
        onClickOver(e)
      }}
      onMouseUp={e => {
        setIsMouseClicked(false)
        onClickOver(e)
      }}
      onTouchEnd={onClickOver}
    >
      {photosURL.map(photoURL => (
        <S.PhotoItem src={photoURL} />
      ))}
    </S.PlacePhotos>
  )
}

export default PhotoSlider
