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
        <S.IconButton
          onClick={() => {
            // @todo: ClickHandler 연결
          }}
        >
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
        <S.IconButton
          onClick={() => {
            // @todo: ClickHandler 연결
          }}
        >
          <ShareIcon />
        </S.IconButton>
      </S.ControlBox>
      <S.YoutubeContainer>
        <Suspense fallback={<S.YoutubeFallback>로딩 중...</S.YoutubeFallback>}>
          <S.YoutubeIframe
            ref={youtubeRef}
            src={`https://www.youtube.com/embed/${videoId}?${queryString}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            loading="lazy"
          />
        </Suspense>
      </S.YoutubeContainer>
    </S.Container>
  );
}

export default ShortForm;
