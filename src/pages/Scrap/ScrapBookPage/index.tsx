import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import PageTemplate from '@_common/PageTemplate';
import { TFilter } from '@_types/FilterTypes';
import FilterList from '@_common/FilterList';
import TabBar from '@_common/TabBar';

import ScrapedTripJournal from '../../../components/scrapBook/ScrapedTripJournal';
import ScrapedTripPlace from '../../../components/scrapBook/ScrapedTripPlace';

import {
  activeScrapPlaceFilterListState,
  scrapPlaceFilterState,
} from '../../../recoil/filters/scrapPlaceFilterState';

import * as S from './style';

function ScrapBookPage() {
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const setActiveFilters = useSetRecoilState(scrapPlaceFilterState);
  const tabs = [
    { id: 1, name: '여행 장소', content: <ScrapedTripPlace /> },
    { id: 2, name: '콘텐츠', content: <ScrapedTripJournal /> },
    { id: 3, name: '아티클', content: <ScrapedTripPlace /> },
  ];
  const [filter, setFilter] = useRecoilState<TFilter>(scrapPlaceFilterState);
  const activeFilter = useRecoilValue(activeScrapPlaceFilterListState);

  useEffect(() => {
    setActiveFilters({
      location: [],
    });
  }, []);

  return (
    <PageTemplate
      header={
        <S.Header>
          <S.Heading>스크랩</S.Heading>
          <TabBar
            tabs={tabs}
            focusedTabIndex={focusedTabIndex}
            setFocusedTabIndex={setFocusedTabIndex}
          />
          {focusedTabIndex === 0 && (
            <S.FilterContainer>
              <FilterList
                filterType="scrapPlace"
                filters={[{ name: 'location', options: null }]}
                filterState={filter}
                setFilterState={setFilter}
                activeFilterState={activeFilter}
              />
            </S.FilterContainer>
          )}
          {focusedTabIndex === 1 && (
            <S.FilterContainer>
              <FilterList
                filterType="scrapPlace"
                filters={[{ name: 'location', options: null }]}
                filterState={filter}
                setFilterState={setFilter}
                activeFilterState={activeFilter}
              />
            </S.FilterContainer>
          )}
        </S.Header>
      }
    >
      {tabs[focusedTabIndex].content}
    </PageTemplate>
  );
}

export default ScrapBookPage;
