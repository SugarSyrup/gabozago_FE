import React, { useState, useRef, useCallback } from "react";

import * as S from "../styles/common/SearchInput.style";
import SearchIcon from "../assets/icons/search.svg?react";
import CircleXIcon from "../assets/icons/circlex.svg?react";

interface Props {
    placeholder?: string;
    required?: boolean;
    onSubmit?: React.FormEventHandler;
    onChange?: () => void;
    backgroundColor: string;
    borderColor: string;
    searchIconColor?: string;
    placeholderColor?: string;
}

function useSearchInput({
    placeholder,
    required,
    onSubmit,
    onChange,
    backgroundColor,
    borderColor,
    searchIconColor,
    placeholderColor,
}: Props): [React.RefObject<HTMLInputElement>, () => JSX.Element] {
    const inputRef = useRef<HTMLInputElement>(null);
    const SearchInput = useCallback(() => {
        const [hasValue, setHasValue] = useState(false);

        return (
            <S.Container 
                onSubmit={onSubmit}
                backgroundColor={backgroundColor}
                borderColor={borderColor}
            >
                <S.Input
                    placeholder={placeholder}
                    required={required}
                    ref={inputRef}
                    id="searchInput"
                    placeholderColor={placeholderColor}
                    onChange={(e) => {
                        console.log("worked!");
                        if (e.currentTarget.value == "") {
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
                                    inputRef.current.value = "";
                                }
                                setHasValue(false);
                                
                                if(onChange){
                                    onChange()
                                }
                                // searchInputEle?.dispatchEvent(new Event('change', { bubbles: true }));
                            }}
                        />
                    )}
                    <S.SearchButton searchIconColor={searchIconColor}>
                        <SearchIcon className="searchIcon" />
                    </S.SearchButton>
                </S.Btns>
            </S.Container>
        );
    }, [inputRef]);

    return [inputRef, SearchInput];
}

export default useSearchInput;
