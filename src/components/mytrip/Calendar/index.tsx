import { useEffect, useRef, useState } from 'react'
import * as S from './style'

interface Props {
  year: number
  month: number
  startDate: string
  endDate: string
  onDateClick: (date: string) => void
}

function Calendar({ year, month, startDate, endDate, onDateClick }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [opacity, setOpacity] = useState(0.3)
  const calendarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!calendarRef.current) return
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsLoading(false)
        }
      })
    })

    observer.observe(calendarRef.current)
  }, [])

  useEffect(() => {
    if (!calendarRef.current) return

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          const entryIntersectionRatio =
            Math.floor(entry.intersectionRatio * 100) / 100
          if (entryIntersectionRatio >= 0.85) {
            setOpacity(1)
          } else if (entryIntersectionRatio <= 0.6) {
            setOpacity(0.3)
          } else {
            setOpacity(entryIntersectionRatio - 0.3)
          }
        })
      },
      {
        threshold: [
          0.625, 0.65, 0.675, 0.7, 0.725, 0.75, 0.775, 0.8, 0.825, 0.85, 0.875,
          0.9,
        ],
      }
    )
    observer.observe(calendarRef.current)
  }, [])

  function FillDate() {
    const currentMonthStartDay = new Date(year, month - 1, 1).getDay()
    const currentMonthLastDate = new Date(year, month, 0).getDate()
    const arr = []

    for (let i = 0; i < currentMonthStartDay; i++) {
      arr.push(<S.Empty />)
    }

    for (let i = 1; i <= currentMonthLastDate; i++) {
      const thisDate = `${year}${String(month).padStart(2, '0')}${String(i).padStart(2, '0')}`
      arr.push(
        <S.Date
          isDuring={
            Number(startDate) <= Number(thisDate) &&
            Number(endDate) >= Number(thisDate)
          }
          onClick={() => {
            onDateClick(thisDate)
          }}
        >
          {Number(startDate) === Number(thisDate) ||
          Number(endDate) === Number(thisDate) ? (
            <S.DateHightlight
              isStartDate={Number(startDate) === Number(thisDate)}
              isThisDate={Number(startDate) === Number(endDate)}
            >
              {i}
            </S.DateHightlight>
          ) : (
            i
          )}
        </S.Date>
      )
    }

    return arr
  }

  return (
    <div ref={calendarRef}>
      {isLoading ? (
        <></>
      ) : (
        <>
          <S.CalendarHeader opacity={opacity}>
            {year}년{month}월
          </S.CalendarHeader>
          <S.Calendar opacity={opacity}>
            <S.Day>SUN</S.Day>
            <S.Day>MON</S.Day>
            <S.Day>TUE</S.Day>
            <S.Day>WED</S.Day>
            <S.Day>THU</S.Day>
            <S.Day>FRI</S.Day>
            <S.Day>SAT</S.Day>
            {FillDate()}
          </S.Calendar>
        </>
      )}
    </div>
  )
}

export default Calendar
