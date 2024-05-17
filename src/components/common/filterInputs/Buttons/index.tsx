import React from "react";
import * as S from "./style";

export interface Props {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
  options: string[];
}
function Buttons({ filter, setFilter, options }: Props) {
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
            checked={filter.includes(item)}
            onChange={() => {
              toggleItem(item);
            }}
          />
          <label htmlFor={item}>{item}</label>
        </S.Item>
      ))}
    </S.List>
  );
}

export default Buttons;
