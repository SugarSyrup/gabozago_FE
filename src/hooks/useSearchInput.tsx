import * as S from "../styles/common/SearchInput.style";
import SearchIcon from "../assets/icons/search.svg?react";
import CircleXIcon from "../assets/icons/circlex.svg?react";
import React, { useState, useRef } from "react";

interface Props {
    placeholder?: string;
    required?: boolean;
    onSubmit?: React.MouseEventHandler<SVGElement>;
}

function useSearchInput({
    placeholder,
    required,
    onSubmit,
}: Props): [React.RefObject<HTMLInputElement>, JSX.Element] {
    const [isValue, setIsValue] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const searchInput = (
        <S.Container>
            <S.Input
                placeholder={placeholder}
                required={required}
                ref={inputRef}
                onInput={(e) => {
                    if (e.currentTarget.value == "") {
                        setIsValue(false);
                    } else {
                        setIsValue(true);
                    }
                }}
            />
            <S.Btns>
                {isValue && (
                    <CircleXIcon
                        className="circleX"
                        onClick={() => {
                            if (inputRef.current) {
                                inputRef.current.value = "";
                            }
                            setIsValue(false);
                        }}
                    />
                )}
                <SearchIcon className="searchIcon" onClick={onSubmit} />
            </S.Btns>
        </S.Container>
    );

    return [inputRef, searchInput];
}

export default useSearchInput;
