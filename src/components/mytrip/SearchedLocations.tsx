import { locationType } from "../../assets/data/locations";
import SearchResult from "./SearchResultItem";

import * as S from "../../styles/mytrip/SearchedLocations.style";
import SearchNotFounded from "./SearchNotFounded";

interface Props {
    searchedLocations: locationType[];
    keyword: string | undefined;
}

function SearchedLocations({ searchedLocations, keyword }: Props) {
    return (
        <S.Container>
            {searchedLocations.length !== 0 ? (
                searchedLocations.map((searchedLocation) => {
                    if (keyword) {
                        return (
                            <SearchResult
                                name={searchedLocation.name}
                                desc={searchedLocation.desc}
                                keyword={keyword}
                            />
                        );
                    }
                })
            ) : (
                <SearchNotFounded />
            )}
        </S.Container>
    );
}

export default SearchedLocations;
