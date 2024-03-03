import { locationType } from "../../../assets/data/locations";
import * as S from "./style";

import SearchResultItem from "../SearchResultItem";
import SearchNotFounded from "../SearchNotFounded";

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
                            <SearchResultItem
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
