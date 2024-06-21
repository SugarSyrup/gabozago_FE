import * as S from "./style";
import { useEffect, useRef, useState } from "react";
import PageTemplate from "../../../components/common/PageTemplate";
import BackButton from "../../../components/common/BackButton";
import BottomNavBar from "../../../components/common/BottomNavBar";
import { get } from "../../../utils/api";
import ShortForm from "../../../components/home/journals/shortform/ShortForm";
import { useParams } from "react-router-dom";

function ShortFormPage() {
  const {id} = useParams<{id: string}>();
  const shortsListRef = useRef<HTMLDivElement>(null);
  const [shortforms, setShortforms] = useState<{
    id: number;
    title: string;
    videoId: string;
    region: string[];
    theme: string[];
    views: number;
  }[]>([]);
  const [focusIndex, setFocusindex] = useState<number>(0);

  //숏폼 리스트 불러오는 Fn
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

    setShortforms([]);
    let currentIdx  = 0;
    data.results.map((shorform, idx) => {
      const { id: shortformId } = shorform;
      if(shortformId !== Number(id)) {
        setShortforms(prev => [...prev, {...shorform}]);
      }
      else {
        currentIdx = idx;
      }
    });
    setShortforms(prev => prev.sort(() => Math.random() - 0.5));
    setShortforms(prev => [{...data.results[currentIdx]}, ...prev]);
  };
  useEffect(() => {
    getShortformList();
    // @tood: 연관된 다른 숏폼 불러오기, 다 봤을 때 페이징
  }, []);

  return (
    <PageTemplate nav={<BottomNavBar style="black" />}>
      <S.Header>
        <BackButton />
        {/* @todo: 추후 사용자가 숏폼 업로드 가능할 때 메뉴 구현 */}
        {/* <S.IconButton>
          <KebabMenuIcon id="메뉴" />
        </S.IconButton> */}
      </S.Header>
      {shortforms.length > 0 && (
        <>
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
                shortFormId={shortform.id}
                videoId={shortform.videoId}
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
