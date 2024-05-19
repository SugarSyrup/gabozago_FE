import * as S from "./style";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import UserIcon from "../../../../../assets/icons/user.svg?react";
import LocationIcon from "../../../../../assets/icons/location.svg?react";
import ThemeIcon from "../../../../../assets/icons/theme.svg?react";
import BookMarkIcon from "../../../../../assets/icons/bookmark.svg?react";
import FilledBookMarkIcon from "../../../../../assets/icons/bookmark_filled_white.svg?react";
import CommentIcon from "../../../../../assets/icons/comment.svg?react";
import LikeIcon from "../../../../../assets/icons/clap.svg?react";
import FilledLikeIcon from "../../../../../assets/icons/clap_blue.svg?react";
import PlaceIcon from "../../../../../assets/icons/place.svg?react";
import ShareIcon from "../../../../../assets/icons/share.svg?react";
import { post } from "../../../../../utils/api";
import useModal from "../../../../../hooks/useModal";

export interface TShortForm {
  id: number;
  title: string;
  location: string[];
  theme: string[];
  place: string[];
  createdAt: string;
  videoId: string;
  content: string;
  userid: string;
  username: string;
  profileImage: string;
  clap: number;
  isClapped: boolean;
  bookmark: number;
  isBookmarked: boolean;
  commentCount: number;
}

export interface Props extends TShortForm {
  visible: boolean;
  modalOpen: () => void;
  popupOpen: () => void;
}

function ShortForm({
  id,
  title,
  location,
  theme,
  videoId,
  userid,
  username,
  profileImage,
  content,
  clap: defaultClap,
  isClapped: defaultIsClapped,
  bookmark: defaultBookmark,
  isBookmarked: defaultIsBookmarked,
  commentCount,
  visible,
  modalOpen,
  popupOpen,
}: Props) {
  // @todo: 유저정보에서 좋아요 정보 가져와 비교 => 좋아요 활성화/비활성화 관리
  // @todo: 스크랩 데이터에서 스크랩됐는지 비교 => 북마크 활성화/비활성화 관리
  const [clap, setClap] = useState<{
    count: number;
    isActive: boolean;
  }>({ count: defaultClap, isActive: defaultIsClapped });
  const [bookmark, setBookmark] = useState<{
    count: number;
    isActive: boolean;
  }>({ count: defaultBookmark, isActive: defaultIsBookmarked });
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YouTube>(null);
  const playerOpts = {
    autoplay: 1,
    controls: 0,
    showInfo: 0,
    rel: 0,
    modestbranding: 0,
    loop: 1,
    autohide: 1,
    playlist: videoId,
  };
  const [isContentOpened, setIsContentOpened] = useState<boolean>(false);
  const {
    Modal: PlacesModal,
    modalOpen: placesModalOpen,
    modalClose: placesModalClose,
  } = useModal({
    title: "",
    handle: true,
  });
  const {
    Modal: ScrapModal,
    modalOpen: scrapModalOpen,
    modalClose: scrapModalClose,
  } = useModal({
    title: "",
    handle: true,
  });

  const toggleClap = async () => {
    post<{ community: string; postId: number }>("/clap/community", {
      community: "short-form",
      postId: id,
    });
    if (clap.isActive) {
      setClap((prev) => ({ count: prev.count - 1, isActive: false }));
    } else {
      setClap((prev) => ({ count: prev.count + 1, isActive: true }));
    }
  };
  const toggleBookmark = async (scrapFolderId: number | null = null) => {
    post<{ community: string; postId: number; scrapFolderId: number | null }>(
      "/folder/scrap/community",
      {
        community: "short-form",
        postId: id,
        scrapFolderId: scrapFolderId,
      }
    );
    if (bookmark.isActive) {
      setBookmark((prev) => ({ count: prev.count - 1, isActive: false }));
    } else {
      setBookmark((prev) => ({ count: prev.count + 1, isActive: true }));
    }
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

  useEffect(() => {
    const { current: container } = containerRef;
    playerRef.current
      ?.getInternalPlayer()
      .setSize("100%", container?.offsetHeight);
  }, []);

  return (
    <>
      <PlacesModal>장소 모달</PlacesModal>
      <ScrapModal>스크랩 모달</ScrapModal>
      <S.Container
        onScroll={() => {
          console.log("scroll");
        }}
      >
        <S.YoutubeContainer ref={containerRef}>
          <Suspense
            fallback={<S.YoutubeFallback>로딩 중...</S.YoutubeFallback>}
          >
            <YouTube
              videoId={videoId}
              ref={playerRef}
              loading="lazy"
              opts={{
                width: "100%",
                height: "100px",
                playerVars: playerOpts,
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
          </p>
          <p>{title}</p>
          <S.ContentBox
            isOpened={isContentOpened}
            onClick={() => {
              setIsContentOpened((prev) => !prev);
            }}
          >
            {content.split("\n").map((line) => (
              <p>{line}</p>
            ))}
          </S.ContentBox>
          <S.BottomInfoContainer>
            <span>
              <LocationIcon />
              {location}
            </span>
            {theme.length > 0 && (
              <span>
                <ThemeIcon />
                {theme.join(", ")}
              </span>
            )}
          </S.BottomInfoContainer>
        </S.InfoBox>
        <S.ControlBox>
          <S.IconButton onClick={toggleClap}>
            {clap.isActive ? <FilledLikeIcon /> : <LikeIcon />}
            {clap.count}
          </S.IconButton>
          <S.IconButton onClick={modalOpen}>
            <CommentIcon />
            {commentCount}
          </S.IconButton>
          <S.IconButton
            onClick={(e) => {
              e.preventDefault();
              toggleBookmark();
              scrapModalOpen();
            }}
          >
            {bookmark.isActive ? <FilledBookMarkIcon /> : <BookMarkIcon />}
            {bookmark.count}
          </S.IconButton>
          <S.IconButton onClick={placesModalOpen}>
            <PlaceIcon />
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
