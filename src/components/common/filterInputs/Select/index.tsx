import React from "react";
import * as S from "./style";

export interface Props {
  filter: string[] | string;
  setFilter: React.Dispatch<React.SetStateAction<string[] | string>>;
  options: string[];
  defaultSelected?: string[];
  multiple?: boolean;
}
function Select({ filter, setFilter, options, multiple = false }: Props) {
  const toggleItem = (item: string) => {
    if (filter.includes(item)) {
      setFilter(filter.filter((i) => i !== item));
    } else {
      setFilter((prev) => [...prev, item]);
    }
  };

  return (
    <S.List>
      {options.map((item) => (
        <S.Item checked={filter.includes(item)}>
          <S.CheckboxInput
            type={"checkbox"}
            id={item}
            checked={multiple ? filter.includes(item) : filter === item}
            onChange={() => {
              if (multiple) {
                toggleItem(item);
              } else {
                setFilter(item);
              }
            }}
          />
          <label htmlFor={item}>{item}</label>
        </S.Item>
      ))}
    </S.List>
  );
}

export default Select;
