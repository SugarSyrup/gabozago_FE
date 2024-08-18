import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as S from './style';
import { get } from '@_utils/api';
import LocationTag from '../../../mytrip/LocationTag';
// import SearchedLocations from './SearchedLocations';
import useSearchInput from '../../../../hooks/useSearchInput';
import { LocationResponseType } from '../../../../pages/Mytrip/LocationSelectPage';
import SearchedLocations from './SearchedLocations';

interface LocationGroupByCategory {
  category: string;
  regions: string[];
}

export interface Props {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

function Location({ filter, setFilter }: Props) {
  const [locations, setLocations] = useState<LocationGroupByCategory[]>([
    {
      category: '',
      regions: [],
    },
  ]);

  const [focusedCategoryIndex, setFocusedCategoryIndex] = useState<number>(0);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchedLocations, setSearchedLocations] = useState<LocationResponseType[]>([]);

  const [inputRef, SearchInput] = useSearchInput({
    placeholder: '지역명 검색 예) 천안',
    onChange,
    backgroundColor: 'white',
    borderColor: '#ADADAD',
    onSubmit: (e) => {
      e.preventDefault();
    },
  });

  function onChange() {
    if (inputRef.current) {
      if (inputRef.current?.value === '' || inputRef.current?.value === undefined) {
        setIsSearching(false);
      } else {
        setIsSearching(true);

        get<
          {
            id: number;
            name: string;
            full_name: string;
            category: string;
            image: string | null;
          }[]
        >('region').then(({ data }) => {
          setSearchedLocations(
            data.filter((location) => location.name.includes(inputRef.current?.value as string)),
          );
        });
      }
    }
  }

  const getLocations = async () => {
    const { data } = await get<
      {
        id: number;
        name: string;
        full_name: string;
        category: string;
        image: string | null;
      }[]
    >('region');

    // data 형태 변환
    const groupedData: LocationGroupByCategory[] = data.reduce((acc, curr) => {
      const { category, name } = curr;
      const existingCategory = acc.find((item) => item.category === category);
      if (existingCategory) {
        existingCategory.regions.push(name);
      } else {
        acc.push({ category, regions: [name] });
      }
      return acc;
    }, [] as LocationGroupByCategory[]);

    setLocations(groupedData);
    // setRegions(data);
  };

  function selectLocation(location: string) {
    setFilter((prev) => {
      const addLocations = [...prev, location];
      return addLocations.filter(
        (findLocation, index) => addLocations.indexOf(findLocation) === index,
      );
    });
  }

  function deleteLocation(location: string) {
    setFilter((prev) => prev.filter((item) => location !== item));
  }

  useLayoutEffect(() => {
    getLocations();
  }, []);

  return (
    <S.Container>
      <S.SearchWrapper>
        <SearchInput />
      </S.SearchWrapper>
      {isSearching ? (
        <S.SearchedContainer>
          <SearchedLocations
            searchedLocations={searchedLocations}
            keyword={inputRef.current?.value}
            locations={locations}
            selectLocation={selectLocation}
            deleteLocation={deleteLocation}
          />
        </S.SearchedContainer>
      ) : (
        <S.LocationContainer>
          <S.CategoryList>
            {locations.map(({ category }, index) => (
              <S.CategoryItem
                onClick={() => {
                  setFocusedCategoryIndex(index);
                }}
                active={index === focusedCategoryIndex}
                key={category}
              >
                {category}
              </S.CategoryItem>
            ))}
          </S.CategoryList>
          <S.RegionList>
            {locations[focusedCategoryIndex].regions.map((region) => (
              <S.RegionItem
                onClick={() => {
                  if (!filter.includes(region)) {
                    selectLocation(region);
                  } else {
                    deleteLocation(region);
                  }
                }}
                active={filter.includes(region)}
                key={region}
              >
                {region}
              </S.RegionItem>
            ))}
          </S.RegionList>
        </S.LocationContainer>
      )}
      <S.LocationTags>
        {filter.map((selectedLocation) => (
          <LocationTag
            name={selectedLocation}
            key={selectedLocation}
            onClick={() => {
              deleteLocation(selectedLocation);
            }}
          />
        ))}
      </S.LocationTags>
    </S.Container>
  );
}

export default Location;
