import { Dispatch, SetStateAction, createRef, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as S from './style';

interface Props {
  tabs: { id: number | string; name: string }[];
  focusedTabIndex: number;
  setFocusedTabIndex: Dispatch<SetStateAction<number>>;
  widthStyle?: 'fit-content' | 'flexible' | undefined;
  fontSize?: string | undefined;
  color?: string | undefined;
}

function TabBar({
  tabs,
  focusedTabIndex,
  setFocusedTabIndex,
  widthStyle = 'flexible',
  fontSize = '14px',
  color = 'default',
}: Props) {
  const [query, setQuery] = useSearchParams();
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
            onClick={() => {
              setFocusedTabIndex(index);
              query.set('tab', String(index));
              setQuery(query);
            }}
            focused={index === focusedTabIndex}
            widthStyle={widthStyle}
            fontSize={fontSize}
            color={color}
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
