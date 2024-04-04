import * as S from "./style";
import { useEffect, useRef, useState } from "react";
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
  const shortsListRef = useRef<HTMLDivElement>(null);
  const [shortforms, setShortforms] = useState<TShortForm[]>([{ id: 0 }]);
  const [focusIndex, setFocusindex] = useState<number>(0);
  const createCopyURL = (id: number) => {
    const arr = window.location.href.split("/").slice(0, -1);
    arr.push(String(id));
    return arr.join("/");
  };

  const { Modal, modalOpen } = useModal({
    title: "",
    handle: false,
    borderRadius: "16px",
  });
  const { Popup, popupOpen } = usePopup();

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

  return (
    <PageTemplate nav={<BottomNavBar style="black" />}>
      <S.Header>
        <BackButton />
        <S.IconButton>
          <KebabMenuIcon id="메뉴" />
        </S.IconButton>
      </S.Header>
      <Modal>
        <Comment id={shortforms[focusIndex].id} commentInputPosition="bottom" />
      </Modal>
      <Popup>
        <S.UrlLabel htmlFor="urlCopy">
          아래 링크를 복사해 공유해보세요!
        </S.UrlLabel>
        <S.UrlInput
          type="url"
          name="현재 링크 복사"
          id="urlCopy"
          value={createCopyURL(shortforms[focusIndex].id)}
          disabled
        />
      </Popup>
      <S.Container
        ref={shortsListRef}
        onScroll={(e) => {
          setFocusindex(
            Math.floor(
              shortsListRef.current.scrollTop / (e.target.clientHeight - 80)
            )
          );
        }}
      >
        {shortforms.map((item, index) => (
          <ShortForm
            {...item}
            modalOpen={modalOpen}
            popupOpen={popupOpen}
            visible={index === focusIndex}
          />
        ))}
      </S.Container>
    </PageTemplate>
  );
}

export default ShortFormPage;
