import { useState } from "react";
import * as S from "./style";

interface Props {
  tabNames: string[];
  tabWidth: string;
}

function TabBar({ tabNames }: Props) {
  const [focusedTabId, setFocusedTabId] = useState<number>(0);
  const tabs = tabNames.map((name, index) => ({
    id: index,
    name: name,
  }));

  return (
    <S.Container>
      <S.TabList>
        {tabs.map((tab) => (
          <S.TabItem
            focused={tab.id === focusedTabId}
            onClick={() => {
              setFocusedTabId(tab.id);
            }}
          >
            {tab.name}
          </S.TabItem>
        ))}
      </S.TabList>
      <S.HighlightLine tabsLength={tabs.length} focus={focusedTabId} />
    </S.Container>
  );
}

export default TabBar;
