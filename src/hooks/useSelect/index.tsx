import { useState } from 'react';
import * as S from './style';

export interface Props<T> {
  options: T[];
  defaultSelected?: string[];
  multiple?: boolean;
}

function useSelect<T>() {
  const [selectedIndex, setSelectedIndex] = useState<number[]>([]);

  function Select({ options, multiple = false }: Props<T>) {
    const toggleItem = (index: number) => {
      if (selectedIndex.includes(index)) {
        setSelectedIndex(selectedIndex.filter((i) => i !== index));
      } else {
        setSelectedIndex((prev) => [...prev, index]);
      }
    };

    return (
      <S.List>
        {options.map((item, index) => (
          <S.Item key={`select-${index}`} checked={selectedIndex.includes(index)}>
            <S.CheckboxInput
              type="checkbox"
              id={`select-input-${index}`}
              checked={selectedIndex.includes(index)}
              onChange={() => {
                if (multiple) {
                  toggleItem(index);
                } else {
                  setSelectedIndex([index]);
                }
              }}
            />
            <label htmlFor={`select-input-${index}`}>{item}</label>
          </S.Item>
        ))}
      </S.List>
    );
  }

  return { Select, selectedIndex };
}

export default useSelect;
