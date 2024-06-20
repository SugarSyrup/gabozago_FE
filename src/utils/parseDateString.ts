export type DayOfWeek = '일' | '월' | '화' | '수' | '목' | '금' | '토'

export interface DateObject {
  year: number
  month: number
  day: number
  dayOfWeek: DayOfWeek
  dateString: string
}

export function parseDateString(dateString: string): DateObject | null {
  const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/
  const match = dateString.match(dateRegex)

  if (match) {
    const [, year, month, day] = match
    const date = new Date(`${year}-${month}-${day}`)
    const dayOfWeek: DayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][
      date.getDay()
    ] as DayOfWeek

    return {
      year: Number(year),
      month: Number(month),
      day: Number(day),
      dayOfWeek,
      dateString,
    }
  }
  console.error('날짜 형식이 yyyy-mm-dd와 일치하지 않아 변환할 수 없습니다.')
  return null
}
