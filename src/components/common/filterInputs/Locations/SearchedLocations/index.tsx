import Typography from '@_common/Typography';

import { LocationResponseType } from '../../../../../pages/Mytrip/LocationSelectPage';

import * as S from './style';
import { useEffect } from 'react';

interface Props {
  searchedLocations: LocationResponseType[];
  keyword: string | undefined;
  locations: string[];
  selectLocation: (location: string) => void;
  deleteLocation: (location: string) => void;
}

function SearchedLocations({
  searchedLocations,
  keyword,
  locations,
  selectLocation,
  deleteLocation,
}: Props) {
  return (
    <S.Container>
      {searchedLocations.map((searchedLocation) => {
        const { name, category: desc } = searchedLocation;
        if (keyword) {
          return (
            <S.ItemContainer key={name}>
              <S.Info>
                <S.Name>
                  {name.split('').map((word, index) => {
                    if (
                      name.indexOf(keyword) <= index &&
                      index < name.indexOf(keyword) + keyword.length
                    ) {
                      return <S.HighlightName key={word}>{word}</S.HighlightName>;
                    }
                    return <>{word}</>;
                  })}
                </S.Name>
                <S.Desc>{desc}</S.Desc>
              </S.Info>
              <S.LocationSelectButton
                isActive={locations.includes(name)}
                onClick={() => {
                  locations.includes(name) ? deleteLocation(name) : selectLocation(name);
                }}
              >
                <Typography.Label size="lg" color="inherit">
                  선택
                </Typography.Label>
              </S.LocationSelectButton>
            </S.ItemContainer>
          );
        }
      })}
    </S.Container>
  );
}

export default SearchedLocations;
