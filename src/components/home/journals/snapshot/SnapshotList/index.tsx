import * as S from "./style";
import { useNavigate } from "react-router-dom";

import KebabMenuIcon from "../../../../../assets/icons/menu_kebab.svg?react";
import userIcon from "../../../../../assets/icons/user.svg";
import ClapIcon from "../../../../../assets/icons/clap.svg?react";
import CommentIcon from "../../../../../assets/icons/comment.svg?react";

interface Props {
  data: {
    id: number;
    title: string;
    location: string;
    createdAt: string;
    userid: string;
    username: string;
    profileImage: string;
    images: string[];
    text: string;
    like: number;
    bookmark: number;
    commentCount: number;
  }[];
}

function SnapshotList({ data }: Props) {
  const navigate = useNavigate();

  return (
    <S.List>
      {data.map(
        ({
          id,
          profileImage,
          username,
          userid,
          createdAt,
          text,
          images,
          like,
          commentCount,
        }) => (
          <S.ListItem>
            <S.Container>
              <S.TopInfoBox>
                <S.ProfileImage
                  src={profileImage ? profileImage : userIcon}
                  onClick={() => {
                    navigate(`/profile/${userid}`);
                  }}
                />

                <div>
                  <p>{username}</p>
                  <p>{createdAt}</p>
                </div>
                <S.MenuButton>
                  <KebabMenuIcon />
                </S.MenuButton>
              </S.TopInfoBox>
              <S.ContentsBox
                onClick={() => {
                  navigate(`/journal/snapshot/${id}`);
                }}
              >
                <p>{text}</p>
                <S.ImageList>
                  {images.map((item) => (
                    <S.ImageItem>
                      <S.Image src={item} alt="" />
                    </S.ImageItem>
                  ))}
                </S.ImageList>
                <S.BottomInfoBox>
                  <S.InfoItem>
                    <ClapIcon />
                    {like}
                  </S.InfoItem>
                  <S.InfoItem>
                    <CommentIcon />
                    {commentCount}
                  </S.InfoItem>
                </S.BottomInfoBox>
              </S.ContentsBox>
            </S.Container>
          </S.ListItem>
        )
      )}
    </S.List>
  );
}

export default SnapshotList;
