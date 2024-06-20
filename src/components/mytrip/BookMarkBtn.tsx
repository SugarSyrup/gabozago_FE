import { useState } from 'react';

import BookMarkIcon from '../../assets/icons/bookmark.svg?react';
import FullBookMarkIcon from '../../assets/icons/bookmark_filled_white.svg?react';

interface Props {
  currentBookMarked: boolean;
  onClick: () => void;
}

function BookMarkBtn({ currentBookMarked, onClick }: Props) {
  const [isBookMarked, setIsBookMarked] = useState<boolean>(currentBookMarked);

  function onClickHandler() {
    setIsBookMarked((prev) => !prev);
    onClick();
  }

  return (
    <>
      {isBookMarked ? (
        <FullBookMarkIcon onClick={onClickHandler} />
      ) : (
        <BookMarkIcon onClick={onClickHandler} />
      )}
    </>
  );
}

export default BookMarkBtn;
