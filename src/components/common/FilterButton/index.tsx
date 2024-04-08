import * as S from "./style";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom_small.svg?react";
import { useRecoilValue } from "recoil";
import { activeJournalFilterListState } from "../../../recoil/journals/journalState";
import { MouseEventHandler } from "react";

interface Props {
  type: string;
  name: string;
  onClick: MouseEventHandler;
}

function FilterButton({ type: filterType, name, onClick }: Props) {
  const activeFilters = useRecoilValue(activeJournalFilterListState);

  return (
    <S.FilterButton
      onClick={onClick}
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
