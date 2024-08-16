import { SetterOrUpdater, useSetRecoilState } from 'recoil';
import * as S from './style';

// import OptionsIcon from "../../../assets/icons/options.svg?react";
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
        {filters.map((filter) => {
          const isActive =
            activeFilterState.filter(({ type }) => type === filter.name).length !== 0;
          const activeValues = activeFilterState
            .filter(({ type }) => type === filter.name)
            .map(({ value }) => value);
          return (
            <S.FilterItem key={filter.name}>
              <FilterButton
                name={
                  isActive
                    ? (activeValues.toLocaleString() as string)
                    : (filterNameMap.get(filter.name) as string)
                }
                onClick={() => {
                  filterButtonClickHandler(filter);
                }}
                isActive={isActive}
              />
            </S.FilterItem>
          );
        })}
      </S.FilterList>
    </>
  );
}

export default FilterList;
