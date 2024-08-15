import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import * as S from './style';

// import OptionsIcon from "../../../assets/icons/options.svg?react";
import DeleteIcon from '../../../assets/icons/x.svg?react';
import FilterButton from '../FilterButton';
import FilterModalContent from '../filterInputs/FilterModalContent';
import { modalState } from '../../../recoil/modalState';
import { TFilter, TFilterAndOptions, TFilterName } from '../../../assets/types/FilterTypes';
import { filterMap, filterNameMap } from '../../../recoil/filters/codeMap';
import { defaultFilter as journalDefaultFilter } from '../../../recoil/filters/journalState';
import { defaultFilter as scrapArticleDefaultFilter } from '../../../recoil/filters/scrapArticleFilter';
import { defaultFilter as scrapShortFormDefaultFilter } from '../../../recoil/filters/scrapShortFormFilter';

interface Props {
  filters: TFilterAndOptions[];
  filterState: TFilter;
  setFilterState: SetterOrUpdater<TFilter>;
  activeFilterState: { type: keyof TFilter; value: string }[];
  filterType: 'scrapArticle' | 'scrapShortForm' | 'Journal' | 'scrapPlace';
}

function FilterList({
  filters,
  filterState,
  setFilterState,
  activeFilterState,
  filterType,
}: Props) {
  let defaultFilter: TFilter;
  switch (filterType) {
    case 'Journal':
      defaultFilter = journalDefaultFilter;
      break;
    case 'scrapArticle':
      defaultFilter = scrapArticleDefaultFilter;
      break;
    case 'scrapShortForm':
      defaultFilter = scrapShortFormDefaultFilter;
      break;
  }

  const setModal = useSetRecoilState(modalState);
  const deleteFilterChip = (type: keyof TFilter, value: string): void => {
    setFilterState((prev) => {
      switch (type) {
        case 'season':
          return {
            ...prev,
            season: prev[type].filter((item) => item !== value),
          };
          break;
        case 'location':
        case 'theme':
          return {
            ...prev,
            [type]: prev[type].filter((item) => item !== value),
          };
          break;
        // case "headCount":
        // case "duration":
        // case "budget":
        case 'sort':
          return { ...prev, [type]: defaultFilter.sort };
          break;
      }

      return prev;
    });
  };

  const filterButtonClickHandler = (filter: TFilterAndOptions) => {
    setModal(() => ({
      title: filterMap.get(filter.name)?.title as TFilterName,
      isOpend: true,
      contents: (
        <FilterModalContent
          type={filter.name}
          filters={filters}
          filterState={filterState}
          setFilterState={setFilterState}
          setModal={setModal}
        />
      ),
    }));
  };

  return (
    <>
      <S.FilterList>
        {filters.map((filter) => (
          <S.FilterItem key={filter.name}>
            <FilterButton
              name={filterNameMap.get(filter.name) as TFilterName}
              onClick={() => {
                filterButtonClickHandler(filter);
              }}
              isActive={activeFilterState.filter(({ type }) => type === filter.name).length !== 0}
            />
          </S.FilterItem>
        ))}
      </S.FilterList>
      <S.ActiveFilterList>
        {activeFilterState.map(({ type, value }) => (
          <S.ActiveFilterChip
            onClick={() => {
              deleteFilterChip(type, value);
            }}
            key={type}
          >
            {value}
            <DeleteIcon />
          </S.ActiveFilterChip>
        ))}
      </S.ActiveFilterList>
    </>
  );
}

export default FilterList;
