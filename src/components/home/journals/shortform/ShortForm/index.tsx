import * as S from "./style";
import YouTube from "react-youtube";
import { Link, useNavigate } from "react-router-dom";
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
import { get, post } from "../../../../../utils/api";
import useModal from "../../../../../hooks/useModal";
import useScrapModal from "../../../../video/useScrapModal";
import PlacesModalContents from "../PlacesModalContents";
import useAlert from "../../../../../hooks/useAlert";
import Typography from "../../../../common/Typography";
import usePopup from "../../../../../hooks/usePopup";
import Comment from "../../../../journal/Comment";

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

export interface Props {
  shortFormId: number;
  visible: boolean;
  videoId: string;
}

function ShortForm({ shortFormId, visible, videoId }: Props) {
  const [data, setData] = useState<TShortForm>();
  // @todo: 스크랩 데이터에서 스크랩됐는지 비교 => 북마크 활성화/비활성화 관리
  const [clap, setClap] = useState<{
    count: number;
    isActive: boolean;
  }>({ count: 0, isActive: false });
  const [bookmark, setBookmark] = useState<{
    count: number;
    isActive: boolean;
  }>({ count: 0, isActive: false });

  const containerRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const contentContainerRef = useRef<HTMLParagraphElement>(null);
  const playerRef = useRef<YouTube>(null);
  const [isContentOpened, setIsContentOpened] = useState<boolean>(false);
  const { Modal: PlacesModal, modalOpen: placesModalOpen } = useModal({
    title: "태그된 장소",
    handle: true,
  });
  const { ScrapModal, scrapModalOpen } = useScrapModal({
    id: shortFormId,
    type: "short-form",
    setIsScraped: () => {
      setBookmark((prev) => ({
        count: prev.isActive ? prev.count - 1 : prev.count + 1,
        isActive: !prev.isActive,
      }));
    },
  });
  const navigate = useNavigate();
  const { Alert: LoginALlert, alertOpen: loginAlertOpen } = useAlert({
    Content: (
      <Typography.Body size="lg" color="white">
        로그인이 필요한 서비스에요.
      </Typography.Body>
    ),
    RightContent: (
      <Typography.Body size="lg" color="white">
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인 하러가기
        </span>
      </Typography.Body>
    ),
  });

  const toggleClap = async () => {
    post<{ community: string; postId: number }>("/clap/community", {
      community: "short-form",
      postId: shortFormId,
    });
    if (clap.isActive) {
      setClap((prev) => ({ count: prev.count - 1, isActive: false }));
    } else {
      setClap((prev) => ({ count: prev.count + 1, isActive: true }));
    }
  };

  const videoPlayControl = () => {
    if (playerRef.current === null) return;
    const player = playerRef.current?.getInternalPlayer();
    if (visible) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  };

  const { Modal, modalOpen } = useModal({
    title: "",
    handle: false,
    borderRadius: "16px",
  });
  const { Popup, popupOpen, popupClose } = usePopup();
  const { Alert: UrlAlert, alertOpen: urlAlertOpen } = useAlert({
    Content: (
      <Typography.Title size="md" color="white">
        URL이 복사되었습니다.
      </Typography.Title>
    ),
  });

  const createCopyURL = (id: number) => {
    const arr = window.location.href.split("/").slice(0, -1);
    arr.push(String(id));
    return arr.join("/");
  };

  useEffect(() => {
    videoPlayControl();
  }, [visible]);

  useEffect(() => {
    if (!isContentOpened && contentContainerRef.current !== null) {
      contentContainerRef.current.scrollTop = 0;
    }
  }, [isContentOpened]);

  useEffect(() => {
    const { current: container } = containerRef;
    playerRef.current
      ?.getInternalPlayer()
      .setSize("100%", container?.offsetHeight);
  }, [data]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fetchData = async () => {
            const { data } = await get<TShortForm>(
              `/community/short-form/${shortFormId}`
            );
            setData(data);
            setClap({ count: data.clap, isActive: data.isClapped });
            setBookmark({ count: data.bookmark, isActive: data.isBookmarked });
          };
          fetchData();
        }
      });
    }, options);

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {data && (
        <>
          <LoginALlert />
          <UrlAlert />
          <PlacesModal>
            <PlacesModalContents id={shortFormId} />
          </PlacesModal>

          <Modal>
            <Comment
              id={shortFormId}
              commentInputPosition="bottom"
              type={"short-form"}
              commentCount={data.commentCount}
            />
          </Modal>
          <Popup>
            <S.UrlLabel htmlFor="urlCopy">
              <Typography.Title size="md">
                아래 링크를 복사해 공유해보세요!
              </Typography.Title>
            </S.UrlLabel>
            <S.UrlInput
              type="url"
              name="현재 링크 복사"
              id="urlCopy"
              value={createCopyURL(shortFormId)}
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(
                  `${data.title}\n${createCopyURL(shortFormId)}`
                );
                urlAlertOpen();
                popupClose();
              }}
            />
          </Popup>
          <ScrapModal />
          <S.Container>
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
                    playerVars: {
                      autoplay: 1,
                      controls: 0,
                      showInfo: 0,
                      rel: 0,
                      modestbranding: 0,
                      loop: 1,
                      autohide: 1,
                      playlist: videoId,
                    },
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
                <S.ProgileImageBox>
                  {data.profileImage ? (
                    <img src={data.profileImage} alt="" />
                  ) : (
                    <UserIcon />
                  )}
                </S.ProgileImageBox>
                <span>
                  <Typography.Body size="lg" color="white">
                    {data.username}
                  </Typography.Body>
                </span>
              </p>
              <p>{data.title}</p>
              <S.ContentBox
                ref={contentContainerRef}
                isOpened={isContentOpened}
                onClick={() => {
                  setIsContentOpened((prev) => !prev);
                }}
              >
                {isContentOpened ? (
                  data.content.split("\n").map((line) => <p>{line}</p>)
                ) : (
                  <p>{data.content.split("\n")[0]}</p>
                )}

              </S.ContentBox>
              <S.BottomInfoContainer>
                <span>
                  <LocationIcon />
                  {data.location}
                </span>
                {data.theme.length > 0 && (
                  <span>
                    <ThemeIcon />
                    {data.theme.join(", ")}
                  </span>
                )}
              </S.BottomInfoContainer>
            </S.InfoBox>
            <S.ControlBox>
              <S.IconButton
                onClick={() => {
                  if (localStorage.getItem("access_token")) {
                    toggleClap();
                  } else {
                    loginAlertOpen();
                  }
                }}
              >
                {clap.isActive ? <FilledLikeIcon /> : <LikeIcon />}
                {clap.count}
              </S.IconButton>
              <S.IconButton
                onClick={() => {
                  if (localStorage.getItem("access_token")) {
                    modalOpen();
                  } else {
                    loginAlertOpen();
                  }
                }}
              >
                <CommentIcon />
                {data.commentCount}
              </S.IconButton>
              <S.IconButton
                onClick={(e) => {
                  e.preventDefault();
                  if (localStorage.getItem("access_token")) {
                    if (!bookmark.isActive) {
                      post<{ message: "Create Success" | "Delete Success" }>(
                        `/folder/scrap/community`,
                        {
                          community: "short-form",
                          postId: shortFormId,
                        }
                      ).then(() => {
                        setBookmark((prev) => ({
                          count: prev.count + 1,
                          isActive: true,
                        }));
                      });
                    }
                    scrapModalOpen();
                  } else {
                    loginAlertOpen();
                  }
                }}
              >
                {bookmark.isActive ? <FilledBookMarkIcon /> : <BookMarkIcon />}
                {bookmark.count}
              </S.IconButton>
              <S.IconButton
                onClick={() => {
                  if (localStorage.getItem("access_token")) {
                    placesModalOpen();
                  } else {
                    loginAlertOpen();
                  }
                }}
              >
                <PlaceIcon />
              </S.IconButton>
              <S.IconButton onClick={popupOpen}>
                <ShareIcon />
              </S.IconButton>
            </S.ControlBox>
          </S.Container>
        </>
      )}
      {!data && <div ref={loadingRef} style={{ height: "100dvh" }}></div>}
    </>
  );
}

export default ShortForm;
