import * as S from "./style";
import OptionsIcon from "../../../assets/icons/options.svg?react";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom_small.svg?react";

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
          <S.FilterButton onClick={() => alert(item)}>
            {item}
            <ChevronBottomIcon />
          </S.FilterButton>
        </S.FilterItem>
      ))}
    </S.FilterList>
  );
}

export default FilterList;
