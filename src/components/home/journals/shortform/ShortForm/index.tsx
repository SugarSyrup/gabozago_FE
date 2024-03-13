import * as S from "./style";
import { useRef } from "react";

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
  rel: 0;
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
    modestbranding: 1,
    fs: 0,
    playsinline: 0,
  };
  const queryString = Object.entries(opts)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  setTimeout(() => {
    youtubeRef.current?.click();
    console.dir(youtubeRef.current);
  }, 1000);

  return (
    <S.Container>
      <S.YoutubeContainer>
        <S.YoutubeIframe
          ref={youtubeRef}
          src={`https://www.youtube.com/embed/${videoId}?${queryString}`}
          loading="lazy"
          allowFullScreen={false}
          allow="autoplay"
        />
      </S.YoutubeContainer>
    </S.Container>
  );
}

export default ShortForm;
