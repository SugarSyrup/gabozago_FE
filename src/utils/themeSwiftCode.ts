function themeSwiftCode(keyword: string) {
  switch (keyword) {
    case '음식점':
      return '01';
    case '카페':
      return '02';
    case '관광명소':
      return '03';
    case '레포츠':
      return '04';
    case '쇼핑':
      return '05';
    case '문화시설':
      return '06';
    case '여가시설':
      return '07';
    case '편의시설':
      return '08';
    case '숙박시설':
      return '09';
    case '주차장':
      return '10';
    default:
      return '';
  }
}

export default themeSwiftCode;
