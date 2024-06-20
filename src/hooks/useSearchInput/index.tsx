import React, { useState, useRef, useCallback, useEffect } from 'react';

import * as S from './style';
import SearchIcon from '../../assets/icons/search.svg?react';
import CircleXIcon from '../../assets/icons/circleX.svg?react';

interface Props {
  placeholder?: string;
  required?: boolean;
  onSubmit?: React.FormEventHandler;
  onChange?: () => void;
  backgroundColor: string;
  borderColor: string;
}

function useSearchInput({
  placeholder,
  required,
  onSubmit,
  onChange,
  backgroundColor,
  borderColor,
}: Props): [React.RefObject<HTMLInputElement>, () => JSX.Element] {
  const inputRef = useRef<HTMLInputElement>(null);

  const SearchInput = useCallback(() => {
    const [hasValue, setHasValue] = useState(false);

    return (
      <S.Container onSubmit={onSubmit} backgroundColor={backgroundColor} borderColor={borderColor}>
        <S.Input
          placeholder={placeholder}
          required={required}
          ref={inputRef}
          id="searchInput"
          placeholderColor="#A6A6A6"
          onChange={(e) => {
            if (e.currentTarget.value == '') {
              setHasValue(false);
            } else {
              setHasValue(true);
            }

            if (onChange) {
              onChange();
            }
          }}
        />
        <S.Btns>
          {hasValue && (
            <CircleXIcon
              className="circleX"
              onClick={() => {
                if (inputRef.current) {
                  inputRef.current.value = '';
                }
                setHasValue(false);

                if (onChange) {
                  onChange();
                }
                // searchInputEle?.dispatchEvent(new Event('change', { bubbles: true }));
              }}
            />
          )}
          <S.SearchButton searchIconColor={borderColor}>
            <SearchIcon className="searchIcon" />
          </S.SearchButton>
        </S.Btns>
      </S.Container>
    );
  }, [inputRef]);

  return [inputRef, SearchInput];
}

export default useSearchInput;
