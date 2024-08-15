import { SetterOrUpdater } from 'recoil';
import { useState } from 'react';
import * as S from './style';
import Button from '../../Button';
import { TFilter, TFilterName, TFilterAndOptions } from '../../../../assets/types/FilterTypes';
import { filterMap } from '../../../../recoil/filters/codeMap';

interface Props {
  type: TFilterName;
  filters: TFilterAndOptions[];
  filterState: TFilter;
  setFilterState: SetterOrUpdater<TFilter>;
  setModal: SetterOrUpdater<{
    isOpend: boolean;
    title: string;
    contents: string | JSX.Element;
  }>;
}

function FilterModalContent({ type, filters, filterState, setFilterState, setModal }: Props) {
  const [tempFilter, setTempFilter] = useState(filterState[type]);

  const renderComponent = (filter: TFilterAndOptions) => {
    const Component = filterMap.get(type).component;
    return (
      <Component
        filter={tempFilter}
        setFilter={setTempFilter}
        options={filter.options?.options}
        defaultSelected={filter.options?.defaultSelected}
      />
    );
  };

  return (
    <S.Form>
      {renderComponent(filters.find(({ name }) => name === type))}
      <S.SubmitButtonContainer>
        <Button
          type="normal"
          size="lg"
          active
          width="100%"
          onClick={(e) => {
            e.preventDefault();
            setFilterState((prev) => ({ ...prev, [type]: tempFilter }));
            setModal((prev) => ({ ...prev, isOpend: false }));
          }}
        >
          적용하기
        </Button>
      </S.SubmitButtonContainer>
    </S.Form>
  );
}

export default FilterModalContent;
