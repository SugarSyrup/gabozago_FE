import * as S from "./style";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../../../components/common/PageTemplate";
import ShortForm, {
  TShortForm,
} from "../../../components/home/journals/shortform/ShortForm";
import BackButton from "../../../components/common/BackButton";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";

function ShortFormPage() {
  const { pathname } = useLocation();
  const id: number = Number(pathname.split("/").pop()); // 마지막 path === id
  const [data, setData] = useState<TShortForm>();

  useEffect(() => {
    // id에 맞는 숏폼 정보 불러오기
    setData({
      id: 1,
      title: "15초 여수 맛집투어 정리!",
      location: "여수",
      createdAt: "2024-02-13",
      thumbnail: "https://placehold.co/400x600",
      videoId: "8Ka1IaC9akw", // 숏폼 url
      userid: "choiminshuk",
      username: "최민석",
      profileImage: "https://placehold.co/400x600",
      like: 1,
      bookmark: 1,
      commentCount: 1,
    });
  }, []);

  return (
    <PageTemplate>
      <S.Header>
        <BackButton />
        <S.IconButton>
          <KebabMenuIcon id="메뉴" />
        </S.IconButton>
      </S.Header>
      <S.Container>
        <ShortForm {...data} />
      </S.Container>
    </PageTemplate>
  );
}

export default ShortFormPage;
