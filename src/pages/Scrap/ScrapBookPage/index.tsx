import { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';

import PageTemplate from '@_common/PageTemplate';
import { TFilter } from '@_types/FilterTypes';
import FilterList from '@_common/FilterList';
import TabBar from '@_common/TabBar';

import ScrapedContents from '../../../components/scrapBook/ScrapedContents';
import ScrapedTripJournal from '../../../components/scrapBook/ScrapedTripJournal';
import ScrapedTripPlace from '../../../components/scrapBook/ScrapedTripPlace';

import {
  activeScrapPlaceFilterListState,
  scrapPlaceFilterState,
} from '../../../recoil/filters/scrapPlaceFilterState';

import * as S from './style';
import { useSearchParams } from 'react-router-dom';

function ScrapBookPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [focusedTabIndex, setFocusedTabIndex] = useState<number>(0);
  const setActiveFilters = useSetRecoilState(scrapPlaceFilterState);
  const tabs = [
    { id: 1, name: '여행 장소', content: <ScrapedTripPlace /> },
    { id: 2, name: '콘텐츠', content: <ScrapedContents /> },
    { id: 3, name: '아티클', content: <ScrapedTripJournal /> },
  ];
  const [filter, setFilter] = useRecoilState<TFilter>(scrapPlaceFilterState);
  const activeFilter = useRecoilValue(activeScrapPlaceFilterListState);

  useEffect(() => {
    setActiveFilters({
      location: [],
      theme: [],
      sort: '담은순',
    });
  }, []);

  useEffect(() => {
    if (searchParams.has('tab')) {
      setFocusedTabIndex(Number(searchParams.get('tab') as string));
    }
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
                filterType="scrapShortForm"
                filters={[
                  {
                    name: 'sort',
                    options: {
                      defaultSelected: ['담은순'],
                      multiple: false,
                      options: [
                        { label: '담은순', value: '담은순' },
                        { label: '거리순', value: '거리순' },
                      ],
                    },
                  },
                  { name: 'location', options: null },
                  {
                    name: 'theme',
                    options: {
                      options: [
                        { label: '음식점', value: '음식점' },
                        { label: '카페', value: '카페' },
                        { label: '관광명소', value: '관광명소' },
                        { label: '레포츠', value: '레포츠' },
                        { label: '쇼핑', value: '쇼핑' },
                        { label: '문화시설', value: '문화시설' },
                        { label: '여가시설', value: '여가시설' },
                        { label: '편의시설', value: '편의시설' },
                        { label: '숙박시설', value: '숙박시설' },
                        { label: '주차장', value: '주차장' },
                      ],
                    },
                  },
                ]}
                filterState={filter}
                setFilterState={setFilter}
                activeFilterState={activeFilter}
              />
            </S.FilterContainer>
          )}
          {/* {focusedTabIndex === 1 && (
            <S.FilterContainer>
              <FilterList
                filterType="scrapPlace"
                filters={[{ name: 'location', options: null }]}
                filterState={filter}
                setFilterState={setFilter}
                activeFilterState={activeFilter}
              />
            </S.FilterContainer>
          )} */}
        </S.Header>
      }
    >
      {tabs[focusedTabIndex].content}
    </PageTemplate>
  );
}

export default ScrapBookPage;
