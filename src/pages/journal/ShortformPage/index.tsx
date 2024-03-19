import * as S from "./style";
import { WheelEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PageTemplate from "../../../components/common/PageTemplate";
import ShortForm, {
  TShortForm,
} from "../../../components/home/journals/shortform/ShortForm";
import BackButton from "../../../components/common/BackButton";
import KebabMenuIcon from "../../../assets/icons/menu_kebab.svg?react";
import BottomNavBar from "../../../components/common/BottomNavBar";
import useModal from "../../../hooks/useModal";
import usePopup from "../../../hooks/usePopup";
import Comment from "../../../components/journal/Comment";

function ShortFormPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const id: number = Number(pathname.split("/").pop()); // 마지막 path === id

  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [shortforms, setShortforms] = useState<TShortForm[]>([]);

  const { Modal, modalOpen } = useModal({
    title: "",
    handle: false,
    borderRadius: "16px",
  });
  const { Popup, popupOpen } = usePopup();

  const onWheel = (e: WheelEvent<HTMLElement>) => {
    console.dir(e);
    e.stopPropagation();
    const wheelDirection = e.deltaY > 0 ? "UP" : "DOWN";
    alert("scroll" + wheelDirection);

    if (wheelDirection === "UP") {
      if (focusedIndex > 0) {
        setFocusedIndex((prev) => prev - 1);
      }
    } else {
      setFocusedIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    // 숏폼 정보 불러오기
    return setShortforms([
      {
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
      },
      {
        id: 2,
        title: "15초 여수 맛집투어 정리!",
        location: "여수",
        createdAt: "2024-02-13",
        thumbnail: "https://placehold.co/400x600",
        videoId: "NYpeVCtjvmI", // 숏폼 url
        userid: "choiminshuk",
        username: "최민석",
        profileImage: "https://placehold.co/400x600",
        like: 1,
        bookmark: 1,
        commentCount: 1,
      },
      {
        id: 3,
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
      },
    ] as TShortForm[]);
  }, []);

  useEffect(() => {
    console.log("focusedIndex: ", focusedIndex);
    if (shortforms.length !== 0) {
      navigate(`/journals/shorform/${shortforms[focusedIndex].id}`, {
        replace: true,
      });
    }
  }, [focusedIndex]);

  return (
    <PageTemplate nav={<BottomNavBar style="black" />}>
      <S.Header>
        <BackButton />
        <S.IconButton>
          <KebabMenuIcon id="메뉴" />
        </S.IconButton>
      </S.Header>
      <Modal>
        <Comment id={id} commentInputPosition="bottom" />
      </Modal>
      <Popup>
        <S.UrlLabel htmlFor="urlCopy">
          아래 링크를 복사해 공유해보세요!
        </S.UrlLabel>
        <S.UrlInput
          type="url"
          name="현재 링크 복사"
          id="urlCopy"
          value={window.location.href}
          disabled
        />
      </Popup>
      <S.Container onWheel={onWheel} onWheelCapture={onWheel}>
        {shortforms.map((item) => (
          <ShortForm {...item} modalOpen={modalOpen} popupOpen={popupOpen} />
        ))}
      </S.Container>
    </PageTemplate>
  );
}

export default ShortFormPage;
