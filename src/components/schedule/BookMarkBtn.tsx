import BookMarkIcon from "../../assets/icons/bookmark.svg?react";
import { useState } from "react";
import FullBookMarkIcon from "../../assets/icons/fullbookmark.svg?react";
import * as S from "../../styles/schedule/BookMarkBtn.style";

interface Props {
    currentBookMarked: boolean;
    onClick: () => void;
}

function BookMarkBtn({ currentBookMarked, onClick }: Props) {
    const [isBookMarked, setIsBookMarked] =
        useState<boolean>(currentBookMarked);
    function onClickHandler() {
        setIsBookMarked((prev) => !prev);
        onClick();
    }

    return (
        <S.Wrapper>
            {isBookMarked ? (
                <FullBookMarkIcon onClick={onClickHandler} />
            ) : (
                <BookMarkIcon onClick={onClickHandler} />
            )}
        </S.Wrapper>
    );
}

export default BookMarkBtn;
