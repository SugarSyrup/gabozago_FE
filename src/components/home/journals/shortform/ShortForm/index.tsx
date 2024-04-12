import * as S from "./style";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { Suspense, useEffect, useRef } from "react";
import FollowBtn from "../../../../common/FollowBtn";
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
  visible: boolean;
  modalOpen: () => void;
  popupOpen: () => void;
}

function ShortForm({
  id,
  title,
  location,
  videoId,
  userid,
  username,
  profileImage,
  like,
  bookmark,
  commentCount,
  visible,
  modalOpen,
  popupOpen,
}: TShortForm) {
  // @todo: 유저정보에서 좋아요 정보 가져와 비교 => 좋아요 활성화/비활성화 관리
  // @todo: 스크랩 데이터에서 스크랩됐는지 비교 => 북마크 활성화/비활성화 관리
  const playerRef = useRef<YouTube>(null);
  const opts = {
    autoplay: 1,
    controls: 0,
    showInfo: 0,
    rel: 0,
    modestbranding: 0,
    loop: 1,
    autohide: 1,
    playlist: videoId,
  };
  const videoPlayControl = () => {
    const player = playerRef.current?.getInternalPlayer();
    if (visible) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  };

  useEffect(() => {
    videoPlayControl();
  }, [visible]);

  return (
    <>
      <S.Container
        onScroll={() => {
          console.log("scroll");
        }}
      >
        <S.YoutubeContainer>
          <Suspense
            fallback={<S.YoutubeFallback>로딩 중...</S.YoutubeFallback>}
          >
            <YouTube
              videoId={videoId}
              ref={playerRef}
              loading="lazy"
              opts={{
                width: "100%",
                height: "888px",
                playerVars: opts,
              }}
              onEnd={() => {
                playerRef.current?.resetPlayer();
              }}
              onReady={() => {
                const player = playerRef.current?.getInternalPlayer();
                player.setVolume(40);

                videoPlayControl();
              }}
            />
          </Suspense>
        </S.YoutubeContainer>
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
      </S.Container>
    </>
  );
}

export default ShortForm;
