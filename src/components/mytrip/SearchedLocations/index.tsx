import * as S from './style';

import SearchResultItem from '../SearchResultItem';
import SearchNotFounded from '../SearchNotFounded';
import { locationResponseType } from '../../../pages/mytrip/LocationSelectPage';

interface Props {
  searchedLocations: locationResponseType[];
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
                desc={searchedLocation.category}
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
