import React from 'react';
import * as S from './style';
import { ButtonsOptions } from '../../../../assets/types/FilterTypes';

export interface Props extends ButtonsOptions {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
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
      {options.map(({ label, value }) => (
        <S.Item checked={filter.includes(value)}>
          <S.CheckboxInput
            type="checkbox"
            id={value}
            checked={filter.includes(value)}
            onChange={() => {
              toggleItem(value);
            }}
          />
          <label htmlFor={value}>{label}</label>
        </S.Item>
      ))}
    </S.List>
  );
}

export default Buttons;
