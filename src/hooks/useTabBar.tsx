import { useEffect, useRef, useState } from "react";
import * as S from "../styles/common/TabBar.style";

interface Props {
  tabs: { id: number | string; name: string }[];
}
function useTabBar({ tabs }: Props) {
  const focusedTabIndexRef = useRef<number>(0);

  const TabBar = () => {
    const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);

    useEffect(() => {
      focusedTabIndexRef.current = focusedTabIndex;
    }, [focusedTabIndex]);

    return (
      <S.Container>
        <S.TabList>
          {tabs.map((tab, index) => (
            <S.TabItem
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
  };

  return { TabBar: TabBar, focusedTabIndex: focusedTabIndexRef.current };
}

export default useTabBar;
