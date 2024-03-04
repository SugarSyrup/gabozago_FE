import {
  Dispatch,
  SetStateAction,
  createRef,
  useEffect,
  useState,
} from "react";
import * as S from "./style";

interface Props {
  tabs: { id: number | string; name: string }[];
  focusedTabIndex: number;
  setFocusedTabIndex: Dispatch<SetStateAction<number>>;
  widthStyle?: "fit-content" | "flexible" | undefined;
  fontSize?: string | "14px" | undefined;
}

function TabBar({
  tabs,
  focusedTabIndex,
  setFocusedTabIndex,
  widthStyle = "flexible",
  fontSize = "14px",
}: Props) {
  const tabRefs = tabs.map(() => createRef<HTMLLIElement>());
  const [highlightOption, setHighlightOption] = useState({
    x: 0,
    width: 0,
  });

  useEffect(() => {
    if (tabRefs[focusedTabIndex].current) {
      const { offsetLeft, offsetWidth } = tabRefs[focusedTabIndex].current;
      setHighlightOption({ x: offsetLeft, width: offsetWidth });
    }
  }, [focusedTabIndex]);

  return (
    <S.Container widthStyle={widthStyle}>
      <S.TabList widthStyle={widthStyle}>
        {tabs.map((tab, index) => (
          <S.TabItem
            key={tab.id}
            ref={tabRefs[index]}
            focused={index === focusedTabIndex}
            onClick={() => {
              setFocusedTabIndex(index);
            }}
            widthStyle={widthStyle}
            fontSize={fontSize}
          >
            {tab.name}
          </S.TabItem>
        ))}
      </S.TabList>
      <S.HighlightLine
        tabsLength={tabs.length}
        focus={focusedTabIndex}
        width={highlightOption.width}
        x={highlightOption.x}
      />
    </S.Container>
  );
}

export default TabBar;
