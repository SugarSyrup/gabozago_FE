import * as S from "./style";
import { Link } from "react-router-dom";
import { Suspense, useRef } from "react";
import FollowBtn from "../../../../profile/FollowBtn";
import UserIcon from "../../../../../assets/icons/user.svg?react";
import LocationIcon from "../../../../../assets/icons/location.svg?react";
import BookMarkIcon from "../../../../../assets/icons/bookmark.svg?react";
import CommentIcon from "../../../../../assets/icons/comment.svg?react";
import LikeIcon from "../../../../../assets/icons/clap.svg?react";
import ShareIcon from "../../../../../assets/icons/share.svg?react";
import useModal from "../../../../../hooks/useModal";
import Comment from "../../../../journal/Comment";
import usePopup from "../../../../../hooks/usePopup";

export interface TShortForm {
  id: number;
  title: string;
  location: string;
  createdAt: string;
  thumbnail: string;
  videoId: string;
  userid: string;
  username: string;
  profileImage: string;
  like: number;
  bookmark: number;
  commentCount: number;
}

function ShortForm({
  id,
  title,
  location,
  createdAt,
  thumbnail,
  videoId,
  userid,
  username,
  profileImage,
  like,
  bookmark,
  commentCount,
}: TShortForm) {
  // @todo: 유저정보에서 좋아요 정보 가져와 비교 => 좋아요 활성화/비활성화 관리
  // @todo: 스크랩 데이터에서 스크랩됐는지 비교 => 북마크 활성화/비활성화 관리
  const { Modal, modalOpen } = useModal({
    title: "",
    handle: false,
    borderRadius: "16px",
  });
  const { Popup, popupOpen } = usePopup();
  const youtubeRef = useRef<HTMLIFrameElement>(null);
  const opts = {
    autoplay: 1,
    controls: 0,
    loop: 1,
    mute: 1,
    modestbranding: 1,
    fs: 0,
    playsinline: 0,
    rel: 0,
  };
  const queryString = Object.entries(opts)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return (
    <>
      <Modal>
        <Comment id={id} commentInputPosition="bottom" />
      </Modal>
      <Popup>
        <S.UrlLabel htmlFor="urlCopy">
          아래 링크를 복사해 공유해보세요!
        </S.UrlLabel>
        <S.UrlInput
          type="url"
          name="현재 링크 복사"
          id="urlCopy"
          value={window.location.href}
          disabled
        />
      </Popup>
      <Modal>
        <Comment id={id} commentInputPosition="bottom" />
      </Modal>
      <S.Container>
        <S.InfoBox>
          <p>
            <Link to={`profile/${userid}`}>
              {profileImage ? (
                <UserIcon />
              ) : (
                <S.ProfileImage src={profileImage} alt="" />
              )}
              <span>{username}</span>
            </Link>
            <FollowBtn isFollowing={false} />
          </p>
          <p>{title}</p>
          <p>
            <span>
              <LocationIcon />
              {location}
            </span>
          </p>
        </S.InfoBox>
        <S.ControlBox>
          <S.IconButton
            onClick={() => {
              // @todo: ClickHandler 연결
            }}
          >
            <LikeIcon />
            {like}
          </S.IconButton>
          <S.IconButton onClick={modalOpen}>
            <CommentIcon />
            {commentCount}
          </S.IconButton>
          <S.IconButton
            onClick={() => {
              // @todo: ClickHandler 연결
            }}
          >
            <BookMarkIcon />
            {bookmark}
          </S.IconButton>
          <S.IconButton onClick={popupOpen}>
            <ShareIcon />
          </S.IconButton>
        </S.ControlBox>
        <S.YoutubeContainer>
          <Suspense
            fallback={<S.YoutubeFallback>로딩 중...</S.YoutubeFallback>}
          >
            <S.YoutubeIframe
              ref={youtubeRef}
              src={`https://www.youtube.com/embed/${videoId}?${queryString}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
            />
          </Suspense>
        </S.YoutubeContainer>
      </S.Container>
    </>
  );
}

export default ShortForm;
