import * as S from "../../styles/scrapBook/FilterList.style";
import OptionsIcon from "../../assets/icons/options.svg?react";

function FilterList() {
  const filters = [
    { id: 0, name: "카테고리" },
    { id: 1, name: "지역" },
    { id: 2, name: "인원" },
    { id: 3, name: "일정" },
    { id: 4, name: "테마" },
    { id: 5, name: "계절" },
    { id: 6, name: "경비" },
    { id: 6, name: "정렬" },
  ];

  return (
    <S.FilterList>
      <S.FilterItem>
        <S.AllFilterButton onClick={() => alert("전체 필터 보기")}>
          <OptionsIcon />
        </S.AllFilterButton>
      </S.FilterItem>
      <S.FilterItem>
        <S.NoFilterButton>전체</S.NoFilterButton>
      </S.FilterItem>
      {filters.map(({ id, name }) => (
        <S.FilterItem>
          <S.FilterButton onClick={() => alert(id)}>{name}</S.FilterButton>
        </S.FilterItem>
      ))}
    </S.FilterList>
  );
}

export default FilterList;
