import * as S from "./style";
import OptionsIcon from "../../../assets/icons/options.svg?react";
import FilterButton from "../FilterButton";

interface Props {
  filters: string[];
}

function FilterList({ filters }: Props) {
  return (
    <S.FilterList>
      <S.FilterItem>
        <S.AllFilterButton onClick={() => alert("전체 필터 보기")}>
          <OptionsIcon />
        </S.AllFilterButton>
      </S.FilterItem>
      {filters.map((item) => (
        <S.FilterItem>
          <FilterButton name={item} />
        </S.FilterItem>
      ))}
    </S.FilterList>
  );
}

export default FilterList;
