import React from 'react';
import * as S from './style';
import { ButtonsOptions } from '../../../../assets/types/FilterTypes';
import eventPush from '@_utils/GA4EventPush';
import ThemeIcon from '@_common/ThemeIcon';
import themeSwiftCode from '@_utils/themeSwiftCode';

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
        <S.Item
          checked={filter.includes(value)}
          key={label}
          onClick={() => {
            eventPush(`필터링.테마.${label}`);
          }}
        >
          <S.CheckboxInput
            type="checkbox"
            id={value}
            checked={filter.includes(value)}
            onChange={() => {
              toggleItem(value);
            }}
          />
          <label htmlFor={value}>
            <ThemeIcon
              id={themeSwiftCode(label)}
              width={20}
              height={20}
              color={filter.includes(value) ? 'white' : '#94ABFF'}
            />
            {label}
          </label>
        </S.Item>
      ))}
    </S.List>
  );
}

export default Buttons;
