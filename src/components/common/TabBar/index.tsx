import { Dispatch, SetStateAction } from "react";
import * as S from "./style";

interface Props {
  tabs: { id: number | string; name: string }[];
  focusedTabIndex: number;
  setFocusedTabIndex: Dispatch<SetStateAction<number>>;
}

function TabBar({ tabs, focusedTabIndex, setFocusedTabIndex }: Props) {
  return (
    <S.Container>
      <S.TabList>
        {tabs.map((tab, index) => (
          <S.TabItem
            key={tab.id}
            focused={index === focusedTabIndex}
            onClick={() => {
              setFocusedTabIndex(index);
            }}
          >
            {tab.name}
          </S.TabItem>
        ))}
      </S.TabList>
      <S.HighlightLine tabsLength={tabs.length} focus={focusedTabIndex} />
    </S.Container>
  );
}

export default TabBar;
