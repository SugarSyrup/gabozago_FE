import { useState } from "react";
import * as S from "./style";
import PageTemplate from "../../../components/common/PageTemplate";
import TabBar from "../../../components/common/TabBar";
import SearchIcon from "../../../assets/icons/search.svg?react";
import Journals from "../../../components/home/journals/Journals";

function HomePage() {
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const tabs = [
    { id: "추천", name: "추천", content: <>추천</> },
    { id: "큐레이팅", name: "큐레이팅", content: <>큐레이팅</> },
    { id: "후기", name: "후기", content: <Journals /> },
  ];

  return (
    <PageTemplate>
      <S.Header>
        <TabBar
          tabs={tabs}
          focusedTabIndex={focusedTabIndex}
          setFocusedTabIndex={setFocusedTabIndex}
          widthStyle="fit-content"
          fontSize="20px"
          color="#424242"
        />
        <S.SearchButton
          onClick={() => {
            alert("검색");
          }}
        >
          <SearchIcon />
        </S.SearchButton>
      </S.Header>
      <S.ContentBox>{tabs[focusedTabIndex].content}</S.ContentBox>
    </PageTemplate>
  );
}

export default HomePage;
