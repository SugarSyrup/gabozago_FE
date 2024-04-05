import * as S from "./style";
import PageTemplate from "../../../components/common/PageTemplate";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TSnapshot } from "../../../components/home/journals/snapshot/SnapshotList";
import { snapshots } from "../../../components/home/journals/Journals";
import BackButton from "../../../components/common/BackButton";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import Comment from "../../../components/journal/Comment";

function SnapshotPage() {
  const { pathname } = useLocation();
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
        <S.InfoContainer>본문 영역</S.InfoContainer>
        <Comment id={id} commentInputPosition="top" />
      </S.ContentsContainer>
    </PageTemplate>
  );
}

export default SnapshotPage;
