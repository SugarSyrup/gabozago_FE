import * as S from "../../styles/tripDetail/EditModeBottomControlBox.style";
import ArrowSwapIcon from "../../assets/icons/arrow_swap.svg?react";
import DeleteIcon from "../../assets/icons/delete.svg?react";

function EditModeBottomControlBox() {
  return (
    <S.Container>
      <S.Button>
        <ArrowSwapIcon />
        <span>날짜 이동</span>
      </S.Button>
      <S.Button>
        <DeleteIcon />
        <span>삭제하기</span>
      </S.Button>
    </S.Container>
  );
}

export default EditModeBottomControlBox;
