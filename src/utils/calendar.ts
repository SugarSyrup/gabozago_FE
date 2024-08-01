export function calculateDateDiff(date1: string, date2: string) {
  const dateDiffTime =
    new Date(`${date1.slice(0, 4)}-${date1.slice(4, 6)}-${date1.slice(6, 8)}`).getTime() -
    new Date(`${date2.slice(0, 4)}-${date2.slice(4, 6)}-${date2.slice(6, 8)}`).getTime();
  return Math.abs(dateDiffTime / (1000 * 60 * 60 * 24));
}

export type DayOfWeek = '일' | '월' | '화' | '수' | '목' | '금' | '토';

export interface DateObject {
  year: number;
  month: number;
  day: number;
  dayOfWeek: DayOfWeek;
  dateString: string;
}

export function parseDateString(dateString: string): DateObject | null {
  const dateRegex = /^(\d{4})-(\d{2})-(\d{2})$/;
  const match = dateString.match(dateRegex);

  if (match) {
    const [, year, month, day] = match;
    const date = new Date(`${year}-${month}-${day}`);
    const dayOfWeek: DayOfWeek = ['일', '월', '화', '수', '목', '금', '토'][
      date.getDay()
    ] as DayOfWeek;

    return {
      year: Number(year),
      month: Number(month),
      day: Number(day),
      dayOfWeek,
      dateString,
    };
  }
  console.error('날짜 형식이 yyyy-mm-dd와 일치하지 않아 변환할 수 없습니다.');
  return null;
}
