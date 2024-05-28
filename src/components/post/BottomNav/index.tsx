import { post } from "../../../utils/api";

import ClapIcon from "../../../assets/icons/clap.svg?react";
import ClapMainIcon from "../../../assets/icons/clap_blue.svg?react";
import CommentIcon from "../../../assets/icons/comment.svg?react";
import BookMarkIcon from "../../../assets/icons/bookmark.svg?react";
import ShareIcon from "../../../assets/icons/share.svg?react";

import * as S from "./style";
import usePopup from "../../../hooks/usePopup";
import { useState } from "react";

interface Props {
  postId: number;
  isClap: boolean;
  claps: number;
  comment: number;
  onCommentClick: () => void;
  bookmark: number;
  onShareClick?: () => void;
  onScrapClick?: () => void;
  title?: string;
}

function BottomNav({
  postId,
  isClap,
  claps,
  comment,
  onCommentClick,
  bookmark,
  onShareClick,
  onScrapClick,
  title,
}: Props) {
  const { Popup, popupOpen, popupClose } = usePopup();
  const [isUserClap, setIsUserClap] = useState<boolean>(isClap);
  const [isUserClpas, setIsUserClpas] = useState<number>(claps);

  return (
    <>
      <Popup>
        <S.UrlLabel htmlFor="urlCopy">
          아래 링크를 복사해 공유해보세요!
        </S.UrlLabel>
        <S.UrlInput
          type="url"
          name="현재 링크 복사"
          id="urlCopy"
          value={window.location.href}
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            navigator.clipboard.writeText(`${title}\n${window.location.href}`);
            popupClose();
            onShareClick && onShareClick();
          }}
        />
      </Popup>
      <S.Navigation>
        <S.NavigationItem
          onClick={() => {
            post<{
              message: "CREATE SUCCESS" | "DELETE SUCCESS";
            }>(`/clap/community`, {
              community: "article",
              postId: postId,
            }).then((response) => {
              if (response.data.message == "CREATE SUCCESS") {
                setIsUserClap(true);
                setIsUserClpas((prev) => prev + 1);
              } else {
                setIsUserClap(false);
                setIsUserClpas((prev) => prev - 1);
              }
            });
          }}
        >
          {isUserClap ? <ClapMainIcon /> : <ClapIcon />}
          <span>{isUserClpas}</span>
        </S.NavigationItem>
        <S.NavigationItem onClick={onCommentClick}>
          <CommentIcon />
          <span>{comment}</span>
        </S.NavigationItem>
        <S.NavigationItem
          onClick={() => {
            onScrapClick && onScrapClick();
          }}
        >
          <BookMarkIcon />
          <span>{bookmark}</span>
        </S.NavigationItem>
        <S.NavigationItem
          onClick={() => {
            popupOpen();
          }}
        >
          <ShareIcon />
        </S.NavigationItem>
      </S.Navigation>
    </>
  );
}

export default BottomNav;
