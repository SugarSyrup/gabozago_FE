import * as S from "./style";
import PageTemplate from "../../../components/common/PageTemplate";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TSnapshot } from "../../../components/home/journals/snapshot/SnapshotList";
import { snapshots } from "../../../components/home/journals/Journals";
import BackButton from "../../../components/common/BackButton";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import userIcon from "../../../assets/icons/user.svg";
import ClapIcon from "../../../assets/icons/clap.svg?react";
import CommentIcon from "../../../assets/icons/comment.svg?react";
import Comment from "../../../components/journal/Comment";
import FollowBtn from "../../../components/common/FollowBtn";

function SnapshotPage() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const id = Number(pathname.split("/")[pathname.split("/").length - 1]);
  const [data, setData] = useState<TSnapshot>(snapshots[0]);

  useEffect(() => {
    // 스냅샷 정보 불러오기
    console.log(id);
  }, [pathname, id]);
  return (
    <PageTemplate nav={false}>
      <S.Header>
        <BackButton />
        <S.IconButton>
          <KebabMenuIcon id="메뉴" />
        </S.IconButton>
      </S.Header>
      <S.ContentsContainer>
        <S.CarouselContainer>
          {data.images.map((item) => (
            <S.Image src={item} alt="" />
          ))}
        </S.CarouselContainer>
        <S.InfoContainer>
          <S.TopInfoBox>
            <S.ProfileBox>
              <S.ProfileImage
                src={data.profileImage ? data.profileImage : userIcon}
                onClick={() => {
                  navigate(`/profile/${data.userid}`);
                }}
              />
              <div>
                <p>{data.username}</p>
                <p>{data.createdAt}</p>
              </div>
            </S.ProfileBox>
            <FollowBtn isFollowing={false} />
          </S.TopInfoBox>
          <S.ContentsBox>
            <p>{data.text}</p>
            <S.BottomInfoBox>
              <S.InfoItem>
                <ClapIcon />
                {data.like}
              </S.InfoItem>
              <S.InfoItem>
                <CommentIcon />
                {data.commentCount}
              </S.InfoItem>
            </S.BottomInfoBox>
          </S.ContentsBox>
        </S.InfoContainer>
        <Comment id={id} commentInputPosition="top" />
      </S.ContentsContainer>
    </PageTemplate>
  );
}

export default SnapshotPage;
