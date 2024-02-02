import { useEffect } from "react";
import { locationType } from "../../assets/data/locations";
import SearchResult from "./SearchResultItem";

import * as S from "../../styles/mytrip/SearchedLocations.style";

interface Props {
    searchedLocations: locationType[];
    keyword: string | undefined;
}

function SearchedLocations({ searchedLocations, keyword }: Props) {
    useEffect(() => {
        console.log(searchedLocations);
    }, [searchedLocations]);
    return (
        <S.Container>
            {searchedLocations.map((searchedLocation) => {
                if (keyword) {
                    return (
                        <SearchResult
                            name={searchedLocation.name}
                            desc={searchedLocation.desc}
                            keyword={keyword}
                        />
                    );
                }
            })}
        </S.Container>
    );
}

export default SearchedLocations;
