import * as S from "./style";

export interface TShortForm {
  id: number;
  title: string;
  location: string;
  createdAt: string;
  thumbnail: string;
  video: string;
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
  video,
  userid,
  username,
  profileImage,
  like,
  bookmark,
  commentCount,
}: Props) {
  return <div></div>;
}

export default ShortForm;
