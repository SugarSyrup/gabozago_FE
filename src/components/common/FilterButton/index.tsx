import * as S from "./style";
import ChevronBottomIcon from "../../../assets/icons/chevron_bottom_small.svg?react";

interface Props {
  name: string;
}

function FilterButton({ name }: Props) {
  return (
    <S.FilterButton onClick={() => alert(name)}>
      {name}
      <ChevronBottomIcon />
    </S.FilterButton>
  );
}

export default FilterButton;
