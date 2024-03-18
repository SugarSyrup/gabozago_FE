import * as S from "./style";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom_small.svg?react";
import { useRecoilValue } from "recoil";
import { activeJournalFilterListState } from "../../../recoil/journals/journalState";

interface Props {
  type: string;
  name: string;
}

function FilterButton({ type: filterType, name }: Props) {
  const activeFilters = useRecoilValue(activeJournalFilterListState);

  return (
    <S.FilterButton
      onClick={() => alert(name)}
      className={`${
        activeFilters.filter(({ type }) => type === filterType).length !== 0 &&
        "active"
      }`}
    >
      {name}
      <ChevronBottomIcon />
    </S.FilterButton>
  );
}

export default FilterButton;
