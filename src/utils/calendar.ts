export function calculateDateDiff(date1: string, date2: string) {
  const dateDiffTime =
    new Date(`${date1.slice(0, 4)}-${date1.slice(4, 6)}-${date1.slice(6, 8)}`).getTime() -
    new Date(`${date2.slice(0, 4)}-${date2.slice(4, 6)}-${date2.slice(6, 8)}`).getTime();
  return Math.abs(dateDiffTime / (1000 * 60 * 60 * 24));
}
