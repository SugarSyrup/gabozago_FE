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
import { get } from "../../../utils/api";
import { useParams } from "react-router-dom";

function ShortFormPage() {
  const { id } = useParams();
  const shortsListRef = useRef<HTMLDivElement>(null);
  const [shortforms, setShortforms] = useState<TShortForm[]>([]);
  const [focusIndex, setFocusindex] = useState<number>(0);

  const { Modal, modalOpen } = useModal({
    title: "",
    handle: false,
    borderRadius: "16px",
  });
  const { Popup, popupOpen } = usePopup();

  const createCopyURL = (id: number) => {
    const arr = window.location.href.split("/").slice(0, -1);
    arr.push(String(id));
    return arr.join("/");
  };
  const getShortformData = async (id: number) => {
    const { data } = await get<TShortForm>(`/community/short-form/${id}`);
    setShortforms((prev) => [...prev, data]);
  };
  const getShortformList = async () => {
    const { data } = await get<{
      next: string | null;
      previous: string | null;
      results: [
        {
          id: number;
          title: string;
          videoId: string;
          region: string[];
          theme: string[];
          views: number;
        }
      ];
    }>(`/community/short-form`);

    data.results.map(({ id }) => {
      getShortformData(id);
    });
  };

  useEffect(() => {
    getShortformData(Number(id));
    getShortformList();
    // @tood: 연관된 다른 숏폼 불러오기, 다 봤을 때 페이징
  }, []);

  return (
    <PageTemplate nav={<BottomNavBar style="black" />}>
      <S.Header>
        <BackButton />
        <S.IconButton>
          <KebabMenuIcon id="메뉴" />
        </S.IconButton>
      </S.Header>
      {shortforms.length > 0 && (
        <>
          <Modal>
            <Comment
              id={shortforms[focusIndex].id}
              commentInputPosition="bottom"
              type={"short-form"}
              commentCount={shortforms[focusIndex].commentCount}
            />
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
            {shortforms.map((shortform, index) => (
              <ShortForm
                {...shortform}
                modalOpen={modalOpen}
                popupOpen={popupOpen}
                visible={index === focusIndex}
              />
            ))}
          </S.Container>
        </>
      )}
    </PageTemplate>
  );
}

export default ShortFormPage;
