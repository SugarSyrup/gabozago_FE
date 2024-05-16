import * as S from "./style";
import { get } from "../../../../utils/api";
import React, { useEffect, useLayoutEffect, useState } from "react";
import LocationTag from "../../../mytrip/LocationTag";

interface LocationGroupByCategory {
  category: string;
  regions: string[];
}

interface Props {
  filter: string[];
  setFilter: React.Dispatch<React.SetStateAction<string[]>>;
}

function Location({ filter, setFilter }: Props) {
  const [locations, setLocations] = useState<LocationGroupByCategory[]>([
    {
      category: "",
      regions: [],
    },
  ]);
  const [focusedCategoryIndex, setFocusedCategoryIndex] = useState<number>(0);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const getLocations = async () => {
    const { data } = await get<
      {
        id: number;
        name: string;
        full_name: string;
        category: string;
        image: string | null;
      }[]
    >("region");

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
  };

  function selectLocation(location: string) {
    setFilter((prev) => {
      const addLocations = [...prev, location];
      return addLocations.filter((findLocation, index) => {
        return addLocations.indexOf(findLocation) === index;
      });
    });
  }

  function deleteLocation(location: string) {
    setFilter((prev) => prev.filter((item) => location !== item));
  }

  useLayoutEffect(() => {
    getLocations();
  }, []);

  useEffect(() => {
    console.dir(locations);
  }, [locations]);

  return (
    <S.Container>
      {!isSearching && (
        <S.LocationContainer>
          <S.CategoryList>
            {locations.map(({ category }, index) => (
              <S.CategoryItem
                onClick={() => {
                  setFocusedCategoryIndex(index);
                }}
                active={index === focusedCategoryIndex}
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
